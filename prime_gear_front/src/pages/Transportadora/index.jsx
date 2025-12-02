import React, { useState, useMemo } from 'react';
import {
  FiTruck,
  FiPackage,
  FiMapPin,
  FiCalendar,
  FiClock,
  FiSearch,
  FiCheckCircle,
  FiAlertCircle,
  FiXCircle
} from 'react-icons/fi';
import {
  PageContainer,
  Header,
  HeaderContent,
  CompanyName,
  CompanyInfo,
  InfoItem,
  StatsContainer,
  StatCard,
  StatIcon,
  StatInfo,
  FiltersContainer,
  SearchInput,
  FilterSelect,
  OrdersContainer,
  OrderCard,
  OrderHeader,
  OrderInfo,
  StatusBadge,
  OrderDetails,
  DetailItem,
  EmptyState
} from './style';

// Mock data - dados simulados da transportadora
const mockOrders = [
  {
    id: 'PG-2025-001',
    cliente: 'João Silva',
    origem: 'São Paulo - SP',
    destino: 'Rio de Janeiro - RJ',
    status: 'Em Trânsito',
    dataColeta: '28/11/2025',
    previsaoEntrega: '02/12/2025',
    peso: '2.5 kg',
    valor: 'R$ 1.299,00',
    rastreio: 'BR123456789SP'
  },
  {
    id: 'PG-2025-002',
    cliente: 'Maria Santos',
    origem: 'Belo Horizonte - MG',
    destino: 'Curitiba - PR',
    status: 'Entregue',
    dataColeta: '25/11/2025',
    previsaoEntrega: '29/11/2025',
    peso: '5.0 kg',
    valor: 'R$ 3.499,00',
    rastreio: 'BR987654321MG'
  },
  {
    id: 'PG-2025-003',
    cliente: 'Carlos Oliveira',
    origem: 'Porto Alegre - RS',
    destino: 'Brasília - DF',
    status: 'Pendente',
    dataColeta: '01/12/2025',
    previsaoEntrega: '05/12/2025',
    peso: '1.8 kg',
    valor: 'R$ 899,00',
    rastreio: 'BR456789123RS'
  },
  {
    id: 'PG-2025-004',
    cliente: 'Ana Paula Costa',
    origem: 'Recife - PE',
    destino: 'Salvador - BA',
    status: 'Em Trânsito',
    dataColeta: '29/11/2025',
    previsaoEntrega: '03/12/2025',
    peso: '3.2 kg',
    valor: 'R$ 2.199,00',
    rastreio: 'BR789456123PE'
  },
  {
    id: 'PG-2025-005',
    cliente: 'Pedro Henrique',
    origem: 'Fortaleza - CE',
    destino: 'Manaus - AM',
    status: 'Atrasado',
    dataColeta: '20/11/2025',
    previsaoEntrega: '26/11/2025',
    peso: '4.5 kg',
    valor: 'R$ 5.499,00',
    rastreio: 'BR321654987CE'
  },
  {
    id: 'PG-2025-006',
    cliente: 'Juliana Ferreira',
    origem: 'São Paulo - SP',
    destino: 'Florianópolis - SC',
    status: 'Entregue',
    dataColeta: '22/11/2025',
    previsaoEntrega: '27/11/2025',
    peso: '2.0 kg',
    valor: 'R$ 1.799,00',
    rastreio: 'BR654987321SP'
  },
  {
    id: 'PG-2025-007',
    cliente: 'Roberto Lima',
    origem: 'Goiânia - GO',
    destino: 'Vitória - ES',
    status: 'Em Trânsito',
    dataColeta: '30/11/2025',
    previsaoEntrega: '04/12/2025',
    peso: '6.0 kg',
    valor: 'R$ 4.299,00',
    rastreio: 'BR147258369GO'
  },
  {
    id: 'PG-2025-008',
    cliente: 'Fernanda Alves',
    origem: 'Campinas - SP',
    destino: 'Natal - RN',
    status: 'Pendente',
    dataColeta: '02/12/2025',
    previsaoEntrega: '07/12/2025',
    peso: '1.5 kg',
    valor: 'R$ 799,00',
    rastreio: 'BR963852741SP'
  }
];

const Transportadora = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');

  // Filtrar pedidos
  const filteredOrders = useMemo(() => {
    return mockOrders.filter(order => {
      const matchesSearch =
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.rastreio.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'todos' || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  // Calcular estatísticas
  const stats = useMemo(() => {
    return {
      total: mockOrders.length,
      entregues: mockOrders.filter(o => o.status === 'Entregue').length,
      emTransito: mockOrders.filter(o => o.status === 'Em Trânsito').length,
      pendentes: mockOrders.filter(o => o.status === 'Pendente').length,
      atrasados: mockOrders.filter(o => o.status === 'Atrasado').length
    };
  }, []);

  return (
    <PageContainer>
      {/* Header da Transportadora */}
      <Header>
        <HeaderContent>
          <CompanyName>TransLog Express</CompanyName>
          <CompanyInfo>
            <InfoItem>
              <FiTruck size={20} />
              <span>CNPJ: 12.345.678/0001-90</span>
            </InfoItem>
            <InfoItem>
              <FiMapPin size={20} />
              <span>São Paulo - SP</span>
            </InfoItem>
            <InfoItem>
              <FiPackage size={20} />
              <span>{stats.total} Pedidos Ativos</span>
            </InfoItem>
          </CompanyInfo>
        </HeaderContent>
      </Header>

      {/* Cards de Estatísticas */}
      <StatsContainer>
        <StatCard>
          <StatIcon bgColor="#dbeafe" iconColor="#2563eb">
            <FiPackage size={28} />
          </StatIcon>
          <StatInfo>
            <p>Total de Pedidos</p>
            <h3>{stats.total}</h3>
          </StatInfo>
        </StatCard>

        <StatCard>
          <StatIcon bgColor="#d1fae5" iconColor="#00a85a">
            <FiCheckCircle size={28} />
          </StatIcon>
          <StatInfo>
            <p>Entregues</p>
            <h3>{stats.entregues}</h3>
          </StatInfo>
        </StatCard>

        <StatCard>
          <StatIcon bgColor="#e0e7ff" iconColor="#6366f1">
            <FiTruck size={28} />
          </StatIcon>
          <StatInfo>
            <p>Em Trânsito</p>
            <h3>{stats.emTransito}</h3>
          </StatInfo>
        </StatCard>

        <StatCard>
          <StatIcon bgColor="#fef3c7" iconColor="#f59e0b">
            <FiAlertCircle size={28} />
          </StatIcon>
          <StatInfo>
            <p>Pendentes</p>
            <h3>{stats.pendentes}</h3>
          </StatInfo>
        </StatCard>

        <StatCard>
          <StatIcon bgColor="#fee2e2" iconColor="#dc2626">
            <FiXCircle size={28} />
          </StatIcon>
          <StatInfo>
            <p>Atrasados</p>
            <h3>{stats.atrasados}</h3>
          </StatInfo>
        </StatCard>
      </StatsContainer>

      {/* Filtros */}
      <FiltersContainer>
        <SearchInput>
          <FiSearch size={20} />
          <input
            type="text"
            placeholder="Buscar por ID, cliente ou código de rastreio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInput>

        <FilterSelect
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="todos">Todos os Status</option>
          <option value="Pendente">Pendente</option>
          <option value="Em Trânsito">Em Trânsito</option>
          <option value="Entregue">Entregue</option>
          <option value="Atrasado">Atrasado</option>
        </FilterSelect>
      </FiltersContainer>

      {/* Lista de Pedidos */}
      <OrdersContainer>
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => (
            <OrderCard key={order.id} status={order.status}>
              <OrderHeader>
                <OrderInfo>
                  <h3>Pedido {order.id}</h3>
                  <p>
                    <FiPackage size={16} />
                    Cliente: {order.cliente}
                  </p>
                  <p>
                    <FiMapPin size={16} />
                    {order.origem} → {order.destino}
                  </p>
                </OrderInfo>
                <StatusBadge status={order.status}>
                  {order.status}
                </StatusBadge>
              </OrderHeader>

              <OrderDetails>
                <DetailItem>
                  <label>Código de Rastreio</label>
                  <span>{order.rastreio}</span>
                </DetailItem>

                <DetailItem>
                  <label>Data de Coleta</label>
                  <span>
                    <FiCalendar size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    {order.dataColeta}
                  </span>
                </DetailItem>

                <DetailItem>
                  <label>Previsão de Entrega</label>
                  <span>
                    <FiClock size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    {order.previsaoEntrega}
                  </span>
                </DetailItem>

                <DetailItem>
                  <label>Peso</label>
                  <span>{order.peso}</span>
                </DetailItem>

                <DetailItem>
                  <label>Valor do Pedido</label>
                  <span style={{ color: '#2563eb' }}>{order.valor}</span>
                </DetailItem>
              </OrderDetails>
            </OrderCard>
          ))
        ) : (
          <EmptyState>
            <FiSearch size={64} />
            <h3>Nenhum pedido encontrado</h3>
            <p>Tente ajustar os filtros ou termo de busca</p>
          </EmptyState>
        )}
      </OrdersContainer>
    </PageContainer>
  );
};

export default Transportadora;
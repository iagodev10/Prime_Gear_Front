import React from 'react';
import {
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiDollarSign,
  FiClock,
  FiAlertTriangle,
  FiPlus,
  FiList,
  FiTrendingUp
} from 'react-icons/fi';

import {
  PageContainer,
  DashboardHeader,
  StatsGrid,
  StatCard,
  IconWrapper,
  StatInfo,
  StatTitle,
  StatValue,
  StatPercentage,
  SectionTitle,
  QuickActionsGrid,
  ActionButton,
  RecentOrdersContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  StatusBadge
} from './style';

const AdminDashboard = () => {
  // Mock de dados para os cards
  const stats = {
    totalProdutos: 124,
    pedidos: 45,
    usuarios: 89,
    receitaTotal: 'R$ 12.450,00',
    pedidosPendentes: 3,
    produtosSemEstoque: 2,
  };

  // Mock de dados para a tabela de pedidos recentes
  const recentOrders = [
    { id: '#1023', cliente: 'Ana Silva', data: '23/11/2025', valor: 'R$ 450,00', status: 'Pendente' },
    { id: '#1022', cliente: 'Carlos Souza', data: '22/11/2025', valor: 'R$ 1.200,00', status: 'Enviado' },
    { id: '#1021', cliente: 'Mariana Oliveira', data: '21/11/2025', valor: 'R$ 89,90', status: 'Concluído' },
    { id: '#1020', cliente: 'João Pedro', data: '21/11/2025', valor: 'R$ 2.300,00', status: 'Cancelado' },
  ];

  return (
    <PageContainer>
      <DashboardHeader>
        <div>
          <h1>Dashboard Administrativo</h1>
          <p>Bem-vindo de volta! Aqui está o resumo da sua loja hoje.</p>
        </div>
        {/* Data ou Botão de filtro poderia entrar aqui */}
      </DashboardHeader>

      {/* Seção de Cards Principais */}
      <StatsGrid>
        <StatCard>
          <div className="card-header">
            <IconWrapper>
              <FiDollarSign />
            </IconWrapper>
            <StatPercentage positive>+15%</StatPercentage>
          </div>
          <StatInfo>
            <StatTitle>Receita Total</StatTitle>
            <StatValue>{stats.receitaTotal}</StatValue>
          </StatInfo>
        </StatCard>

        <StatCard>
          <div className="card-header">
            <IconWrapper>
              <FiShoppingCart />
            </IconWrapper>
            <StatPercentage positive>+8%</StatPercentage>
          </div>
          <StatInfo>
            <StatTitle>Novos Pedidos</StatTitle>
            <StatValue>{stats.pedidos}</StatValue>
          </StatInfo>
        </StatCard>

        <StatCard>
          <div className="card-header">
            <IconWrapper>
              <FiUsers />
            </IconWrapper>
            <StatPercentage positive>+23%</StatPercentage>
          </div>
          <StatInfo>
            <StatTitle>Novos Clientes</StatTitle>
            <StatValue>{stats.usuarios}</StatValue>
          </StatInfo>
        </StatCard>

        <StatCard>
          <div className="card-header">
            <IconWrapper>
              <FiPackage />
            </IconWrapper>
            <StatPercentage positive>+12%</StatPercentage>
          </div>
          <StatInfo>
            <StatTitle>Total Produtos</StatTitle>
            <StatValue>{stats.totalProdutos}</StatValue>
          </StatInfo>
        </StatCard>
      </StatsGrid>

      {/* Seção de Alertas e Pendências (Layout menor) */}
      <SectionTitle>Atenção Necessária</SectionTitle>
      <StatsGrid className="small-grid">
        <StatCard className="alert-card">
          <IconWrapper className="alert">
            <FiClock />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Pedidos Pendentes</StatTitle>
            <StatValue>{stats.pedidosPendentes}</StatValue>
          </StatInfo>
        </StatCard>

        <StatCard className="alert-card">
          <IconWrapper className="danger">
            <FiAlertTriangle />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Estoque Baixo/Zerado</StatTitle>
            <StatValue>{stats.produtosSemEstoque}</StatValue>
          </StatInfo>
        </StatCard>
      </StatsGrid>

      {/* Ações Rápidas - Intuitividade para o ADM */}
      <SectionTitle>Ações Rápidas</SectionTitle>
      <QuickActionsGrid>
        <ActionButton>
          <FiPlus size={24} />
          <span>Novo Produto</span>
        </ActionButton>
        <ActionButton>
          <FiList size={24} />
          <span>Gerenciar Pedidos</span>
        </ActionButton>
        <ActionButton>
          <FiUsers size={24} />
          <span>Ver Clientes</span>
        </ActionButton>
        <ActionButton>
          <FiTrendingUp size={24} />
          <span>Relatórios</span>
        </ActionButton>
      </QuickActionsGrid>

      {/* Tabela de Pedidos Recentes */}
      <SectionTitle>Pedidos Recentes</SectionTitle>
      <RecentOrdersContainer>
        <Table>
          <thead>
            <TableHeader>
              <th>ID</th>
              <th>Cliente</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Status</th>
            </TableHeader>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell><strong>{order.id}</strong></TableCell>
                <TableCell>{order.cliente}</TableCell>
                <TableCell>{order.data}</TableCell>
                <TableCell>{order.valor}</TableCell>
                <TableCell>
                  <StatusBadge status={order.status}>{order.status}</StatusBadge>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </RecentOrdersContainer>

    </PageContainer>
  );
};

export default AdminDashboard;
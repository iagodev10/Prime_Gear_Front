import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  StatusBadge,
  Background,
  ChartArea,
  Bars,
  Bar,
  ChartLegend
} from './style';

const AdminDashboard = () => {
  const navigate = useNavigate();
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

  const trendData = [40, 90, 120, 80, 160, 140, 110, 180, 150, 130, 170, 200];

  return (
    <PageContainer>
      <Background />
      <DashboardHeader>
        <div className="title">
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

      <SectionTitle>Performance (Últimos 12 dias)</SectionTitle>
      <ChartArea>
        <Bars>
          {trendData.map((h, i) => (
            <Bar key={i} $h={h} />
          ))}
        </Bars>
        <ChartLegend>
          <span style={{ display: 'inline-flex', width: 14, height: 14, borderRadius: 4, background: 'linear-gradient(180deg, #4d7294 0%, #2a4055 100%)' }} />
          Receita diária
        </ChartLegend>
      </ChartArea>

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
        <ActionButton onClick={() => navigate('/admin/produtos', { state: { openAddModal: true } })}>
          <FiPlus size={24} />
          <span>Novo Produto</span>
        </ActionButton>
        <ActionButton onClick={() => navigate('/admin/pedidos')}>
          <FiList size={24} />
          <span>Gerenciar Pedidos</span>
        </ActionButton>
        <ActionButton onClick={() => navigate('/admin/usuarios')}>
          <FiUsers size={24} />
          <span>Ver Clientes</span>
        </ActionButton>
        <ActionButton onClick={() => navigate('/admin/pedidos')}>
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

import React from 'react';
// Importamos os ícones que vamos usar
import {
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiDollarSign,
  FiClock,
  FiAlertCircle,
} from 'react-icons/fi';

// Importa os componentes de estilo que acabamos de criar
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
  RecentOrdersWrapper,
} from './style';

const AdminDashboard = () => {
  // Dados fictícios (mockados) para preencher a página
  const stats = {
    totalProdutos: 8,
    pedidos: 0,
    usuarios: 2,
    receitaTotal: 'R$ 0,00',
    pedidosPendentes: 0,
    produtosSemEstoque: 0,
  };

  return (
    <PageContainer>
      <DashboardHeader>
        <h1>Dashboard Administrativo</h1>
        <p>Visão geral do sistema PrimeGear</p>
      </DashboardHeader>

      <StatsGrid>
        {/* Card 1: Total de Produtos */}
        <StatCard>
          <IconWrapper color="#5a67d8" bgColor="#e9d8fd">
            <FiPackage />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Total de Produtos</StatTitle>
            <StatValue>{stats.totalProdutos}</StatValue>
            <StatPercentage positive>+12%</StatPercentage>
          </StatInfo>
        </StatCard>

        {/* Card 2: Pedidos */}
        <StatCard>
          <IconWrapper color="#d53f8c" bgColor="#fbebed">
            <FiShoppingCart />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Pedidos</StatTitle>
            <StatValue>{stats.pedidos}</StatValue>
            <StatPercentage positive>+8%</StatPercentage>
          </StatInfo>
        </StatCard>

        {/* Card 3: Usuários */}
        <StatCard>
          <IconWrapper color="#38a169" bgColor="#e6fffa">
            <FiUsers />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Usuários</StatTitle>
            <StatValue>{stats.usuarios}</StatValue>
            <StatPercentage positive>+23%</StatPercentage>
          </StatInfo>
        </StatCard>

        {/* Card 4: Receita Total */}
        <StatCard>
          <IconWrapper color="#d69e2e" bgColor="#fefcbf">
            <FiDollarSign />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Receita Total</StatTitle>
            <StatValue>{stats.receitaTotal}</StatValue>
            <StatPercentage positive>+15%</StatPercentage>
          </StatInfo>
        </StatCard>

        {/* Card 5: Pedidos Pendentes */}
        <StatCard>
          <IconWrapper color="#dd6b20" bgColor="#fefcbf">
            <FiClock />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Pedidos Pendentes</StatTitle>
            <StatValue>{stats.pedidosPendentes}</StatValue>
          </StatInfo>
        </StatCard>

        {/* Card 6: Produtos Sem Estoque */}
        <StatCard>
          <IconWrapper color="#c53030" bgColor="#fed7d7">
            <FiAlertCircle />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Produtos Sem Estoque</StatTitle>
            <StatValue>{stats.produtosSemEstoque}</StatValue>
          </StatInfo>
        </StatCard>
      </StatsGrid>

      <RecentOrdersWrapper>
        <h2>Pedidos Recentes</h2>
        <p>Nenhum pedido encontrado</p>
      </RecentOrdersWrapper>
    </PageContainer>
  );
};

export default AdminDashboard;
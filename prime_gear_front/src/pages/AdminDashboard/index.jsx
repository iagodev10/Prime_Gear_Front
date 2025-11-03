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
  Status, Percent
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
        <StatCard>
          <IconWrapper color="#5a67d8" bgColor="#e9d8fd">
            <FiPackage />
          </IconWrapper>
          <StatInfo>
            <Status>
              <StatTitle>Total de Produtos</StatTitle>
              <StatValue>{stats.totalProdutos}</StatValue>
            </Status>
            <Percent>
              <StatPercentage positive>+12%</StatPercentage>
            </Percent>
          </StatInfo>
        </StatCard>

        {/* Card 2: Pedidos */}
        <StatCard>
          <IconWrapper color="#d53f8c" bgColor="#fbebed">
            <FiShoppingCart />
          </IconWrapper>
          <StatInfo>
            <Status>
              <StatTitle>Pedidos</StatTitle>
              <StatValue>{stats.pedidos}</StatValue>
            </Status>
            <Percent>
              <StatPercentage positive>+8%</StatPercentage>
            </Percent>
          </StatInfo>
        </StatCard>

        {/* Card 3: Usuários */}
        <StatCard>
          <IconWrapper color="#38a169" bgColor="#e6fffa">
            <FiUsers />
          </IconWrapper>
          <StatInfo>
            <Status>
              <StatTitle>Usuários</StatTitle>
              <StatValue>{stats.usuarios}</StatValue>
            </Status>
            <Percent>
              <StatPercentage positive>+23%</StatPercentage>
            </Percent>
          </StatInfo>
        </StatCard>

        {/* Card 4: Receita Total */}
        <StatCard>
          <IconWrapper color="#d69e2e" bgColor="#fefcbf">
            <FiDollarSign />
          </IconWrapper>
          <StatInfo>
            <Status>
              <StatTitle>Receita Total</StatTitle>
              <StatValue>{stats.receitaTotal}</StatValue>
            </Status>
            <Percent>
              <StatPercentage positive>+15%</StatPercentage>
            </Percent>
          </StatInfo>
        </StatCard>

        {/* Card 5: Pedidos Pendentes */}
        <StatCard>
          <IconWrapper color="#dd6b20" bgColor="#fefcbf">
            <FiClock />
          </IconWrapper>
          <StatInfo>
            <Status>
              <StatTitle>Pedidos Pendentes</StatTitle>
              <StatValue>{stats.pedidosPendentes}</StatValue>
            </Status>
          </StatInfo>
        </StatCard>

        {/* Card 6: Produtos Sem Estoque */}
        <StatCard>
          <IconWrapper color="#c53030" bgColor="#fed7d7">
            <FiAlertCircle />
          </IconWrapper>
          <StatInfo>
            <Status>
              <StatTitle>Produtos Sem Estoque</StatTitle>
              <StatValue>{stats.produtosSemEstoque}</StatValue>
            </Status>
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
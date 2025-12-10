import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
} from './style';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [recentOrders, setRecentOrders] = useState([]);
  const [stats, setStats] = useState({
    receitaTotal: 0,
    percentualReceita: 0,
    pedidos: 0,
    percentualPedidos: 0,
    usuarios: 0,
    percentualUsuarios: 0,
    totalProdutos: 0,
    percentualProdutos: 0,
  });
  const [alertas, setAlertas] = useState({
    pedidosPendentes: 0,
    produtosSemEstoque: 0,
  });
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
    
        const statsResponse = await axios.get('http://localhost:8080/admin/estatisticas');
        setStats(statsResponse.data);

   
        const alertasResponse = await axios.get('http://localhost:8080/admin/alertas');
        setAlertas(alertasResponse.data);

        const pedidosResponse = await axios.get('http://localhost:8080/admin/pedidos-recentes');
        setRecentOrders(pedidosResponse.data);

      } catch (error) {
        console.error('Erro ao buscar dados do dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);


  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    });
  };

  if (loading) {
    return (
      <PageContainer>
        <Background />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          color: '#666'
        }}>
          Carregando dashboard...
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Background />
      <DashboardHeader>
        <div className="title">
          <h1>Dashboard Administrativo</h1>
          <p>Bem-vindo de volta! Aqui está o resumo da sua loja hoje.</p>
        </div>
      </DashboardHeader>

      {/* Seção de Cards Principais */}
      <StatsGrid>
        <StatCard>
          <div className="card-header">
            <IconWrapper>
              <FiDollarSign />
            </IconWrapper>
           
          </div>
          <StatInfo>
            <StatTitle>Receita Total</StatTitle>
            <StatValue>{formatCurrency(stats.receitaTotal)}</StatValue>
          </StatInfo>
        </StatCard>

        <StatCard>
          <div className="card-header">
            <IconWrapper>
              <FiShoppingCart />
            </IconWrapper>
          
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
          
          </div>
          <StatInfo>
            <StatTitle>Total Produtos</StatTitle>
            <StatValue>{stats.totalProdutos}</StatValue>
          </StatInfo>
        </StatCard>
      </StatsGrid>

      {/* Seção de Alertas e Pendências */}
      <SectionTitle>Atenção Necessária</SectionTitle>
      <StatsGrid className="small-grid">
        <StatCard className="alert-card">
          <IconWrapper className="alert">
            <FiClock />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Pedidos Pendentes</StatTitle>
            <StatValue>{alertas.pedidosPendentes}</StatValue>
          </StatInfo>
        </StatCard>

        <StatCard className="alert-card">
          <IconWrapper className="danger">
            <FiAlertTriangle />
          </IconWrapper>
          <StatInfo>
            <StatTitle>Estoque Baixo/Zerado</StatTitle>
            <StatValue>{alertas.produtosSemEstoque}</StatValue>
          </StatInfo>
        </StatCard>
      </StatsGrid>

      {/* Ações Rápidas */}
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
        {recentOrders.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            Nenhum pedido encontrado
          </div>
        ) : (
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
        )}
      </RecentOrdersContainer>
    </PageContainer>
  );
};

export default AdminDashboard;
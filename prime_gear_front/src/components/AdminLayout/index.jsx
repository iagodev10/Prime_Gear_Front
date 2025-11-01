import React from 'react';
// Importa o Outlet (espaço reservado)
import { Outlet } from 'react-router-dom';
// Importa os ícones que vamos usar na navegação
import {
  FiLogOut,
  FiShoppingCart,
  FiPackage,
  FiGrid,
  FiUsers,
  FiTruck,
  FiDatabase, // Ícone diferente para Transportadoras
  FiHome, // Ícone para "Ver Loja"
  FiLayout, // Ícone para Dashboard
} from 'react-icons/fi';

// Importa os componentes de estilo
import {
  LayoutContainer,
  TopNav,
  ContentArea,
  NavSection,
  LogoLink,
  NavLink,
} from './style';

const AdminLayout = () => {
  return (
    <LayoutContainer>
      <TopNav>
        {/* Seção da Esquerda: Logo e Dashboard */}
        <NavSection>
          <LogoLink to="/admin">
            PrimeGear <span>Admin</span>
          </LogoLink>
          <NavLink to="/admin/dashboard">
            <FiLayout /> Dashboard
          </NavLink>
        </NavSection>

        {/* Seção Central: Links Principais */}
        <NavSection>
          <NavLink to="/admin/produtos">
            <FiPackage /> Produtos
          </NavLink>
          <NavLink to="/admin/categorias">
            <FiGrid /> Categorias
          </NavLink>
          <NavLink to="/admin/pedidos">
            <FiShoppingCart /> Pedidos
          </NavLink>
          <NavLink to="/admin/usuarios">
            <FiUsers /> Usuários
          </NavLink>
          <NavLink to="/admin/fornecedores">
            <FiTruck /> Fornecedores
          </NavLink>
          <NavLink to="/admin/transportadoras">
            <FiDatabase /> Transportadoras
          </NavLink>
        </NavSection>

        {/* Seção da Direita: Loja e Sair */}
        <NavSection>
          <NavLink to="/">
            <FiHome /> Ver Loja
          </NavLink>
          {/* Você pode trocar este Link por um botão com a lógica de logout */}
          <NavLink to="/logout">
            <FiLogOut /> Sair
          </NavLink>
        </NavSection>
      </TopNav>

      <ContentArea>
        {/*
          É AQUI QUE O CONTEÚDO VAI APARECER!
          O React Router vai injetar o AdminDashboard (ou AdminProdutos, etc.)
          exatamente aqui, dependendo da URL.
        */}
        <Outlet />
      </ContentArea>
    </LayoutContainer>
  );
};

export default AdminLayout;
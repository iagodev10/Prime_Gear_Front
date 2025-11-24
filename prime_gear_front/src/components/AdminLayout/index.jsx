import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  LayoutContainer,
  Top,
  TopNav,
  NavCenter,
  NavItem,
  RightSection,
  RightImage
} from './style';

import logo from '../../assets/images/logodark.png';
import { RxExit } from 'react-icons/rx';

const AdminLayout = () => {
  return (
    <LayoutContainer>

    <Top  style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000}}>
      <TopNav>
        <NavCenter>
          <NavItem to="/admin/">Dashboard</NavItem>
          <NavItem to="/admin/produtos">Produtos</NavItem>
          <NavItem to="/admin/categorias">Categorias</NavItem>
          <NavItem to="/admin/marcas">Marcas</NavItem>
          <NavItem to="/admin/pedidos">Pedidos</NavItem>
          <NavItem to="/admin/usuarios">Usuários</NavItem>
          <NavItem to="/admin/fornecedores">Fornecedores</NavItem>
          <NavItem to="/admin/transportadoras">Transportadoras</NavItem>
          <NavItem to="/logout" style={{gap: '10px', display: 'flex', alignItems: 'center' }}>Sair <RxExit size={20}/></NavItem>
        </NavCenter>

        <RightSection>
          <RightImage
            src={logo}
            alt="Logo"
          />
        </RightSection>
      </TopNav>
    </Top>
      <Outlet />
    </LayoutContainer>
  );
};

export default AdminLayout;

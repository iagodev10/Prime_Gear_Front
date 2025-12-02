import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import {
  LayoutContainer,
  Top,
  TopNav,
  NavCenter,
  NavItem,
  RightSection,
  RightImage,
  MenuButton
} from './style';

import logo from '../../assets/images/logodark.png';
import { RxExit } from 'react-icons/rx';

const AdminLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = async () => {
    console.log('clicou');
    try {
      const url='http://localhost:8080/logout'

      const response=await axios.get(url,{
        withCredentials: true  
      })
      
      window.location.href = response.data.redirect
    } catch (error) {
        console.log(error);
    }
    console.log("Logout clicked")
  }



  return (
    <LayoutContainer>

    <Top $scrolled={isScrolled}>
      <TopNav>
        <MenuButton onClick={() => setOpenMenu((v)=>!v)}>Menu</MenuButton>
        <NavCenter>
          <NavItem to="/admin/">Dashboard</NavItem>
          <NavItem to="/admin/produtos">Produtos</NavItem>
          <NavItem to="/admin/categorias">Categorias</NavItem>
          <NavItem to="/admin/marcas">Marcas</NavItem>
          <NavItem to="/admin/pedidos">Pedidos</NavItem>
          <NavItem to="/admin/usuarios">Usuários</NavItem>
          <NavItem to="/admin/fornecedores">Fornecedores</NavItem>
          <NavItem to="/admin/transportadoras">Transportadoras</NavItem>
          <NavItem onClick={handleLogout} style={{gap: '10px', display: 'flex', alignItems: 'center' }}>Sair <RxExit size={20}/></NavItem>
        </NavCenter>

        <RightSection>
          <RightImage
            src={logo}
            alt="Logo"
          />
        </RightSection>
      </TopNav>
    </Top>
      <NavCenter $open={openMenu}>
          <NavItem to="/admin/">Dashboard</NavItem>
          <NavItem to="/admin/produtos">Produtos</NavItem>
          <NavItem to="/admin/categorias">Categorias</NavItem>
          <NavItem to="/admin/marcas">Marcas</NavItem>
          <NavItem to="/admin/pedidos">Pedidos</NavItem>
          <NavItem to="/admin/usuarios">Usuários</NavItem>
          <NavItem to="/admin/fornecedores">Fornecedores</NavItem>
          <NavItem to="/admin/transportadoras">Transportadoras</NavItem>
          <NavItem onClick={handleLogout} style={{gap: '10px', display: 'flex', alignItems: 'center' }}>Sair <RxExit size={20}/></NavItem>
      </NavCenter>
      <Outlet />
    </LayoutContainer>
  );
};

export default AdminLayout;

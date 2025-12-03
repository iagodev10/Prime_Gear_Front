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
import { useAuth } from '../../contexts/AuthContext';

const AdminLayout = () => {
  const { user } = useAuth();
  console.log(user);

  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  console.log(user);
  const isAdmin = user?.cod_perfil === 1;

  const isFunc = user?.cod_perfil === 4;

  const isTransp = user?.cod_perfil === 3;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = async () => {
    console.log('clicou');
    try {
      const url = 'http://localhost:8080/logout';

      const response = await axios.get(url, {
        withCredentials: true
      });

      window.location.href = response.data.redirect;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutContainer>
      <Top $scrolled={isScrolled}>
        <TopNav>
          <MenuButton onClick={() => setOpenMenu((v) => !v)}>Menu</MenuButton>
          <NavCenter>
            {(isAdmin || isFunc) && (
              <>
                <NavItem to="/admin/">Dashboard</NavItem>
                <NavItem to="/admin/produtos">Produtos</NavItem>
                <NavItem to="/admin/categorias">Categorias</NavItem>
                <NavItem to="/admin/marcas">Marcas</NavItem>
              </>
            )}


            {/* Mostrar apenas para Administrador */}
            {isAdmin && (
              <>
                <NavItem to="/admin/pedidos">Pedidos</NavItem>
                <NavItem to="/admin/usuarios">Usuários</NavItem>
              </>
            )}
            {/* Mostrar apenas para Administrador */}
            {isTransp && (
              <>
                <NavItem to="/admin/pedidos-transportadora">Pedidos</NavItem>
              </>
            )}

            {(isAdmin || isFunc) && (
              <>
                <NavItem to="/admin/fornecedores">Fornecedores</NavItem>
                <NavItem to="/admin/transportadoras">Transportadoras</NavItem>
                
              </>
            )}
            <NavItem
                  onClick={handleLogout}
                  style={{ gap: '10px', display: 'flex', alignItems: 'center' }}
                >
                  Sair <RxExit size={20} />
                </NavItem>

          </NavCenter>

          <RightSection>
            <RightImage src={logo} alt="Logo" />
          </RightSection>
        </TopNav>
      </Top>

      {/* Menu Mobile */}
      <NavCenter $open={openMenu}>
      {(isAdmin || isFunc) && (
              <>
                <NavItem to="/admin/">Dashboard</NavItem>
                <NavItem to="/admin/produtos">Produtos</NavItem>
                <NavItem to="/admin/categorias">Categorias</NavItem>
                <NavItem to="/admin/marcas">Marcas</NavItem>
              </>
            )}


            {/* Mostrar apenas para Administrador */}
            {isAdmin && (
              <>
                <NavItem to="/admin/pedidos">Pedidos</NavItem>
                <NavItem to="/admin/usuarios">Usuários</NavItem>
              </>
            )}
            {/* Mostrar apenas para Administrador */}
            {isTransp && (
              <>
                <NavItem to="/admin/pedidos-transportadora">Pedidos</NavItem>
              </>
            )}

            {(isAdmin || isFunc) && (
              <>
                <NavItem to="/admin/fornecedores">Fornecedores</NavItem>
                <NavItem to="/admin/transportadoras">Transportadoras</NavItem>
               
              </>
            )}
             <NavItem
                  onClick={handleLogout}
                  style={{ gap: '10px', display: 'flex', alignItems: 'center' }}
                >
                  Sair <RxExit size={20} />
                </NavItem>
      </NavCenter>

      <Outlet />
    </LayoutContainer>
  );
};

export default AdminLayout;
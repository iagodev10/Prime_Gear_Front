import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  position: relative;
`;

export const Top = styled.div`
  width: 100%;
  height: 8vh;
  background: #fafafa;
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

/* BARRA SUPERIOR */
export const TopNav = styled.nav`
  width: 90%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fafafa;
  padding: 0 20px;
  box-sizing: border-box;
  `;

/* LINKS CENTRALIZADOS */
export const NavCenter = styled.div`
  display: flex;
  gap: 45px;
  margin: auto;
  font-size: 0.9rem;
  justify-content: space-between;
`;

/* LINKS */
export const NavItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 400;
  transition: 0.2s;

  &:hover {
    color: #03b304;
  }
`;

/* SEÇÃO DIREITA COM A IMAGEM */
export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

/* A IMAGEM DO LADO DIREITO */
export const RightImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  position: relative;
`;

export const Top = styled.div`
  width: 100%;
  height: 8vh;
  background: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none"};
`;

/* BARRA SUPERIOR */
export const TopNav = styled.nav`
  width: 90%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
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
  @media (max-width: 900px) {
    position: fixed;
    top: 8vh;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
    padding: 16px 20px;
    border-radius: 0 0 16px 16px;
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    gap: 12px;
    z-index: 999;
  }
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
  gap: 10px;
`;

/* A IMAGEM DO LADO DIREITO */
export const RightImage = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 2px solid black;
  padding: 8px 14px;
  border-radius: 99px;
  color: black;
  cursor: pointer;
  transition: 0.3s;
  @media (max-width: 900px) {
    display: inline-flex;
  }
`;

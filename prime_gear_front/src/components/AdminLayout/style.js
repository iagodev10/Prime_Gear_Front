import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importamos o Link para estiliza-lo

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const TopNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 100%;
  box-sizing: border-box; // Garante que o padding não estoure a largura
`;

// Divs para organizar os links em 3 seções
export const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  /* Seção centralizada (nav-center) */
  &:nth-child(2) {
    flex: 1;
    justify-content: center;
  }

  /* Seção da direita (nav-right) */
  &:nth-child(3) {
    justify-content: flex-end;
  }
`;

// Estilo para o Logo
export const LogoLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748; // Cor mais escura para o logo
  text-decoration: none;
  margin-right: 1.5rem;

  span {
    color: #5a67d8; // Cor roxa para "Admin"
    font-size: 0.8em;
    font-weight: 500;
  }
`;

// Estilo para os links de navegação
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem; // Espaço entre o ícone e o texto
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  font-size: 0.9rem; // Tamanho de fonte menor para os links
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #5a67d8;
  }

  /* Estilo para o ícone */
  svg {
    font-size: 1.1rem;
    stroke-width: 2;
  }
`;

// Área de Conteúdo Principal
export const ContentArea = styled.main`
  flex: 1; // Faz o conteúdo ocupar todo o espaço restante
  background-color: #f4f7fa; // Cor de fundo do conteúdo
  width: 100%;
  
  /* O padding será aplicado pelo PageContainer de cada página filha,
    como o que fizemos no AdminDashboard.
  */
`;
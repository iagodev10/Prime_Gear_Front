/* ========== Styled Components ========== */
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 5%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.3s ease;
  z-index: 1000;
  height: 8vh;


  background: ${({ isScrolled }) => (isScrolled ? "#fff" : "transparent")};
  color: ${({ isScrolled }) => (isScrolled ? "#000" : "#fff")};

  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none"};
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: inherit; /* muda junto com o header */
  cursor: pointer;

  span {
    font-size: 14px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 40px;

  a {
    text-decoration: none;
    color: inherit; /* muda junto com o header */
    font-weight: 500;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;

  svg {
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
    transition: 0.3s ease;
    filter: ${({ isScrolled }) => isScrolled ? 'none' : 'brightness(0) invert(1)'};
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

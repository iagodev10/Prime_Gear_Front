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
  z-index: 1001;
  height: 8vh;


  background: ${({ $isScrolled, $isHome, $isCartModalOpen }) => 
    ($isCartModalOpen ? "#2f2f2f" : ($isScrolled || !$isHome ? "#fff" : "transparent"))};
  color: ${({ $isScrolled, $isHome, $isCartModalOpen }) => 
    ($isCartModalOpen ? "#fff" : ($isScrolled || !$isHome ? "#1c1c1c" : "#fff"))};

  box-shadow: ${({ $isScrolled, $isHome, $isCartModalOpen }) =>
    ($isCartModalOpen || $isScrolled || !$isHome) ? "0 2px 10px rgba(0,0,0,0.1)" : "none"};

  @media (max-width: 768px) {
    padding: 10px 20px;
    height: 70px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 2px solid ${({ $isScrolled, $isCartModalOpen }) => 
    ($isCartModalOpen ? "white" : ($isScrolled ? "black" : "white"))};
  padding: 8px 14px;
  border-radius: 99px;
  color: inherit; 
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    background-color: ${({ $isScrolled, $isCartModalOpen }) => 
      ($isCartModalOpen ? "white" : ($isScrolled ? "black" : "black"))};
    color: ${({ $isScrolled, $isCartModalOpen }) => 
      ($isCartModalOpen ? "black" : ($isScrolled ? "white" : "black"))};
  }

  span {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 8px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    justify-content: center;
    
    span {
      display: none;
    }
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit; 
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    display: none;
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
    transition:0.3s;

    &:hover{
    opacity: 0.7;
    }
  }
`;

export const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
    transition: 0.3s ease;
    filter: ${({ $isScrolled, $isCartModalOpen }) => 
      ($isCartModalOpen ? 'brightness(0) invert(1)' : ($isScrolled ? 'none' : 'brightness(0) invert(1)'))};
    
    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    
    img {
      height: 35px;
    }
  }
`;

export const MegaWrapper = styled.div`
  position: fixed;
  top: 8vh;
  left: 0;
  width: 100%;
  z-index: 999;
  display: ${({ $open }) => ($open ? 'block' : 'none')};
`;

export const MegaPanel = styled.div`
  width: 85%;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
  padding: 24px;
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 24px;
`;

export const MegaList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MegaItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-radius: 12px;
  background: #fafafa;
  cursor: pointer;
  transition: background .2s ease, transform .2s ease;
  a{ text-decoration: none; color: #111; flex:1; }
  &:hover{ background: #f0f0f0; transform: translateY(-2px); }
`;

export const MegaRight = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

export const MegaProductCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  img{ width: 100%; height: 160px; object-fit: cover; }
  div{ padding: 12px; font-weight: 600; color: #111; }
`;

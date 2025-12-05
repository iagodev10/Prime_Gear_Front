import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 400px;
  position: fixed;
  top: 8vh;
  left: 0;
  background: #fff;
  z-index: 1003;
  max-height: calc(100vh - 8vh);
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Panel = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (max-width: 992px) {
    padding: 16px;
  }
`;

export const RightGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 16px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCard = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;
  background: #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroLink = styled.a`
  position: absolute;
  left: 16px;
  bottom: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px 14px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 00;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(160px, 1fr));
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, minmax(160px, 1fr));
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, minmax(160px, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }
`;

export const ProductCard = styled.div`
  background: #fff;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
  }

  .info {
    padding: 10px 12px;
  }

  .title {
    font-size: 14px;
    font-weight: 600;
    color: #111;
    margin-bottom: 4px;
  }

  .price {
    font-size: 13px;
    font-weight: 600;
    color: #d00000;
  }

  .oldPrice {
    font-size: 12px;
    color: #777;
    text-decoration: line-through;
  }
`;

// Estilos Mobile
export const MobileContainer = styled.div`
  width: 90%;
  max-width: 450px;
  height: calc(92vh - 20px);
  position: fixed;
  top: 8vh;
  left: 5%;
  background: #fff;
  z-index: 1003;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  
  transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(110%)")};
  opacity: 1;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s ease;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    border-radius: 16px;
  }
`;

export const MobileHeader = styled.div`
  width: 100%;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const MobileBackButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background: #fff;
  transition: all 0.2s ease;
  color: #333;
  padding: 0;

  &:hover {
    border-color: #000;
    background: #f5f5f5;
    transform: scale(1.05);
  }
`;

export const MobileTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin: 0;
  flex: 1;
  text-align: center;
`;

export const MobileCloseButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background: #fff;
  transition: all 0.2s ease;
  color: #333;
  padding: 0;

  &:hover {
    border-color: #000;
    background: #f5f5f5;
    transform: scale(1.05);
  }
`;

export const MobileContent = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
  flex: 1;
  
  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.1);
    border-radius: 3px;
  }
`;

export const MobileHeroCard = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
  background: #eee;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MobileHeroLink = styled(Link)`
  position: absolute;
  left: 16px;
  bottom: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px 14px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.85);
  }
`;

export const MobileProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const MobileProductCard = styled(Link)`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .info {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .title {
    font-size: 14px;
    font-weight: 600;
    color: #111;
    margin: 0;
  }

  .price {
    font-size: 14px;
    font-weight: 600;
    color: #d00000;
  }

  .oldPrice {
    font-size: 12px;
    color: #777;
    text-decoration: line-through;
  }
`;

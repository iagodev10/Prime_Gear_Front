import styled from "styled-components";

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

import styled from 'styled-components';

// O "card" branco, com sombra e borda arredondada
export const Container = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 20px; 
  text-align: left;
  border: 1px solid #b3b3b3;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 6px;
    border-radius: 10px;
    max-width: 100%;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  /* Mobile médio (481px - 768px) */
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 16px;
    border-radius: 16px;
    max-width: 280px;
  }

  /* Tablet (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 18px;
    max-width: 300px;
  }

  /* Desktop grande (1440px+) */
  @media (min-width: 1440px) {
    padding: 24px;
    max-width: 380px;
  }
`;

// O container da imagem, para o ícone de coração ficar por cima
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* Isso cria um container quadrado para a imagem */
  margin-bottom: 12px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain; /* Garante que a imagem caiba sem distorcer */
    padding: 10px; /* Pequeno padding para a imagem não tocar a borda */
  }

  /* O ícone de coração do protótipo */
  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: black;
    background-color: #f5f5f5;
    border-radius: 50%;
    border: 1px solid #b3b3b3;
    padding: 5px;
    font-size: 18px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: all 0.3s ease;

    &:hover {
      color: #ff0000;
      transform: scale(1.1);
    }
  }

  /* Mobile pequeno - ícone menor */
  @media (max-width: 480px) {
    margin-bottom: 4px;
    padding-top: 85%;

    img {
      padding: 4px;
    }

    svg {
      width: 20px;
      height: 20px;
      font-size: 12px;
      top: 4px;
      right: 4px;
      padding: 3px;
    }
  }

  /* Desktop grande - ícone maior */
  @media (min-width: 1440px) {
    margin-bottom: 16px;

    img {
      padding: 12px;
    }

    svg {
      width: 34px;
      height: 34px;
      font-size: 20px;
      top: 12px;
      right: 12px;
    }
  }
`;

// A área de informações (título e preços)
export const Info = styled.div`
  flex-grow: 1;
  margin-bottom: 16px;

  .price-row {
    display: flex;
    align-items: baseline; 
    gap: 6px; 
    flex-wrap: wrap;
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    margin-bottom: 5px;

    .price-row {
      gap: 2px;
    }
  }

  /* Desktop grande */
  @media (min-width: 1440px) {
    margin-bottom: 20px;

    .price-row {
      gap: 8px;
    }
  }
`;

// O título do produto
export const ProdTitle = styled.h4`
  font-size: 1.1rem; 
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.7rem; /* Garante altura de 2 linhas para todos os cards */

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) { 
    font-size: 0.75rem; 
    min-height: 1.7rem;
    margin-bottom: 4px;
    line-height: 1.2;
    -webkit-line-clamp: 2;
  }

  /* Mobile médio (481px - 768px) */
  @media (min-width: 481px) and (max-width: 768px) { 
    font-size: 0.95rem; 
    min-height: 2.4rem;
  }

  /* Tablet (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) { 
    font-size: 1rem; 
    min-height: 2.5rem;
  }

  /* Desktop grande (1440px+) */
  @media (min-width: 1440px) { 
    font-size: 1.2rem; 
    min-height: 3rem;
    margin-bottom: 12px;
  }
`;

// O preço principal
export const Price = styled.p`
  font-size: 1.28rem;
  font-weight: 500;
  color: #03b304;
  margin: 0;

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) { 
    font-size: 0.9rem; 
  }

  /* Mobile médio (481px - 768px) */
  @media (min-width: 481px) and (max-width: 768px) { 
    font-size: 1.1rem; 
  }

  /* Tablet (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) { 
    font-size: 1.2rem; 
  }

  /* Desktop grande (1440px+) */
  @media (min-width: 1440px) { 
    font-size: 1.4rem; 
  }
`;

export const PriceInfo = styled.p`
  font-size: 0.95rem;
  color: #03b304;
  font-weight: 500;
  margin: 0;

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) { 
    font-size: 0.7rem; 
  }

  /* Mobile médio (481px - 768px) */
  @media (min-width: 481px) and (max-width: 768px) { 
    font-size: 0.85rem; 
  }

  /* Tablet (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) { 
    font-size: 0.9rem; 
  }

  /* Desktop grande (1440px+) */
  @media (min-width: 1440px) { 
    font-size: 1.05rem; 
  }
`;

// O preço antigo (riscado)
export const OldPrice = styled.p`
  font-size: 1.05rem;
  color: #777;
  text-decoration: line-through;
  margin: 4px 0 0 0;

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) { 
    font-size: 0.75rem;
    margin: 2px 0 0 0; 
  }

  /* Mobile médio (481px - 768px) */
  @media (min-width: 481px) and (max-width: 768px) { 
    font-size: 0.9rem; 
  }

  /* Tablet (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) { 
    font-size: 0.95rem; 
  }

  /* Desktop grande (1440px+) */
  @media (min-width: 1440px) { 
    font-size: 1.15rem; 
  }
`;

// Botão "Adicionar ao carrinho" (preto)
export const Cart = styled.button`
  background: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 99px;
  padding: 10px;
  font-size: 0.95rem;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover { 
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) { 
    padding: 5px 6px;
    font-size: 0.7rem;
    border-radius: 99px;
    margin-bottom: 4px;
  }

  /* Mobile médio (481px - 768px) */
  @media (min-width: 481px) and (max-width: 768px) { 
    padding: 9px;
    font-size: 0.85rem;
    border-radius: 99px;
  }

  /* Tablet (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) { 
    padding: 10px;
    font-size: 0.9rem;
  }

  /* Desktop grande (1440px+) */
  @media (min-width: 1440px) { 
    padding: 12px;
    font-size: 1.05rem;
    margin-bottom: 10px;
  }
`;

// Botão "Comprar agora" (branco)
export const Buy = styled.button`
  background: #f5f5f5;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 99px;
  padding: 10px;
  font-size: 0.95rem;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover { 
    background: #e8e8e8;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) { 
    padding: 5px 6px;
    font-size: 0.7rem;
    border-radius: 20px;
  }

  /* Mobile médio (481px - 768px) */
  @media (min-width: 481px) and (max-width: 768px) { 
    padding: 9px;
    font-size: 0.85rem;
    border-radius: 18px;
  }

  /* Tablet (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) { 
    padding: 10px;
    font-size: 0.9rem;
  }

  /* Desktop grande (1440px+) */
  @media (min-width: 1440px) { 
    padding: 12px;
    font-size: 1.05rem;
  }
`;

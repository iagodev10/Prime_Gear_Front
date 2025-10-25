import styled from 'styled-components';

// O "card" branco, com sombra e borda arredondada
export const Container = styled.div`
  background: #f5f5f5;
  border-radius: 18px;
  padding: 20px; 
  text-align: left;
  border: 1px solid #b3b3b3;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
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
    width:30px;
    height:30px;
    color: black;
    background-color: #f5f5f5;
    border-radius: 50%;
    border: 1px solid #b3b3b3;
    padding: 5px; /* Tamanho do coração */
    font-size: 18px; /* Ajuste o tamanho do ícone */
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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
`;

// O preço principal
export const Price = styled.p`
  font-size: 1.28rem;
  font-weight: 500;
  color: #03b304;
  margin: 0; 
`;

export const PriceInfo = styled.p`
  font-size: 0.95rem;
  color: #03b304;
  font-weight: 500;
  margin: 0;
`;

// O preço antigo (riscado)
export const OldPrice = styled.p`
  font-size: 1.05rem;
  color: #777;
  text-decoration: line-through;
`;

// Botão "Adicionar ao carrinho" (preto)
export const Cart = styled.button`
  background: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;
  display: flex; /* Para alinhar o ícone se for usar */
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  &:hover { opacity: 0.9; }
`;

// Botão "Comprar agora" (branco)
export const Buy = styled.button`
  background: #f5f5f5;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 20px;
  padding: 10px;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover { background: #f0f0f0; }
`;

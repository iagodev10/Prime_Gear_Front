import styled from "styled-components";

export const PageContainer = styled.section`
  width: 100%;
  height: auto;
  margin-top: 12vh;
  @media (max-width: 768px) {
    margin-top: 10vh;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1400px;
  margin: 100px auto;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
    margin: 40px auto;
    gap: 22px;
  }
  @media (max-width: 480px) {
    width: 96%;
    margin: 30px auto;
    gap: 18px;
  }
`;

// --- Coluna da Esquerda (Imagens) ---
export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 520px;
  object-fit: contain;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    max-height: 460px;
  }
  @media (max-width: 768px) {
    max-height: 380px;
  }
  @media (max-width: 480px) {
    max-height: 300px;
  }
`;

export const Miniaturas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media (max-width: 640px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 10px;
    padding-bottom: 6px;
  }
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  border: 2px solid #ddd;
  cursor: pointer;
  object-fit: cover;
  opacity: 0.7;

  ${(props) =>
    props.isActive &&
    `
    border-color: #007bff;
    opacity: 1;
    `}

  &:hover {
    opacity: 1;
  }
  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProdName = styled.h1`
  font-size: clamp(1.1rem, 2.2vw, 1.6rem);
  font-weight: 500;
  line-height: 1.4;
`;

export const PriceBlock = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const MainPrice = styled.div`
  font-size: clamp(1.6rem, 4.2vw, 2.2rem);
  color: #03b304;
`;

export const PixInfo = styled.p`
  font-size: clamp(0.85rem, 1.6vw, 0.95rem);
  color: #b3b3b3;
  margin-top: 4px;
`;

export const OtherPrice = styled.p`
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  color: #000000;
  margin-top: 4px;
`;

// Seletor de Quantidade
export const QuantitySelector = styled.div`
  display: flex;
  flex-direction: column; /* Coloca a label acima da linha */
  margin-top: 24px;
  gap: 8px; /* Espaço entre a label e a linha do seletor */
`;

// MODIFICADO: O texto não é mais bold e é menor
export const QuantityLabel = styled.span`
  font-weight: normal;
  font-size: clamp(0.85rem, 1.6vw, 0.95rem);
  color: black;
`;

export const SelectorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const QuantityPill = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #939598;
  border-radius: 99px;
  overflow: hidden;
`;

export const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: 300;
  color: black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: transparent;
  }
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

export const QuantityValue = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0 16px;
  min-width: 30px;
  text-align: center;
  color: black;
  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;
export const StockInfo = styled.span`
  font-size: clamp(0.85rem, 1.6vw, 0.95rem);
  color: #3f3f3f;
`;

// Botões de Ação
export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  @media (min-width: 900px) {
    flex-direction: row;
    & > button {
      flex: 1;
    }
  }
`;

const BaseButton = styled.button`
  padding: 14px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

// [MODIFICADO] BuyNow agora é o botão BRANCO
export const BuyNow = styled(BaseButton)`
  background-color: #fff;
  color: black;
  border: 2px solid #d9d9d9;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const AddCart = styled(BaseButton)`
  background-color: #000;
  color: white;

  &:hover {
    background-color: #333;
  }
`;

// Calcular Frete
export const CEP = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  background-color: white;
  padding: clamp(18px, 3.2vw, 30px);
  border: 2px solid #d9d9d9;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
`;

export const CepLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const InputCep = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const CepInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`;

export const CepButton = styled.button`
  padding: 0 20px;
  background-color: black;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 576px) {
    height: 42px;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #b3b3b3;
  margin: 25px 0;
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-items: start;
  margin-top: 24px;
  padding: 24px 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 220px;
  text-align: center;
`;

export const FeatureIconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Recebe a cor de fundo como uma prop (veja o .jsx) */
  background-color: ${(props) => props.bgColor || "#f0f0f0"};
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
`;

export const FeatureText = styled.span`
  font-size: clamp(0.85rem, 1.6vw, 0.95rem);
  color: #555;
`;

// O container de toda a seção de abas
export const TabSection = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 40px auto;
  background-color: #f9f9f9; // Fundo cinza claro para toda a área
  border-radius: 8px;
  overflow: hidden; // Para o conteúdo não vazar
  @media (max-width: 768px) {
    width: 95%;
    margin: 24px auto;
  }
`;

// A barra cinza que segura os botões
export const TabHeader = styled.div`
  display: flex;
  background-color: #f0f0f0; // Cor da barra de abas
  padding: 8px;
  border-radius: 8px 8px 0 0; // Arredonda só em cima
  gap: 8px;
  flex-wrap: wrap;
`;

// Os botões individuais
export const TabButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  font-size: clamp(0.95rem, 1.8vw, 1rem);
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;

  /* Estilo condicional: se a prop 'isActive' for true */
  ${(props) =>
    props.isActive
      ? `
        background-color: #fff;
        color: #000;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    `
      : `
        background-color: transparent;
        color: #555;
    `}

  &:hover {
    background-color: ${(props) => (props.isActive ? "#fff" : "#e0e0e0")};
  }
`;

// O container onde o conteúdo aparece
export const TabContent = styled.div`
  padding: clamp(16px, 3vw, 24px);
  background-color: #fff; // Fundo branco para o conteúdo
`;

// Tabela para Especificações
export const SpecTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const SpecRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const SpecCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  word-wrap: break-word;
  overflow-wrap: anywhere;

  /* A primeira célula (th) de cada linha */
  &:first-child {
    font-weight: bold;
    width: 30%;
    color: #333;
  }
`;

// Lista para Avaliações
export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 480px) {
    gap: 14px;
  }
`;

export const ReviewItem = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
`;

export const ReviewAuthor = styled.h4`
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  font-weight: bold;
  color: #000;
  margin: 0 0 8px 0;
`;

export const ReviewComment = styled.p`
  font-size: clamp(0.95rem, 1.8vw, 1rem);
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

export const Texto = styled.h2`
  font-size: clamp(1.4rem, 3.2vw, 2rem);
  font-weight: 500;
  text-align: left;
  margin: 40px 0 10px 0;
  color: #1c1c1c;
  margin-left: 5%;
  @media (max-width: 768px) {
    margin-left: 3%;
    margin: 30px 0 8px 0;
  }
`;

import styled from "styled-components";

export const PageContainer = styled.section`
    width: 100%;
    height: auto;
    margin-top: 12vh;
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
    }
`;

// --- Coluna da Esquerda (Imagens) ---
export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: auto;
    gap: 20px;
`;

export const MainImage = styled.img`
    width: 85%;
    height: auto;
    object-fit: cover;
`;

export const Miniaturas = styled.div`
    display: flex;
    gap: 12px;
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
`;


export const RightColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ProdName = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
`;

export const PriceBlock = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const MainPrice = styled.div`
    font-size: 2.35rem;
    color: #03b304;
`;

export const PixInfo = styled.p`
    font-size: 0.95rem;
    color: #b3b3b3;
    margin-top: 4px;
`;

export const OtherPrice = styled.p`
    font-size: 0.98rem;
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
    font-size: 0.9rem; 
    color: black;
`;

export const SelectorRow = styled.div`
    display: flex;
    align-items: center;
    gap: 18px; 
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
`;


export const QuantityValue = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0 16px;
    min-width: 30px;
    text-align: center;
    color: black;  
`;
export const StockInfo = styled.span`
    font-size: 0.9rem;
    color: #3f3f3f;
`;


// Botões de Ação
export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;
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
    padding: 30px;
    border: 2px solid #d9d9d9;
    border-radius: 12px;
`;

export const CepLabel = styled.label`
    display: block;
    margin-bottom: 8px;
`;

export const InputCep = styled.div`
    display: flex;
    gap: 10px;
`;

export const CepInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
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
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #b3b3b3;
  margin: 25px 0;
`;


export const FeaturesContainer = styled.div`
    display: flex;
    justify-content: space-around; 
    align-items: flex-start;
    margin-top: 24px;
    padding: 24px 0;
`;

export const FeatureItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    max-width: 140px; 
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
    background-color: ${(props) => props.bgColor || '#f0f0f0'};
`;

export const FeatureText = styled.span`
    font-size: 0.85rem;
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
`;

// A barra cinza que segura os botões
export const TabHeader = styled.div`
    display: flex;
    background-color: #f0f0f0; // Cor da barra de abas
    padding: 8px;
    border-radius: 8px 8px 0 0; // Arredonda só em cima
    gap: 8px;
`;

// Os botões individuais
export const TabButton = styled.button`
    flex: 1;
    padding: 12px 20px;
    font-size: 1rem;
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
        background-color: ${(props) => (props.isActive ? '#fff' : '#e0e0e0')};
    }
`;

// O container onde o conteúdo aparece
export const TabContent = styled.div`
    padding: 24px;
    background-color: #fff; // Fundo branco para o conteúdo
`;

// Tabela para Especificações
export const SpecTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const SpecRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const SpecCell = styled.td`
    padding: 12px;
    border-bottom: 1px solid #eee;

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
`;

export const ReviewItem = styled.div`
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
`;

export const ReviewAuthor = styled.h4`
    font-size: 1.1rem;
    font-weight: bold;
    color: #000;
    margin: 0 0 8px 0;
`;

export const ReviewComment = styled.p`
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin: 0;
`;

export const Texto = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    text-align: left;
    margin-bottom: -90px;
    margin-top: 70px;
    color: #1c1c1c;
    margin-left: 5%;
`;
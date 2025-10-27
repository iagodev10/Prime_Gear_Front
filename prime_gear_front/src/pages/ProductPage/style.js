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
    border-radius: 6px;
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

// --- Coluna da Direita (Informações) ---
export const RightColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ProdName = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
`;

export const PriceBlock = styled.div`
    margin-top: 20px;
`;

export const MainPrice = styled.div`
    font-size: 2.25rem;
    font-weight: bold;
    color: #000;
`;

export const PixInfo = styled.p`
    font-size: 0.9rem;
    color: #555;
    margin-top: 4px;
`;

export const OtherPrice = styled.p`
    font-size: 0.9rem;
    color: #777;
    margin-top: 4px;
`;

// Seletor de Quantidade
export const QuantitySelector = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
    gap: 10px;
`;

export const QuantityLabel = styled.span`
    font-weight: bold;
    font-size: 1rem;
`;

export const QuantityButton = styled.button`
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #f0f0f0;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const QuantityValue = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0 10px;
    min-width: 30px;
    text-align: center;
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
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.2s ease;
`;

export const BuyNow = styled(BaseButton)`
    background-color: #007bff;
    color: white;

    &:hover {
        background-color: #0056b3;
    }
`;

export const AddCart = styled(BaseButton)`
    background-color: #fff;
    color: #007bff;
    border: 2px solid #007bff;

    &:hover {
        background-color: #f0f8ff;
    }
`;

// Calcular Frete
export const CEP = styled.div`
    margin-top: 24px;
    border-top: 1px solid #eee;
    padding-top: 24px;
`;

export const CepLabel = styled.label`
    font-weight: bold;
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
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 4px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    
    &:hover {
        background-color: #f0f0f0;
    }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #b3b3b3;
  margin: 25px 0;
`;
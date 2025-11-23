import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999; /* Garante que fique na frente de tudo */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px; /* Espaço seguro nas bordas em mobile */
    backdrop-filter: blur(2px); /* Efeito visual agradável */
`;

export const ModalContent = styled.div`
    background: #f5f5f5;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 700px;
    max-height: 90vh; /* Limita altura para caber na tela */
    overflow-y: auto; /* Habilita scroll interno se necessário */
    display: flex;
    flex-direction: column;

    /* Personalização da barra de rolagem */
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border-bottom: 1px solid #e0e0e0;
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 10;

    h2 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: 600;
        color: #333;
    }

    button {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        color: #666;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
        padding: 4px;
        border-radius: 50%;
        
        &:hover {
            background-color: #eee;
            color: #000;
        }
    }
`;

export const Form = styled.form`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    > div:not(.grid-item) {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    label {
        font-size: 0.95rem;
        font-weight: 600;
        color: #333;
    }

    input {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
        transition: 0.3s;
        background-color: #fff;
        
        &:focus {
            outline: none;
            border-color: #000;
            box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
        }
    }

    @media (max-width: 480px) {
        padding: 16px;
        gap: 16px;
    }
`;

export const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* Vira uma coluna só em telas menores */
    }
    
    > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 14px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    &::after {
        content: '';
        position: absolute;
        top: 0; left: -100%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        animation: ${shimmer} 2s infinite;
    }
`;

export const ErrorText = styled.span`
    color: #d32f2f;
    font-size: 0.85rem;
    margin-top: -4px;
`;
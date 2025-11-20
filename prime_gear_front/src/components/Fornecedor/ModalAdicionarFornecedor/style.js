import styled from "styled-components";

export const ModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 700px;
    overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #eee;

  h2 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 500;
  }

  /* Botão de fechar (X) */
  button {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: #888;
    cursor: pointer;
    line-height: 1;
    transition: 0.3s ease-in-out;
    
    &:hover {
      color: black;
    }
  }
`;

// Estilo do formulário
export const Form = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px; 

  > div:not(.grid-item) {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  label {
    font-weight: 500;
    color: black;
  }

  hr{
    background-color: #ccc;
    height: 1px;
  }

  input, textarea, select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    box-sizing: border-box; 
    transition:  0.3s ease-in-out;
    background-color: #fff;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0,123,255,0.2);
    }
  }
  select:invalid {
    color: #777;
  }
`;


const shimmer = `
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 14px 24px;
    background: #000000;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 8px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    
    /* Animação de shimmer no hover */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.5s ease;
    }
    
    &:hover {
        background: #1a1a1a;
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
    }
    
    ${shimmer}
`;

export const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;
    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`;
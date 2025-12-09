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
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    overscroll-behavior: contain;
    
    @media (max-height: 800px) {
      max-height: calc(100vh - 24px);
    }
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

  @media (max-height: 800px) {
    padding: 16px;
    padding-bottom: 16px;
  }

  > div {
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

export const Divide = styled.div`
    display: flex !important;
    flex-direction: row !important;
    gap: 16px;
    width: 100%;
    flex-wrap: wrap;
    
    > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
    }
    .divs{
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 0.8rem;
    }
`;

export const ProdDestaque = styled.div`
    display: flex !important;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    background-color: #f9fafb;
    border-radius: 8px;
    padding: 16px 20px;
    flex-wrap: nowrap;
    width: 100%;
    box-sizing: border-box;

    .destaque{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 4px;
        flex: 1;
        min-width: 0;

        p{
            font-size: 0.9rem;
            color: black;
            margin: 0;
            font-weight: 500;
        }

        .p-destaque{
            font-size: 0.85rem;
            color: #666;
            margin: 0;
        }
    }
`;

// Switch iOS Style
export const SwitchContainer = styled.div`
    width: 51px;
    height: 31px;
    position: relative;
    flex-shrink: 0;
`;

export const SwitchCheckbox = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
`;

export const SwitchLabel = styled.label`
    width: 100%;
    height: 100%;
    display: block;
    background-color: ${props => props.checked ? '#34C759' : '#e9e9eb'};
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-out;
    position: relative;
    overflow: hidden;
`;

export const SwitchSlider = styled.span`
    width: 27px;
    height: 27px;
    position: absolute;
    left: ${props => props.checked ? '22px' : '2px'};
    top: 2px;
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
    transition: left 0.2s ease-out;
    cursor: pointer;
    pointer-events: none;
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

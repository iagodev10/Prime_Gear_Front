import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0; /* Top, Left, Right, Bottom = 0 */
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 700px;
  max-height: 90vh; /* Não ultrapassa a altura da tela */
  overflow-y: auto; /* Habilita scroll se necessário */
  display: flex;
  flex-direction: column;

  /* Scroll customizado */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 10px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky; /* Mantém o header fixo ao rolar */
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
    padding: 4px;
    display: flex;
    align-items: center;
    transition: 0.2s;

    &:hover {
      color: #000;
      background: #eee;
      border-radius: 50%;
    }
  }
`;

export const Form = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

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
    background-color: #fff;
    transition: 0.3s;

    &:focus {
      outline: none;
      border-color: #000;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Coluna única em mobile */
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
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: #1a1a1a;
  }

  &::after {
    content: "";
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
    animation: ${shimmer} 2s infinite;
  }
`;

export const ErrorText = styled.span`
  color: #d32f2f;
  font-size: 0.85rem;
  margin-top: -4px;
`;

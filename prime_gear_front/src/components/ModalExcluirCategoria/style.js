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
  max-width: 520px;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
  h2 { margin: 0; font-size: 1.4rem; font-weight: 500 }
  button { background: transparent; border: none; font-size: 1.5rem; color: #888; cursor: pointer; line-height: 1; transition: 0.3s ease-in-out }
  button:hover { color: black }
`;

export const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  p { color: black; font-size: 1rem; margin: 0 }
  .name { font-weight: 600 }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 24px 24px;
`;

export const CancelButton = styled.button`
  padding: 10px 16px;
  background: #e1e1e1;
  color: #111;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all .2s ease;
  &:hover { background: #d6d6d6; transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,0.18) }
  &:active { transform: translateY(0) }
`;

export const ConfirmButton = styled.button`
  padding: 10px 16px;
  background: #dc3545;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: all .2s ease;
  cursor: pointer;
  svg { transition: transform .2s ease, opacity .2s ease }
  &:hover { background: #c82333; transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,0.2) }
  &:hover svg { transform: scale(1.1); opacity: 0.9 }
  &:active { transform: translateY(0) }
`;
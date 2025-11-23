import React from "react";
import { FiX } from "react-icons/fi";
import { 
    ModalOverlay, ModalContent, ModalHeader, Content, Actions, CancelButton, ConfirmButton 
} from "./style";

const ModalExcluirTransportadora = ({ isVisivel, transportadora, onConfirm, onClose,id }) => {
  if (!isVisivel) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContent>
        <ModalHeader>
          <h2>Excluir Transportadora</h2>
          <button onClick={onClose}><FiX size={24} /></button>
        </ModalHeader>

        <Content>
          <p>Tem certeza que deseja excluir <strong>{transportadora?.nome}</strong>?</p>
          <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#666' }}>
            Essa ação é irreversível.
          </p>
        </Content>

        <Actions>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <ConfirmButton onClick={onConfirm}>Sim, Excluir</ConfirmButton>
        </Actions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalExcluirTransportadora;
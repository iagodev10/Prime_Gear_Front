import React from "react";
import { FiX } from "react-icons/fi";
import { ModalOverlay, ModalContent, ModalHeader, Content, Actions, CancelButton, ConfirmButton } from "./style";

const ModalExcluirFornecedor = ({ isVisivel, fornecedor, onConfirm, onClose,id }) => {
  if (!isVisivel) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

 
  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>
          <ModalHeader>
            <h2>Excluir Fornecedor</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Content>
            <p>Tem certeza que deseja excluir o fornecedor <span className="name">{fornecedor?.nome}</span>?</p>
            <p>Essa ação não poderá ser desfeita.</p>
          </Content>

          <Actions>
            <CancelButton onClick={onClose}>Cancelar</CancelButton>
            <ConfirmButton onClick={onConfirm}>Excluir</ConfirmButton>
          </Actions>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalExcluirFornecedor;

import React from "react";
import { FiX } from "react-icons/fi";
import { ModalOverlay, ModalContent, ModalHeader, Form, SubmitButton } from "./style";

const ModalAdicionarCategoria = ({ isVisivel, onClose }) => {
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
            <h2>Nova Categoria</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="nome">Nome da Categoria</label>
              <input type="text" id="nome" required placeholder="Digite o nome da categoria" />
            </div>

            <div>
              <label htmlFor="descricao">Descrição da Categoria</label>
              <textarea id="descricao" required rows={3} placeholder="Digite a descrição da categoria"></textarea>
            </div>

            <SubmitButton type="submit">Cadastrar Categoria</SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalAdicionarCategoria;

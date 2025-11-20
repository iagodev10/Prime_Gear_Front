import React, { useState, useEffect } from "react";

import { FiX } from "react-icons/fi";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Form,
  SubmitButton,
} from "./style";

const ModalEditarCategoria = ({ onClose, onSave, categoriaAtual }) => {
  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (categoriaAtual) {
      setName(categoriaAtual.name);
      setDescricao(categoriaAtual.descricao);
    }
  }, [categoriaAtual]);

  const handleSalvar = (e) => {
    e.preventDefault();

    const atualizado = {
      id: categoriaAtual.id,
      name,
      descricao,
    };
    onSave(atualizado);
    onClose();
  };

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
            <h2>Editar Categoria</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form onSubmit={handleSalvar}>
            <div>
              <label htmlFor="nome">Nome da Categoria</label>
              <input
                type="text"
                id="nome"
                required
                placeholder="Digite o nome da categoria"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="descricao">Descrição da Categoria</label>
              <textarea
                id="descricao"
                placeholder="Digite a descrição da categoria"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>

            <SubmitButton type="submit" onClick={handleSalvar}>
              Salvar Categoria
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalEditarCategoria;

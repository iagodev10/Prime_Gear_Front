import React from "react";
import { FiX } from "react-icons/fi";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Form,
  SubmitButton, Div
} from "./style";

const ModalAdicionarFornecedor = ({ isVisivel, onClose }) => {
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
            <h2>Novo Fornecedor</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form onSubmit={(e) => e.preventDefault()}>
            <Div className="grid-item">
              <div>
                <label htmlFor="nome">Nome do Fornecedor</label>
                <input
                  type="text"
                  id="nome"
                  required
                  placeholder="Digite o nome do fornecedor"
                />
              </div>

              <div>
                <label htmlFor="cnpj">CNPJ</label>
                <input
                  type="text"
                  id="cnpj"
                  required
                  placeholder="00.000.000/0000-00"
                />
              </div>
            </Div>

            <Div className="grid-item">
              <div>
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="text"
                  id="telefone"
                  required
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  required
                  placeholder="email@example.com"
                />
              </div>
            </Div>

            <div>
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                required
                placeholder="Digite o endereço do fornecedor"
              />
            </div>

            <Div className="grid-item">
              <div>
                <label htmlFor="responsavel">Responsável</label>
                <input
                  type="text"
                  id="responsavel"
                  required
                  placeholder="Digite o nome do responsável"
                />
              </div>

              <div>
                <label htmlFor="prazoEntrega">Prazo de Entrega (Dias)</label>
                <input
                  type="text"
                  id="prazoEntrega"
                  required
                  placeholder="Digite o prazo de entrega em dias"
                />
              </div>
            </Div>

            <SubmitButton type="submit">Cadastrar Fornecedor</SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalAdicionarFornecedor;

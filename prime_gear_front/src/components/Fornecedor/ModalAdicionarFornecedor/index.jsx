import React from "react";
import { FiX } from "react-icons/fi";
import {
  ModalOverlay, ModalContent, ModalHeader, Form, SubmitButton, Div
} from "./style";

const ModalAdicionarFornecedor = ({ isVisivel, onClose }) => {
  if (!isVisivel) return null;

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContent>
        <ModalHeader>
          <h2>Novo Fornecedor</h2>
          <button onClick={onClose} type="button">
            <FiX size={24} />
          </button>
        </ModalHeader>

        <Form onSubmit={(e) => e.preventDefault()}>
          <Div className="grid-item">
            <div>
              <label htmlFor="nome">Nome do Fornecedor</label>
              <input id="nome" required placeholder="Digite o nome" />
            </div>
            <div>
              <label htmlFor="cnpj">CNPJ</label>
              <input id="cnpj" required placeholder="00.000.000/0000-00" />
            </div>
          </Div>

          <Div className="grid-item">
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input id="telefone" required placeholder="(00) 00000-0000" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required placeholder="email@example.com" />
            </div>
          </Div>

          <div>
            <label htmlFor="endereco">Endereço</label>
            <input id="endereco" required placeholder="Digite o endereço completo" />
          </div>

          <Div className="grid-item">
            <div>
              <label htmlFor="responsavel">Responsável</label>
              <input id="responsavel" required placeholder="Nome do responsável" />
            </div>
            <div>
              <label htmlFor="prazoEntrega">Prazo (Dias)</label>
              <input id="prazoEntrega" required placeholder="Ex: 5" />
            </div>
          </Div>

          <SubmitButton type="submit">Cadastrar Fornecedor</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAdicionarFornecedor;
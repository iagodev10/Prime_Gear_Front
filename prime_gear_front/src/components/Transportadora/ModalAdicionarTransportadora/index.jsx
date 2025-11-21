import React from "react";
import { FiX } from "react-icons/fi";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Form,
  SubmitButton, Div
} from "./style";

const ModalAdicionarTransportadora = ({ isVisivel, onClose }) => {
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
            <h2>Novo Transportadora</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form onSubmit={(e) => e.preventDefault()}>
            <Div className="grid-item">
              <div>
                <label htmlFor="nome">Nome do Transportadora</label>
                <input
                  type="text"
                  id="nome"
                  required
                  placeholder="Digite o nome do transportadora"
                />
              </div>

              <div>
                <label htmlFor="cnpj">CNPJ</label>
                <input
                  type="text"
                  id="cnpj"
                  pattern="\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}"
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
              <label htmlFor="endereco">Endereço da Sede</label>
              <input
                type="text"
                id="endereco"
                required
                placeholder="Digite o endereço da sede"
              />
            </div>


            <div>
              <label htmlFor="regioes">Regiões Atendidas</label>
              <input
                type="text"
                id="regioes"
                required
                placeholder="Digite as regiões atendidas"
              />
            </div>

            <Div className="grid-item">
              <div>
                <label htmlFor="preco_frete">Preço Base do Frete</label>
                <input
                  type="text"
                  id="preco_frete"
                  required
                  placeholder="0"
                />
              </div>

              <div>
                <label htmlFor="avaliacao">Avaliação Média (0-5)</label>
                <input
                  type="text"
                  id="avaliacao"
                  required
                  placeholder="0"
                />
              </div>
            </Div>

            <SubmitButton type="submit">Cadastrar Transportadora</SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalAdicionarTransportadora;

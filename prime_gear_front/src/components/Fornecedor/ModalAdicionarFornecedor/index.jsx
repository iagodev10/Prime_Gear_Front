import React from "react";
import { useState } from "react";
import axios from 'axios'

import { FiX } from "react-icons/fi";
import {
  ModalOverlay, ModalContent, ModalHeader, Form, SubmitButton, Div
} from "./style";

const ModalAdicionarFornecedor = ({ isVisivel, onClose }) => {

  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [prazoEntrega, setPrazoEntrega] = useState('');

  async function handleAddFornecedor(){
    const objFornecedor={
      cnpj_forn: cnpj,
      telefone_forn: telefone,
      email_forn:email, 
      endereco_forn: endereco,
      nome_responsavel_forn: responsavel,
      prazo_entrega_forn: prazoEntrega
    }


    try {
        const response = await axios.post('http://localhost:8080/adicionar-fornecedor', objFornecedor)
        console.log("Forncedor adicionado com sucesso");
    } catch (error) {
      alert("Erro ao cadastrar")
      console.log(error);
    }
  }

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
  );
};

export default ModalAdicionarFornecedor;
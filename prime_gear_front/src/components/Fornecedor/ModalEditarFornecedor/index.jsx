import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiX } from "react-icons/fi";
import {
  ModalOverlay, ModalContent, ModalHeader, Form, SubmitButton,
} from "./style";

const ModalEditarFornecedor = ({ isVisivel, onClose, onSave, fornecedor, id, reload }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [responsavel, setResponsavel] = useState("");

  useEffect(() => {
    if (fornecedor) {
      setNome(fornecedor.nome || "");
      setEmail(fornecedor.email || "");
      setTelefone(fornecedor.telefone || "");
      setEndereco(fornecedor.endereco || "");
      setCnpj(fornecedor.cnpj || "");
      setResponsavel(fornecedor.responsavel || "");
    }
  }, [fornecedor]);

  if (!isVisivel) return null;

  const handleSalvar = async (e) => {
    e.preventDefault();
    
    const objNovasInfos = {
      cnpj_forn: cnpj,
      telefone_forn: telefone,
      email_forn: email,
      endereco_forn: endereco,
      nome_responsavel_forn: responsavel
    };

    try {
      const response = await axios.put('http://localhost:8080/editar-fornecedor/' + id, objNovasInfos);
      console.log("Fornecedor editado com sucesso");
      
      if (onSave) {
        onSave({ ...fornecedor, nome, email, telefone, endereco, cnpj, responsavel });
      }
      
      if (reload) {
        reload();
      }
      
      onClose();
    } catch (error) {
      alert("Erro ao editar");
      console.log(error);
    }
  };

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContent>
        <ModalHeader>
          <h2>Editar Fornecedor</h2>
          <button onClick={onClose}><FiX size={24} /></button>
        </ModalHeader>

        <Form onSubmit={handleSalvar}>
          <div>
            <label htmlFor="nome">Nome do Fornecedor</label>
            <input
              type="text"
              id="nome"
              required
              placeholder="Digite o nome do fornecedor"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cnpj">CNPJ do Fornecedor</label>
            <input
              type="text"
              id="cnpj"
              required
              placeholder="Digite o CNPJ do fornecedor"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="responsavel">Responsável pelo Fornecedor</label>
            <input
              type="text"
              id="responsavel"
              required
              placeholder="Digite o nome do responsável pelo fornecedor"
              value={responsavel}
              onChange={(e) => setResponsavel(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email do Fornecedor</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Digite o email do fornecedor"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="telefone">Telefone do Fornecedor</label>
            <input
              type="tel"
              id="telefone"
              required
              placeholder="Digite o telefone do fornecedor"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="endereco">Endereço do Fornecedor</label>
            <input
              type="text"
              id="endereco"
              required
              placeholder="Digite o endereço do fornecedor"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          <SubmitButton type="submit">
            Salvar Alterações
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalEditarFornecedor;
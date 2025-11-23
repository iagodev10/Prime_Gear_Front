import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import {
  ModalOverlay, ModalContent, ModalHeader, Form, SubmitButton,
} from "./style";

const ModalEditarFornecedor = ({ isVisivel, onClose, onSave, fornecedor }) => {
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

  const handleSalvar = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({ ...fornecedor, nome, email, telefone, endereco, cnpj, responsavel });
    }
    onClose();
  };

  if (!isVisivel) return null;

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContent>
        <ModalHeader>
          <h2>Editar Fornecedor</h2>
          <button onClick={onClose}><FiX size={24} /></button>
        </ModalHeader>

        <Form onSubmit={handleSalvar}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input id="nome" value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div>
            <label htmlFor="cnpj">CNPJ</label>
            <input id="cnpj" value={cnpj} onChange={e => setCnpj(e.target.value)} />
          </div>
          <div>
            <label htmlFor="responsavel">Responsável</label>
            <input id="responsavel" value={responsavel} onChange={e => setResponsavel(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
          </div>
          <div>
            <label htmlFor="endereco">Endereço</label>
            <input id="endereco" value={endereco} onChange={e => setEndereco(e.target.value)} />
          </div>

          <SubmitButton type="submit">Salvar Alterações</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalEditarFornecedor;
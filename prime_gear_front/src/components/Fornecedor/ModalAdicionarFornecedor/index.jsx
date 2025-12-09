import React from "react";
import { useState } from "react";
import axios from "axios";
import { masks } from "../../../utils/formValidation";

import { FiX } from "react-icons/fi";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Form,
  SubmitButton,
  Div,
  ErrorText,
} from "./style";

const ModalAdicionarFornecedor = ({ isVisivel, onClose }) => {
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [prazoEntrega, setPrazoEntrega] = useState("");
  const [errors, setErrors] = useState({});

  const validateField = (field) => {
    const e = { ...errors };
    if (field === "email") {
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        e.email = "Email inválido";
      else delete e.email;
    } else if (field === "cnpj") {
      if (cnpj.replace(/\D/g, "").length !== 14) e.cnpj = "CNPJ inválido";
      else delete e.cnpj;
    } else if (field === "telefone") {
      const d = telefone.replace(/\D/g, "");
      if (d.length < 10 || d.length > 11) e.telefone = "Telefone inválido";
      else delete e.telefone;
    } else if (field === "prazoEntrega") {
      if (!prazoEntrega || isNaN(parseInt(prazoEntrega)))
        e.prazoEntrega = "Prazo deve ser número";
      else delete e.prazoEntrega;
    } else if (field === "nome") {
      if (!nome.trim()) e.nome = "Informe o nome";
      else delete e.nome;
    } else if (field === "endereco") {
      if (!endereco.trim()) e.endereco = "Informe o endereço";
      else delete e.endereco;
    } else if (field === "responsavel") {
      if (!responsavel.trim()) e.responsavel = "Informe o responsável";
      else delete e.responsavel;
    }
    setErrors(e);
  };

  const validar = () => {
    const e = {};
    if (!nome.trim()) e.nome = "Informe o nome";
    if (!cnpj.match(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/))
      e.cnpj = "CNPJ inválido";
    if (!telefone.match(/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/))
      e.telefone = "Telefone inválido";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email inválido";
    if (!endereco.trim()) e.endereco = "Informe o endereço";
    if (!responsavel.trim()) e.responsavel = "Informe o responsável";
    if (!prazoEntrega || isNaN(parseInt(prazoEntrega)))
      e.prazoEntrega = "Prazo deve ser número";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  async function handleAddFornecedor(e){
    e.preventDefault();
    if (!validar()) return;
    const objFornecedor = {
      cnpj_forn: cnpj.replace(/\D/g, ""),
      telefone_forn: telefone.replace(/\D/g, ""),
      email_forn: email,
      endereco_forn: endereco,
      nome_responsavel_forn: responsavel,
      prazo_entrega_forn: String(prazoEntrega).replace(/\D/g, ""),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/adicionar-fornecedor",
        objFornecedor
      );
      console.log("Forncedor adicionado com sucesso");
      onClose();
    } catch (error) {
      alert("Erro ao cadastrar");
      console.log(error);
    }
  }

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

          <Form onSubmit={handleAddFornecedor}>
            <Div className="grid-item">
              <div>
                <label htmlFor="nome">Nome do Fornecedor</label>
                <input
                  type="text"
                  id="nome"
                  required
                  placeholder="Digite o nome do fornecedor"
                  onChange={(e) => setNome(e.target.value)}
                  onBlur={() => validateField("nome")}
                />
                {errors.nome && <ErrorText>{errors.nome}</ErrorText>}
              </div>

              <div>
                <label htmlFor="cnpj">CNPJ</label>
                <input
                  type="text"
                  id="cnpj"
                  required
                  placeholder="00.000.000/0000-00"
                  value={cnpj}
                  onChange={(e) => setCnpj(masks.cnpj(e.target.value))}
                  onBlur={() => validateField("cnpj")}
                />
                {errors.cnpj && <ErrorText>{errors.cnpj}</ErrorText>}
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
                  value={telefone}
                  onChange={(e) => setTelefone(masks.phone(e.target.value))}
                  onBlur={() => validateField("telefone")}
                />
                {errors.telefone && <ErrorText>{errors.telefone}</ErrorText>}
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  required
                  placeholder="email@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => validateField("email")}
                />
                {errors.email && <ErrorText>{errors.email}</ErrorText>}
              </div>
            </Div>

            <div>
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                required
                placeholder="Digite o endereço do fornecedor"
                onChange={(e) => setEndereco(e.target.value)}
                onBlur={() => validateField("endereco")}
              />
              {errors.endereco && <ErrorText>{errors.endereco}</ErrorText>}
            </div>

            <Div className="grid-item">
              <div>
                <label htmlFor="responsavel">Responsável</label>
                <input
                  type="text"
                  id="responsavel"
                  required
                  placeholder="Digite o nome do responsável"
                  onChange={(e) => setResponsavel(e.target.value)}
                  onBlur={() => validateField("responsavel")}
                />
                {errors.responsavel && (
                  <ErrorText>{errors.responsavel}</ErrorText>
                )}
              </div>

              <div>
                <label htmlFor="prazoEntrega">Prazo de Entrega (Dias)</label>
                <input
                  type="text"
                  id="prazoEntrega"
                  required
                  placeholder="Digite o prazo de entrega em dias"
                  value={prazoEntrega}
                  onChange={(e) =>
                    setPrazoEntrega(e.target.value.replace(/\D/g, ""))
                  }
                  onBlur={() => validateField("prazoEntrega")}
                />
                {errors.prazoEntrega && (
                  <ErrorText>{errors.prazoEntrega}</ErrorText>
                )}
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

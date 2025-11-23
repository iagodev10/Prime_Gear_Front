import React, { useState } from "react";
import axios from 'axios'
import { FiX } from "react-icons/fi";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Form,
  SubmitButton, Div, ErrorText
} from "./style";

const ModalAdicionarTransportadora = ({ isVisivel, onClose, onAdd }) => {
  if (!isVisivel) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [regioes, setRegioes] = useState("");
  const [precoFrete, setPrecoFrete] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [errors, setErrors] = useState({});

  const validar = () => {
    const e = {};
    if (!nome.trim()) e.nome = "Informe o nome";
    if (!cnpj.match(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/)) e.cnpj = "CNPJ inválido";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email inválido";
    if (!telefone.match(/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/)) e.telefone = "Telefone inválido";
    if (!endereco.trim()) e.endereco = "Informe o endereço";
    if (!regioes.trim()) e.regioes = "Informe as regiões";
    if (!precoFrete || isNaN(parseFloat(precoFrete))) e.precoFrete = "Preço inválido";
    if (avaliacao && (isNaN(parseFloat(avaliacao)) || parseFloat(avaliacao) < 0 || parseFloat(avaliacao) > 5)) e.avaliacao = "Avaliação 0-5";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    const novaTransportadora = {
      nome_transp: nome,
      email_transp: email,
      telefone_transp: telefone,
      endereco_sede_transp: endereco,
      cnpj_transp: cnpj,
      regioes_atendidas_transp: regioes,
      preco_base_frete_transp: precoFrete,
      avaliacao_media_transp: avaliacao
    }

    try {
      const response= await axios.post('http://localhost:8080/create-transportadora',novaTransportadora)
      console.log("transportadora criada com sucesso");

    } catch (error) {
      console.log(error);
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

        <Form onSubmit={handleSubmit}>
          <Div className="grid-item">
            <div>
              <label htmlFor="nome">Nome do Transportadora</label>
              <input
                type="text"
                id="nome"
                required
                placeholder="Digite o nome do transportadora"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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
                onChange={(e) => setCnpj(e.target.value)}
              />
              {errors.cnpj && <ErrorText>{errors.cnpj}</ErrorText>}
            </div>
          </Div>

          <Div className="grid-item">
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                required
                placeholder="(00) 00000-0000"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              {errors.telefone && <ErrorText>{errors.telefone}</ErrorText>}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>
          </Div>

          <div>
            <label htmlFor="endereco">Endereço da Sede</label>
            <input
              type="text"
              id="endereco"
              required
              placeholder="Digite o endereço da sede"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
            {errors.endereco && <ErrorText>{errors.endereco}</ErrorText>}
          </div>


          <div>
            <label htmlFor="regioes">Regiões Atendidas</label>
            <input
              type="text"
              id="regioes"
              required
              placeholder="Digite as regiões atendidas"
              value={regioes}
              onChange={(e) => setRegioes(e.target.value)}
            />
            {errors.regioes && <ErrorText>{errors.regioes}</ErrorText>}
          </div>

          <Div className="grid-item">
            <div>
              <label htmlFor="preco_frete">Preço Base do Frete</label>
              <input
                type="number"
                id="preco_frete"
                required
                placeholder="0"
                value={precoFrete}
                onChange={(e) => setPrecoFrete(e.target.value)}
              />
              {errors.precoFrete && <ErrorText>{errors.precoFrete}</ErrorText>}
            </div>

            <div>
              <label htmlFor="avaliacao">Avaliação Média (0-5)</label>
              <input
                type="number"
                id="avaliacao"
                placeholder="0"
                value={avaliacao}
                onChange={(e) => setAvaliacao(e.target.value)}
                min="0"
                max="5"
              />
              {errors.avaliacao && <ErrorText>{errors.avaliacao}</ErrorText>}
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

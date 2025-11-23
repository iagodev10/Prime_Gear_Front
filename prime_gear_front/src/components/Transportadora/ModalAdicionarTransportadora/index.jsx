import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Form,
  SubmitButton,
  Div,
  ErrorText
} from "./style";

const ModalAdicionarTransportadora = ({ isVisivel, onClose, onAdd }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [regioes, setRegioes] = useState("");
  const [precoFrete, setPrecoFrete] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [errors, setErrors] = useState({});

  if (!isVisivel) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const validar = () => {
    const e = {};
    if (!nome.trim()) e.nome = "Informe o nome";
    if (!cnpj) e.cnpj = "Informe o CNPJ";
    if (!email || !email.includes("@")) e.email = "Email inválido";
    if (!telefone) e.telefone = "Telefone obrigatório";
    if (!endereco.trim()) e.endereco = "Informe o endereço";
    if (!regioes.trim()) e.regioes = "Informe as regiões";
    if (!precoFrete) e.precoFrete = "Preço obrigatório";
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validar()) return;

    const novo = {
      nome,
      email,
      telefone,
      endereco,
      cnpj,
      regioes,
      preco_frete: parseFloat(precoFrete),
      avaliacao: avaliacao ? parseFloat(avaliacao) : 0,
    };
    
    if (onAdd) onAdd(novo);
    
    // Limpar form (opcional)
    setNome(""); setCnpj(""); setEmail(""); setTelefone("");
    setEndereco(""); setRegioes(""); setPrecoFrete(""); setAvaliacao("");
    setErrors({});
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <h2>Nova Transportadora</h2>
          <button onClick={onClose} type="button">
            <FiX size={24} />
          </button>
        </ModalHeader>

        <Form onSubmit={handleSubmit}>
          <Div className="grid-item">
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Azul Cargo"
              />
              {errors.nome && <ErrorText>{errors.nome}</ErrorText>}
            </div>
            <div>
              <label htmlFor="cnpj">CNPJ</label>
              <input
                id="cnpj"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                placeholder="00.000.000/0001-00"
              />
              {errors.cnpj && <ErrorText>{errors.cnpj}</ErrorText>}
            </div>
          </Div>

          <Div className="grid-item">
            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(00) 0000-0000"
              />
              {errors.telefone && <ErrorText>{errors.telefone}</ErrorText>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contato@exemplo.com"
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>
          </Div>

          <div>
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Rua, Número, Cidade"
            />
            {errors.endereco && <ErrorText>{errors.endereco}</ErrorText>}
          </div>

          <div>
            <label htmlFor="regioes">Regiões Atendidas</label>
            <input
              id="regioes"
              value={regioes}
              onChange={(e) => setRegioes(e.target.value)}
              placeholder="Ex: Sul e Sudeste"
            />
            {errors.regioes && <ErrorText>{errors.regioes}</ErrorText>}
          </div>

          <Div className="grid-item">
            <div>
              <label htmlFor="preco_frete">Preço Base (R$)</label>
              <input
                id="preco_frete"
                type="number"
                value={precoFrete}
                onChange={(e) => setPrecoFrete(e.target.value)}
                placeholder="0.00"
              />
              {errors.precoFrete && <ErrorText>{errors.precoFrete}</ErrorText>}
            </div>
            <div>
              <label htmlFor="avaliacao">Avaliação (0-5)</label>
              <input
                id="avaliacao"
                type="number"
                min="0"
                max="5"
                value={avaliacao}
                onChange={(e) => setAvaliacao(e.target.value)}
              />
            </div>
          </Div>

          <SubmitButton type="submit">Cadastrar</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAdicionarTransportadora;
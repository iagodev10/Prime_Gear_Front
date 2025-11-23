import React, { useState, useEffect } from "react";

import { FiX } from "react-icons/fi";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Form,
  SubmitButton,
  ErrorText,
} from "./style";

const ModalEditarTransportadora = ({ isVisivel, onClose, onSave, transportadora }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [regioes, setRegioes] = useState("");
  const [preco_frete, setPrecoFrete] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (transportadora) {
      setNome(transportadora.nome); 
      setEmail(transportadora.email);
      setTelefone(transportadora.telefone);
      setEndereco(transportadora.endereco);
      setCnpj(transportadora.cnpj);
      setRegioes(transportadora.regioes);
      setPrecoFrete(transportadora.preco_frete);
    }
  }, [transportadora]);

  const handleSalvar = (t) => {
    t.preventDefault();

    const e = {};
    if (!nome.trim()) e.nome = "Informe o nome";
    if (!cnpj.match(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/)) e.cnpj = "CNPJ inválido";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email inválido";
    if (!telefone.match(/^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/)) e.telefone = "Telefone inválido";
    if (!endereco.trim()) e.endereco = "Informe o endereço";
    if (!regioes.trim()) e.regioes = "Informe as regiões";
    if (!preco_frete || isNaN(parseFloat(preco_frete))) e.preco_frete = "Preço inválido";
    setErrors(e);
    if (Object.keys(e).length) return;

    const atualizado = {
      id: transportadora.id,
      nome,
      email,
      telefone,
      endereco,
      cnpj,
      regioes,
      preco_frete: parseFloat(preco_frete),
    };
    if (onSave) {
      onSave(atualizado);
    }
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisivel) return null;

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>
          <ModalHeader>
            <h2>Editar Transportadora</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form onSubmit={handleSalvar}>
            <div>
              <label htmlFor="nome">Nome da Transportadora</label>
              <input
                type="text"
                id="nome"
                required
                placeholder="Digite o nome da transportadora"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              {errors.nome && <ErrorText>{errors.nome}</ErrorText>}
            </div>

            <div>
              <label htmlFor="cnpj">CNPJ da Transportadora</label>
              <input
                type="text"
                id="cnpj"
                required
                placeholder="Digite o CNPJ da transportadora"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
              />
              {errors.cnpj && <ErrorText>{errors.cnpj}</ErrorText>}
            </div>

            <div>
              <label htmlFor="regioes">Regiões de Entrega</label>
              <input
                type="text"
                id="regioes"
                required
                placeholder="Digite as regiões de entrega da transportadora"
                value={regioes}
                onChange={(e) => setRegioes(e.target.value)}
              />
              {errors.regioes && <ErrorText>{errors.regioes}</ErrorText>}
            </div>

            <div>
              <label htmlFor="email">Email da Transportadora</label>
              <input
                type="email"
                id="email"
                required
                placeholder="Digite o email da transportadora"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>

            <div>
              <label htmlFor="telefone">Telefone da Transportadora</label>
              <input
                type="tel"
                id="telefone"
                required
                placeholder="Digite o telefone da transportadora"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              {errors.telefone && <ErrorText>{errors.telefone}</ErrorText>}
            </div>

            <div>
              <label htmlFor="endereco">Endereço da Transportadora</label>
              <input
                type="text"
                id="endereco"
                required
                placeholder="Digite o endereço da transportadora"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
              {errors.endereco && <ErrorText>{errors.endereco}</ErrorText>}
            </div>

            <div>
              <label htmlFor="preco_frete">Preço do Frete</label>
              <input
                type="number"
                id="preco_frete"
                required
                placeholder="Digite o preço do frete"
                value={preco_frete}
                onChange={(e) => setPrecoFrete(e.target.value)}
              />
              {errors.preco_frete && <ErrorText>{errors.preco_frete}</ErrorText>}
            </div>

            <SubmitButton type="submit" onClick={handleSalvar}>
              Salvar Transportadora
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalEditarTransportadora;

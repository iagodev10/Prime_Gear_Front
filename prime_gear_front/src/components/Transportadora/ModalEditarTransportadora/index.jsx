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
      setNome(transportadora.nome || ""); 
      setEmail(transportadora.email || "");
      setTelefone(transportadora.telefone || "");
      setEndereco(transportadora.endereco || "");
      setCnpj(transportadora.cnpj || "");
      setRegioes(transportadora.regioes || "");
      setPrecoFrete(transportadora.preco_frete || "");
    }
  }, [transportadora]);

  if (!isVisivel) return null;

  const handleSalvar = (e) => {
    e.preventDefault();
    const err = {};
    if (!nome.trim()) err.nome = "Informe o nome";
    if (!email) err.email = "Informe o email";
    if (!preco_frete) err.preco_frete = "Informe o preço";

    setErrors(err);
    if (Object.keys(err).length > 0) return;

    const atualizado = {
      ...transportadora,
      nome,
      email,
      telefone,
      endereco,
      cnpj,
      regioes,
      preco_frete: parseFloat(preco_frete),
    };
    
    if (onSave) onSave(atualizado);
  };

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <ModalContent>
        <ModalHeader>
          <h2>Editar Transportadora</h2>
          <button onClick={onClose} type="button"><FiX size={24} /></button>
        </ModalHeader>

        <Form onSubmit={handleSalvar}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input id="nome" value={nome} onChange={e => setNome(e.target.value)} />
            {errors.nome && <ErrorText>{errors.nome}</ErrorText>}
          </div>

          <div>
            <label htmlFor="cnpj">CNPJ</label>
            <input id="cnpj" value={cnpj} onChange={e => setCnpj(e.target.value)} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </div>

          <div>
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
          </div>

          <div>
            <label htmlFor="endereco">Endereço</label>
            <input id="endereco" value={endereco} onChange={e => setEndereco(e.target.value)} />
          </div>

          <div>
            <label htmlFor="regioes">Regiões</label>
            <input id="regioes" value={regioes} onChange={e => setRegioes(e.target.value)} />
          </div>

          <div>
            <label htmlFor="preco_frete">Preço do Frete</label>
            <input id="preco_frete" type="number" value={preco_frete} onChange={e => setPrecoFrete(e.target.value)} />
            {errors.preco_frete && <ErrorText>{errors.preco_frete}</ErrorText>}
          </div>

          <SubmitButton type="submit">Salvar Alterações</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalEditarTransportadora;
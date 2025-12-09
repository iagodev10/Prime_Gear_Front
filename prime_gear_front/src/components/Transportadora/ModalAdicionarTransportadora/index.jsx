import React, { useState, useEffect } from "react";
import axios from 'axios';
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
  if (!isVisivel) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [precoPorKm, setPrecoPorKm] = useState("");
  const [taxaFixa, setTaxaFixa] = useState("");
  const [precoPorKg, setPrecoPorKg] = useState("");
  const [fatorCubagem, setFatorCubagem] = useState("");
  const [codModalidade, setCodModalidade] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [errors, setErrors] = useState({});
  const [loadingCEP, setLoadingCEP] = useState(false);





  const validarCNPJ = (cnpj) => {
    const cnpjLimpo = cnpj.replace(/\D/g, '');
    return cnpjLimpo.length === 14;
  };


  const maskCEP = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 9);
  };


  const maskCNPJ = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18);
  };


  const maskTelefone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

  const validar = () => {
    const e = {};
    if (!nome.trim()) e.nome = "Informe o nome";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "E-mail inválido";
    if (cnpj.replace(/\D/g, '').length !== 14) e.cnpj = "CNPJ inválido";
    const telDigits = telefone.replace(/\D/g, '');
    if (telDigits.length < 10 || telDigits.length > 11) e.telefone = "Telefone inválido";
    if (cep.replace(/\D/g, '').length !== 8) e.cep = "CEP inválido";

    if (!precoPorKm || isNaN(parseFloat(precoPorKm)) || parseFloat(precoPorKm) < 0) {
      e.precoPorKm = "Preço por km inválido";
    }
    if (!taxaFixa || isNaN(parseFloat(taxaFixa)) || parseFloat(taxaFixa) < 0) {
      e.taxaFixa = "Taxa fixa inválida";
    }
    if (!precoPorKg || isNaN(parseFloat(precoPorKg)) || parseFloat(precoPorKg) < 0) {
      e.precoPorKg = "Preço por kg inválido";
    }
    if (!fatorCubagem || isNaN(parseFloat(fatorCubagem)) || parseFloat(fatorCubagem) <= 0) {
      e.fatorCubagem = "Fator de cubagem inválido";
    }
    if (!codModalidade || isNaN(parseInt(codModalidade)) || parseInt(codModalidade) <= 0) {
      e.codModalidade = "Selecione uma modalidade";
    }
    if (!latitude || isNaN(parseFloat(latitude))) {
      e.latitude = "Latitude inválida";
    }
    if (!longitude || isNaN(parseFloat(longitude))) {
      e.longitude = "Longitude inválida";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validar()) return;

    const novaTransportadora = {
      nome_transp: nome.trim(),
      email_transp: email.trim(),
      telefone_transp: telefone.replace(/\D/g, ''),
      cep_transp: cep.replace(/\D/g, ''),
      cnpj_transp: cnpj.replace(/\D/g, ''),
      preco_por_km_transp: parseFloat(precoPorKm),
      taxa_fixa: parseFloat(taxaFixa),
      preco_por_kg: parseFloat(precoPorKg),
      fator_cubagem: parseFloat(fatorCubagem),
      latitude_transp: parseFloat(latitude),
      longitude_transp: parseFloat(longitude),
      cod_modalidade: parseInt(codModalidade)
    };

    console.log("Enviando transportadora:", novaTransportadora);

    try {
      const response = await axios.post(
        'http://localhost:8080/create-transportadora',
        novaTransportadora,
        {
          withCredentials: true
        }
      );
      
      console.log("Transportadora criada com sucesso:", response.data);
      alert("Transportadora cadastrada com sucesso!");
      
    
      setNome("");
      setEmail("");
      setTelefone("");
      setCep("");
      setCnpj("");
      setPrecoPorKm("");
      setTaxaFixa("");
      setPrecoPorKg("");
      setFatorCubagem("");
      setLatitude("");
      setLongitude("");
      setCodModalidade("");
      setErrors({});
      
      onClose();
      window.location.reload(); 
    } catch (error) {
      console.error("Erro ao criar transportadora:", error);
      alert(error.response?.data?.message || "Erro ao cadastrar transportadora");
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <h2>Nova Transportadora</h2>
          <button onClick={onClose}>
            <FiX size={24} />
          </button>
        </ModalHeader>

        <Form onSubmit={handleSubmit}>
          {/* Nome da Transportadora */}
          <div>
            <label htmlFor="nome">Nome da Transportadora *</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite o nome da transportadora"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            {errors.nome && <ErrorText>{errors.nome}</ErrorText>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </div>

          {/* CNPJ e Telefone */}
          <Div className="grid-item">
            <div>
              <label htmlFor="cnpj">CNPJ *</label>
              <input
                type="text"
                id="cnpj"
                placeholder="00.000.000/0000-00"
                value={cnpj}
                onChange={(e) => setCnpj(maskCNPJ(e.target.value))}
              />
              {errors.cnpj && <ErrorText>{errors.cnpj}</ErrorText>}
            </div>
            <div>
              <label htmlFor="telefone">Telefone *</label>
              <input
                type="tel"
                id="telefone"
                placeholder="(00) 00000-0000"
                value={telefone}
                onChange={(e) => setTelefone(maskTelefone(e.target.value))}
              />
              {errors.telefone && <ErrorText>{errors.telefone}</ErrorText>}
            </div>
          </Div>

          {/* CEP */}
          <div>
            <label htmlFor="cep">CEP * {loadingCEP && "(Buscando coordenadas...)"}</label>
            <input
              type="text"
              id="cep"
              placeholder="00000-000"
              value={cep}
              onChange={(e) => {
                const cepFormatado = maskCEP(e.target.value);
                setCep(cepFormatado);
              }}
            />
            {errors.cep && <ErrorText>{errors.cep}</ErrorText>}
          </div>

          {/* Preços e Taxas */}
          <Div className="grid-item">
            <div>
              <label htmlFor="preco_km">Preço por Km (R$) *</label>
              <input
                type="number"
                id="preco_km"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={precoPorKm}
                onChange={(e) => setPrecoPorKm(e.target.value)}
              />
              {errors.precoPorKm && <ErrorText>{errors.precoPorKm}</ErrorText>}
            </div>
            <div>
              <label htmlFor="taxa_fixa">Taxa Fixa (R$) *</label>
              <input
                type="number"
                id="taxa_fixa"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={taxaFixa}
                onChange={(e) => setTaxaFixa(e.target.value)}
              />
              {errors.taxaFixa && <ErrorText>{errors.taxaFixa}</ErrorText>}
            </div>
          </Div>

          <Div className="grid-item">
            <div>
              <label htmlFor="preco_kg">Preço por Kg (R$) *</label>
              <input
                type="number"
                id="preco_kg"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={precoPorKg}
                onChange={(e) => setPrecoPorKg(e.target.value)}
              />
              {errors.precoPorKg && <ErrorText>{errors.precoPorKg}</ErrorText>}
            </div>
            <div>
              <label htmlFor="fator_cubagem">Fator de Cubagem *</label>
              <input
                type="number"
                id="fator_cubagem"
                placeholder="300"
                step="1"
                min="1"
                value={fatorCubagem}
                onChange={(e) => setFatorCubagem(e.target.value)}
              />
              {errors.fatorCubagem && <ErrorText>{errors.fatorCubagem}</ErrorText>}
              <small style={{ color: '#666', fontSize: '0.75rem' }}>
                Fator padrão: 300 (1m³ = 300kg)
              </small>
            </div>
          </Div>

         

          <SubmitButton type="submit">Cadastrar Transportadora</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAdicionarTransportadora;

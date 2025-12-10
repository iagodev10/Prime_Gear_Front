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
import { LuEar } from "react-icons/lu";

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
    
    console.log('🔍 Validando campos...', {
      nome,
      email,
      cnpj: cnpj.replace(/\D/g, ''),
      telefone: telefone.replace(/\D/g, ''),
      cep: cep.replace(/\D/g, ''),
      precoPorKm,
      taxaFixa,
      precoPorKg,
      fatorCubagem,
      codModalidade,
      latitude,
      longitude
    });
  
    if (!nome.trim()) {
      console.log('❌ Nome vazio');
      e.nome = "Informe o nome";
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      console.log('❌ Email inválido:', email);
      e.email = "E-mail inválido";
    }
    
    if (cnpj.replace(/\D/g, '').length !== 14) {
      console.log('❌ CNPJ inválido. Tamanho:', cnpj.replace(/\D/g, '').length);
      e.cnpj = "CNPJ inválido";
    }
    
    const telDigits = telefone.replace(/\D/g, '');
    if (telDigits.length < 10 || telDigits.length > 11) {
      console.log('❌ Telefone inválido. Tamanho:', telDigits.length);
      e.telefone = "Telefone inválido";
    }
    
    if (cep.replace(/\D/g, '').length !== 8) {
      console.log('❌ CEP inválido. Tamanho:', cep.replace(/\D/g, '').length);
      e.cep = "CEP inválido";
    }
  
    if (!precoPorKm || isNaN(parseFloat(precoPorKm)) || parseFloat(precoPorKm) < 0) {
      console.log('❌ Preço por km inválido:', precoPorKm);
      e.precoPorKm = "Preço por km inválido";
    }
    
    if (!taxaFixa || isNaN(parseFloat(taxaFixa)) || parseFloat(taxaFixa) < 0) {
      console.log('❌ Taxa fixa inválida:', taxaFixa);
      e.taxaFixa = "Taxa fixa inválida";
    }
    
    if (!precoPorKg || isNaN(parseFloat(precoPorKg)) || parseFloat(precoPorKg) < 0) {
      console.log('❌ Preço por kg inválido:', precoPorKg);
      e.precoPorKg = "Preço por kg inválido";
    }
    
    if (!fatorCubagem || isNaN(parseFloat(fatorCubagem)) || parseFloat(fatorCubagem) <= 0) {
      console.log('❌ Fator de cubagem inválido:', fatorCubagem);
      e.fatorCubagem = "Fator de cubagem inválido";
    }
    
   
    
    
  
    setErrors(e);
    
    const isValid = Object.keys(e).length === 0;
    console.log(isValid ? '✅ Validação passou!' : '❌ Validação falhou:', e);
    
    return isValid;
  };
  

  const handleSubmit = async (e) => {
   e.preventDefault()
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

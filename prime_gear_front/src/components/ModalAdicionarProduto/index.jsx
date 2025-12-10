import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiX } from 'react-icons/fi'
import axios from 'axios'

import { ModalOverlay, ModalContent, ModalHeader, Form, Divide, ProdDestaque, SwitchContainer, SwitchCheckbox, SwitchLabel, SwitchSlider, SubmitButton } from './style.js';


const ModalAdicionarProduto = ({ onClose }) => {

  const [produtoDestaque, setProdutoDestaque] = useState(false);
  const [categorias, setCategorias] = useState([])
  const [marcas, setMarcas] = useState([])
  const [fornecedores, setFornecedores] = useState([])

  const [nomeProd, setNomeProd] = useState()
  const [precoProd, setPrecoProd] = useState()
  const [qtdEstoqueProd, setQtdEstoqueProd] = useState()
  const [categoriaProd, setCategoriaProd] = useState()
  const [descricaoProd, setDescricaoProd] = useState()
  const [pesoProd, setPesoProd] = useState()
  const [alturaProd, setAlturaProd] = useState()
  const [larguraProd, setLarguraProd] = useState()
  const [comprimentoProd, seComprimentoProd] = useState()
  const [imagemProd, setImagemProd] = useState(null)
  const [marcaProd, setMarcaProd] = useState()
  const [fornecedorProd, setFornecedorProd] = useState()

  function setarNomeProd(e) {
    setNomeProd(e.target.value)
  }
  function setarPrecoProd(e) {
    setPrecoProd(e.target.value)
  }
  function setarQtdEstoqueProd(e) {
    setQtdEstoqueProd(e.target.value)
  }
  function setarCategoriaProd(e) {
    setCategoriaProd(e.target.value)
  }
  function setarDescricaoProd(e) {
    setDescricaoProd(e.target.value)
  }
  function setarPesoProd(e) {
    setPesoProd(e.target.value)
  }
  function setarAlturaProd(e) {
    setAlturaProd(e.target.value)
  }
  function setarLarguraProd(e) {
    setLarguraProd(e.target.value)
  }
  function setarComprimentoProd(e) {
    seComprimentoProd(e.target.value)
  }
  function setarImagemProd(e) {
    setImagemProd(e.target.files[0])
  }
  function setarFornecedorProd(e) {
    setFornecedorProd(e.target.value)
  }

  async function obterCategorias() {
    try {
      const response = await axios.get('http://72.62.10.218:8080/get-categorias')
      setCategorias(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  async function obterMarcas() {
    try {
      const response = await axios.get('http://72.62.10.218:8080/get-marcas')
      setMarcas(response.data)
      console.log("marcas");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function obterFornecedores() {
    try {
      const response = await axios.get('http://72.62.10.218:8080/fornecedores-adm')
      setFornecedores(response.data)
      console.log("fornecedores");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obterCategorias()
    obterMarcas()
    obterFornecedores()
  }, [])

  useEffect(() => {
    if (categorias.length > 0 && !categoriaProd) {
      setCategoriaProd(categorias[0].cod_categoria);
    }
  }, [categorias]);

  useEffect(() => {
    if (marcas.length > 0 && !marcaProd) {
      setMarcaProd(marcas[0].cod_marca);
    }
  }, [marcas]);

  useEffect(() => {
    if (fornecedores.length > 0 && !fornecedorProd) {
      setFornecedorProd(fornecedores[0].cod_fornecedor);
    }
  }, [fornecedores]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  async function adicionarProduto(e) {
    e.preventDefault();

    const formData = new FormData()

    formData.append('nome_prod', nomeProd)
    formData.append('preco_prod', precoProd)
    formData.append('descricao_prod', descricaoProd)
    formData.append('qtd_estoque_prod', qtdEstoqueProd)
    formData.append('altura_prod', alturaProd)
    formData.append('largura_prod', larguraProd)
    formData.append('comprimento_prod', comprimentoProd)
    formData.append('cod_categoria', categoriaProd)
    formData.append('cod_marca', marcaProd)
    formData.append('cod_fornecedor', fornecedorProd)
    formData.append('peso_prod', pesoProd)
    formData.append('avaliacao_prod', 0)

    if (imagemProd) {
      formData.append('imagem1', imagemProd)
    }

    console.log("form");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await axios.post('http://72.62.10.218:8080/adicionar-produto', formData)
      window.location.reload()
    } catch (error) {
      console.log(error);
      alert("Erro ao adicionar produto")
    }
  }

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>
          <ModalHeader>
            <h2>Novo Produto</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form>
            <div>
              <label htmlFor="nome">Nome do Produto</label>
              <input type="text" id="nome" required onChange={setarNomeProd} />
            </div>

            <Divide>
              <div>
                <label htmlFor="preco">Preço (R$)</label>
                <input type="number" id="preco" required placeholder="0" onChange={setarPrecoProd} />
              </div>

              <div>
                <label htmlFor="quantidade">Quantidade em Estoque</label>
                <input type="number" id="quantidade" required placeholder="0" onChange={setarQtdEstoqueProd} />
              </div>
            </Divide>

            <Divide>
              <div>
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" onChange={setarCategoriaProd} value={categoriaProd}>
                  {categorias.map((cat) => (
                    <option key={cat.cod_categoria} value={cat.cod_categoria}>
                      {cat.nome_cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="marca">Marca</label>
                <select id="marca" onChange={(e) => setMarcaProd(e.target.value)} value={marcaProd}>
                  {marcas.map((marca) => (
                    <option key={marca.cod_marca} value={marca.cod_marca}>
                      {marca.nome_marca}
                    </option>
                  ))}
                </select>
              </div>
            </Divide>

            <div>
              <label htmlFor="fornecedor">Fornecedor</label>
              <select id="fornecedor" onChange={setarFornecedorProd} value={fornecedorProd}>
                {fornecedores.length > 0 ? (
                  fornecedores.map((fornecedor) => (
                    <option key={fornecedor.cod_fornecedor} value={fornecedor.cod_fornecedor}>
                      {fornecedor.nome_responsavel_forn || fornecedor.razao_social_fornecedor}
                    </option>
                  ))
                ) : (
                  <option value="">Carregando fornecedores...</option>
                )}
              </select>
            </div>

            <div>
              <label htmlFor="imagem">Imagem do Produto</label>
              <input type="file" id="imagem" accept="image/*" onChange={setarImagemProd} />
            </div>

            <div>
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" rows={4} placeholder="Descrição detalhada do Produto." onChange={setarDescricaoProd}></textarea>
            </div>

            <hr />

            <div>
              <label htmlFor="dimensao">Dimensões e Peso</label>
              <Divide>
                <div className="divs">
                  <label htmlFor="peso">Peso (Kg)</label>
                  <input type="number" placeholder="0" onChange={setarPesoProd} />
                </div>

                <div className="divs">
                  <label htmlFor="altura">Altura (cm)</label>
                  <input type="number" placeholder="0" onChange={setarAlturaProd} />
                </div>

                <div className="divs">
                  <label htmlFor="largura">Largura (cm)</label>
                  <input type="number" placeholder="0" onChange={setarLarguraProd} />
                </div>

                <div className="divs">
                  <label htmlFor="comprimento">Comprimento (cm)</label>
                  <input type="number" placeholder="0" onChange={setarComprimentoProd} />
                </div>
              </Divide>
            </div>

            <SubmitButton onClick={adicionarProduto}>
              Cadastrar Produto
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}

export default ModalAdicionarProduto;
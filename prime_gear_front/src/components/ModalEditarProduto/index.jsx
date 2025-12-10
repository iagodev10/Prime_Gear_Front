import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiX } from 'react-icons/fi'
import axios from 'axios'

import { ModalOverlay, ModalContent, ModalHeader, Form, Divide, ProdDestaque, SwitchContainer, SwitchCheckbox, SwitchLabel, SwitchSlider, SubmitButton } from './style.js';


const ModalEditarProduto = ({ onClose, produtoId }) => {

  const [produtoDestaque, setProdutoDestaque] = useState(false);
  const [categorias, setCategorias] = useState([])
  const [marcas, setMarcas] = useState([])
  const [fornecedores, setFornecedores] = useState([])
  const [carregando, setCarregando] = useState(true)

  const [nomeProd, setNomeProd] = useState("")
  const [precoProd, setPrecoProd] = useState("")
  const [qtdEstoqueProd, setQtdEstoqueProd] = useState("")
  const [categoriaProd, setCategoriaProd] = useState("")
  const [descricaoProd, setDescricaoProd] = useState("")
  const [pesoProd, setPesoProd] = useState("")
  const [alturaProd, setAlturaProd] = useState("")
  const [larguraProd, setLarguraProd] = useState("")
  const [comprimentoProd, setComprimentoProd] = useState("")
  const [imagemProd, setImagemProd] = useState(null)
  const [marcaProd, setMarcaProd] = useState("")
  const [fornecedorProd, setFornecedorProd] = useState("")

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
    setComprimentoProd(e.target.value)
  }
  function setarImagemProd(e) {
    setImagemProd(e.target.files[0])
  }
  function setarFornecedorProd(e) {
    setFornecedorProd(e.target.value)
  }

  async function obterCategorias() {
    try {
      const response = await axios.get('http://localhost:8080/get-categorias')
      setCategorias(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  async function obterMarcas() {
    try {
      const response = await axios.get('http://localhost:8080/get-marcas')
      setMarcas(response.data)
      console.log("marcas");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function obterFornecedores() {
    try {
      const response = await axios.get('http://localhost:8080/fornecedores-adm')
      setFornecedores(response.data)
      console.log("fornecedores");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function obterProduto() {
    if (!produtoId) {
      setCarregando(false)
      return
    }

    try {
      const response = await axios.get(`http://localhost:8080/produto/${produtoId}`)
      const produto = response.data

      setNomeProd(produto.nome_prod || "")
      setPrecoProd(produto.preco_prod || "")
      setQtdEstoqueProd(produto.qtd_estoque_prod || "")
      setCategoriaProd(produto.cod_categoria || "")
      setDescricaoProd(produto.descricao_prod || "")
      setPesoProd(produto.peso_prod || "")
      setAlturaProd(produto.altura_prod || "")
      setLarguraProd(produto.largura_prod || "")
      setComprimentoProd(produto.comprimento_prod || "")
      setMarcaProd(produto.cod_marca || "")
      setFornecedorProd(produto.cod_fornecedor || "")

      setCarregando(false)
    } catch (error) {
      console.error("Erro ao buscar produto:", error)
      alert("Erro ao carregar dados do produto")
      setCarregando(false)
    }
  }

  useEffect(() => {
    obterCategorias()
    obterMarcas()
    obterFornecedores()
    obterProduto()
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

  async function editarProduto(e) {
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

    if (imagemProd) {
      formData.append('imagem1', imagemProd)
    }

    console.log("form");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await axios.put(`http://localhost:8080/editar-produto/${produtoId}`, formData)
     
      window.location.reload()
    } catch (error) {
      console.log(error);
      alert("Erro ao atualizar produto")
    }
  }

  if (carregando) {
    return (
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            Carregando dados do produto...
          </div>
        </ModalContent>
      </ModalOverlay>
    )
  }

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>
          <ModalHeader>
            <h2>{produtoId ? 'Editar Produto' : 'Novo Produto'}</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form>
            <div>
              <label htmlFor="nome">Nome do Produto</label>
              <input 
                type="text" 
                id="nome" 
                required 
                value={nomeProd}
                onChange={setarNomeProd} 
              />
            </div>

            <Divide>
              <div>
                <label htmlFor="preco">Preço (R$)</label>
                <input 
                  type="number" 
                  id="preco" 
                  required 
                  placeholder="0" 
                  value={precoProd}
                  onChange={setarPrecoProd} 
                />
              </div>

              <div>
                <label htmlFor="quantidade">Quantidade em Estoque</label>
                <input 
                  type="number" 
                  id="quantidade" 
                  required 
                  placeholder="0" 
                  value={qtdEstoqueProd}
                  onChange={setarQtdEstoqueProd} 
                />
              </div>
            </Divide>

            <Divide>
              <div>
                <label htmlFor="categoria">Categoria</label>
                <select 
                  id="categoria" 
                  value={categoriaProd}
                  onChange={setarCategoriaProd}
                >
                  {categorias.map((cat) => (
                    <option key={cat.cod_categoria} value={cat.cod_categoria}>
                      {cat.nome_cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="marca">Marca</label>
                <select 
                  id="marca" 
                  value={marcaProd}
                  onChange={(e) => setMarcaProd(e.target.value)}
                >
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
              <select 
                id="fornecedor" 
                value={fornecedorProd}
                onChange={setarFornecedorProd}
              >
                {fornecedores.length > 0 ? (
                  fornecedores.map((fornecedor) => (
                    <option key={fornecedor.cod_fornecedor} value={fornecedor.cod_fornecedor}>
                      {fornecedor.nome_fornecedor || fornecedor.razao_social_fornecedor}
                    </option>
                  ))
                ) : (
                  <option value="">Carregando fornecedores...</option>
                )}
              </select>
            </div>

            <div>
              <label htmlFor="imagem">Imagem do Produto</label>
              <input 
                type="file" 
                id="imagem" 
                accept="image/*" 
                onChange={setarImagemProd} 
              />
              <small style={{color: '#666', fontSize: '0.85rem'}}>
                {produtoId && "Deixe em branco para manter a imagem atual"}
              </small>
            </div>

            <div>
              <label htmlFor="descricao">Descrição</label>
              <textarea 
                id="descricao" 
                rows={4} 
                placeholder="Descrição detalhada do Produto." 
                value={descricaoProd}
                onChange={setarDescricaoProd}
              ></textarea>
            </div>

            <hr />

            <div>
              <label htmlFor="dimensao">Dimensões e Peso</label>
              <Divide>
                <div className="divs">
                  <label htmlFor="peso">Peso (Kg)</label>
                  <input 
                    type="number" 
                    placeholder="0" 
                    value={pesoProd}
                    onChange={setarPesoProd} 
                  />
                </div>

                <div className="divs">
                  <label htmlFor="altura">Altura (cm)</label>
                  <input 
                    type="number" 
                    placeholder="0" 
                    value={alturaProd}
                    onChange={setarAlturaProd} 
                  />
                </div>

                <div className="divs">
                  <label htmlFor="largura">Largura (cm)</label>
                  <input 
                    type="number" 
                    placeholder="0" 
                    value={larguraProd}
                    onChange={setarLarguraProd} 
                  />
                </div>

                <div className="divs">
                  <label htmlFor="comprimento">Comprimento (cm)</label>
                  <input 
                    type="number" 
                    placeholder="0" 
                    value={comprimentoProd}
                    onChange={setarComprimentoProd} 
                  />
                </div>
              </Divide>
            </div>

            <SubmitButton onClick={editarProduto}>
              {produtoId ? 'Atualizar Produto' : 'Adicionar Produto'}
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}

export default ModalEditarProduto;
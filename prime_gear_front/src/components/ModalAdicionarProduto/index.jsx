import React, { useState } from "react";
import styled from "styled-components";
import { FiX } from 'react-icons/fi'
import axios from 'axios'

import { ModalOverlay, ModalContent, ModalHeader, Form, Divide, ProdDestaque, SwitchContainer, SwitchCheckbox, SwitchLabel, SwitchSlider, SubmitButton } from './style.js';


const ModalAdicionarProduto = ({ onClose }) => {
  
  const [produtoDestaque, setProdutoDestaque] = useState(false);

  const [nomeProd, setNomeProd]=useState()
  const [precoProd, setPrecoProd]=useState()
  const [qtdEstoqueProd, setQtdEstoqueProd]=useState()
  const [categoriaProd, setCategoriaProd]=useState()
  const [descricaoProd, setDescricaoProd]=useState()
  const [pesoProd, setPesoProd]=useState()
  const [alturaProd, setAlturaProd]=useState()
  const [larguraProd, setLarguraProd]=useState()
  const [comprimentoProd, seComprimentoProd]=useState()

  function setarNomeProd(e){
    setNomeProd(e.target.value)
  }
  function setarPrecoProd(e){
    setPrecoProd(e.target.value)
  }
  function setarQtdEstoqueProd(e){
    setQtdEstoqueProd(e.target.value)
  }
  function setarCategoriaProd(e){
    setCategoriaProd(e.target.value)
  }
  function setarDescricaoProd(e){
    setDescricaoProd(e.target.value)
  }
  function setarPesoProd(e){
    setPesoProd(e.target.value)
  }
  function setarAlturaProd(e){
    setAlturaProd(e.target.value)
  }
  function setarLarguraProd(e){
    setLarguraProd(e.target.value)
  }
  function setarComprimentoProd(e){
    seComprimentoProd(e.target.value)
  }


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  async function adicionarProduto(e){
    e.preventDefault();
    const objProd={
        nome_prod:nomeProd,
        preco_prod:precoProd,
        descricao_prod:descricaoProd,
        qtde_estoque_prod:qtdEstoqueProd,
        peso_prod:pesoProd,
        altura_prod:alturaProd,
        largura_prod:larguraProd,
        comprimento_prod:comprimentoProd,
        cod_categoria:categoriaProd
    }

    const formData=new FormData()

    formData.append('nome_prod',nomeProd)
    formData.append('preco_prod',precoProd)
    formData.append('descricao_prod',descricaoProd)
    formData.append('qtde_estoque_prod',qtdEstoqueProd)
    formData.append('altura_prod',alturaProd)
    formData.append('largura_prod',larguraProd)
    formData.append('comprimento_prod',comprimentoProd)
    formData.append('cod_categoria',categoriaProd)
    formData.append('peso_prod',pesoProd)

    try {
      const response=await axios.post('http://localhost:8080/adicionar-produto', formData)
    } catch (error) {
      console.log(error);
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
              <input type="text" id="nome" required onChange={setarNomeProd}/>
            </div>

            <Divide>
              <div>
                <label htmlFor="preco">Preço (R$)</label>
                <input type="number" id="preco" required placeholder="0" onChange={setarPrecoProd}/>
              </div>

              <div>
                <label htmlFor="quantidade">Quantidade em Estoque</label>
                <input type="number" id="quantidade" required placeholder="0" onChange={setarQtdEstoqueProd}/>
              </div>
            </Divide>

            <div>
              <label htmlFor="categoria">Categoria</label>
              <select id="categoria" onChange={setarCategoriaProd}>
                <option value="1" >Laptops</option>
                <option value="2" >Laptops</option>
                <option value="3" >Laptops</option>
                <option value="4" >Laptops</option>
                <option value="5" >Laptops</option>
                <option value="6" >Laptops</option>
              </select>
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
                  <input type="number" placeholder="0" onChange={setarPesoProd}/>
                </div>

                <div className="divs">
                  <label htmlFor="altura">Altura (cm)</label>
                  <input type="number" placeholder="0" onChange={setarAlturaProd}/>
                </div>

                <div className="divs">
                  <label htmlFor="largura">Largura (cm)</label>
                  <input type="number" placeholder="0" onChange={setarLarguraProd}/>
                </div>

                <div className="divs">
                  <label htmlFor="comprimento">Comprimento (cm)</label>
                  <input type="number" placeholder="0" onChange={setarComprimentoProd}/>
                </div>

              </Divide>
            </div>

            <ProdDestaque>
              <div className="destaque">
                <p>Produto em Destaque</p>
                <p className="p-destaque">Exibir na página inicial</p>
              </div>
              <SwitchContainer>
                <SwitchCheckbox
                  type="checkbox"
                  id="produtoDestaque"
                  checked={produtoDestaque}
                  onChange={(e) => setProdutoDestaque(e.target.checked)}
                />
                <SwitchLabel 
                  htmlFor="produtoDestaque" 
                  checked={produtoDestaque}
                >
                  <SwitchSlider checked={produtoDestaque} />
                </SwitchLabel>
              </SwitchContainer>
            </ProdDestaque>

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
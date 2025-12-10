import React from "react";
import { FiX } from "react-icons/fi";
import { ModalOverlay, ModalContent, ModalHeader, Form, SubmitButton, ErrorText } from "./style";
import { useState } from "react";
import axios from 'axios'

const ModalAdicionarCategoria = ({ isVisivel, onClose }) => {
  if (!isVisivel) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [nomeCategoria, setNomeCategoria] = useState("")
  const [descricaoCategoria, setDescricaoCategoria] = useState("")
  const [errors, setErrors] = useState({})

  function handleNomeCategoria(e) {
    setNomeCategoria(e.target.value);
  }

  function handleDescricaoCategoria(e) {
    setDescricaoCategoria(e.target.value);
  }
  const validar = () => {
    const e = {}
    if (!nomeCategoria.trim() || nomeCategoria.trim().length < 3) e.nome = 'Informe um nome válido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function adicionarCategoria(e) {
   
    if (!validar()) return
    try {
      const categoria = {
          nome_cat:nomeCategoria,
          descricao_cat:descricaoCategoria
      }

      const response = await axios.post('http://72.62.10.218:8080/adicionar-categoria',categoria)
      
      if(response.status==200){
        onClose()
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>
          <ModalHeader>
            <h2>Nova Categoria</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form onSubmit={adicionarCategoria}>
            <div>
              <label htmlFor="nome">Nome da Categoria</label>
              <input type="text" id="nome" required placeholder="Digite o nome da categoria" onChange={handleNomeCategoria} />
              {errors.nome && <ErrorText>{errors.nome}</ErrorText>}
            </div>

            <div>
              <label htmlFor="descricao">Descrição da Categoria</label>
              <textarea id="descricao" required rows={3} placeholder="Digite a descrição da categoria" onChange={handleDescricaoCategoria}></textarea>
              {errors.descricao && <ErrorText>{errors.descricao}</ErrorText>}
            </div>

            <SubmitButton type="submit">Cadastrar Categoria</SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalAdicionarCategoria;

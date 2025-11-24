import React from "react";
import { FiX } from "react-icons/fi";
import { ModalOverlay, ModalContent, ModalHeader, Form, SubmitButton } from "./style";
import { useState } from "react";
import axios from 'axios'

const ModalAdicionarMarca = ({ isVisivel, onClose }) => {
  if (!isVisivel) return null;
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [nomeMarca, setNomeMarca] = useState()
  const [imgMarca, setImgMarca] = useState()

  function handleNomeMarca(e) {
    setNomeMarca(e.target.value);
  }

  async function adicionarMarca(e) {
    e.preventDefault()

    try {
      const formData= new FormData()

      formData.append('nome_marca',nomeMarca)
      formData.append('imagem1',imgMarca)

      const response = await axios.post('http://localhost:8080/adicionar-marca',formData)
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>
          <ModalHeader>
            <h2>Nova Marca</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form onSubmit={adicionarMarca}>
            <div>
              <label htmlFor="nome">Nome da Marca</label>
              <input type="text" id="nome" required placeholder="Digite o nome da categoria" onChange={handleNomeMarca} />
            </div>

            <div>
              <label htmlFor="imagem">Imagem da Marca</label>
              <input type="file" id="imagem" accept="image/*" onChange={(e)=>setImgMarca(e.target.files[0])}/>
            </div>

            <SubmitButton type="submit">Cadastrar Marca</SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalAdicionarMarca;

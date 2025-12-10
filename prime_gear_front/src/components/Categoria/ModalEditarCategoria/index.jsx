import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiX } from "react-icons/fi";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Form,
  SubmitButton,
} from "./style";

const ModalEditarCategoria = ({ onClose, onSave, categoriaAtual,id }) => {

  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");

  async function obterInfosCat(idCat){
    try {
       const response = await axios.get('http://72.62.10.218:8080/get-cat/'+idCat)
       setName(response.data.nome_cat)
       setDescricao(response.data.descricao_cat)

    } catch (error) {
      console.log(error);
    }
  }

 

  useEffect(()=>{
    obterInfosCat(id)
  },[])

  useEffect(() => {
    if (categoriaAtual) {
      setName(categoriaAtual.name);
      setDescricao(categoriaAtual.descricao);
    }
  }, [categoriaAtual]);

  const handleSalvar = async (e) => {

    const objCat={
      nome_cat:name,
      descricao_cat:descricao
    }

    try {
        const response = await axios.put('http://72.62.10.218:8080/editar-cat/'+id, objCat)
        window.location.reload()
       
    } catch (error) {
      console.log(error);
    }
    
  
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent>
          <ModalHeader>
            <h2>Editar Categoria</h2>
            <button onClick={onClose}>
              <FiX size={24} />
            </button>
          </ModalHeader>

          <Form onSubmit={handleSalvar}>
            <div>
              <label htmlFor="nome">Nome da Categoria</label>
              <input
                type="text"
                id="nome"
                required
                placeholder="Digite o nome da categoria"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="descricao">Descrição da Categoria</label>
              <textarea
                id="descricao"
                placeholder="Digite a descrição da categoria"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>

            <SubmitButton type="submit" onSubmit={handleSalvar}>
              Salvar Categoria
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalEditarCategoria;

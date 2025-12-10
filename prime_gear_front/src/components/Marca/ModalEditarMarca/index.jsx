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

const ModalEditarMarca = ({ onClose, onSave, categoriaAtual,id }) => {

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [imgSalvar, setImgSalvar] = useState("");

  async function obterInfosMarca(idMarca){
    try {
       const response = await axios.get('http://72.62.10.218:8080/get-marca/'+idMarca)
       setName(response.data.nome_marca)
       setImg(response.data.url_nome_img_marca)

    } catch (error) {
      console.log(error);
    }
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
  
    const previewURL = URL.createObjectURL(file);
    setImgSalvar(file)
    setImg(previewURL);
  }

 

  useEffect(()=>{
    obterInfosMarca(id)
  },[])

 

  const handleSalvar = async (e) => {
    
   
   const formData= new FormData()

   formData.append("nome_marca",name)
   formData.append("imagem1",imgSalvar)

    try {
        const response = await axios.put('http://72.62.10.218:8080/editar-marca/'+id, formData)
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
              <label htmlFor="imagem">Imagem do Produto</label>
              <input type="file" id="imagem" accept="image/*" onChange={handleImage} />
              <img src={img} style={{
                                    width: '40%',
                                    height: 'auto',
                                    aspectRatio: '4 / 2',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    borderRadius: '8px',
                                    padding: "10px"
                                }}></img>
            </div>

            <SubmitButton type="submit" onSubmit={handleSalvar}>
              Salvar Marca
            </SubmitButton>
          </Form>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalEditarMarca;

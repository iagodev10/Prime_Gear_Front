import React, { useState,useEffect } from "react";
import axios from "axios";

import {
  Container,
  Header,
  Title,
  Button,
  Search,
  Name,
  Info,
  Transportadora,
  Content,
  Action,
  Edit,
  Excluir,
  TransPrice,
} from "./style";
import { FiPlus, FiSearch, FiEdit, FiTrash, FiTruck } from "react-icons/fi";

import ModalAdicionarTransportadora from "../../components/Transportadora/ModalAdicionarTransportadora";
import ModalEditarTransportadora from "../../components/Transportadora/ModalEditarTransportadora";
import ModalExcluirTransportadora from "../../components/Transportadora/ModalExcluirTransportadora";

const AdminTransportadora = () => {

  

  const [transportadoras, setTransportadoras] = useState([]);

  async function getTransportadoras(){
   
    try {
        const response = await axios.get('http://localhost:8080/get-transportadoras')
        setTransportadoras(response.data)
        console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getTransportadoras()
  },[])

  const [modalVisivel, setModalVisivel] = useState(false);
  const [transportadoraSelecionada, setTransportadoraSelecionada] = useState(null);
  const [modalEditarVisivel, setModalEditarVisivel] = useState(false);
  const [modalExcluirVisivel, setModalExcluirVisivel] = useState(false);
  const [idParaLidar,setIdParaLidar]=useState()

  async function excluirTransportadora(id) {
    try {
      const response = await axios.delete(`http://localhost:8080/delete-transportadora/${id}`);
      console.log(response.data);
      window.location.reload()
    } catch (error) {
      console.error("Erro ao excluir transportadora:", error);
    }
  }
  

  const handleAddTransportadora = (nova) => {
    
  };

  return (
    <Container>
      <Header>
        <Title>
          <h1>Gerenciar Transportadoras</h1>
          <p>{transportadoras.length} transportadoras cadastradas</p>
        </Title>
        <Button onClick={() => setModalVisivel(true)}>
          <FiPlus size={18} />
          Adicionar Transportadora
        </Button>
      </Header>

      <Search>
        <FiSearch size={20} color="#666" />
        <input type="text" placeholder="Buscar transportadora..." />
      </Search>

      <Content>
        {transportadoras.map((transportadora) => (
          <Transportadora key={transportadora.cod_transportadora}>
            <Name>
              <div>
                <FiTruck size={28} color="#fff" />
              </div>
              <h3>{transportadora.nome_transp}</h3>
            </Name>
            <TransPrice>
              <p className="label">Preço por KM</p>
              <p>R$ {transportadora.preco_por_km_transp.toFixed(2)}</p>
            </TransPrice>

            <Info>
              <p className="label">CNPJ</p>
              <p style={{ marginBottom: "20px" }}>{transportadora.cnpj_transp}</p>
              <p className="label">Contato</p>
              <p>{transportadora.telefone_transp}</p>
              <p style={{ marginBottom: "20px" }}>{transportadora.email_transp}</p>
              <p className="label">CEP</p>
              <p>{transportadora.cep_transp}</p>
            </Info>

            <Action>
              <Edit
                onClick={() => {
                  setTransportadoraSelecionada(transportadora);
                  setModalEditarVisivel(true);
                  setIdParaLidar(transportadora.cod_transportadora)
                }}
              >
                <FiEdit size={20} color="white" />
                Editar
              </Edit>
              <Excluir onClick={() => {
                setTransportadoraSelecionada(transportadora);
                setModalExcluirVisivel(true);
                setIdParaLidar(transportadora.cod_transportadora)
              }}>
                <FiTrash size={20} color="white" />
              </Excluir>
            </Action>
          </Transportadora>
        ))}
      </Content>

      <ModalAdicionarTransportadora
        isVisivel={modalVisivel}
        onClose={() => setModalVisivel(false)}
        onAdd={handleAddTransportadora}
      />

      <ModalEditarTransportadora
        isVisivel={modalEditarVisivel}
        onClose={() => setModalEditarVisivel(false)}
        onSave={(transportadora) => {
          setTransportadoras(
            transportadoras.map((t) =>
              t.id === transportadora.id ? transportadora : t
            )
          );
          setTransportadoraSelecionada(null);
          setModalEditarVisivel(false);
        }}
        transportadora={transportadoraSelecionada}
        id={idParaLidar}
      />

      <ModalExcluirTransportadora
        isVisivel={modalExcluirVisivel}
        onClose={() => setModalExcluirVisivel(false)}
        onConfirm={() => {

          excluirTransportadora(idParaLidar)
          setModalExcluirVisivel(false);
          getTransportadoras()
        }}
        transportadora={transportadoraSelecionada}
        id={idParaLidar}
      />
      
    </Container>
  );
};

export default AdminTransportadora;
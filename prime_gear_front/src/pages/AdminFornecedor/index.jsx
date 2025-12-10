import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Header,
  Title,
  Button,
  Search,
  Fornecedor,
  Content,
  Action,
  Edit,
  Excluir,
} from "./style";
import { FiPlus, FiSearch, FiEdit, FiTrash } from "react-icons/fi";

import ModalAdicionarFornecedor from "../../components/Fornecedor/ModalAdicionarFornecedor";
import ModalEditarFornecedor from "../../components/Fornecedor/ModalEditarFornecedor";
import ModalExcluirFornecedor from "../../components/Fornecedor/ModalExcluirFornecedor";

const AdminFornecedor = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const [fornecedor, setFornecedor] = useState([]);
  const [idParaLidar, setIdParaLidar] = useState()

  async function getFornecedores() {
    try {
      const response = await axios.get('http://primegear.site:8080/fornecedores-adm')
      setFornecedor(response.data)
    } catch (error) {
      console.log(error);
    }
  }



  async function deletarFornecedor(idForn) {
    console.log("chamou");
    try {
      const response = await axios.delete('http://primegear.site:8080/delete-fornecedor/' + idForn)
      window.location.reload()

    } catch (error) {
      console.log(error);
    }
  }


  async function obterInfosForn(id) {
    console.log('chamou');
    console.log("ID: "+id);
    try {
      const response = await axios.get('http://primegear.site:8080/get-fornecedor/' + id)
      console.log(response.data);
      setNome(response.data.nome_responsavel_forn)
      setEmail(response.data.email_forn)
      setTelefone(response.data.telefone_forn)
      
      setEndereco(response.data.endereco_forn)
      setCnpj(response.data.cnpj_forn)
      setResponsavel(response.data.nome_responsavel_forn)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFornecedores()
  }, [])


  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalEditarVisivel, setModalEditarVisivel] = useState(false);
  const [modalExcluirVisivel, setModalExcluirVisivel] = useState(false);
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null);

  return (
    <Container>
      <Header>
        <Title>
          <h1>Gerenciar Fornecedores</h1>
          <p>{fornecedor.length} fornecedores cadastrados</p>
        </Title>
        <Button onClick={() => setModalVisivel(true)}>
          <FiPlus size={18} />
          Adicionar Fornecedor
        </Button>
      </Header>

      <Search>
        <FiSearch size={20} color="#666" />
        <input type="text" placeholder="Buscar fornecedor..." />
      </Search>

      <Content>
        {fornecedor.map((fornecedor) => (
          <Fornecedor key={fornecedor.cod_forn}>
            <h3>{fornecedor.nome_responsavel_forn}</h3>
            <p className="label">CNPJ</p>
            <p>{fornecedor.cnpj_forn}</p>
            <p className="label">Responsável</p>
            <p>{fornecedor.nome_responsavel_forn}</p>
            <p className="label">Email</p>
            <p>{fornecedor.email_forn}</p>
            <p className="label">Telefone</p>
            <p>{fornecedor.telefone_forn}</p>
            <p className="label">Endereço</p>
            <p>{fornecedor.endereco_forn}</p>

            <Action>
              <Edit onClick={async () => {
                setIdParaLidar(fornecedor.cod_fornecedor);
                await obterInfosForn(fornecedor.cod_fornecedor);
                setModalEditarVisivel(true);
              }}>
                <FiEdit size={20} color="white" />
                Editar
              </Edit>
              <Excluir onClick={() => {
                setFornecedorSelecionado(fornecedor);
                setModalExcluirVisivel(true);
                setIdParaLidar(fornecedor.cod_fornecedor)
              }}>
                <FiTrash size={20} color="white" />
              </Excluir>
            </Action>
          </Fornecedor>
        ))}
      </Content>

      <ModalAdicionarFornecedor
        isVisivel={modalVisivel}
        onClose={() => setModalVisivel(false)}
      />
      <ModalEditarFornecedor
        isVisivel={modalEditarVisivel}
        onClose={() => setModalEditarVisivel(false)}
        fornecedor={fornecedorSelecionado}
        id={idParaLidar}

        nome={nome}
        setNome={setNome}
        email={email}
        setEmail={setEmail}
        telefone={telefone}
        setTelefone={setTelefone}
        endereco={endereco}
        setEndereco={setEndereco}
        cnpj={cnpj}
        setCnpj={setCnpj}
        responsavel={responsavel}
        setResponsavel={setResponsavel}
      />
      <ModalExcluirFornecedor
        isVisivel={modalExcluirVisivel}
        onClose={() => {setModalExcluirVisivel(false),getFornecedores()}}
        fornecedor={fornecedorSelecionado}
        onConfirm={() => {
          deletarFornecedor(idParaLidar)
          setModalExcluirVisivel(false)
        }}
        id={idParaLidar}
        reload={getFornecedores}
      />


    </Container>
  );
};

export default AdminFornecedor;
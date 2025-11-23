import React, { useState } from "react";
import { Container, Header, Title, Button, Search, Fornecedor, Content, Action, Edit, Excluir } from "./style";
import { FiPlus, FiSearch, FiEdit, FiTrash } from "react-icons/fi";
import ModalAdicionarFornecedor from "../../components/Fornecedor/ModalAdicionarFornecedor";
import ModalEditarFornecedor from "../../components/Fornecedor/ModalEditarFornecedor";
import ModalExcluirFornecedor from "../../components/Fornecedor/ModalExcluirFornecedor";

const AdminFornecedor = () => {
  const [fornecedores, setFornecedores] = useState([
    {
      id: 1,
      nome: "Eletrônicos Master",
      email: "vendas@eletromaster.com.br",
      telefone: "(21) 2345-6789",
      endereco: "Rua A, 123",
      cnpj: "12.345.678/0001-95",
      responsavel: "Ana Santos",
    },
    {
      id: 2,
      nome: "Tech Solutions",
      email: "contato@techsolutions.com",
      telefone: "(11) 4567-8901",
      endereco: "Rua B, 456",
      cnpj: "98.765.432/0001-87",
      responsavel: "João Silva",
    },
  ]);

  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalEditarVisivel, setModalEditarVisivel] = useState(false);
  const [modalExcluirVisivel, setModalExcluirVisivel] = useState(false);
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null);

  return (
    <Container>
      <Header>
        <Title>
          <h1>Gerenciar Fornecedores</h1>
          <p>{fornecedores.length} fornecedores cadastrados</p>
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
        {fornecedores.map((item) => (
          <Fornecedor key={item.id}>
            <h3>{item.nome}</h3>
            <p className="label">CNPJ</p>
            <p>{item.cnpj}</p>
            <p className="label">Responsável</p>
            <p>{item.responsavel}</p>
            <p className="label">Email</p>
            <p>{item.email}</p>
            <p className="label">Telefone</p>
            <p>{item.telefone}</p>
            <p className="label">Endereço</p>
            <p>{item.endereco}</p>

            <Action>
              <Edit onClick={() => {
                setFornecedorSelecionado(item);
                setModalEditarVisivel(true);
              }}>
                <FiEdit size={20} color="white" />
                Editar
              </Edit>
              <Excluir onClick={() => {
                setFornecedorSelecionado(item);
                setModalExcluirVisivel(true);
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
          onSave={(f) => {
            setFornecedores(prev => prev.map(item => item.id === f.id ? f : item));
            setModalEditarVisivel(false);
          }}
        />
        <ModalExcluirFornecedor
          isVisivel={modalExcluirVisivel}
          onClose={() => setModalExcluirVisivel(false)}
          fornecedor={fornecedorSelecionado}
          onConfirm={() => {
            setFornecedores(prev => prev.filter(item => item.id !== fornecedorSelecionado.id));
            setModalExcluirVisivel(false);
          }}
        />
    </Container>
  );
};

export default AdminFornecedor;
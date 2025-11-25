"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { FiEdit, FiTrash, FiPlus, FiSearch, FiPackage, FiStar } from "react-icons/fi"
import {
  Container,
  Header,
  Title,
  Button,
  Search,
  Content,
  ProdutoCard,
  ProdImage,
  ProdName,
  ProdInfos,
  ProdCategoria,
  ProdQuantidade,
  ProdPrice,
  ProdActions,
  ActionButton,
  MainWrapper,
  Sidebar,
  SidebarItem,
  SidebarIcon,
  MainContent,
} from "./style"
import ProdutosDestaque from "../../components/Admin/ProdutosDestaque"
import axios from "axios"

const AdminProdutos = () => {
  const location = useLocation()
  const [produtos, setProdutos] = useState([])
  const [activeSection, setActiveSection] = useState("produtos")
  const [modalVisivel, setModalVisivel] = useState(false)

  async function obterProdutos() {
    try {
      const response = await axios.get("http://localhost:8080/produtos-adm")
      console.log(response.data)
      setProdutos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obterProdutos()
  }, [])

  useEffect(() => {
    if (location.state && location.state.openAddModal) {
      setModalVisivel(true)
    }
  }, [location.state])

  async function deletarProd(id) {
    try {
      await axios.delete("http://localhost:8080/delete-produto/" + id)
      obterProdutos()
    } catch (error) {
      console.log(error)
    }
  }

  const sidebarItems = [
    { id: "produtos", label: "Gerenciar Produtos", icon: FiPackage },
    { id: "destaques", label: "Produtos em Destaque", icon: FiStar },
  ]

  return (
    <Container>
      <MainWrapper>
        <Sidebar>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.id} $active={activeSection === item.id} onClick={() => setActiveSection(item.id)}>
              <SidebarIcon>
                <item.icon size={20} />
              </SidebarIcon>
              <span>{item.label}</span>
            </SidebarItem>
          ))}
        </Sidebar>

        <MainContent>
          {activeSection === "produtos" && (
            <>
              <Header>
                <Title>
                  <h1>Gerenciar Produtos</h1>
                  <p>Adicione, edite ou remova produtos do catálogo.</p>
                </Title>
                <Button onClick={() => setModalVisivel(true)}>
                  <FiPlus size={18} />
                  Adicionar Produto
                </Button>
              </Header>

              <Search>
                <FiSearch size={20} color="#666" />
                <input type="text" placeholder="Buscar produto..." />
              </Search>

              <Content>
                {produtos.map((produto) => (
                  <ProdutoCard key={produto.id_prod}>
                    <ProdImage>
                      <img src={produto.url_img_prod || "/placeholder.svg"} alt={produto.nome_prod} />
                    </ProdImage>
                    <ProdName>
                      <p>{produto.nome_prod}</p>
                    </ProdName>
                    <ProdInfos>
                      <ProdCategoria>
                        <p>{produto.categoria}</p>
                      </ProdCategoria>
                      <ProdQuantidade>
                        <p>{produto.qtd_estoque_prod} unid.</p>
                      </ProdQuantidade>
                    </ProdInfos>
                    <ProdPrice>
                      <p>R$ {produto.preco_prod.toLocaleString("pt-BR")}</p>
                    </ProdPrice>
                    <ProdActions>
                      <ActionButton>
                        <FiEdit /> Editar
                      </ActionButton>
                      <ActionButton onClick={() => deletarProd(produto.cod_produto)}>
                        <FiTrash /> Excluir
                      </ActionButton>
                    </ProdActions>
                  </ProdutoCard>
                ))}
              </Content>
            </>
          )}

          {activeSection === "destaques" && <ProdutosDestaque produtos={produtos} />}
        </MainContent>
      </MainWrapper>
    </Container>
  )
}

export default AdminProdutos

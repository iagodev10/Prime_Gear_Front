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
import ModalAdicionarProduto from "../../components/ModalAdicionarProduto"
import ModalEditarProduto from "../../components/ModalEditarProduto"
import ModalExcluirProduto from "../../components/ModalExcluirProduto"

const AdminProdutos = () => {
  const location = useLocation()
  const [produtos, setProdutos] = useState([])
  const [activeSection, setActiveSection] = useState("produtos")
  const [modalAdicionar, setModalAdicionar] = useState(false)
  const [modalEditar, setModalEditar] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const [nomeSecao1, setNomeSecao1] = useState()
  const [nomeSecao2, setNomeSecao2] = useState()

  const [modalExcluir, setModalExcluir] = useState(false)
  const [produtoParaExcluir, setProdutoParaExcluir] = useState(null)
  const [isDeletando, setIsDeletando] = useState(false)

  async function obterProdutos() {
    try {
      const response = await axios.get("http://primegear.site:8080/produtos-adm")
      console.log(response.data)
      setProdutos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function obterNomesDasSecoes() {
    try {
      console.log("ESSE");
      const response = await axios.get("http://primegear.site:8080/get-secoes")
      console.log(response.data)
      setNomeSecao1(response.data[0].nomeSecaoFlex)
      setNomeSecao2(response.data[1].nomeSecaoFlex)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obterNomesDasSecoes()
    obterProdutos()
  }, [])

  useEffect(() => {
    if (location.state && location.state.openAddModal) {
      setModalAdicionar(true)
    }
  }, [location.state])

  function abrirModalExcluir(produto) {
    setProdutoParaExcluir(produto)
    setModalExcluir(true)
  }

  function fecharModalExcluir() {
    setModalExcluir(false)
    setProdutoParaExcluir(null)
  }

  async function confirmarExclusao() {
    if (!produtoParaExcluir) return

    setIsDeletando(true)

    try {
      await axios.delete(`http://primegear.site:8080/delete-produto/${produtoParaExcluir.cod_produto}`)

      window.location.reload()
    } catch (error) {
      console.error("Erro ao excluir produto:", error)
      alert("Erro ao excluir produto")
    } finally {
      setIsDeletando(false)
    }
  }

  function abrirModalEditar(produtoId) {
    setProdutoSelecionado(produtoId)
    setModalEditar(true)
  }

  function fecharModalEditar() {
    setModalEditar(false)
    setProdutoSelecionado(null)
    obterProdutos()
  }

  function fecharModalAdicionar() {
    setModalAdicionar(false)
    obterProdutos()
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
                <Button onClick={() => setModalAdicionar(true)}>
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
                      <ActionButton onClick={() => abrirModalEditar(produto.cod_produto)}>
                        <FiEdit /> Editar
                      </ActionButton>
                      <ActionButton onClick={() => abrirModalExcluir(produto)}>
                        <FiTrash /> Excluir
                      </ActionButton>
                    </ProdActions>
                  </ProdutoCard>
                ))}
              </Content>
            </>
          )}

          {/* Modal de Adicionar Produto */}
          {modalAdicionar && (
            <ModalAdicionarProduto onClose={fecharModalAdicionar} />
          )}

          {/* Modal de Editar Produto */}
          {modalEditar && (
            <ModalEditarProduto
              onClose={fecharModalEditar}
              produtoId={produtoSelecionado}
            />
          )}

          {modalExcluir && (
            <ModalExcluirProduto
              isOpen={modalExcluir}
              onClose={fecharModalExcluir}
              onConfirm={confirmarExclusao}
              produto={produtoParaExcluir}
              isDeleting={isDeletando}
            />
          )}

          {activeSection === "destaques" && (
            <ProdutosDestaque
              produtos={produtos}
              nome1={nomeSecao1}
              nome2={nomeSecao2}
            />
          )}
        </MainContent>
      </MainWrapper>
    </Container>
  )
}

export default AdminProdutos
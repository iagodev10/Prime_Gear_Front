import { useState, useMemo, useEffect } from "react"
import axios from "axios"

import { FiSearch, FiUsers, FiShield, FiPackage, FiCalendar, FiX } from "react-icons/fi"
import { LuMail } from "react-icons/lu"
import {
  Container,
  Header,
  Title,
  Button,
  Search,
  CardGeral,
  Total,
  Icon,
  Info,
  Content,
  UserCard,
  Icone,
  Informacoes,
  SNome,
  SMail,
  MetaRow,
  Conteudo,
  Conteudo2,
  PriceValue,
  StatusPill,
  FreteText,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalGrid,
  ModalSection,
  ModalDivider,
  ItemRow,
  TotalsRow,
  ModalActions,
  OrderSelect,
  EmptyStateWrapper,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
} from "./style"

const AdminPedidos = () => {
  const [search, setSearch] = useState("")
  const [statusFiltro, setStatusFiltro] = useState("todos")
  const [selected, setSelected] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false)
  const [pedidos, setPedidos] = useState([])
  const [estatisticas, setEstatisticas] = useState({
    total: 0,
    entregues: 0,
    pendentes: 0,
    enviados: 0
  })
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetchPedidos()
    fetchEstatisticas()
  }, [])

  const fetchPedidos = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://72.62.10.218:8080/admin/pedidos')
      console.log('Pedidos recebidos:', response.data) 
      setPedidos(response.data)
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error)
      setPedidos([])
    } finally {
      setLoading(false)
    }
  }

  const fetchEstatisticas = async () => {
    try {
      const response = await axios.get('http://72.62.10.218:8080/admin/pedidos/estatisticas')
      setEstatisticas(response.data)
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error)
    }
  }

  const pedidosFiltrados = useMemo(() => {
    return pedidos.filter((p) => {
      const idString = p.idFormatado || p.id.toString()
      const matchSearch =
        !search ||
        idString.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFiltro === "todos" || p.status === statusFiltro
      return matchSearch && matchStatus
    })
  }, [pedidos, search, statusFiltro])

  const alterarStatus = async (id, novoStatus) => {
    try {
      console.log('Alterando status do pedido:', id, 'para:', novoStatus) 
      
      await axios.put(`http://72.62.10.218:8080/admin/pedidos/${id}/status`, {
        status: novoStatus
      })
      
     
      setPedidos((prev) => prev.map((p) => (p.id === id ? { ...p, status: novoStatus } : p)))
      
     
      
      fetchEstatisticas()
      
   
      if (selected && selected.id === id) {
        setSelected({ ...selected, status: novoStatus })
      }
    } catch (error) {
      console.error('Erro ao alterar status:', error)
      alert('Erro ao alterar status do pedido')
    }
  }

  const abrirModal = (pedido) => {
    console.log('Pedido selecionado:', pedido) 
    
    setSelected(pedido)
    setModalOpen(true)
  }

  const fecharModal = () => {
    setModalOpen(false)
    setSelected(null)
  }

  if (loading) {
    return (
      <Container>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '400px',
          color: '#666'
        }}>
          Carregando pedidos...
        </div>
      </Container>
    )
  }

  return (
    <>
      <Container>
        <Header>
          <Title>
            <h1>Gerenciar Pedidos</h1>
            <p>{estatisticas.total} pedidos no sistema</p>
          </Title>
        </Header>

        <CardGeral>
          <Total>
            <Icon color="#E8E2FF">
              <FiUsers size={24} color="#6A00FF" />
            </Icon>
            <Info>
              <p>Total de Pedidos</p>
              <p>{estatisticas.total}</p>
            </Info>
          </Total>

          <Total>
            <Icon color="#10B981">
              <FiShield size={24} color="white" />
            </Icon>
            <Info>
              <p>Entregues</p>
              <p>{estatisticas.entregues}</p>
            </Info>
          </Total>

          <Total>
            <Icon color="#DFFFEA">
              <FiUsers size={24} color="#00A85A" />
            </Icon>
            <Info>
              <p>Pendentes</p>
              <p>{estatisticas.pendentes}</p>
            </Info>
          </Total>

          <Total>
            <Icon color="#EDE8FF">
              <FiPackage size={24} color="#6A5AE0" />
            </Icon>
            <Info>
              <p>Enviados</p>
              <p>{estatisticas.enviados}</p>
            </Info>
          </Total>
        </CardGeral>

        <Search>
          <FiSearch size={20} color="#666" />
          <input
            type="text"
            placeholder="Buscar por cliente ou ID do pedido..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar pedidos por cliente ou ID"
          />
          <select value={statusFiltro} onChange={(e) => setStatusFiltro(e.target.value)} aria-label="Filtrar por status">
            <option value="todos">Todos os Status</option>
            <option value="entregue">Entregue</option>
            <option value="pendente">Pendente</option>
            <option value="enviado">Enviado</option>
          </select>
        </Search>

        <Content>
          {pedidosFiltrados.map((p) => (
            <UserCard key={p.id} status={p.status} onClick={() => abrirModal(p)}>
              <Conteudo>
                <Icone status={p.status}>
                  <FiPackage size={22} />
                </Icone>
                <Informacoes>
                  <SNome>Pedido #{p.idFormatado || p.id}</SNome>
                  <SMail>
                    <LuMail /> {p.email}
                  </SMail>
                  <MetaRow>
                    <FiCalendar /> {p.data}
                  </MetaRow>
                  <StatusPill status={p.status}>{p.status}</StatusPill>
                </Informacoes>
              </Conteudo>

              <Conteudo2>
                <div style={{ textAlign: "right", width: "100%", display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
                    <PriceValue>R$ {p.total.toFixed(2)}</PriceValue>
                    <FreteText>+ R$ {p.frete.toFixed(2)} frete</FreteText>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end", width: "100%" }}>
                    <OrderSelect
                      value={p.status}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => {
                        e.stopPropagation()
                        alterarStatus(p.id, e.target.value)
                      }}
                      aria-label="Alterar status do pedido"
                    >
                      <option value="entregue">Entregue</option>
                      <option value="pendente">Pendente</option>
                      <option value="enviado">Enviado</option>
                    </OrderSelect>
                  </div>
                </div>
              </Conteudo2>
            </UserCard>
          ))}
        </Content>

        {pedidosFiltrados.length === 0 && !loading && (
          <EmptyStateWrapper>
            <EmptyIcon>
              <FiSearch size={22} />
            </EmptyIcon>
            <EmptyTitle>Nenhum pedido encontrado</EmptyTitle>
            <EmptyDescription>
              {pedidos.length === 0 
                ? 'Não há pedidos cadastrados no sistema'
                : 'Ajuste a busca ou o filtro de status'}
            </EmptyDescription>
          </EmptyStateWrapper>
        )}

        {isModalOpen && selected && (
          <ModalOverlay
            onClick={(e) => {
              if (e.target === e.currentTarget) fecharModal()
            }}
          >
            <ModalContent>
              <ModalHeader>
                <h2>Detalhes do Pedido #{selected.idFormatado || selected.id}</h2>
                <button onClick={fecharModal} aria-label="Fechar">
                  <FiX size={20} />
                </button>
              </ModalHeader>

              <ModalGrid>
                <ModalSection>
                  <h4>Cliente</h4>
                  <p style={{ fontWeight: 700 }}>{selected.email}</p>
                </ModalSection>
                <ModalSection>
                  <h4>Data do Pedido</h4>
                  <p>{selected.dataHora}</p>
                </ModalSection>
                <ModalSection>
                  <h4>Status</h4>
                  <StatusPill status={selected.status}>{selected.status}</StatusPill>
                </ModalSection>
                <ModalSection>
                  <h4>Total</h4>
                  <PriceValue style={{ color: "#2563eb" }}>R$ {selected.total.toFixed(2)}</PriceValue>
                </ModalSection>
              </ModalGrid>

              <ModalSection>
                <h4>Endereço de Entrega</h4>
                <p style={{ fontWeight: 600 }}>{selected.endereco}</p>
              </ModalSection>

              <ModalSection>
                <h4>Itens do Pedido</h4>
                {selected.items && selected.items.length > 0 ? (
                  selected.items.map((it, i) => (
                    <ItemRow key={i}>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>{it.name}</p>
                        <p style={{ margin: 0, color: "#6b7280" }}>Quantidade: {it.qty}</p>
                      </div>
                      <PriceValue>R$ {it.price.toFixed(2)}</PriceValue>
                    </ItemRow>
                  ))
                ) : (
                  <p style={{ color: '#666', fontStyle: 'italic' }}>Nenhum item disponível</p>
                )}
              </ModalSection>
              <ModalDivider />
              <TotalsRow>
                <span style={{ fontSize: "1.05rem" }}>Total do Pedido:</span>
                <PriceValue>R$ {selected.total.toFixed(2)}</PriceValue>
              </TotalsRow>
              <TotalsRow>
                <span>Frete:</span>
                <span style={{ color: "#374151" }}>R$ {selected.frete.toFixed(2)}</span>
              </TotalsRow>

              <ModalActions>
                <OrderSelect
                  value={selected.status}
                  onChange={(e) => alterarStatus(selected.id, e.target.value)}
                  aria-label="Alterar status do pedido"
                >
                  <option value="entregue">Entregue</option>
                  <option value="pendente">Pendente</option>
                  <option value="enviado">Enviado</option>
                </OrderSelect>
                <Button onClick={fecharModal} style={{ flex: 1 }}>
                  Fechar
                </Button>
              </ModalActions>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  )
}

export default AdminPedidos
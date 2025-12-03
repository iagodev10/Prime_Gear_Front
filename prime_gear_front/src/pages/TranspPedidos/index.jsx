import { useState, useMemo } from "react"

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
  Status,
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

const TranspPedidos = () => {
  const [search, setSearch] = useState("")
  const [statusFiltro, setStatusFiltro] = useState("todos")
  const [selected, setSelected] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false)
  const [pedidos, setPedidos] = useState([
    {
      id: "6918F27A",
      email: "admin@primegear.com",
      data: "15/11/2025",
      dataHora: "15/11/2025, 21:36:58",
      endereco: "Av. Getúlio Vargas, 1500 - Belo Horizonte MG - CEP: 30112-021",
      total: 799.0,
      frete: 25.0,
      status: "Entregue",
      items: [{ name: "SSD Samsung 1TB", qty: 1, price: 799.0 }],
    },
    {
      id: "6918F27B",
      email: "admin@primegear.com",
      data: "15/11/2025",
      dataHora: "15/11/2025, 21:36:58",
      endereco: "Rua XV de Novembro, 200 - Curitiba PR - CEP: 80020-310",
      total: 899.0,
      frete: 30.0,
      status: "Pendente",
      items: [{ name: "Teclado Mecânico RGB", qty: 1, price: 899.0 }],
    },
    {
      id: "6918F27C",
      email: "admin@primegear.com",
      data: "15/11/2025",
      dataHora: "15/11/2025, 21:36:58",
      endereco: "Av. Rebouças, 3000 - São Paulo SP - CEP: 05402-600",
      total: 5499.0,
      frete: 40.0,
      status: "Enviado",
      items: [{ name: "Notebook Gamer RTX 4070", qty: 1, price: 5499.0 }],
    },
    {
      id: "6918F27D",
      email: "admin@primegear.com",
      data: "15/11/2025",
      dataHora: "15/11/2025, 21:36:58",
      endereco: "Rua das Flores, 450 - Rio de Janeiro RJ - CEP: 20040-020",
      total: 1299.0,
      frete: 25.0,
      status: "Enviado",
      items: [{ name: "Headset JBL Quantum", qty: 1, price: 1299.0 }],
    },
  ])

  const pedidosFiltrados = useMemo(() => {
    return pedidos.filter((p) => {
      const matchSearch =
        !search ||
        p.id.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFiltro === "todos" || p.status === statusFiltro
      return matchSearch && matchStatus
    })
  }, [pedidos, search, statusFiltro])

  const alterarStatus = (id, novoStatus) => {
    setPedidos((prev) => prev.map((p) => (p.id === id ? { ...p, status: novoStatus } : p)))
  }

  const abrirModal = (pedido) => {
    setSelected(pedido)
    setModalOpen(true)
  }

  const fecharModal = () => {
    setModalOpen(false)
    setSelected(null)
  }

  return (
    <>
      <Container>
        <Header>
          <Title>
            <h1>Gerenciar Pedidos</h1>
            <p>{pedidos.length} pedidos no sistema</p>
          </Title>
          {/* <Button>
            <FiPlus size={18} />
            Adicionar Pedido
          </Button> */}
        </Header>

        <CardGeral>
          <Total>
            <Icon color="#E8E2FF">
              <FiUsers size={24} color="#6A00FF" />
            </Icon>
            <Info>
              <p>Total de Pedidos</p>
              <p>{pedidos.length}</p>
            </Info>
          </Total>

          <Total>
            <Icon color="#FFE5F0">
              <FiShield size={24} color="#E4005C" />
            </Icon>
            <Info>
              <p>Entregues</p>
              <p>{pedidos.filter((p) => p.status === "Entregue").length}</p>
            </Info>
          </Total>

          <Total>
            <Icon color="#DFFFEA">
              <FiUsers size={24} color="#00A85A" />
            </Icon>
            <Info>
              <p>Pendentes</p>
              <p>{pedidos.filter((p) => p.status === "Pendente").length}</p>
            </Info>
          </Total>

          <Total>
            <Icon color="#EDE8FF">
              <FiPackage size={24} color="#6A5AE0" />
            </Icon>
            <Info>
              <p>Enviados</p>
              <p>{pedidos.filter((p) => p.status === "Enviado").length}</p>
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
            <option value="Entregue">Entregue</option>
            <option value="Pendente">Pendente</option>
            <option value="Enviado">Enviado</option>
          </select>
        </Search>

        <Content>
          {pedidosFiltrados.map((p) => (
            <UserCard key={p.id} status={p.status} onClick={() => abrirModal(p)}>
              <Conteudo>
                <Icone status={p.status}>
                  <FiPackage size={22} color="black" />
                </Icone>

                <Informacoes>
                  <Status>
                    <SNome>Pedido #{p.id}</SNome>
                  </Status>
                  <SMail>
                    <LuMail /> {p.email}
                  </SMail>
                  <MetaRow>
                    <FiCalendar /> {p.data}
                  </MetaRow>
                </Informacoes>
              </Conteudo>

              <Conteudo2>
                <div style={{ textAlign: "right", width: "100%" }}>
                  <PriceValue>R$ {p.total.toFixed(2)}</PriceValue>
                  <FreteText>+ R$ {p.frete.toFixed(2)} frete</FreteText>

                  <StatusPill status={p.status}>{p.status}</StatusPill>

                  <OrderSelect
                    value={p.status}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      e.stopPropagation()
                      alterarStatus(p.id, e.target.value)
                    }}
                    aria-label="Alterar status do pedido"
                  >
                    <option value="Entregue">Entregue</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Enviado">Enviado</option>
                  </OrderSelect>
                </div>
              </Conteudo2>
            </UserCard>
          ))}
        </Content>

        {pedidosFiltrados.length === 0 && (
          <EmptyStateWrapper>
            <EmptyIcon>
              <FiSearch size={22} />
            </EmptyIcon>
            <EmptyTitle>Nenhum pedido encontrado</EmptyTitle>
            <EmptyDescription>Ajuste a busca ou o filtro de status</EmptyDescription>
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
                <h2>Detalhes do Pedido #{selected.id}</h2>
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
                {selected.items.map((it, i) => (
                  <ItemRow key={i}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 600 }}>{it.name}</p>
                      <p style={{ margin: 0, color: "#6b7280" }}>Quantidade: {it.qty}</p>
                    </div>
                    <PriceValue>R$ {it.price.toFixed(2)}</PriceValue>
                  </ItemRow>
                ))}
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
                  <option value="Entregue">Entregue</option>
                  <option value="Pendente">Pendente</option>
                  <option value="Enviado">Enviado</option>
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

export default TranspPedidos

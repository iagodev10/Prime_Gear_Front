import { FiShoppingCart, FiPackage } from "react-icons/fi"
import { Link } from "react-router-dom"
import {
  SectionContainer,
  SectionHeader,
  SectionIcon,
  SectionTitle,
  ContentContainer,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  ActionButton,
} from "./style"

// Mock de pedidos - quando vazio, mostra o estado vazio
const pedidos = []

const MeusPedidos = () => {
  const hasPedidos = pedidos.length > 0

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionIcon $bgColor="#dbeafe" $iconColor="#2563eb">
          <FiShoppingCart size={20} />
        </SectionIcon>
        <SectionTitle>Histórico de Pedidos</SectionTitle>
      </SectionHeader>

      <ContentContainer>
        {hasPedidos ? (
          <div>
            {pedidos.map((pedido) => (
              <div key={pedido.id}>{/* Renderizar detalhes do pedido */}</div>
            ))}
          </div>
        ) : (
          <EmptyState>
            <EmptyIcon>
              <FiPackage size={48} />
            </EmptyIcon>
            <EmptyTitle>Você ainda não fez nenhum pedido</EmptyTitle>
            <EmptyDescription>Explore nossos produtos e faça sua primeira compra!</EmptyDescription>
            <ActionButton as={Link} to="/">
              Começar a Comprar
            </ActionButton>
          </EmptyState>
        )}
      </ContentContainer>
    </SectionContainer>
  )
}

export default MeusPedidos

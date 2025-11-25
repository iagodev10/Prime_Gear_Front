import { FiShoppingCart } from "react-icons/fi"
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

// Mock de itens do carrinho - quando vazio, mostra o estado vazio
const cartItems = []

const MeuCarrinho = () => {
  const hasItems = cartItems.length > 0

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionIcon $bgColor="#dbeafe" $iconColor="#2563eb">
          <FiShoppingCart size={20} />
        </SectionIcon>
        <SectionTitle>Meu Carrinho</SectionTitle>
      </SectionHeader>

      <ContentContainer>
        {hasItems ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>{/* Renderizar item do carrinho */}</div>
            ))}
          </div>
        ) : (
          <EmptyState>
            <EmptyIcon>
              <FiShoppingCart size={48} />
            </EmptyIcon>
            <EmptyTitle>Seu carrinho está vazio</EmptyTitle>
            <EmptyDescription>Adicione produtos ao carrinho para continuar comprando</EmptyDescription>
            <ActionButton as={Link} to="/">
              <FiShoppingCart size={16} />
              Explorar Produtos
            </ActionButton>
          </EmptyState>
        )}
      </ContentContainer>
    </SectionContainer>
  )
}

export default MeuCarrinho

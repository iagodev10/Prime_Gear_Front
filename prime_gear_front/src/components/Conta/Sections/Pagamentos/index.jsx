import { FiCreditCard, FiPlus } from "react-icons/fi"
import {
  SectionContainer,
  SectionHeader,
  HeaderLeft,
  SectionIcon,
  SectionTitle,
  AddButton,
  ContentContainer,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  ActionButton,
} from "./style"

// Mock de métodos de pagamento - quando vazio, mostra o estado vazio
const metodosPagamento = []

const Pagamentos = () => {
  const hasPagamentos = metodosPagamento.length > 0

  return (
    <SectionContainer>
      <SectionHeader>
        <HeaderLeft>
          <SectionIcon $bgColor="#fef3c7" $iconColor="#d97706">
            <FiCreditCard size={20} />
          </SectionIcon>
          <SectionTitle>Métodos de Pagamento</SectionTitle>
        </HeaderLeft>
        <AddButton>
          <FiPlus size={16} />
          Adicionar
        </AddButton>
      </SectionHeader>

      <ContentContainer>
        {hasPagamentos ? (
          <div>
            {metodosPagamento.map((metodo) => (
              <div key={metodo.id}>{/* Renderizar método de pagamento */}</div>
            ))}
          </div>
        ) : (
          <EmptyState>
            <EmptyIcon>
              <FiCreditCard size={48} />
            </EmptyIcon>
            <EmptyTitle>Nenhum método de pagamento</EmptyTitle>
            <EmptyDescription>Adicione um cartão ou método de pagamento para facilitar suas compras</EmptyDescription>
            <ActionButton>
              <FiPlus size={16} />
              Adicionar Método
            </ActionButton>
          </EmptyState>
        )}
      </ContentContainer>
    </SectionContainer>
  )
}

export default Pagamentos

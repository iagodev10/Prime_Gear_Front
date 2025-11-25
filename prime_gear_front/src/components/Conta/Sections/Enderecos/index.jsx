import { FiMapPin, FiPlus } from "react-icons/fi"
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

// Mock de endereços - quando vazio, mostra o estado vazio
const enderecos = []

const Enderecos = () => {
  const hasEnderecos = enderecos.length > 0

  return (
    <SectionContainer>
      <SectionHeader>
        <HeaderLeft>
          <SectionIcon $bgColor="#dcfce7" $iconColor="#16a34a">
            <FiMapPin size={20} />
          </SectionIcon>
          <SectionTitle>Meus Endereços</SectionTitle>
        </HeaderLeft>
        <AddButton>
          <FiPlus size={16} />
          Adicionar
        </AddButton>
      </SectionHeader>

      <ContentContainer>
        {hasEnderecos ? (
          <div>
            {enderecos.map((endereco) => (
              <div key={endereco.id}>{/* Renderizar endereço */}</div>
            ))}
          </div>
        ) : (
          <EmptyState>
            <EmptyIcon>
              <FiMapPin size={48} />
            </EmptyIcon>
            <EmptyTitle>Nenhum endereço cadastrado</EmptyTitle>
            <EmptyDescription>Adicione um endereço para facilitar suas compras</EmptyDescription>
            <ActionButton>
              <FiPlus size={16} />
              Adicionar Endereço
            </ActionButton>
          </EmptyState>
        )}
      </ContentContainer>
    </SectionContainer>
  )
}

export default Enderecos

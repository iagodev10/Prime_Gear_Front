import { FiHeart } from "react-icons/fi"
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

// Mock de favoritos - quando vazio, mostra o estado vazio
const favoritos = []

const Favoritos = () => {
  const hasFavoritos = favoritos.length > 0

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionIcon $bgColor="#fce7f3" $iconColor="#db2777">
          <FiHeart size={20} />
        </SectionIcon>
        <SectionTitle>Meus Favoritos</SectionTitle>
      </SectionHeader>

      <ContentContainer>
        {hasFavoritos ? (
          <div>
            {favoritos.map((item) => (
              <div key={item.id}>{/* Renderizar item favorito */}</div>
            ))}
          </div>
        ) : (
          <EmptyState>
            <EmptyIcon>
              <FiHeart size={48} />
            </EmptyIcon>
            <EmptyTitle>Você ainda não tem favoritos</EmptyTitle>
            <EmptyDescription>Explore produtos e adicione aos favoritos para encontrá-los facilmente</EmptyDescription>
            <ActionButton as={Link} to="/">
              Explorar Produtos
            </ActionButton>
          </EmptyState>
        )}
      </ContentContainer>
    </SectionContainer>
  )
}

export default Favoritos

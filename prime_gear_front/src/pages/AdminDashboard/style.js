import styled from 'styled-components';

// Container principal da página do dashboard
export const PageContainer = styled.div`
  padding: 2rem;
  background-color: #f4f7fa; // Um fundo leve, similar ao da imagem
  min-height: 100vh;
`;

// Cabeçalho (Dashboard Administrativo)
export const DashboardHeader = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    color: #1a202c;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #718096;
    margin-top: 0.5rem;
  }
`;

// Grid para os cards de estatísticas
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

// O card de estatística individual
export const StatCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  /* Faz os cards da segunda fileira ocuparem mais espaço */
  &:nth-child(5),
  &:nth-child(6) {
    /* Assumindo que o grid tem 4 colunas em telas largas */
    @media (min-width: 1024px) {
      grid-column: span 2;
    }
  }
`;

// Wrapper para o ícone (o círculo colorido)
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 50%;
  font-size: 1.5rem; // Tamanho do ícone
  color: ${(props) => props.color || '#000'};
  background-color: ${(props) => props.bgColor || '#eee'};
`;

// Div para as informações (título, valor, porcentagem)
export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatTitle = styled.span`
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 0.25rem;
`;

export const StatValue = styled.h3`
  font-size: 1.5rem;
  color: #1a202c;
  margin: 0;
  font-weight: 600;
`;

// Componente para a porcentagem (verde ou vermelha)
export const StatPercentage = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 0.25rem;
  color: ${(props) => (props.positive ? '#48bb78' : '#f56565')};
`;

// Container para a seção "Pedidos Recentes"
export const RecentOrdersWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.25rem;
    color: #1a202c;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  p {
    color: #718096;
    text-align: center;
    padding: 2rem 0;
  }
`;
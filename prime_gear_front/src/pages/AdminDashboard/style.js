import styled from 'styled-components';

// Container principal da página do dashboard
export const PageContainer = styled.div`
  padding: 2rem;
  background-color: #f5f5f5; 
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DashboardHeader = styled.div`
  margin-bottom: 2rem;
  margin-left: 5%;

  h1 {
    font-size: 2rem;
    color: black;
    margin: 0;
  }

  p {
    font-size: 1.1rem;
    color: blck;
    margin-top: 0.5rem;
  }
`;

// Grid para os cards de estatísticas
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

  &:nth-child(5),
  &:nth-child(6) {
    @media (min-width: 1024px) {
      grid-column: span 2;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem;
  border-radius: 50%;
  font-size: 1.5rem; 
  color: ${(props) => props.color || '#000'};
  background-color: ${(props) => props.bgColor || '#eee'};
`;

export const StatInfo = styled.div`
  display: flex;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Percent = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;

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
    color: black;
    margin-top: 0;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  p {
    color: #718096;
    text-align: center;
    padding: 2rem 0;
  }
`;
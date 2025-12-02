import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const Header = styled.header`
  max-width: 1400px;
  margin: 0 auto 40px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  padding: 60px 40px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(30, 60, 114, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    padding: 40px 24px;
    margin-bottom: 24px;
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const CompanyName = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 0 0 12px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 500;

  svg {
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const StatsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 16px;
  }
`;

export const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${props => props.bgColor || '#e3f2fd'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    color: ${props => props.iconColor || '#1976d2'};
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const StatInfo = styled.div`
  flex: 1;

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
    font-weight: 500;
  }

  h3 {
    margin: 4px 0 0;
    font-size: 2rem;
    font-weight: 700;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.85rem;
    }

    h3 {
      font-size: 1.6rem;
    }
  }
`;

export const FiltersContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto 32px;
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 12px;
  }
`;

export const SearchInput = styled.div`
  flex: 1;
  min-width: 250px;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 16px;
    color: #666;
  }

  input {
    width: 100%;
    padding: 14px 16px 14px 48px;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #1e3c72;
      box-shadow: 0 0 0 3px rgba(30, 60, 114, 0.1);
    }

    &::placeholder {
      color: #999;
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;

    input {
      padding: 12px 16px 12px 44px;
      font-size: 0.9rem;
    }
  }
`;

export const FilterSelect = styled.select`
  padding: 14px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #333;

  &:focus {
    outline: none;
    border-color: #1e3c72;
    box-shadow: 0 0 0 3px rgba(30, 60, 114, 0.1);
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 0.9rem;
    flex: 1;
    min-width: 140px;
  }
`;

export const OrdersContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const OrderCard = styled.div`
  background: white;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: 5px solid ${props => {
    switch(props.status) {
      case 'Entregue': return '#00a85a';
      case 'Em Trânsito': return '#2563eb';
      case 'Pendente': return '#f59e0b';
      case 'Atrasado': return '#dc2626';
      default: return '#6b7280';
    }
  }};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const OrderInfo = styled.div`
  flex: 1;

  h3 {
    margin: 0 0 8px;
    font-size: 1.4rem;
    font-weight: 700;
    color: #1a1a1a;
  }

  p {
    margin: 4px 0;
    color: #666;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: #999;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const StatusBadge = styled.span`
  padding: 8px 20px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  background: ${props => {
    switch(props.status) {
      case 'Entregue': return '#d1fae5';
      case 'Em Trânsito': return '#dbeafe';
      case 'Pendente': return '#fef3c7';
      case 'Atrasado': return '#fee2e2';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'Entregue': return '#065f46';
      case 'Em Trânsito': return '#1e40af';
      case 'Pendente': return '#92400e';
      case 'Atrasado': return '#991b1b';
      default: return '#374151';
    }
  }};

  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 0.85rem;
  }
`;

export const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding-top: 16px;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.85rem;
    color: #999;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  span {
    font-size: 1rem;
    color: #1a1a1a;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    label {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.95rem;
    }
  }
`;

export const EmptyState = styled.div`
  background: white;
  padding: 80px 40px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  svg {
    color: #d1d5db;
    margin-bottom: 20px;
  }

  h3 {
    margin: 0 0 12px;
    font-size: 1.5rem;
    color: #374151;
  }

  p {
    margin: 0;
    color: #6b7280;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 60px 24px;

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

import styled from "styled-components";

// Container Principal
export const PageContainer = styled.div`
  padding: 40px 5%;
  background-color: #f5f5f5;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 7vh;
  perspective: 1200px;
  isolation: isolate;

  @media (max-width: 768px) {
    padding: 20px 5%;
    margin-top: 10vh;
  }
  @media (max-width: 480px) {
    margin-top: 10vh;
  }
`;

// Cabeçalho
export const DashboardHeader = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .title {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  h1 {
    font-size: 2.6rem;
    color: #1c1c1c;
    margin: 0;
    font-weight: 800;
    letter-spacing: 0.4px;
    position: relative;
  }

  h1::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 120px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #4d7294, #2a4055);
    box-shadow: 0 6px 16px rgba(77, 114, 148, 0.4);
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #4d7294; /* Azul da HomePage */
  margin: 30px 0 15px 0;
  font-weight: 700;
  border-left: 4px solid #4d7294;
  padding-left: 10px;
  text-shadow: 0 1px 0 #fff;
`;

// Grids
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;

  &.small-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Cards de Estatística
export const StatCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  will-change: transform;

  /* Efeito Hover similar aos botões da HomePage */
  &:hover {
    transform: translateY(-5px) rotateX(2deg) rotateY(-2deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-color: rgba(77, 114, 148, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(77, 114, 148, 0.35),
      rgba(42, 64, 85, 0.15)
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  /* Estilos específicos para alertas */
  &.alert-card {
    flex-direction: row;
    align-items: center;
    gap: 15px;

    .card-header {
      margin: 0;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.4rem;

  /* Tema Padrão: Azul da HomePage */
  color: #ffffff;
  background: linear-gradient(135deg, #4d7294, #2a4055);
  box-shadow: 0 4px 10px rgba(77, 114, 148, 0.3);
  transform: translateZ(20px);

  /* Variações de Alerta */
  &.alert {
    background: linear-gradient(135deg, #e67e22, #d35400);
    box-shadow: 0 4px 10px rgba(230, 126, 34, 0.3);
  }
  &.danger {
    background: linear-gradient(135deg, #c0392b, #8e44ad);
    box-shadow: 0 4px 10px rgba(192, 57, 43, 0.3);
  }
`;

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatTitle = styled.span`
  font-size: 0.9rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const StatValue = styled.h3`
  font-size: 1.8rem;
  color: #1c1c1c;
  margin: 0;
  font-weight: 700;
`;

export const StatPercentage = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.positive ? "rgba(72, 187, 120, 0.15)" : "rgba(245, 101, 101, 0.15)"};
  color: ${(props) => (props.positive ? "#2f855a" : "#c53030")};
`;

// Ações Rápidas (Novidade)
export const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px;
  background: #fff;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transform-style: preserve-3d;

  span {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
  }

  svg {
    color: #4d7294;
    transition: 0.3s;
  }

  &:hover {
    border-color: #4d7294;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

    svg {
      transform: scale(1.1);
    }
  }
`;

// Tabela de Pedidos
export const RecentOrdersContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow-x: auto; /* Permite scroll lateral em mobile */
  position: relative;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    pointer-events: none;
    box-shadow: inset 0 0 0 1px rgba(77, 114, 148, 0.15);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; /* Garante que a tabela não quebre layout em telas muito pequenas */
`;

export const TableHeader = styled.tr`
  text-align: left;
  border-bottom: 2px solid #f0f0f0;

  th {
    padding: 15px;
    color: #4d7294;
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f5f5f5;
  transition: background 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 15px;
  color: #333;
  font-size: 0.95rem;

  strong {
    color: #111;
  }
`;

// Badge de Status Dinâmico
export const StatusBadge = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;

  ${({ status }) => {
    switch (status) {
      case "Concluído":
        return `background-color: #c6f6d5; color: #22543d;`;
      case "Pendente":
        return `background-color: #fefcbf; color: #744210;`;
      case "Enviado":
        return `background-color: #bee3f8; color: #2a4365;`;
      case "Cancelado":
        return `background-color: #fed7d7; color: #822727;`;
      default:
        return `background-color: #edf2f7; color: #4a5568;`;
    }
  }}
`;

export const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background: radial-gradient(
      1000px 500px at 10% 10%,
      rgba(77, 114, 148, 0.12),
      transparent 60%
    ),
    radial-gradient(
      800px 400px at 90% 20%,
      rgba(42, 64, 85, 0.12),
      transparent 60%
    ),
    radial-gradient(
      700px 350px at 30% 90%,
      rgba(0, 0, 0, 0.06),
      transparent 60%
    );
  filter: saturate(105%);
  pointer-events: none;
  animation: bgShift 18s ease-in-out infinite alternate;

  @keyframes bgShift {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    100% {
      transform: translate3d(0, -10px, 0) scale(1.02);
    }
  }
`;

export const ChartArea = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #eef1f7;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Bars = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  height: 180px;
`;

export const Bar = styled.div`
  height: ${(p) => p.$h || 40}px;
  border-radius: 8px 8px 0 0;
  background: linear-gradient(180deg, #4d7294 0%, #2a4055 100%);
  box-shadow: 0 8px 16px rgba(77, 114, 148, 0.25);
  position: relative;
  transform: translateZ(10px);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateZ(10px) translateY(-4px);
    box-shadow: 0 14px 24px rgba(77, 114, 148, 0.35);
  }
`;

export const ChartLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #4d7294;
  font-weight: 600;
`;

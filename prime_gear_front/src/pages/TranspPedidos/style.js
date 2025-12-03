import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-top: 8vh;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 30px;
  }

  @media (max-width: 480px) {
    padding-top: 70px;
    padding-bottom: 20px;
  }
`;

export const Header = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    width: 92%;
    gap: 12px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    color: #111;
    margin: 0 0 4px 0;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 18px;
  background-color: #000;
  color: #fff;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -150%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0)
    );
    transform: skewX(-20deg);
  }

  &:hover::after {
    animation: shine 0.8s ease;
  }

  @keyframes shine {
    to {
      left: 150%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 20px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 0.95rem;
  }
`;

export const Search = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  padding: 12px 16px;
  margin-bottom: 30px;
  gap: 12px;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    padding-left: 10px;
    color: #333;
    min-width: 150px;

    &::placeholder {
      color: #999;
    }
  }

  select {
    border: 1px solid #e5e7eb;
    background: #fff;
    color: #111;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 8px;
    padding: 10px 12px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: #d1d5db;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 12px 14px;
    gap: 10px;

    input {
      flex: 1 1 100%;
      padding-left: 0;
      min-width: unset;
    }

    select {
      flex: 1;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    width: 92%;
    padding: 10px 12px;
    margin-bottom: 20px;

    input {
      font-size: 0.95rem;
    }

    select {
      font-size: 0.9rem;
      padding: 9px 10px;
    }
  }
`;

export const CardGeral = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    width: 92%;
    gap: 12px;
    margin-bottom: 20px;
  }
`;

export const Total = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(20, 20, 30, 0.06);
  border: 1px solid #eef1f7;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(20, 20, 30, 0.1);
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 14px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 12px;
  }
`;

export const Icon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${(props) => props.color || "#f0f0f0"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;

  p:first-child {
    color: #666;
    font-size: 0.95rem;
    margin: 0;
  }

  p:last-child {
    font-size: 1.6rem;
    font-weight: 600;
    color: #111;
    margin: 0;
  }

  @media (max-width: 768px) {
    gap: 4px;

    p:first-child {
      font-size: 0.9rem;
    }

    p:last-child {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 480px) {
    p:first-child {
      font-size: 0.85rem;
    }

    p:last-child {
      font-size: 1.3rem;
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  @media (max-width: 480px) {
    width: 92%;
    gap: 12px;
  }
`;

export const UserCard = styled.div`
  width: 100%;
  background-color: white;
  color: #111;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 6px 18px rgba(20, 20, 30, 0.06);
  border: 1px solid #eef1f7;
  border-left: 4px solid
    ${(p) =>
      p.status === "Entregue"
        ? "#16a34a"
        : p.status === "Pendente"
        ? "#ea580c"
        : "#2563eb"};
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(20, 20, 30, 0.12);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 14px;
    border-left-width: 3px;
  }
`;

export const Icone = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${(p) =>
    p.status === "Entregue"
      ? "linear-gradient(135deg, #E8F8EE 0%, #D7F7E6 100%)"
      : p.status === "Pendente"
      ? "linear-gradient(135deg, #FFEDE3 0%, #FFD6BF 100%)"
      : "linear-gradient(135deg, #E6F0FF 0%, #D9E8FF 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-left: 16px;
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 12px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    gap: 8px;
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const SNome = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: black;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const SRol = styled.span`
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 500;

  background: ${(props) =>
    props.role === "admin"
      ? "rgba(186, 142, 255, 0.35)"
      : "rgba(128, 185, 255, 0.35)"};

  color: ${(props) => (props.role === "admin" ? "#7A30D6" : "#2B7BE4")};

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 3px 8px;
  }
`;

export const SMail = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    gap: 5px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Data = styled.p`
  font-size: 1.1rem;
  color: black;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    gap: 5px;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Conteudo2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    min-width: unset;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const PriceValue = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #2563eb;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const FreteText = styled.p`
  margin: 2px 0 10px 0;
  font-size: 0.95rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const StatusPill = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
  background: ${(p) =>
    p.status === "Entregue"
      ? "#EAF7F0"
      : p.status === "Pendente"
      ? "#FFEDE3"
      : "#E6F0FF"};
  color: ${(p) =>
    p.status === "Entregue"
      ? "#16a34a"
      : p.status === "Pendente"
      ? "#ea580c"
      : "#2563eb"};

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1003;
  padding: 16px;

  @media (max-width: 480px) {
    padding: 12px;
    align-items: flex-start;
    padding-top: 40px;
  }
`;

export const ModalContent = styled.div`
  width: 800px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(20, 20, 30, 0.25);
  padding: 24px;

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 20px;
    max-height: 85vh;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 16px;
    border-radius: 12px;
    max-height: 80vh;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #111;
    font-weight: 600;
  }

  button {
    border: 1px solid #e5e7eb;
    background: #fff;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;

    &:hover {
      background: #f9fafb;
      border-color: #d1d5db;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
    padding-bottom: 12px;

    h2 {
      font-size: 1.3rem;
    }

    button {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.1rem;
    }

    button {
      width: 30px;
      height: 30px;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin-bottom: 14px;
  }
`;

export const ModalSection = styled.div`
  margin-bottom: 20px;

  h4 {
    margin: 0 0 8px 0;
    font-size: 1rem;
    color: #939598;
    font-weight: 500;
  }

  p {
    margin: 0;
    color: #111;
    font-size: 0.95rem;
    line-height: 1.5;
    word-break: break-word;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;

    h4 {
      font-size: 0.95rem;
      margin-bottom: 6px;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 14px;

    h4 {
      font-size: 0.9rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

export const ModalDivider = styled.hr`
  border: none;
  height: 1px;
  background: #e5e7eb;
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 16px 0;
  }

  @media (max-width: 480px) {
    margin: 14px 0;
  }
`;

export const ItemRow = styled.div`
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 12px;
    margin-bottom: 8px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 8px;

    ${PriceValue} {
      align-self: flex-end;
    }
  }
`;

export const TotalsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  color: #111;
  padding: 8px 0;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 6px 0;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: 16px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
    padding-top: 14px;

    select,
    button {
      width: 100% !important;
    }
  }
`;

export const OrderSelect = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #111;
  font-weight: 500;
  width: 80%;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #d1d5db;
  }

  @media (max-width: 768px) {
    padding: 9px 12px;
  }

  @media (max-width: 480px) {
    padding: 9px 10px;
  }
`;

export const EmptyStateWrapper = styled.div`
  width: 90%;
  background: #fff;
  border: 1px solid #eef1f7;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 6px 18px rgba(20, 20, 30, 0.06);

  @media (max-width: 480px) {
    width: 92%;
    padding: 24px;
  }
`;

export const EmptyIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  svg {
    color: #64748b;
  }
`;

export const EmptyTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #111;
`;

export const EmptyDescription = styled.p`
  margin: 8px 0 0 0;
  font-size: 0.95rem;
  color: #6b7280;
`;

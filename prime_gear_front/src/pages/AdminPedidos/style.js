import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    gap: 12px;
  }
`;

export const Title = styled.div`
  h1 {
    font-size: 2.2rem;
    font-weight: 600;
    color: #111;
  }
  p {
    font-size: 1.1rem;
    color: #666;
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
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 10px 12px;
    input {
      min-width: 200px;
    }
    select {
      width: 100%;
    }
  }
`;

export const CardGeral = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
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
`;

export const Icon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${(props) => props.color || "#f0f0f0"};
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const Content = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(20, 20, 30, 0.12);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
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
`;

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-left: 16px;
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;
`;

export const SNome = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: black;
  margin: 0;
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
`;

export const SMail = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0;
`;

export const Data = styled.p`
  font-size: 1.1rem;
  color: black;
  margin: 0;
`;

export const Conteudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Conteudo2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const PriceValue = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #2563eb;
`;

export const StatusPill = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
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
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1003;
`;

export const ModalContent = styled.div`
  width: 800px;
  max-width: 90%;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(20, 20, 30, 0.25);
  padding: 20px 24px;
  @media (max-width: 640px) {
    padding: 16px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  h2 {
    margin: 0;
    font-size: 1.4rem;
    color: #111;
    font-weight: 500;
  }
  button {
    border: 1px solid #e5e7eb;
    background: #fff;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ModalSection = styled.div`
  margin-bottom: 18px;
  h4 {
    margin: 0 0 6px 0;
    font-size: 1rem;
    color: #939598;
    font-weight: 500;
  }
  p {
    margin: 0;
    color: #111;
  }
`;

export const ModalDivider = styled.hr`
  border: none;
  height: 1px;
  background: #e5e7eb;
  margin: 14px 0;
`;

export const ItemRow = styled.div`
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TotalsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  color: #111;
`;

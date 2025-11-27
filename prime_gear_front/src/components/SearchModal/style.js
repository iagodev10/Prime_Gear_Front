import styled, { keyframes } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: clamp(60px, 10vh, 100px) 12px 12px 12px;
  }
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  width: min(92%, 1200px);
  padding: 16px 18px 22px 18px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  animation: ${slideDown} 0.4s ease-out;
  max-height: 80vh;
  overflow: hidden;
  will-change: transform;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 16px;
    padding: 12px 14px 16px 14px;
    max-height: 82vh;
  }
  @media (max-width: 480px) {
    border-radius: 14px;
    padding: 10px 12px 14px 12px;
    max-height: 85vh;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 0; /* Aumentado o padding vertical e removido lateral */
  animation: ${keyframes`
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
  `} 0.25s ease-out;
  flex-wrap: wrap;
  row-gap: 8px;
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 50px; /* Altura maior */
  border: none; /* Remove a borda */
  border-radius: 0; /* Remove o arredondamento */
  padding: 0 0 0 48px; /* Espaço apenas na esquerda para o ícone */
  background: transparent; /* Fundo transparente */
  font-size: 24px; /* Fonte maior como na imagem */
  color: #1b1b1f;
  outline: none; /* Remove a linha azul de foco */
  font-weight: 400;

  &::placeholder {
    color: #6b6b71;
  }

  @media (max-width: 768px) {
    height: 44px;
    font-size: 18px;
    padding-left: 40px;
  }
`;

export const SearchIconWrap = styled.div`
  position: absolute;
  left: 0; /* Encostado na esquerda */
  top: 50%;
  transform: translateY(-50%);
  color: #1b1b1f; /* Ícone mais escuro (preto/cinza escuro) */
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* Permite clicar através do ícone */
`;

export const TopLeft = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 480px) { gap: 10px; }
  @media (max-width: 360px) {
    gap: 8px;
  }
`;

export const ClearBtn = styled.button`
  background: transparent;
  border: none;
  color: #6b6b71;
  cursor: pointer;
`;

export const CloseCircle = styled.button`
  width: 38px; /* Levemente menor em mobile */
  height: 38px;
  border-radius: 50%;
  border: 1px solid #e3e4ea; /* Borda sutil */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
  color: #1b1b1f;
  transition: background 0.2s;

  &:hover {
    background: #f7f7fa;
  }
  @media (max-width: 480px) {
    width: 34px;
    height: 34px;
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #ececf3;
  margin: 8px 0 16px 0;
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 24px;
  height: calc(80vh - 90px);
  overflow: hidden;
  min-height: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    height: auto;
  }
`;

export const MaisPesquisados = styled.div`
  padding: 6px 0;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 12px;
  color: #1b1b1f;
  font-weight: 600;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const StyledLink = styled(RouterLink)`
  color: #6b6b71;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    color: #111;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-right: 6px;
  min-height: 0;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.1); border-radius: 3px; }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 18px;
`;

export const TabItem = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: ${(p) => (p.active ? "#111" : "#6b6b71")};
  padding-bottom: 8px;
  border-bottom: 2px solid ${(p) => (p.active ? "#007bff" : "transparent")};
`;

export const Mock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  @media (max-width: 360px) {
    gap: 12px;
  }
`;

export const Card = styled.div`
  padding: 10px;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  background: #fff;
  border: 1px solid #eef1f7;
  box-shadow: 0 6px 18px rgba(20,20,30,0.06);
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(20,20,30,0.12);
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }
  ${Card}:hover & img { transform: scale(1.03); }

  @media (max-width: 640px) {
    img { height: 180px; }
  }
  @media (max-width: 360px) {
    img { height: 150px; }
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: ${(p) => (p.variant === "green" ? "#00a85a" : "#e4005c")};
  color: #fff;
  border-radius: 999px;
  font-size: 12px;
  padding: 4px 10px;
  margin-right: 6px;
`;

export const CardTitle = styled.p`
  font-size: 1rem;
  color: #1b1b1f;
  font-weight: 600;
  margin: 0;
`;

export const PriceBlock = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const PriceMain = styled.div`
  color: #e4005c;
  font-weight: 700;
  font-size: 0.95rem;
`;

export const PriceOld = styled.div`
  color: #6b6b71;
  text-decoration: line-through;
  font-size: 0.85rem;
`;

export const ViewAll = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 44px;
  border-radius: 999px;
  border: 1px solid #e3e4ea;
  background: #fff;
  cursor: pointer;
  font-weight: 600;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  &:hover { box-shadow: 0 6px 18px rgba(20,20,30,0.08); transform: translateY(-1px); }
`;

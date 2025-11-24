import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 92%;
  max-width: 1200px;
  padding: 16px 18px 22px 18px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 6px;
`;

export const Input = styled.input`
  flex: 1;
  height: 40px;
  border: 1px solid #e3e4ea;
  border-radius: 999px;
  padding: 0 16px 0 36px;
  background: #f7f7fa;
`;

export const SearchIconWrap = styled.div`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

export const TopLeft = styled.div`
  flex: 1;
  position: relative;
`;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ClearBtn = styled.button`
  background: transparent;
  border: none;
  color: #6b6b71;
  cursor: pointer;
`;

export const CloseCircle = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #dcdde3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  cursor: pointer;
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
`;

export const Card = styled.div`
  padding: 8px;
  border-radius: 12px;
  transition: transform 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
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
  font-size: 0.95rem;
  color: #1b1b1f;
`;

export const PriceBlock = styled.div`
  margin-top: 6px;
`;

export const PriceMain = styled.div`
  color: #e4005c;
  font-weight: 700;
`;

export const PriceOld = styled.div`
  color: #6b6b71;
  text-decoration: line-through;
  font-size: 0.9rem;
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
`;

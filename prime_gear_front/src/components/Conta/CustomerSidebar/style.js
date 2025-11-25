import styled from "styled-components"

export const SidebarContainer = styled.aside`
  width: 100%;
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 288px;
    flex-shrink: 0;
  }
`

export const MenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? "#1e293b" : "transparent")};
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#374151")};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 0.25rem;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "#1e293b" : "#f3f4f6")};
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#374151")};
`

export const MenuLabel = styled.span`
  flex: 1;
  text-align: left;
  margin-left: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
`

export const ChevronIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#9ca3af")};
`

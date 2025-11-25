import styled from "styled-components"

export const SectionContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border-bottom: 1px solid #f3f4f6;
`

export const SectionIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ $bgColor }) => $bgColor || "#dbeafe"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $iconColor }) => $iconColor || "#2563eb"};
`

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`

export const ContentContainer = styled.div`
  padding: 1.5rem;
`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
`

export const EmptyIcon = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  margin-bottom: 1.5rem;
`

export const EmptyTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.5rem 0;
  text-align: center;
`

export const EmptyDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0 0 1.5rem 0;
  text-align: center;
`

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #1e293b;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #334155;
  }
`

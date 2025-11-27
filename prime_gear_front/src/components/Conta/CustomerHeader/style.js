import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 12vh;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 2rem;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
`

export const UserDetails = styled.div`
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`

export const UserName = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`

export const UserEmail = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0.25rem 0 0 0;
`

export const ClientBadge = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.25rem 0.75rem;
  background-color: #d1fae5;
  color: #065f46;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
`

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }
`

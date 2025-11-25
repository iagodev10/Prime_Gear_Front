import styled from "styled-components"

export const ContaContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f7fa;
`

export const ContaContent = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 2rem;
  }
`

export const MainContent = styled.div`
  flex: 1;
  min-width: 0;
`

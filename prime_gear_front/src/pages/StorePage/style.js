import styled from "styled-components"

export const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: ${(props) => (props.$isMobile ? "100px 20px 40px" : "40px 20px")};
`

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const FilterSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  position: ${(props) => (props.$isSticky ? "sticky" : "absolute")};
  top: ${(props) => (props.$isSticky ? "20px" : "auto")};
  bottom: ${(props) => (props.$isSticky ? "auto" : "0")};
  align-self: flex-start;
  max-height: ${(props) => props.$height};
  overflow-y: auto;

  @media (max-width: 900px) {
    display: none;
  }
`

export const FilterCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`

export const FilterTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #333;
`

export const FilterSection = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 16px;
`

export const FilterButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: black;
`

export const FilterOptions = styled.div`
  padding-top: 12px;
`

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  font-size: 14px;
  color: black;
`

export const FilterCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  cursor: pointer;
`

export const ProductsContainer = styled.div`
  flex: 1;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
`

export const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.$active ? "#000" : "white")};
  color: ${(props) => (props.$active ? "white" : "#333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.$active ? "#000" : "#f5f5f5")};
  }
`

export const FloatingFilterButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #000;
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0,0,0,0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 900px) {
    display: flex;
  }
`

export const FilterModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: flex-end;
  justify-content: center;
  
  @media (min-width: 901px) {
    display: none;
  }
`

export const FilterModalContent = styled.div`
  background-color: white;
  width: 100%;
  max-height: 80vh;
  border-radius: 20px 20px 0 0;
  padding: 24px;
  overflow-y: auto;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`

export const FilterModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e5e5;
`

export const FilterModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`

export const ApplyFiltersButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #333;
  }

  &:active {
    transform: scale(0.98);
  }
`

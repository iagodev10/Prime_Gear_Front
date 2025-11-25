import styled from "styled-components"

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
`

export const Modal = styled.div`
    width: 100%;
    max-width: 1200px;
    max-height: 90vh;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 24px;
    border-bottom: 1px solid #e0e0e0;
`

export const ModalTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111;
`

export const ModalSubtitle = styled.p`
    font-size: 0.95rem;
    color: #666;
    margin-top: 4px;
`

export const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: #f5f5f5;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #333;
    transition: all 0.2s ease;
    &:hover {
        background-color: #e0e0e0;
    }
`

export const ModalBody = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Sidebar = styled.div`
    width: 280px;
    min-width: 280px;
    background-color: #f9f9f9;
    border-right: 1px solid #e0e0e0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    @media (max-width: 768px) {
        width: 100%;
        min-width: 100%;
        max-height: 200px;
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
    }
`

export const SidebarTitle = styled.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 600;
    color: #333;
`

export const SelectedCount = styled.span`
    display: inline-block;
    background-color: #3b82f6;
    color: #fff;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-top: 12px;
    width: fit-content;
`

export const SelectedList = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media (max-width: 768px) {
        flex-direction: row;
        overflow-x: auto;
    }
`

export const SelectedItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    background-color: #fff;
    border: 2px solid #3b82f6;
    border-radius: 10px;
    @media (max-width: 768px) {
        flex-shrink: 0;
        min-width: 200px;
    }
`

export const SelectedImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const SelectedInfo = styled.div`
    flex: 1;
    min-width: 0;
`

export const SelectedName = styled.p`
    font-size: 0.8rem;
    font-weight: 600;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const SelectedPrice = styled.p`
    font-size: 0.85rem;
    font-weight: 700;
    color: #16a34a;
    margin-top: 2px;
`

export const MainArea = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`

export const FiltersRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 16px;
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

export const FilterGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const FilterLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
`

export const SearchInput = styled.input`
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #333;
    &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    &::placeholder {
        color: #999;
    }
`

export const SelectInput = styled.select`
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #333;
    background-color: #fff;
    cursor: pointer;
    &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
`

export const ProductCount = styled.p`
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 16px;
    span {
        font-weight: 700;
        color: #3b82f6;
    }
`

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
    flex: 1;
    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const ProductCard = styled.div`
    aspect-ratio: 1;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 3px solid ${(props) => (props.$selected ? "#3b82f6" : "transparent")};
    box-shadow: ${(props) => (props.$selected ? "0 4px 12px rgba(59, 130, 246, 0.3)" : "0 2px 8px rgba(0, 0, 0, 0.1)")};
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
`

export const ProductCardImage = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ModalFooter = styled.div`
    display: flex;
    gap: 16px;
    padding: 20px 24px;
    border-top: 1px solid #e0e0e0;
    @media (max-width: 480px) {
        flex-direction: column;
    }
`

export const SaveSelectionButton = styled.button`
    flex: 1;
    padding: 16px 24px;
    background-color: #3b82f6;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: #2563eb;
    }
`

export const CancelButton = styled.button`
    padding: 16px 32px;
    background-color: #fff;
    color: #333;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: #f5f5f5;
    }
`

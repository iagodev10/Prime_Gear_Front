import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`

export const Title = styled.div`
    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #111;
        margin-bottom: 4px;
    }
    p {
        font-size: 1rem;
        color: #666;
    }
`

export const SaveButton = styled.button`
    padding: 14px 24px;
    background-color: #16a34a;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: #15803d;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
    }
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`

export const SectionCard = styled.div`
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
`

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background-color: ${(props) => props.$bgColor || "#e8f4fd"};
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        filter: brightness(0.98);
    }
`

export const SectionNumber = styled.div`
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.$bgColor || "#3b82f6"};
    color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
`

export const SectionTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    color: #111;
`

export const SectionContent = styled.div`
    padding: 24px;
    border-top: 1px solid #f0f0f0;
`

export const SectionTitleLabel = styled.label`
    display: block;
    font-size: 0.95rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
`

export const SectionInput = styled.input`
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;
    transition: all 0.2s ease;
    &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    &::placeholder {
        color: #999;
    }
`

export const ProductsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 12px;
    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`

export const ProductsLabel = styled.span`
    font-size: 0.95rem;
    font-weight: 600;
    color: #333;
`

export const SelectButton = styled.button`
    padding: 10px 16px;
    background-color: #fff;
    color: #333;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: #f5f5f5;
        border-color: #ccc;
    }
`

export const ProductsArea = styled.div`
    border: 2px dashed #d0d0d0;
    border-radius: 12px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const EmptyState = styled.div`
    text-align: center;
    padding: 40px 20px;
    p {
        font-size: 1.1rem;
        font-weight: 600;
        color: #666;
        margin-top: 16px;
    }
    span {
        font-size: 0.9rem;
        color: #999;
        display: block;
        margin-top: 4px;
    }
`

export const EmptyIcon = styled.div`
    width: 80px;
    height: 80px;
    background-color: #f5f5f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #999;
`

export const SelectedProducts = styled.div`
    width: 100%;
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
`

export const ProductItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    position: relative;
`

export const ProductImage = styled.div`
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

export const ProductInfo = styled.div`
    flex: 1;
    min-width: 0;
`

export const ProductName = styled.p`
    font-size: 0.85rem;
    font-weight: 600;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ProductPrice = styled.p`
    font-size: 0.85rem;
    font-weight: 700;
    color: #16a34a;
    margin-top: 2px;
`

export const RemoveButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #666;
    transition: all 0.2s ease;
    &:hover {
        background-color: #fee2e2;
        border-color: #fca5a5;
        color: #dc2626;
    }
`

import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    @media (max-width: 768px) {
        gap: 20px;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    
    @media (max-width: 968px) {
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
    }
`

export const Title = styled.div`
    h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 8px;
        
        @media (max-width: 768px) {
            font-size: 1.6rem;
        }
        
        @media (max-width: 480px) {
            font-size: 1.4rem;
        }
    }
    
    p {
        font-size: 1rem;
        color: #666;
        line-height: 1.5;
        
        @media (max-width: 768px) {
            font-size: 0.95rem;
        }
        
        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }
`

export const SaveButton = styled.button`
    padding: 14px 28px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
    white-space: nowrap;
    
    &:hover {
        background: linear-gradient(135deg, #059669 0%, #047857 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    @media (max-width: 968px) {
        width: 100%;
        justify-content: center;
        padding: 12px 24px;
    }
    
    @media (max-width: 480px) {
        font-size: 0.95rem;
        padding: 12px 20px;
    }
`

export const SectionCard = styled.div`
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
    }
    
    @media (max-width: 768px) {
        border-radius: 12px;
    }
`

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    background-color: ${(props) => props.$bgColor || "#e8f4fd"};
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        filter: brightness(0.97);
    }
    
    &:active {
        transform: scale(0.99);
    }
    
    @media (max-width: 768px) {
        padding: 16px 20px;
    }
    
    @media (max-width: 480px) {
        padding: 14px 16px;
    }
`

export const SectionNumber = styled.div`
    width: 36px;
    height: 36px;
    background-color: ${(props) => props.$bgColor || "#3b82f6"};
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    
    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
        font-size: 1rem;
    }
    
    @media (max-width: 480px) {
        width: 28px;
        height: 28px;
        font-size: 0.9rem;
        border-radius: 8px;
    }
`

export const SectionTitle = styled.h3`
    font-size: 1.15rem;
    font-weight: 600;
    color: #1a1a1a;
    
    @media (max-width: 768px) {
        font-size: 1.05rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.95rem;
    }
`

export const SectionContent = styled.div`
    padding: 28px;
    border-top: 1px solid #f0f0f0;
    
    @media (max-width: 768px) {
        padding: 24px 20px;
    }
    
    @media (max-width: 480px) {
        padding: 20px 16px;
    }
`

export const SectionTitleLabel = styled.label`
    display: block;
    font-size: 0.95rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 10px;
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
        margin-bottom: 8px;
    }
`

export const SectionInput = styled.input`
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 1rem;
    color: #1f2937;
    transition: all 0.2s ease;
    background: #f9fafb;
    
    &:focus {
        outline: none;
        border-color: #3b82f6;
        background: #fff;
        box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
    }
    
    &::placeholder {
        color: #9ca3af;
    }
    
    @media (max-width: 768px) {
        padding: 12px 14px;
        font-size: 0.95rem;
    }
    
    @media (max-width: 480px) {
        padding: 11px 12px;
        font-size: 0.9rem;
        border-radius: 8px;
    }
`

export const ProductsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    margin-bottom: 16px;
    
    @media (max-width: 768px) {
        margin-top: 24px;
        margin-bottom: 14px;
    }
    
    @media (max-width: 580px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`

export const ProductsLabel = styled.span`
    font-size: 0.95rem;
    font-weight: 600;
    color: #374151;
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`

export const SelectButton = styled.button`
    padding: 11px 18px;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    
    &:hover {
        background: linear-gradient(135deg, #2d2d2d 0%, #404040 100%);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    @media (max-width: 580px) {
        width: 100%;
        justify-content: center;
    }
    
    @media (max-width: 480px) {
        font-size: 0.85rem;
        padding: 10px 16px;
    }
`

export const ProductsArea = styled.div`
    border: 2px dashed #d1d5db;
    border-radius: 12px;
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9fafb;
    transition: all 0.2s ease;
    
    &:hover {
        border-color: #9ca3af;
    }
    
    @media (max-width: 768px) {
        min-height: 200px;
        border-radius: 10px;
    }
    
    @media (max-width: 480px) {
        min-height: 180px;
        border-radius: 8px;
    }
`

export const EmptyState = styled.div`
    text-align: center;
    padding: 40px 20px;
    
    p {
        font-size: 1.1rem;
        font-weight: 600;
        color: #6b7280;
        margin-top: 16px;
    }
    
    span {
        font-size: 0.9rem;
        color: #9ca3af;
        display: block;
        margin-top: 6px;
    }
    
    @media (max-width: 768px) {
        padding: 30px 16px;
        
        p {
            font-size: 1rem;
        }
        
        span {
            font-size: 0.85rem;
        }
    }
    
    @media (max-width: 480px) {
        padding: 24px 12px;
        
        p {
            font-size: 0.95rem;
        }
        
        span {
            font-size: 0.8rem;
        }
    }
`

export const EmptyIcon = styled.div`
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: #9ca3af;
    
    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
        
        svg {
            width: 40px;
            height: 40px;
        }
    }
    
    @media (max-width: 480px) {
        width: 60px;
        height: 60px;
        
        svg {
            width: 36px;
            height: 36px;
        }
    }
`

export const SelectedProducts = styled.div`
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
    
    @media (max-width: 968px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        padding: 16px;
        gap: 14px;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        padding: 14px;
        gap: 12px;
    }
    
    @media (max-width: 580px) {
        grid-template-columns: 1fr;
        padding: 12px;
        gap: 10px;
    }
`

export const ProductItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px;
    background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    position: relative;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-color: #d1d5db;
    }
    
    @media (max-width: 768px) {
        padding: 12px;
        gap: 10px;
        border-radius: 10px;
    }
    
    @media (max-width: 480px) {
        padding: 10px;
        gap: 8px;
        border-radius: 8px;
    }
`

export const ProductImage = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
    background: #f3f4f6;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    @media (max-width: 768px) {
        width: 55px;
        height: 55px;
        border-radius: 8px;
    }
    
    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
    }
`

export const ProductInfo = styled.div`
    flex: 1;
    min-width: 0;
    padding-right: 8px;
`

export const ProductName = styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    color: #1f2937;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    
    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const ProductPrice = styled.p`
    font-size: 0.9rem;
    font-weight: 700;
    color: #10b981;
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const RemoveButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 28px;
    height: 28px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #6b7280;
    transition: all 0.2s ease;
    
    &:hover {
        background: #fee2e2;
        border-color: #fca5a5;
        color: #dc2626;
        transform: scale(1.1);
    }
    
    &:active {
        transform: scale(0.95);
    }
    
    @media (max-width: 768px) {
        width: 26px;
        height: 26px;
        top: 8px;
        right: 8px;
        
        svg {
            width: 14px;
            height: 14px;
        }
    }
    
    @media (max-width: 480px) {
        width: 24px;
        height: 24px;
        top: 6px;
        right: 6px;
        
        svg {
            width: 12px;
            height: 12px;
        }
    }
`
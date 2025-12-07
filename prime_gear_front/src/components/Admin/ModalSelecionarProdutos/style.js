import styled from "styled-components"

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    backdrop-filter: blur(4px);
    animation: fadeIn 0.2s ease-out;
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @media (max-width: 768px) {
        padding: 0;
        align-items: flex-end;
    }
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
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease-out;
    
    @keyframes slideUp {
        from { 
            transform: translateY(30px);
            opacity: 0;
        }
        to { 
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @media (max-width: 1024px) {
        max-width: 95%;
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
        max-height: 95vh;
        border-radius: 20px 20px 0 0;
        
        @keyframes slideUp {
            from { 
                transform: translateY(100%);
            }
            to { 
                transform: translateY(0);
            }
        }
    }
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 24px 28px;
    border-bottom: 1px solid #e5e7eb;
    background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
    flex-shrink: 0;
    
    @media (max-width: 768px) {
        padding: 20px 20px 16px;
        position: relative;
        
        /* Linha de arraste no mobile */
        &::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 4px;
            background: #d1d5db;
            border-radius: 2px;
        }
    }
    
    @media (max-width: 480px) {
        padding: 24px 16px 14px;
    }
`

export const ModalTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 4px;
    
    @media (max-width: 768px) {
        font-size: 1.3rem;
        margin-top: 12px;
    }
    
    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`

export const ModalSubtitle = styled.p`
    font-size: 0.95rem;
    color: #6b7280;
    margin-top: 4px;
    line-height: 1.4;
    
    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.8rem;
        display: none; /* Esconde em telas muito pequenas */
    }
`

export const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    background: #f3f4f6;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #6b7280;
    transition: all 0.2s ease;
    flex-shrink: 0;
    
    &:hover {
        background: #e5e7eb;
        color: #374151;
        transform: rotate(90deg);
    }
    
    &:active {
        transform: rotate(90deg) scale(0.95);
    }
    
    @media (max-width: 768px) {
        width: 36px;
        height: 36px;
        position: absolute;
        top: 20px;
        right: 20px;
    }
    
    @media (max-width: 480px) {
        width: 32px;
        height: 32px;
        top: 24px;
        right: 16px;
        
        svg {
            width: 20px;
            height: 20px;
        }
    }
`

export const ModalBody = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
    min-height: 0;
    
    @media (max-width: 968px) {
        flex-direction: column;
    }
`

export const Sidebar = styled.div`
    width: 300px;
    min-width: 300px;
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border-right: 1px solid #e5e7eb;
    padding: 24px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    
    /* Scrollbar customizada */
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        
        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }
    
    @media (max-width: 968px) {
        width: 100%;
        min-width: 100%;
        max-height: 220px;
        border-right: none;
        border-bottom: 1px solid #e5e7eb;
        padding: 20px;
    }
    
    @media (max-width: 480px) {
        max-height: 200px;
        padding: 16px;
    }
`

export const SidebarTitle = styled.h3`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.05rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 12px;
    
    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 10px;
    }
    
    @media (max-width: 480px) {
        font-size: 0.95rem;
    }
`

export const SelectedCount = styled.span`
    display: inline-block;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: #fff;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    width: fit-content;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
    
    @media (max-width: 480px) {
        font-size: 0.8rem;
        padding: 5px 12px;
    }
`

export const SelectedList = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    @media (max-width: 968px) {
        flex-direction: row;
        overflow-x: auto;
        padding-bottom: 8px;
        
        /* Scrollbar horizontal customizada */
        &::-webkit-scrollbar {
            height: 6px;
        }
        
        &::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.05);
            border-radius: 3px;
        }
        
        &::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 3px;
        }
    }
`

export const SelectedItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: #fff;
    border: 2px solid #3b82f6;
    border-radius: 12px;
    transition: all 0.2s ease;
    
    &:hover {
        transform: translateX(4px);
        box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
    }
    
    @media (max-width: 968px) {
        flex-shrink: 0;
        min-width: 220px;
        
        &:hover {
            transform: translateY(-2px);
        }
    }
    
    @media (max-width: 480px) {
        min-width: 180px;
        padding: 10px;
        gap: 10px;
    }
`

export const SelectedImage = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
    background: #f3f4f6;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        border-radius: 8px;
    }
`

export const SelectedInfo = styled.div`
    flex: 1;
    min-width: 0;
`

export const SelectedName = styled.p`
    font-size: 0.85rem;
    font-weight: 600;
    color: #1f2937;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    
    @media (max-width: 480px) {
        font-size: 0.8rem;
    }
`

export const SelectedPrice = styled.p`
    font-size: 0.9rem;
    font-weight: 700;
    color: #10b981;
    margin: 0;
    
    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`

export const MainArea = styled.div`
    flex: 1;
    padding: 24px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background: #fff;
    min-height: 0;
    
    /* Scrollbar customizada */
    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-track {
        background: #f9fafb;
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #d1d5db;
        border-radius: 4px;
        
        &:hover {
            background: #9ca3af;
        }
    }
    
    @media (max-width: 768px) {
        padding: 20px;
    }
    
    @media (max-width: 480px) {
        padding: 16px;
    }
`

export const FiltersRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
        gap: 14px;
        margin-bottom: 16px;
    }
    
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 12px;
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
    color: #374151;
    
    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`

export const SearchInput = styled.input`
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 0.95rem;
    color: #1f2937;
    background: #f9fafb;
    transition: all 0.2s ease;
    
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
        padding: 11px 14px;
        font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
        padding: 10px 12px;
        font-size: 0.85rem;
        border-radius: 8px;
    }
`

export const SelectInput = styled.select`
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 0.95rem;
    color: #1f2937;
    background: #f9fafb;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:focus {
        outline: none;
        border-color: #3b82f6;
        background: #fff;
        box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
    }
    
    @media (max-width: 768px) {
        padding: 11px 14px;
        font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
        padding: 10px 12px;
        font-size: 0.85rem;
        border-radius: 8px;
    }
`

export const ProductCount = styled.p`
    font-size: 0.95rem;
    color: #6b7280;
    margin-bottom: 16px;
    font-weight: 500;
    
    span {
        font-weight: 700;
        color: #3b82f6;
    }
    
    @media (max-width: 768px) {
        font-size: 0.9rem;
        margin-bottom: 14px;
    }
    
    @media (max-width: 480px) {
        font-size: 0.85rem;
        margin-bottom: 12px;
    }
`

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
    flex: 1;
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 14px;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 12px;
    }
    
    @media (max-width: 640px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
`

export const ProductCard = styled.div`
    aspect-ratio: 1;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 3px solid ${(props) => (props.$selected ? "#3b82f6" : "transparent")};
    box-shadow: ${(props) => 
        props.$selected 
            ? "0 4px 16px rgba(59, 130, 246, 0.3)" 
            : "0 2px 8px rgba(0, 0, 0, 0.08)"
    };
    position: relative;
    background: #f9fafb;
    
    /* Indicador de seleção */
    ${(props) => props.$selected && `
        &::after {
            content: '✓';
            position: absolute;
            top: 8px;
            right: 8px;
            width: 28px;
            height: 28px;
            background: #3b82f6;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 16px;
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
        }
    `}
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        border-radius: 10px;
        border-width: 2px;
        
        ${(props) => props.$selected && `
            &::after {
                width: 24px;
                height: 24px;
                font-size: 14px;
                top: 6px;
                right: 6px;
            }
        `}
    }
    
    @media (max-width: 480px) {
        border-radius: 8px;
        
        &:hover {
            transform: translateY(-2px);
        }
        
        ${(props) => props.$selected && `
            &::after {
                width: 22px;
                height: 22px;
                font-size: 12px;
                top: 4px;
                right: 4px;
            }
        `}
    }
`

export const ProductCardImage = styled.div`
    width: 100%;
    height: 100%;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    
    ${ProductCard}:hover & img {
        transform: scale(1.05);
    }
`

export const ModalFooter = styled.div`
    display: flex;
    gap: 12px;
    padding: 20px 24px;
    border-top: 1px solid #e5e7eb;
    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
    flex-shrink: 0;
    
    @media (max-width: 768px) {
        padding: 16px 20px;
    }
    
    @media (max-width: 580px) {
        flex-direction: column-reverse;
        gap: 10px;
        padding: 14px 16px;
    }
`

export const SaveSelectionButton = styled.button`
    flex: 1;
    padding: 14px 24px;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    
    &:hover {
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
    
    @media (max-width: 768px) {
        padding: 13px 20px;
        font-size: 0.95rem;
    }
    
    @media (max-width: 580px) {
        width: 100%;
    }
    
    @media (max-width: 480px) {
        padding: 12px 18px;
        font-size: 0.9rem;
        border-radius: 8px;
    }
`

export const CancelButton = styled.button`
    padding: 14px 32px;
    background: #fff;
    color: #6b7280;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        background: #f9fafb;
        border-color: #d1d5db;
        color: #374151;
    }
    
    &:active {
        transform: scale(0.98);
    }
    
    @media (max-width: 768px) {
        padding: 13px 28px;
        font-size: 0.95rem;
    }
    
    @media (max-width: 580px) {
        width: 100%;
        padding: 12px 24px;
    }
    
    @media (max-width: 480px) {
        font-size: 0.9rem;
        border-radius: 8px;
    }
`
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1001;

    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    backdrop-filter: blur(2px);
`;

export const Sidebar = styled.div`
    width: 90%;
    max-width: 450px;
    height: calc(92vh - 20px); /* 100vh - 8vh (header) - 20px (bottom gap) */
    position: fixed;
    top: 8vh;
    left: 5%;
    background: #fff;
    z-index: 1002;
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    
    /* Slide Animation */
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-110%)")};
    opacity: 1;
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                visibility 0.4s ease,
                box-shadow 0.3s ease;

    display: flex;
    flex-direction: column;
    overflow: hidden;

    &:hover {
        box-shadow: 4px 0 28px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 480px) {
        width: 90%;
        left: 5%;
        border-radius: 16px;
    }
`;

export const SideHeader = styled.div`
    width: 100%;
    padding: 20px 24px 10px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
    gap: 12px;
    animation: fadeInDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const BackButton = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    background: #fff;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    color: #333;
    padding: 0;
    animation: fadeInScale 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    &:hover {
        border-color: #000;
        background: #f5f5f5;
        transform: scale(1.1) rotate(-5deg);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const CategoryTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #000;
    margin: 0;
    flex: 1;
    text-align: center;
    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Close = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    background: #fff;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    color: #333;
    padding: 0;
    animation: fadeInScale 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8) rotate(-90deg);
        }
        to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
        }
    }

    &:hover {
        border-color: #000;
        background: #f5f5f5;
        transform: scale(1.1) rotate(90deg);
    }

    &:active {
        transform: scale(0.95) rotate(90deg);
    }
`;

export const SideBody = styled.div`
    width: 100%;
    padding: 10px 24px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
    height: 100%;
    
    /* Custom Scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.1);
        border-radius: 3px;
    }
`;

export const NavList = styled.ul`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 8px;
    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    hr {
        border: none;
        border-top: 1px solid #f0f0f0;
        margin: 12px 0;
        width: 100%;
        animation: expandWidth 0.5s cubic-bezier(0.16, 1, 0.3, 1);

        @keyframes expandWidth {
            from {
                width: 0;
                opacity: 0;
            }
            to {
                width: 100%;
                opacity: 1;
            }
        }
    }
`;

export const NavItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 8px;
    opacity: 0;
    animation: slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    &:nth-child(1) { animation-delay: 0.05s; }
    &:nth-child(2) { animation-delay: 0.1s; }
    &:nth-child(3) { animation-delay: 0.15s; }
    &:nth-child(4) { animation-delay: 0.2s; }
    &:nth-child(5) { animation-delay: 0.25s; }
    &:nth-child(6) { animation-delay: 0.3s; }
    &:nth-child(7) { animation-delay: 0.35s; }
    &:nth-child(8) { animation-delay: 0.4s; }
    &:nth-child(9) { animation-delay: 0.45s; }
    &:nth-child(10) { animation-delay: 0.5s; }

    &:hover {
        padding-left: 12px;
        background: rgba(0, 0, 0, 0.02);
        transform: translateX(4px);
    }

    a, span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: #000;
        font-weight: 400;
        font-size: 18px;
        transition: color 0.2s ease;
    }

    &:hover a, &:hover span {
        color: #333;
    }

    svg {
        color: #000;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:hover svg {
        transform: translateX(4px);
        color: #666;
    }
`;

export const NavLink = styled.span`
    font-size: 18px;
    font-weight: 400; /* Removed bold */
    color: #000;
`;

export const BestSellers = styled.div`
    width: 100%;
    height: 220px;
    position: relative;
    overflow: hidden;
    margin-top: 16px;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%);
    }

    h3 {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: #ffffff;
        margin: 0;
        font-size: 22px;
        font-weight: 700;
        z-index: 1;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        
        img {
            transform: scale(1.05);
        }
    }
`;

// Estilos para visualização de categoria
export const CategoryContent = styled.div`
    width: 100%;
    padding: 0 24px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
    flex: 1;
    animation: fadeInSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    
    @keyframes fadeInSlide {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    /* Custom Scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.1);
        border-radius: 3px;
    }
`;

export const CategoryHeroCard = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 200px;
    background: #eee;
    border-radius: 12px;
    animation: fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }
`;

export const CategoryHeroLink = styled(Link)`
    position: absolute;
    left: 16px;
    bottom: 16px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px 14px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateY(0);
    animation: slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    &:hover {
        background: rgba(0, 0, 0, 0.9);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const CategoryProductsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const CategoryProductCard = styled(Link)`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    opacity: 0;
    animation: fadeInSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;

    @keyframes fadeInSlideUp {
        from {
            opacity: 0;
            transform: translateY(15px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.25s; }
    &:nth-child(5) { animation-delay: 0.3s; }
    &:nth-child(6) { animation-delay: 0.35s; }

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        border-color: #ddd;
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: transform 0.4s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }

    .info {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        transition: background 0.3s ease;
    }

    &:hover .info {
        background: #fafafa;
    }

    .title {
        font-size: 16px;
        font-weight: 600;
        color: #111;
        margin: 0;
        transition: color 0.2s ease;
    }

    &:hover .title {
        color: #000;
    }

    .price {
        font-size: 18px;
        font-weight: 600;
        color: #d00000;
        transition: transform 0.2s ease;
    }

    &:hover .price {
        transform: scale(1.05);
    }

    .oldPrice {
        font-size: 14px;
        color: #777;
        text-decoration: line-through;
    }
`;

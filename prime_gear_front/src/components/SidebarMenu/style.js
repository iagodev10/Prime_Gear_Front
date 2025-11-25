import styled from "styled-components";

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
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s ease;

    display: flex;
    flex-direction: column;
    overflow: hidden;

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
    transition: all 0.2s ease;
    color: #333;
    padding: 0;

    &:hover {
        border-color: #000;
        background: #f5f5f5;
        transform: scale(1.05);
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

    hr {
        border: none;
        border-top: 1px solid #f0f0f0;
        margin: 12px 0;
        width: 100%;
    }
`;

export const NavItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 8px;

    &:hover {
        padding-left: 8px;
    }

    a, span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: #000;
        font-weight: 400; /* Removed bold */
        font-size: 18px;
        /* Removed font-family to use original */
    }

    svg {
        color: #000;
        transition: transform 0.2s;
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

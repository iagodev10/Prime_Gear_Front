import styled from "styled-components";

export const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;

    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const Sidebar = styled.div`
    width: 380px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 1002;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 0 20px 20px 0;

    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
        width: 85%;
        border-radius: 0;
    }
`;

export const SideHeader = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 24px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Close = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    transition: all 0.3s ease;
    color: #333;

    &:hover {
        border-color: #000;
        background: #f5f5f5;
    }
`;

export const SideBody = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
`;

export const NavList = styled.ul`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    list-style: none;

    hr{
        border: none;
        border-top: 1px solid #f0f0f0;
        margin: 12px 0;
        width: 100%;
    }
`;

export const NavItem = styled.li`
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 6px;

    &:hover {
        background: #f9f9f9;
    }

    a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        color: #1c1c1c;
        font-weight: 600;
        font-size: 15px;
    }

    a:hover {
        color: #000;
    }

    svg{
        color: #999;
        transition: transform 0.2s;
    }

    &:hover svg{
        transform: translateX(4px);
        color: #333;
    }
`;

export const NavLink = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #1c1c1c;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Badge = styled.span`
    background-color: #d00000;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
    margin-left: 8px;
`;

export const BestSellers = styled.div`
    width: 100%;
    height: 180px;
    position: relative;
    overflow: hidden;
    margin-top: auto;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
    }

    &::after{
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.6) 100%);
    }

    h3 {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: #ffffff;
        margin: 0;
        font-size: 18px;
        font-weight: 700;
        z-index: 1;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        
        img {
            transform: scale(1.05);
        }
    }
`;

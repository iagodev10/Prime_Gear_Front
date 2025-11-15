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
    width: 450px;
    height: 88%;
    position: fixed;
    top: 9vh;
    left: 0;
    background: #fff;
    z-index: 1002;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 20px;

    transform: ${({ isOpen }) => (isOpen ? "translateX(3vh)" : "translateX(-100%)")};
    transition: transform 0.3s ease;
`;

export const SideHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 40px 20px;
`;

export const Close = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #b3b3b3;
    transition: all 0.3s ease;

    &:hover {
        border: 1px solid #000;
    }
`;

export const SideBody = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
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
        margin: 20px 0;
    }
`;

export const NavItem = styled.li`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #f5f5f5;
        color: #03b304;
    }

    a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        color: #000;
    }

    a:hover {
        color: #03b304;
    }

    svg{
        margin-right: 10px;
    }

    svg:hover{
        transform: scale(1.1);
    }
`;

export const NavLink = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #000;
    transition: all 0.3s ease;

    &:hover {
        color: #03b304;
    }
`;

export const BestSellers = styled.div`
    width: 100%;
    height: 240px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        filter: brightness(0.9);
    }

    &::after{
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.35) 100%);
    }

    h3 {
        position: absolute;
        bottom: 16px;
        left: 16px;
        color: #ffffff;
        margin: 0;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.2px;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        z-index: 1;
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 28px rgba(0,0,0,0.12);
    }
`

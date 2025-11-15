import styled from "styled-components";

export const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;

    opacity: ${({isOpen}) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
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
`;

export const NavList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    list-style: none;

    hr{
        border: none;
        margin: 15px 0;
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

    svg{
        margin-right: 10px;
    }
`;

export const NavLink = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #000;
`;


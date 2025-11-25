import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainWrapper = styled.div`
    width: 95%;
    display: flex;
    gap: 24px;
    @media (max-width: 968px) {
        flex-direction: column;
    }
`

export const Sidebar = styled.div`
    width: 280px;
    min-width: 280px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    padding: 16px;
    height: fit-content;
    position: sticky;
    top: 12vh;
    @media (max-width: 968px) {
        width: 100%;
        min-width: 100%;
        position: relative;
        top: 0;
        display: flex;
        overflow-x: auto;
        gap: 8px;
        padding: 12px;
    }
`

export const SidebarItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${(props) => (props.$active ? "#1a1a2e" : "transparent")};
    color: ${(props) => (props.$active ? "#fff" : "#333")};
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 0.95rem;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        background-color: ${(props) => (props.$active ? "#1a1a2e" : "#f0f0f0")};
    }

    span {
        white-space: nowrap;
    }

    @media (max-width: 968px) {
        margin-bottom: 0;
        padding: 12px 16px;
        flex-shrink: 0;
    }
`

export const SidebarIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MainContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`

export const Title = styled.div`
    h1 {
        font-size: 2.2rem;
        font-weight: 600;
        color: #111;
    }
    p {
        font-size: 1.1rem;
        color: #666;
    }
`

export const Button = styled.button`
    padding: 12px 18px;
    background-color: #000;
    color: #fff;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 18px rgba(0,0,0,0.15);
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -150%;
        width: 50%;
        height: 100%;
        background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.35), rgba(255,255,255,0));
        transform: skewX(-20deg);
    }
    &:hover::after {
        animation: shine 0.8s ease;
    }
    @keyframes shine {
        to { left: 150%; }
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Search = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
    padding: 12px 16px;
    gap: 12px;
    input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 1rem;
        padding-left: 10px;
        color: #333;
    }
    @media (max-width: 768px) {
        flex-wrap: wrap;
        padding: 10px 12px;
        input {
            min-width: 200px;
        }
    }
`

export const Content = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
`

export const ProdutoCard = styled.div`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    }
`

export const ProdImage = styled.div`
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 15px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }
    ${ProdutoCard}:hover & img {
        transform: scale(1.05);
    }
    @media (max-width: 480px) {
        width: 120px;
        height: 120px;
    }
`

export const ProdName = styled.div`
    text-align: start;
    p {
        font-size: 1.1rem;
        font-weight: 600;
        color: #111;
    }
`

export const ProdInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 8px;
    }
`

export const ProdCategoria = styled.div`
    p {
        font-size: 1rem;
        color: #666;
    }
`

export const ProdQuantidade = styled.div`
    background-color: #d6f8d7;
    border-radius: 15px;
    padding: 5px 10px;
    p {
        font-size: 0.9rem;
        font-weight: 500;
        color: #009601;
    }
`

export const ProdPrice = styled.div`
    margin-top: 10px;
    p {
        color: #03b304;
        font-size: 1.4rem;
        font-weight: 700;
    }
`

export const ProdActions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 10px;
    }
`

export const ActionButton = styled.button`
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:first-child {
        background-color: #000;
        margin-right: 10px;
        position: relative;
        overflow: hidden;
        &:hover {
            box-shadow: 0 8px 18px rgba(0,0,0,0.12);
        }
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: -150%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0));
            transform: skewX(-20deg);
        }
        &:hover::after {
            animation: shine 0.8s ease;
        }
    }
    &:last-child {
        background-color: #e63946;
        &:hover {
            background-color: #c1121f;
        }
    }
`

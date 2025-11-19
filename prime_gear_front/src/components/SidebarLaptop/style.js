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

export const Container = styled.div`
    width: 100%;
    min-height: 300px;
    position: fixed;
    top: 8vh;
    left: 0;
    background: #fff;
    z-index: 1002;
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    border-radius: 20px;
`;

export const Panel = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 24px;
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 24px;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-radius: 12px;
    background: #fafafa;
    cursor: pointer;
    transition: background .2s ease, transform .2s ease;
    a{ text-decoration: none; color: #111; flex:1; }
    &:hover{ background: #f0f0f0; transform: translateY(-2px); }
`;

export const Right = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
`;

export const ProductCard = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    img{ width: 100%; height: 160px; object-fit: cover; }
    div{ padding: 12px; font-weight: 600; color: #111; }
`;

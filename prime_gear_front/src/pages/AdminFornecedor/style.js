import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-top: 10vh;
    padding-bottom: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding-top: 10vh;
        padding-bottom: 8vh;
    }
    @media (max-width: 480px) {
        padding-top: 10vh;
        padding-bottom: 5vh;
    }
`;

export const Header = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
`;

export const Title = styled.div`
    h1 {
        font-size: 2.2rem;
        font-weight: 600;
        color: #111;
        margin: 0;
    }
    p {
        font-size: 1.1rem;
        color: #666;
        margin-top: 5px;
    }

    @media (max-width: 768px) {
        h1 { font-size: 1.8rem; }
        p { font-size: 1rem; }
    }
`;

export const Button = styled.button`
    padding: 12px 20px;
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
    &::after{
        content: '';
        position: absolute;
        top: 0; left: -150%;
        width: 50%; height: 100%;
        background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.35), rgba(255,255,255,0));
        transform: skewX(-20deg);
    }
    &:hover::after{animation: shine 0.8s ease;}
    @keyframes shine {to{left:150%;}}

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Search = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    padding: 12px 16px;
    margin-bottom: 30px;
    input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 1rem;
        padding-left: 10px;
        color: #333;
    }
`;

export const Content = styled.div`
    width: 90%;
    display: grid;
    /* Ajuste para telas menores: minmax reduzido para 280px */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Fornecedor = styled.div`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
    }

    h3 {
        font-size: 1.4rem;
        font-weight: 600;
        color: #111;
        margin: 0 0 15px 0;
        width: 100%;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
    }

    .label{
        font-size: 0.9rem;
        color: #888;
        font-weight: 600;
        margin-top: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    p {
        font-size: 1.05rem;
        color: #333;
        margin-bottom: 5px;
        font-weight: 500;
        word-break: break-word; /* Evita que emails longos quebrem o layout */
    }
`;

export const Action = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    gap: 10px;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const Edit = styled.div`
    flex: 4;
    padding: 12px 0;
    background-color: #000;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    
    &:hover { 
        background-color: #333;
        transform: translateY(-1px); 
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Excluir = styled.div`
    flex: 1;
    padding: 12px 0;
    background-color: #dc3545;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #c82333;
        transform: translateY(-1px);
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;
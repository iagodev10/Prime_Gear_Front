import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-top: 10vh;
    padding-bottom: 4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow-x: hidden;

    @media (max-width: 768px) {
        padding-top: 10vh;
        padding-bottom: 6vh;
    }
    @media (max-width: 480px) {
        padding-top: 10vh;
    }
`;

export const Header = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    @media (max-width: 480px) {
        margin-bottom: 16px;
    }
`;

export const Title = styled.div`
    h1 {
        font-size: 2.1rem;
        font-weight: 600;
        color: #111;
    }
    p {
        font-size: 1rem;
        color: #666;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 1.8rem;
        }
        p {
            font-size: 1rem;
        }
    }
    @media (max-width: 480px) {
        h1 { font-size: 1.6rem; }
        p { font-size: 0.95rem; }
    }
`;

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
    @media (max-width: 480px) {
        padding: 10px 14px;
        font-size: 0.95rem;
    }
`;

export const Search = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
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
    @media (max-width: 480px) {
        margin-bottom: 20px;
        padding: 10px 12px;
    }
`;

export const Content = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 480px) {
        gap: 18px;
    }
`;

export const Transportadora = styled.div`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: hidden;
`;

export const Name = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 20px;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #161616, #2c2c2c);
    border-radius: 12px 12px 0 0;

    div {
        width: 50px;
        height: 50px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        background: linear-gradient(135deg, #000000, #6e6e6e);
    }

    h3 {
        font-size: 1.3rem;
        font-weight: 500;
        color: white;
        margin: 0;
    }
    @media (max-width: 480px) {
        padding: 10px 16px;
        div { width: 42px; height: 42px; }
        h3 { font-size: 1.1rem; }
    }
`;

export const Action = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    gap: 14px;
    margin-top: 20px;
    margin-left: 5%;

    @media (max-width: 768px) {
        flex-direction: column;
        
        div {
            width: 100%;
        }
    }
    @media (max-width: 480px) {
        gap: 10px;
        margin-bottom: 20px;
        margin-top: 16px;
    }
`;

export const Edit = styled.div`
    padding: 10px 0;
    flex: 4;
    background-color: black;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 18px rgba(0,0,0,0.12);
    }
    &::after{
        content: '';
        position: absolute;
        top: 0; left: -150%;
        width: 50%; height: 100%;
        background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0));
        transform: skewX(-20deg);
    }
    &:hover::after{animation: shine 0.8s ease;}
    @keyframes shine {to{left:150%;}}
`;

export const Excluir = styled.div`
    padding: 10px 0;
    flex: 1;
    background-color: #dc3545;
    color: #fff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.3s ease;
    &:hover {
        background-color: #c82333;
        transform: scale(1.05);
    }
    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 10px 0;
    }
`;

export const TransPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-left: 5%;
    margin-bottom: 20px;
    p {
        font-size: 1.3rem;
        color: #03b304;
        font-weight: 600;
    }
    .label {
        font-size: 0.9rem;
        color: #666;
        font-weight: 500;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-left: 5%;
    margin-bottom: 20px;
    p {
        font-size: 1rem;
        color: #333;
        font-weight: 500;
    }
    .label {
        font-size: 0.95rem;
        color: #666;
        font-weight: 500;
    }
    @media (max-width: 480px) {
        margin-left: 4%;
    }
`;
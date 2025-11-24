import styled from 'styled-components'	

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    margin-bottom: 50px;
    margin-top: -30vh;
`

export const Header = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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
`;

export const Content = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 25px;
`;

export const Categoria = styled.div`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 18px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    }
`;

export const CatImage = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 15px;
    background-color: #f5f5f5;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }
    ${Categoria}:hover & img {
        transform: scale(1.05);
    }
`;

export const Infos = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 20px;
    h3 {
        font-size: 1.25rem;
        font-weight: 500;
        color: #111;
    }
    p {
        font-size: 0.98rem;
        color: #444;
    }
`;

export const Action = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
    gap: 10px;
`;

export const Edit = styled.div`
    padding: 10px 14px;
    flex: 4;
    background-color: #000;
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
    &:hover { transform: translateY(-1px); box-shadow: 0 8px 18px rgba(0,0,0,0.12); }
    &::after{ content:''; position:absolute; top:0; left:-150%; width:50%; height:100%; background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0)); transform: skewX(-20deg); }
    &:hover::after{ animation: shine 0.8s ease; }
`;

export const Excluir = styled.div`
    padding: 10px 14px;
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
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    svg { transition: transform .2s ease, opacity .2s ease; }
    &:hover {
        background-color: #c82333;
        transform: scale(1.05);
        box-shadow: 0 6px 16px rgba(0,0,0,0.18);
    }
    &:hover svg {
        transform: scale(1.1);
        opacity: 0.9;
    }
`;

export const Badge = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    font-size: 0.8rem;
    border-radius: 999px;
    background: #e6f7e6;
    color: #03b304;
    border: 1px solid #bfe8bf;
`;
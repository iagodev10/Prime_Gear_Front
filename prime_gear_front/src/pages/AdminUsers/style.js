import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

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

export const CardGeral = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;
`;

export const Total = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.10);
    }
`;

export const Icon = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: ${props => props.color || "#f0f0f0"};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;

    p:first-child {
        color: #666;
        font-size: 0.95rem;
        margin: 0;
    }

    p:last-child {
        font-size: 1.6rem;
        font-weight: 600;
        color: #111;
        margin: 0;
    }
`;

export const Content = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
    gap: 25px;
`;

export const UserCard = styled.div`
    width: 100%;
    background-color: white;
    color: #fff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.10);
    }
`;

export const Icone = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: ${props => props.color || "#f0f0f0"};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    margin-left: 16px;
`;

export const Status = styled.div`
    display: flex;
    justify-content: center;
    gap: 6px;
    align-items: center;
`;

export const SNome = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: black;
    margin: 0;
`;

export const SRol = styled.span`
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 0.80rem;
  font-weight: 500;

  background: ${(props) =>
    props.role === "admin"
      ? "rgba(186, 142, 255, 0.35)"
      : "rgba(128, 185, 255, 0.35)"};

  color: ${(props) =>
    props.role === "admin" ? "#7A30D6" : "#2B7BE4"};
`;



export const SMail = styled.p`
    font-size: 1.1rem;
    color: #666;
    margin: 0;
`;

export const Data = styled.p`
    font-size: 1.1rem;
    color: black;
    margin: 0;
`;

export const Conteudo = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
`;


export const Conteudo2 = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
`;
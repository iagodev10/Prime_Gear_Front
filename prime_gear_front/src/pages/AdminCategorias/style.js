import styled from 'styled-components'	

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`

export const Header = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 8vh;
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
    &:hover {
        background-color: #333;
        transform: scale(1.05);
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
    // padding: 20px 0;
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
    gap: 18px;
    margin-bottom: 20px;
    h3 {
        font-size: 1.4rem;
        font-weight: 500;
        color: #111;
    }
    p {
        font-size: 1rem;
        color: #666;
    }
`;

export const Action = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    gap: 14px;
`;

export const Edit = styled.div`
    padding: 10px 0;
    flex: 4;
    background-color: #007bff;
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
        background-color: #0056b3;
        transform: scale(1.05);
    }
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
`;
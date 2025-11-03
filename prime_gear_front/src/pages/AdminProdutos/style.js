import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
    margin-top: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
`;


export const Title = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h1 {
        font-size: 2.2rem;
        font-weight: 600;
        color: black;
    }
    p {
        font-size: 1.2rem;
        font-weight: 400;
        color: black;
    }
`;

export const Button = styled.button`
    padding: 14px 18px;
    background-color: #000;
    color: #fff;
    border-radius: 99px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 20px;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #333;
        color: #fff;
        transform: scale(1.05);
        transition: all 0.3s ease;
    }

`;


export const Search = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 30px;
    input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 1.2rem;
        color: black;
        background: transparent;
        padding-left: 20px ;
    }
    input::placeholder {
        color: #aaa;
    }
    &:focus-within {
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
    }
`;


export const Content = styled.div`
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns:  repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    margin-bottom: 20px;

`;


export const ProdutoCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 22px 2%;
`;

export const ProdImage = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ProdName = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    p {
        font-size: 1.2rem;
        font-weight: 500;
        color: black;
    }
`;

export const ProdInfos = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ProdCategoria = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    p {
        font-size: 1.2rem;
        font-weight: 500;
        color: #1e1e1e;
    }
`;

export const ProdQuantidade = styled.div`
    /* width: 20%; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d6f8d7;
    border-radius: 15px;
    padding: 8px 14px;
    p {
        font-size: 1rem;
        font-weight: 500;
        color: #009601;
    }
`;

export const ProdPrice = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    p{
        color: #03b304;
        font-size: 1.4rem;
        font-weight: 600;
    }
`;

export const ProdActions = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const Edit = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
    p {
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export const Delete = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
    p {
        font-size: 1.2rem;
        font-weight: 600;
        color: #960000;
    }
`;
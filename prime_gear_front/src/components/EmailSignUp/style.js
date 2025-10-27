import Wallpaper from "../../assets/images/wallpaper.png";
import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    width: 100%;
    height:450px;
    background-image: url(${Wallpaper});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5%;
    background-repeat:no-repeat;
`;

export const Content = styled.div`
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 12px;
    padding: 2rem 3rem;
    max-width: 700px;
    text-align: center;

    h2{
        font-size: 1.8rem;
        margin-bottom: 0.8rem;
        font-weight: 500;
    }

    p{
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }
`;

export const Form = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  input {
    flex: 1;
    padding: 1rem 1rem;
    border: none;
    border-radius: 25px;
    outline: none;
  }

  button {
    background: white;
    color: black;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #ddd;
    }
  }
`;
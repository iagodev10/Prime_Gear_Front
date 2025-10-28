import styled from "styled-components";

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid black;
  margin: 25px 0;
`;

export const Container = styled.section`
    width: 100%;
    display: flex;
    margin-top: 10vh;
`;

export const About = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;
`;

export const Title = styled.h2`
    font-size: 2.2rem;
    color: black;
    font-weight: 500;
    text-align: center;
`;

export const Paragrafh = styled.p`
    font-size: 1rem;
    line-height: 1.2;
    color: black;
`;
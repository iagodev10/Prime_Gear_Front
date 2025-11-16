import styled, { keyframes } from "styled-components";

import EmailImagem from '../../assets/images/EmailService.png';

const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-3px);
  }
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  margin-top: 15vh;
  flex-direction: column;
`;

export const Canais = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font: 2.5rem;
  font-weight: 500;
  color: black;
  text-align: center;
  margin-bottom: 40px;
`;

export const Title1 = styled.h1`
  font-size: 3.2rem;
  color: black;
  font-weight: 500;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 50px;
`;

export const SubTitle = styled.p`
  font-size: 1.7rem;
  color: black;
  text-align: center;
`;

export const Cards = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 70px;

  @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 coluna em telas menores */
  }
`;

export const Comprar = styled.div`
  background-color: #e1e1e1;
  border-radius: 12px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  border: 1px solid #eee;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
`;

export const Text = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: black;
  margin: 0;
`;

export const Suport = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 16px;
  padding: 20px;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  transition: transform .25s ease, box-shadow .25s ease;
  &:hover{ transform: translateY(-4px); box-shadow: 0 8px 22px rgba(0,0,0,0.12); }
`;
export const Titulo = styled.h3`
  text-align: left;
  font-size: 1.4rem;
  color: black;
  font-weight: 500;
`;

export const Texto = styled.p`
  font-size: 1.2rem;
  color: black;
  text-align: left;
`;

export const Info = styled.p`
  color: #03b304;
  font-size: 1.2rem;
  text-align: center;
`;

export const Button = styled.a`
  color: white;
    background-color: black;
    padding: 12px 20px; 
    border-radius: 99px;
    display: flex;
    align-items: center; 
    justify-content: center; 
    gap: 10px;
    cursor: pointer;
    text-decoration: none; 
    font-size: 1rem;
    transition: all 0.3s ease; 
    border: 2px solid transparent; 

    &:hover {
        background-color: #333; 
        border-color: #666; 
        animation: ${slideUp} 0.3s forwards;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
    }

    svg {
        transition: transform 0.3s ease;
    }

    &:hover svg {
        transform: translateX(3px) translateY(-3px); 
    }
`;

export const SuporteTecnico = styled.div`
    width: 80%;
    margin: 60px auto; /* Margem maior para separar as seções */
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo */
    
    /* Linha divisória no topo */
    border-top: 2px solid #f0f0f0;
    padding-top: 40px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 600px; /* Limita a largura do formulário */
`;

export const FormLabel = styled.label`
    font-size: 1rem;
    font-weight: 500;
    color: black;
    text-align: left;
`;

export const FormInput = styled.input`
    padding: 14px 16px;
    border: 1px solid black;
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0,123,255,0.2);
    }
`;

export const FormTextArea = styled.textarea`
    padding: 14px 16px;
    border: 1px solid black;
    border-radius: 12px;
    font-size: 1rem;
    min-height: 150px;
    resize: vertical; 
    font-family: Arial, sans-serif; 
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0,123,255,0.2);
    }
`;

// Vamos estender o 'Button' que você já tem
export const FormButton = styled(Button)`
    width: 100%;
    max-width: 300px;
    margin-top: 10px;
`;

export const AjudaComprar = styled.div`
    width: 80%;
    margin: 60px auto;
    display: flex;
    flex-direction: column;
    align-items: center; 
    
    border-top: 2px solid #f0f0f0;
    padding-top: 40px;
`;

export const FaqContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
`;

export const FaqItem = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    overflow: hidden; 
    transition: all 0.3s ease;

    &:hover {
        border-color: #ccc;
    }
`;

export const FaqQuestion = styled.div`
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: #f9f9f9;
    font-weight: 600;
    color: #333;
    font-size: 1.1rem;

    svg {
        flex-shrink: 0; 
        margin-left: 20px;
    }
`;

export const FaqAnswer = styled.div`
    max-height: ${(props) => (props.isOpen ? '200px' : '0')};
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    overflow: hidden;
    
    padding: ${(props) => (props.isOpen ? '20px 24px' : '0 24px')};
    transition: all 0.3s ease-in-out;
    
    background-color: #fff;
    color: #555;
    line-height: 1.6;
`;

export const Email = styled.section`
  width: 80%;
  margin: auto;
  margin-top: 100px;
`;

export const EmailImage = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${EmailImagem});
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`;

export const EmailText = styled.div`
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  color: #ffffff; 
  text-align: center;
  z-index: 12;
  width: 80%; 
  font-size: 3rem;
  font-weight: 500;
`;

export const Duvidas = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 50px;
  color: white;
  background-color: #e1e1e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  gap: 40px;
  margin-bottom: 50px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
`;

export const DTitulo = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const DTexto = styled.p`
  color: black;
  font-size: 1rem;
  text-align: center;
`;

export const Buttond = styled.a`
    color: black;
    background-color: transparent;
    padding: 12px 20px; 
    border-radius: 99px;
    display: flex;
    align-items: center; 
    justify-content: center; 
    gap: 10px;
    cursor: pointer;
    text-decoration: none; 
    font-size: 1rem;
    transition: all 0.3s ease; 
    border: 2px solid black; 

    &:hover {
        background-color: #333; 
        border-color: #666; 
        animation: ${slideUp} 0.3s forwards;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
        color: white;
    }

    svg {
        transition: transform 0.3s ease;
    }

    &:hover svg {
        transform: translateX(3px) translateY(-3px); 
    }
`;

export const FeatureSection = styled.section`
  width: 80%;
  margin: 40px auto 80px auto;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const FeatureCard = styled.div`
  background: #fff;
  border: 2px solid black;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  transition: transform .25s ease, box-shadow .25s ease;
  &:hover{ transform: translateY(-4px); box-shadow: 0 8px 22px rgba(0,0,0,0.12); }
  h4{ font-size: 1.2rem; color: black; margin:0; }
  p{ color: #333; margin:0; }
`;
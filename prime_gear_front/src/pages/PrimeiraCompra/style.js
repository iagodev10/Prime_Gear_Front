import styled from "styled-components";
import { Link } from "react-router-dom"; 
import Banner1 from '../../assets/images/bannerBem.png'

// Container principal da página
export const PageContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    color: black;
    padding-top: 8vh; 
    
`;

export const PageHeader = styled.div`
    text-align: center;
    margin-bottom: 60px;
`;

export const PageCont = styled.section`
    width: 100%;
    max-width: 1400px;
    margin: auto;
    margin-bottom: 50px;
`;

export const Banner = styled.section`
    position: relative;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    text-align: center;
    background-image: url(${Banner1});
    background-position: center;
    background-size: cover;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff; 
    margin: 0 0 10px 0;
    z-index: 2; 
`;

export const Title1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color: black; 
    margin: 0 0 10px 0;
    z-index: 2; 
`;

export const SubTitle = styled.p`
    font-size: 1.25rem;
    color: #f0f0f0; 
    margin: 0;
    z-index: 2;
`;

export const SubTitle1 = styled.p`
    font-size: 1.25rem;
    color: black; 
    margin: 0;
    z-index: 2;
`;

export const StepsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 30px;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const StepCard = styled.div`
    background-color: white;
    border: 1px solid black;
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const StepIconWrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StepTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: #000;
    margin: 0;
`;

export const StepDescription = styled.p`
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
    margin: 0;
`;

// Seção final de Call to Action (CTA)
export const CtaContainer = styled.div`
    text-align: center;
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid #f0f0f0;
`;

// Botão principal (preto)
export const CtaButton = styled(Link)` // Mude para 'a' se não usar React Router
    display: inline-block;
    background-color: #000;
    color: #fff;
    padding: 16px 40px;
    border-radius: 99px; /* Formato pílula */
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease;

    &:hover {
        background-color: #333;
        transform: scale(1.05);
    }
`;


export const HelpLink = styled(Link)` 
    display: block;
    margin-top: 20px;
    font-size: 1rem;
    color: #555;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;


export const BenefitsSection = styled.section`
    width: 100%;
    margin: 10px auto 60px auto; 
    padding: 60px 20px;
`;

export const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1200px; 
    margin: 40px auto 0 auto;
    
    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const BenefitCard = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    }
`;

export const BenefitIconWrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 12px; /* Quadrado arredondado */
    display: flex;
    align-items: center;
    justify-content: center;
    /* Recebe a cor de fundo pela prop 'bgColor' */
    background-color: ${(props) => props.bgColor || '#e0e0e0'};
    color: #fff; /* Ícone branco */
    margin-bottom: 20px;
`;

export const BenefitTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: #000;
    margin: 0 0 10px 0;
`;

export const BenefitDescription = styled.p`
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
    margin: 0;
`;
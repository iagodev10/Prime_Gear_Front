import styled from "styled-components";
import { Link } from "react-router-dom"; 
import Banner1 from '../../assets/images/bannerBem.png'

// Container principal da página
export const PageContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    color: #0f0f12;
    padding-top: 8vh; 
    @media (max-width: 1024px){ padding-top: 7vh; }
    @media (max-width: 768px){ padding-top: 6vh; }
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
    overflow: hidden;
    isolation: isolate;
    &::before{
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(60% 60% at 50% 50%, rgba(196,181,253,0.35) 0%, rgba(255,255,255,0) 60%);
    }
    @media (max-width: 1024px){ height: 320px; }
    @media (max-width: 768px){ height: 260px; }
    @media (max-width: 480px){ height: 220px; }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff; 
    margin: 0 0 10px 0;
    z-index: 2; 
    @media (max-width: 1024px){ font-size: 2.2rem; }
    @media (max-width: 768px){ font-size: 2rem; }
    @media (max-width: 480px){ font-size: 1.8rem; }
`;

export const Title1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color: #0f0f12; 
    margin: 0 0 10px 0;
    z-index: 2; 
    @media (max-width: 1024px){ font-size: 2.2rem; }
    @media (max-width: 768px){ font-size: 2rem; }
    @media (max-width: 480px){ font-size: 1.8rem; }
`;

export const SubTitle = styled.p`
    font-size: 1.25rem;
    color: #f0f0f0; 
    margin: 0;
    z-index: 2;
    @media (max-width: 768px){ font-size: 1.05rem; }
    @media (max-width: 480px){ font-size: 0.95rem; }
`;

export const SubTitle1 = styled.p`
    font-size: 1.25rem;
    color: #3b3b40; 
    margin: 0;
    z-index: 2;
    @media (max-width: 768px){ font-size: 1.05rem; }
    @media (max-width: 480px){ font-size: 0.95rem; }
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
    position: relative;
    background: #ffffff;
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    box-shadow: 0 6px 24px rgba(0, 123, 255, 0.08);
    border: 1px solid rgba(0,123,255,0.12);
    backdrop-filter: saturate(1.1);
    transition: transform .25s ease, box-shadow .25s ease;
    &:hover{transform: translateY(-6px); box-shadow: 0 10px 28px rgba(0,123,255,0.14);}    
`;

export const StepIconWrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0052CC 0%, #007bff 60%, #66B2FF 100%);
    color: #fff;
    box-shadow: 0 8px 18px rgba(0,123,255,0.25);
`;

export const StepTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: #121217;
    margin: 0;
`;

export const StepDescription = styled.p`
    font-size: 1rem;
    color: #4a4a50;
    line-height: 1.5;
    margin: 0;
`;

// Seção final de Call to Action (CTA)
export const CtaContainer = styled.div`
    text-align: center;
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid #ececf3;
`;

// Botão principal (preto)
export const CtaButton = styled(Link)`
    display: inline-block;
    background: linear-gradient(135deg, #0052CC 0%, #007bff 60%, #66B2FF 100%);
    color: #fff;
    padding: 16px 40px;
    border-radius: 99px; /* Formato pílula */
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease;

    &:hover {
        filter: brightness(1.08);
        transform: translateY(-3px);
    }
    @media (max-width: 768px){
        width: 100%;
        max-width: 480px;
    }
`;


export const HelpLink = styled(Link)` 
    display: block;
    margin-top: 20px;
    font-size: 1rem;
    color: #4a4a50;
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
    border: 1px solid rgba(0,123,255,0.1);
    box-shadow: 0 6px 22px rgba(0,123,255,0.08);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 26px rgba(0,123,255,0.14);
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
    box-shadow: 0 8px 18px rgba(0,0,0,0.12);
`;

export const BenefitTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: #121217;
    margin: 0 0 10px 0;
`;

export const BenefitDescription = styled.p`
    font-size: 0.95rem;
    color: #4a4a50;
    line-height: 1.5;
    margin: 0;
`;

export const FAQSection = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 40px auto 80px auto;
    padding: 0 20px;
`;

export const FAQItem = styled.div`
    background: #fff;
    border: 1px solid rgba(0,123,255,0.12);
    border-radius: 14px;
    margin-bottom: 14px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,123,255,0.06);
`;

export const FAQQuestion = styled.button`
    width: 100%;
    text-align: left;
    padding: 18px 22px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.05rem;
    font-weight: 600;
    color: #121217;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FAQAnswer = styled.div`
    padding: 0 22px 18px 22px;
    color: #4a4a50;
    font-size: 0.98rem;
`;

export const TestimonialsSection = styled.section`
    width: 100%;
    margin: 20px auto 80px auto;
    padding: 40px 20px;
`;

export const TestimonialCard = styled.div`
    background: #fff;
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
`;

export const TestimonialAuthor = styled.div`
    margin-top: 12px;
    color: #3b3b40;
    font-weight: 600;
`;
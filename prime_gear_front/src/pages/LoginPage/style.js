import styled from "styled-components";

export const LoginBack = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const LoginLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    width: 100%;
    
    background: radial-gradient(circle, #333, #111);
`;


export const LoginBox = styled.div`
    background: #fff;
    padding: 40px;
    border-radius: 16px;
    width: 100%;
    max-width: 620px;
    text-align: left;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
    color: #222;
    margin: 0 0 24px 0;
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px; 
`;


export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;


export const Label = styled.label`
    font-weight: 500;
    color: black;
    font-size: 0.9rem;

    &::after {
        content: ' *';
        color: #e60000;
    }
`;


export const Input = styled.input`
    padding: 14px 20px;
    border: 1px solid black;
    border-radius: 99px;
    font-size: 1rem;
    color: #939598;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;


export const ForgotPassword = styled.a`
    text-align: left;
    font-size: 0.9rem;
    color: black;
    text-decoration: none;
    margin-top: -10px; 
    &:hover {
        text-decoration: underline;
    }
`;

// Botão "Entrar"
export const SubmitButton = styled.button`
    background: #000;
    color: #fff;
    border: none;
    padding: 16px;
    font-size: 1.2rem;
    border-radius: 99px; 
    cursor: pointer;
    text-transform: uppercase;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`;

export const SignUpLink = styled.p`
    text-align: center;
    margin-top: 24px;
    color: black;
    font-size: 0.98rem;

    span {
        color: #03b304;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;


export const FeaturesGrid = styled.section`
    width: 90%;
    max-width: 90%;
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Uma coluna em telemóveis */
    }
`;

// Card base
const BaseFeatureCard = styled.div`
    background-color: #d9d9d9;
    border-radius: 16px;
    padding: 24px;
    text-align: center;
`;

export const FeatureCardLarge = styled(BaseFeatureCard)`
    grid-column: span 3;
    @media (max-width: 768px) {
        grid-column: span 1;
    }
`;

export const FeatureCardSmall = styled(BaseFeatureCard)`
    grid-column: span 2;
    @media (max-width: 768px) {
        grid-column: span 1; 
    }
`;

export const FeatureTitle = styled.p`
    font-size: 1.1rem;
    color: black;
    margin: 0 0 8px 0;
`;

export const FeatureMainText = styled.h3`
    font-size: 1.4rem;
    color: #000;
    margin: 0;
`;
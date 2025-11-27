import styled from "styled-components";

export const LoginBack = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 8vh;

    @media (max-width: 768px) {
        padding-top: 70px;
    }
`;

export const LoginLogin = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 80vh;
    width: 100%;
    position: relative;
    z-index: 1;
    background: radial-gradient(circle, #333, #111);
    padding: 60px 16px 40px;

    @media (max-width: 768px) {
        padding: 40px 12px 30px;
        min-height: auto;
        align-items: center;
    }

    @media (max-width: 480px) {
        padding: 30px 10px 20px;
    }
`;


export const LoginBox = styled.div`
    background: #fff;
    padding: clamp(20px, 4vw, 40px);
    border-radius: 16px;
    width: 100%;
    max-width: 620px;
    text-align: left;
    box-shadow: 0 12px 32px rgba(0,0,0,0.18);
    position: relative;

    @media (max-width: 768px) {
        padding: clamp(20px, 5vw, 32px);
        border-radius: 12px;
    }

    @media (max-width: 480px) {
        padding: 20px 16px;
        border-radius: 12px;
    }
`;

export const FlipWrapper = styled.div`
    perspective: 1200px;
    width: 100%;
    max-width: 620px;
    position: relative;
    z-index: 2;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

export const FlipCard = styled.div`
    position: relative;
    width: 100%;
    min-height: 420px;
    transform-style: preserve-3d;
    transition: transform 0.6s ease, height 0.3s ease;
    transform: ${({ $flipped }) => ($flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
    will-change: transform, height;
    z-index: 2;
    margin-bottom: 0;
    overflow: visible;

    @media (max-width: 768px) {
        min-height: auto;
    }
`;

export const Face = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    backface-visibility: hidden;
    z-index: 1;
    pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
`;

export const FaceFront = styled(Face)`
    transform: rotateY(0deg);
`;

export const FaceBack = styled(Face)`
    transform: rotateY(180deg);
`;

export const Title = styled.h1`
    text-align: center;
    font-size: clamp(1.6rem, 3.6vw, 2.2rem);
    font-weight: 500;
    color: #222;
    margin: 0 0 24px 0;

    @media (max-width: 768px) {
        font-size: clamp(1.4rem, 4vw, 1.8rem);
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
        margin-bottom: 18px;
    }
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
        gap: 18px;
    }

    @media (max-width: 480px) {
        gap: 16px;
    }
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

    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`;


export const Input = styled.input`
    padding: 14px 20px;
    border: 1px solid black;
    border-radius: 99px;
    font-size: 1rem;
    color: #939598;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.12);
    }

    @media (max-width: 768px) {
        padding: 12px 18px;
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        padding: 10px 16px;
        font-size: 0.9rem;
        border-radius: 50px;
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
    width: 100%;
    margin-top: 4px;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        padding: 14px;
        font-size: 1.1rem;
    }

    @media (max-width: 480px) {
        padding: 12px;
        font-size: 1rem;
        border-radius: 50px;
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

    @media (max-width: 768px) {
        margin-top: 20px;
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        margin-top: 18px;
        font-size: 0.9rem;
    }
`;


export const FeaturesGrid = styled.section`
    width: 90%;
    max-width: 1400px;
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    position: relative;
    z-index: 0;

    @media (max-width: 1024px) {
        width: 95%;
        gap: 16px;
    }

    @media (max-width: 768px) {
        display: none;
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

    @media (max-width: 1024px) {
        grid-column: span 3;
    }
`;

export const FeatureCardSmall = styled(BaseFeatureCard)`
    grid-column: span 2;

    @media (max-width: 1024px) {
        grid-column: span 2;
    }
`;

export const FeaturesCarousel = styled.section`
    display: none;
    width: 90%;
    max-width: 1400px;
    margin: 40px auto;
    position: relative;
    z-index: 0;
    padding: 0 20px;

    @media (max-width: 1024px) {
        display: block;
        width: 95%;
        padding: 0 15px;
    }

    @media (max-width: 768px) {
        width: 95%;
        margin: 30px auto;
        padding: 0 10px;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 20px auto;
        padding: 0 12px;
    }

    .swiper {
        padding-bottom: 20px;
        overflow: visible;
    }

    .swiper-slide {
        height: auto;
    }

    /* Esconder setas de navegação */
    .swiper-button-next,
    .swiper-button-prev {
        display: none !important;
    }
`;

export const FeatureCard = styled.div`
    background-color: #d9d9d9;
    border-radius: 16px;
    padding: 24px;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 150px;

    @media (max-width: 768px) {
        padding: 20px;
        min-height: 140px;
    }

    @media (max-width: 480px) {
        padding: 16px;
        min-height: 120px;
    }
`;

export const FeatureTitle = styled.p`
    font-size: 1.1rem;
    color: black;
    margin: 0 0 8px 0;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 6px;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        margin-bottom: 4px;
    }
`;

export const FeatureMainText = styled.h3`
    font-size: 1.4rem;
    color: #000;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;

    @media (max-width: 768px) {
        gap: 12px;
    }

    @media (max-width: 640px) { 
        grid-template-columns: 1fr;
        gap: 16px;
    }

    @media (max-width: 480px) {
        gap: 14px;
    }
`;

export const Select = styled.select`
    padding: 14px 20px;
    border: 1px solid black;
    border-radius: 99px;
    font-size: 1rem;
    color: #111;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.12);
    }

    @media (max-width: 768px) {
        padding: 12px 18px;
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        padding: 10px 16px;
        font-size: 0.9rem;
        border-radius: 50px;
    }
`;

export const CepRow = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-end;

    @media (max-width: 768px) {
        gap: 10px;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`;

export const CepInput = styled(Input)`
    flex: 1;
`;

export const CepButton = styled.button`
    background: #000;
    color: #fff;
    border: none;
    padding: 14px 24px;
    border-radius: 99px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition: opacity 0.2s ease;
    height: fit-content;
    flex-shrink: 0;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        padding: 12px 20px;
        font-size: 0.95rem;
    }

    @media (max-width: 640px) {
        width: 100%;
        margin-top: 10px;
        padding: 12px;
        border-radius: 50px;
    }

    @media (max-width: 480px) {
        padding: 10px;
        font-size: 0.9rem;
    }
`;

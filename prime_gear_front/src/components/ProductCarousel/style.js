import styled from "styled-components";

// O container de toda a seção do carrossel
export const CarouselContainer = styled.section`
  width: 100%;
  margin: 1px auto;
  padding: 5%;
  position: relative;
  margin-bottom: 50px;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;

  /* Mobile pequeno (320px - 480px) */
  @media (max-width: 480px) {
    padding: 8% 4%;
    margin-bottom: 20px;
  }

  /* Mobile médio e tablet (481px - 768px) */
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 6% 4%;
    margin-bottom: 30px;
  }

  /* Tablet grande (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 4% 3%;
    margin-bottom: 40px;
  }

  /* Desktop (1025px+) */
  @media (min-width: 1025px) {
    padding: 3% 5%;
    margin-bottom: 50px;
  }
`;

// Título da seção (ex: "Destaques da Semana")
export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 40px;
  color: #1c1c1c;
  line-height: 1.2;

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 16px;
  }

  /* Mobile médio (481px - 768px) */
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
  }

  /* Tablet (769px - 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.75rem;
    margin-bottom: 30px;
  }

  /* Desktop grande (1440px+) */
  @media (min-width: 1440px) {
    font-size: 2.25rem;
    margin-bottom: 50px;
  }
`;

// Container para o Swiper (para posicionar as setas)
export const SwiperContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 16px;
  max-width: 100%;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    padding: 0 24px;
  }
  /* Garante que o card não seja "cortado" pela sombra */
  .swiper-slide {
    height: auto;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
  }

  /* Estilizando as setas de navegação do Swiper */
  .swiper-button-prev,
  .swiper-button-next {
    color: #000000;
    top: 50%;
    transform: translateY(-70%);
    width: 40px;
    height: 40px;
    z-index: 10;
    pointer-events: auto;

    &::after {
      font-size: 20px;
    }

    /* Esconde as setas em tablets e mobile */
    @media (max-width: 1024px) {
      display: none;
    }
  }

  /* Desktop grande - setas maiores */
  @media (min-width: 1440px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 50px;
      height: 50px;

      &::after {
        font-size: 24px;
      }
    }
  }

  /* Posição da seta esquerda */
  .swiper-button-prev {
    left: -10px;

    @media (min-width: 1440px) {
      left: -20px;
    }
  }

  /* Posição da seta direita */
  .swiper-button-next {
    right: -10px;

    @media (min-width: 1440px) {
      right: -20px;
    }
  }
`;

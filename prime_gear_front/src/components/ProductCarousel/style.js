import styled from 'styled-components';

// O container de toda a seção do carrossel
export const CarouselContainer = styled.section`
  width: 100%;
  margin: 1px auto; 
  padding: 5%;
  position: relative;
  margin-bottom: 50px; /* Garante espaço para a seção debaixo */

  @media (max-width: 768px) {
    padding: 10% 5%;
    margin-bottom: 30px;
  }
`;

// Título da seção (ex: "Destaques da Semana")
export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 40px;
  color: #1c1c1c;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
  }
`;

// Container para o Swiper (para posicionar as setas)
export const SwiperContainer = styled.div`
  /* Garante que o card não seja "cortado" pela sombra */
  .swiper-slide {
    height: auto; /* O card define a própria altura */
    padding-bottom: 10px; /* Espaço para a sombra do card */
  }

  /* Estilizando as setas de navegação do Swiper */
  .swiper-button-prev,
  .swiper-button-next {
    color: #000000; /* Cor das setas */
    top: 50%; /* Centraliza verticalmente */
    transform: translateY(-70%); /* Ajuste fino para alinhar com o meio dos cards */
    
    /* Esconde as setas no celular */
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* Posição da seta esquerda */
  .swiper-button-prev {
    left: -10px;
  }

  /* Posição da seta direita */
  .swiper-button-next {
    right: -10px;
  }
`;

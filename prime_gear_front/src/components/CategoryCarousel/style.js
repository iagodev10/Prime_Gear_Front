import styled from "styled-components";

export const CarouselContainer = styled.section`
  width: 100%;
  padding: 60px 40px;
  box-sizing: border-box;
  margin-bottom: -40px;
  max-width: 100vw;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    padding: 50px 30px;
  }

  @media (max-width: 768px) {
    padding: 30px 16px;
    margin-bottom: -20px;
  }

  @media (max-width: 480px) {
    padding: 24px 12px;
    margin-bottom: -16px;
  }
`;

export const SwiperContainer = styled.div`
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    color: #b3b3b3 !important;
  }

  .category-name {
    text-align: center;
    margin-top: 12px;
    font-size: 1rem;
    color: #333;
    font-weight: 400;

    @media (max-width: 1024px) {
      font-size: 0.95rem;
      margin-top: 10px;
    }

    @media (max-width: 768px) { 
      font-size: 0.9rem;
      margin-top: 8px;
    }

    @media (max-width: 480px) { 
      font-size: 0.85rem;
      margin-top: 6px;
    }
  }

  /* Ajustar tamanho das setas de navegação no mobile */
  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 32px !important;
      height: 32px !important;
      margin-top: 0 !important;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 18px !important;
    }
  }

  @media (max-width: 480px) {
    .swiper-button-next,
    .swiper-button-prev {
      width: 28px !important;
      height: 28px !important;
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 16px !important;
    }
  }
`;

export const CategoryCard = styled.div`
  width: 100%;
  aspect-ratio: 1.2 / 1; 
  background: linear-gradient(to right, #f5f5f5 10%, #ffffff 100%);
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 24px rgba(20, 20, 30, 0.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* Ajustes para telas grandes */
  @media (min-width: 1200px) {
    aspect-ratio: 1.4 / 1;
    img {
      width: 45%;
      max-width: 140px;
    }
  }

  /* Ajustes para tablet */
  @media (max-width: 1024px) and (min-width: 769px) {
    aspect-ratio: 1.2 / 1;
    img {
      width: 60%;
      max-width: 120px;
    }
  }

  /* Ajustes para mobile médio */
  @media (max-width: 768px) and (min-width: 481px) {
    aspect-ratio: 1.1 / 1;
    border-radius: 12px;
    img {
      width: 65%;
      max-width: 100px;
    }
  }

  /* Ajustes para mobile pequeno */
  @media (max-width: 480px) {
    aspect-ratio: 1 / 1;
    border-radius: 12px;
    img { 
      width: 70%;
      max-width: 90px;
    }
  }
`;

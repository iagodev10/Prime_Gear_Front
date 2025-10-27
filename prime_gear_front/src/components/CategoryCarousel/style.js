import styled from "styled-components";

export const CarouselContainer = styled.section`
  width: 100%;
  padding: 60px 40px;
  box-sizing: border-box;
  margin-bottom: -40px;
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

  /* Ajustes para telas pequenas */
  @media (max-width: 768px) {
    aspect-ratio: 1.1 / 1;
    img {
      width: 70%;
    }
  }
`;

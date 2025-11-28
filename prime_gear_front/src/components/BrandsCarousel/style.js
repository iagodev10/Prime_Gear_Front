import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: -40px;
  padding: 10px 5%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 100vw;
  
  /* Garantir que nada apareça fora */
  * {
    max-width: 100%;
  }
  
  @media (max-width: 1024px) { 
    padding: 15px 4%; 
    margin-top: -20px;
  }
  
  @media (max-width: 768px) { 
    padding: 20px 3%; 
    margin-top: 0;
  }
  
  @media (max-width: 480px) { 
    padding: 15px 3%; 
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 40px;
  color: #1c1c1c;
  line-height: 1.2;
  
  @media (max-width: 1024px) { 
    font-size: 1.75rem; 
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) { 
    font-size: 1.5rem; 
    text-align: center; 
    margin-bottom: 24px; 
  }
  
  @media (max-width: 480px) { 
    font-size: 1.25rem; 
    margin-bottom: 20px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  height: 120px;
  min-height: 120px;
  max-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;
  box-sizing: border-box;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.8;
    transition: filter 0.3s, opacity 0.3s;
  }

  &:hover img {
    filter: grayscale(0%);
    opacity: 1;
  }

  @media (max-width: 1024px) {
    height: 110px;
    min-height: 110px;
    max-height: 110px;
    padding: 18px;
  }

  @media (max-width: 768px) {
    height: 100px;
    min-height: 100px;
    max-height: 100px;
    padding: 16px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    height: 90px;
    min-height: 90px;
    max-height: 90px;
    padding: 14px;
    border-radius: 12px;
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
  padding: 0 50px;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background: transparent;
  
  .swiper {
    overflow: hidden;
    max-width: 100%;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto;
  }
  
  /* Setas de navegação - posicionadas no meio e fora dos cards */
  .swiper-button-prev,
  .swiper-button-next {
    top: 50% !important;
    margin-top: 0 !important;
    transform: translateY(-50%) !important;
    width: 44px !important;
    height: 44px !important;
    // background: red !important;
    border-radius: 50% !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
    transition: all 0.3s ease !important;
    z-index: 10 !important;
    color: #000000 !important;
    
    &::after {
      font-size: 20px !important;
      font-weight: bold !important;
      color: #000000 !important;
    }
    
    &:hover {
      // background: #f5f5f5 !important;
      transform: translateY(-50%) scale(1.1) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
      color: #000000 !important;
      
      &::after {
        color: #000000 !important;
      }
    }
    
    @media (max-width: 1024px) {
      top: calc(50% + 55px) !important;
      width: 36px !important;
      height: 36px !important;
      
      &::after {
        font-size: 16px !important;
      }
    }
    
    @media (max-width: 768px) {
      top: calc(50% + 50px) !important;
      width: 32px !important;
      height: 32px !important;
      
      &::after {
        font-size: 14px !important;
      }
    }

    @media (max-width: 480px) {
      top: calc(50% + 45px) !important;
      width: 28px !important;
      height: 28px !important;
      
      &::after {
        font-size: 12px !important;
      }
    }
  }

  /* Seta esquerda - dentro do container */
  .swiper-button-prev {
    left: 10px !important;
    
    @media (max-width: 1024px) {
      left: 5px !important;
    }
    
    @media (max-width: 768px) {
      left: 0px !important;
    }

    @media (max-width: 480px) {
      left: 0px !important;
    }
  }

  /* Seta direita - dentro do container */
  .swiper-button-next {
    right: 10px !important;
    
    @media (max-width: 1024px) {
      right: 5px !important;
    }
    
    @media (max-width: 768px) {
      right: 0px !important;
    }

    @media (max-width: 480px) {
      right: 0px !important;
    }
  }

  /* Ajustar padding do container para dar espaço às setas */
  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 35px;
  }

  @media (max-width: 480px) {
    padding: 0 30px;
  }
`;

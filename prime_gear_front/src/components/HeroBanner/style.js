import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  min-height: 600px;
  position: relative;

  @media (max-width: 1400px) {
    min-height: 550px;
  }

  @media (max-width: 1200px) {
    min-height: 500px;
  }

  @media (max-width: 992px) {
    min-height: 450px;
  }

  @media (max-width: 768px) {
    min-height: 400px;
  }

  @media (max-width: 576px) {
    min-height: 350px;
  }

  @media (max-width: 480px) {
    min-height: 300px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff !important;
    
    @media (max-width: 992px) {
      transform: scale(0.85);
    }
    
    @media (max-width: 768px) {
      display: none;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 28px;
    
    @media (max-width: 1200px) {
      font-size: 26px;
    }
    
    @media (max-width: 992px) {
      font-size: 24px;
    }
    
    @media (max-width: 768px) {
      font-size: 22px;
    }
    
    @media (max-width: 576px) {
      font-size: 20px;
    }
    
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .swiper-pagination {
    @media (max-width: 768px) {
      bottom: 20px !important;
    }
    
    @media (max-width: 576px) {
      bottom: 15px !important;
    }
  }

  .swiper-pagination-bullet {
    background: #fff !important;
    opacity: 0.6;
    width: 10px;
    height: 10px;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      width: 8px;
      height: 8px;
    }
    
    @media (max-width: 576px) {
      width: 6px;
      height: 6px;
    }
  }

  .swiper-pagination-bullet-active {
    background: #fff !important;
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const StyledSwiperSlide = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: flex-end; 
  justify-content: flex-start; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 1400px) {
    height: 75vh;
  }

  @media (max-width: 1200px) {
    height: 70vh;
  }

  @media (max-width: 992px) {
    height: 65vh;
  }

  @media (max-width: 768px) {
    height: 60vh;
    min-height: 350px;
    background-attachment: scroll;
  }

  @media (max-width: 576px) {
    height: 55vh;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    height: 50vh;
    min-height: 250px;
  }
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: left;
  color: white;
  padding: 40px 60px;
  max-width: 800px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 80px;

  @media (max-width: 1400px) {
    padding: 35px 50px;
    margin-left: 70px;
    margin-bottom: 90px;
  }

  @media (max-width: 1200px) {
    padding: 30px 40px;
    margin-left: 60px;
    margin-bottom: 80px;
    max-width: 700px;
  }

  @media (max-width: 992px) {
    padding: 25px 30px;
    margin-left: 40px;
    margin-bottom: 60px;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-left: 20px;
    margin-bottom: 50px;
    max-width: 100%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 576px) {
    padding: 15px;
    margin-left: 15px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-left: 10px;
    margin-bottom: 30px;
  }
`;

export const HeroButton = styled.a`
  position: relative;
  z-index: 3;
  padding: 22px 37px;
  background-color: #FFFFFF;
  color: #000000;
  text-decoration: none;
  font-weight: 400;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  @media (max-width: 1400px) {
    padding: 20px 35px;
    font-size: 1.05rem;
  }

  @media (max-width: 1200px) {
    padding: 18px 32px;
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    padding: 16px 30px;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 15px 28px;
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    padding: 13px 25px;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 12px 22px;
    font-size: 0.8rem;
  }

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
      transform: translateY(-1px);
    }
    
    @media (max-width: 576px) {
      transform: translateY(0);
    }
  }
  
  @media (max-width: 400px) {
    padding: 10px 20px;
    font-size: 0.75rem;
  }
`;

// Adicionando regras específicas para os botões fixos
export const FixedButtons = styled.div`
  position: absolute;
  bottom: 140px;
  right: 400px;
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1400px) {
    bottom: 130px;
    right: 350px;
    gap: 40px;
  }

  @media (max-width: 1200px) {
    bottom: 120px;
    right: 300px;
    gap: 35px;
  }

  @media (max-width: 992px) {
    bottom: 100px;
    right: 200px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 20px;
    margin-bottom: 40px;
    gap: 25px;
  }

  @media (max-width: 576px) {
    margin-top: 15px;
    margin-bottom: 30px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    margin-bottom: 25px;
    gap: 15px;
  }
`;

// Estilos para o grupo de botões no segundo slide
export const ButtonGroup = styled.div`
  display: flex;
  gap: 45px;
  margin-top: -130px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1400px) {
    gap: 40px;
    margin-top: -120px;
  }

  @media (max-width: 1200px) {
    gap: 35px;
    margin-top: -110px;
  }

  @media (max-width: 992px) {
    gap: 30px;
    margin-top: -100px;
  }

  @media (max-width: 768px) {
    gap: 25px;
    margin-top: -80px;
  }

  @media (max-width: 576px) {
    gap: 20px;
    margin-top: -60px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    margin-top: -50px;
  }
`;
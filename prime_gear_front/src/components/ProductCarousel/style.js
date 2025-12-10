import styled from "styled-components";


export const CarouselContainer = styled.section`
  width: 82%; 
  max-width: 1600px; 
  margin: 0 auto; 
  padding: 20px 0; 
  position: relative;
  margin-bottom: 50px;
  box-sizing: border-box;


  @media (max-width: 768px) {
    width: 95%; 
    padding: 10px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  text-align: left;
  margin-bottom: 30px;
  color: #1c1c1c;
  padding-left: 10px; 

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
    padding-left: 0;
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: visible; 

  .swiper {
    width: 100%;
    overflow: hidden; 
    position: static;
    padding-bottom: 20px; 
  }

  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
  }

  
  .custom-swiper-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 45px; 
    height: 45px;
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.3s ease;

    &:hover {
      background-color: #f8f8f8;
      border-color: #000;
      box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }


  .prev-btn {
    left: -60px; 
  }

  .next-btn {
    right: -60px;
  }

  .swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
    background-color: #f5f5f5;
  }
`;
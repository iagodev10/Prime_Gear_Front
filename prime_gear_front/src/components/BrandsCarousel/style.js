import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    margin-top: -40px;
    padding: 10px 5%;
    position:relative;
    @media (max-width: 768px) { padding: 20px 4%; }
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    text-align: left;
    margin-bottom: 40px;
    color: #1c1c1c;
    @media (max-width: 768px) { font-size: 1.6rem; text-align: center; margin-bottom: 24px; }
    @media (max-width: 480px) { font-size: 1.4rem; }
`;

export const Card = styled.div`
    background: #fff;
    border-radius: 16px;
    padding:20px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover{
        transform: translateY(-5px);
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: grayscale(100%);
        opacity: 0.8;
        transition: filter 0.3s, opacity 0.3s;
    }

    &:hover img{
        filter: grayscale(0%);
        opacity: 1;
    }
    @media (max-width: 768px) { height: 100px; }
    @media (max-width: 480px) { height: 90px; padding: 16px; }
`;

export const SwiperContainer = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: #000000;
    top: 50%;
    transform: translateY(-50%);
    
    @media (max-width: 768px) {
      display: none;
    }
  }

  .swiper-button-prev {
    left: -10px;
  }

  .swiper-button-next {
    right: -10px;
  }`;

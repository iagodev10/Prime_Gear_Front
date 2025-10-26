import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    margin-top: -40px;
    padding: 10px 5%;
    position:relative;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    text-align: left;
    margin-bottom: 40px;
    color: #1c1c1c;
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
import styled from "styled-components";

export const BannerPromo = styled.section`
  width: 90%;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const BannerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }

  @media (max-width: 992px) {
    img {
      height: 480px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 380px;
    }
  }

  @media (max-width: 576px) {
    img {
      height: 300px;
    }
  }
  @media (max-width: 420px) {
    img {
      height: 260px;
    }
  }
`;

export const BannerBuy = styled.a`
  margin-top: 20px;
  padding: 24px 36px;
  text-decoration: none;
  background: linear-gradient(135deg, #000000, #737373);
  border-radius: 999px;
  transition: all 0.5s ease;
  font-size: 1.1rem;
  color: #f5f5f5;
  display: inline-block;
  transform-style: preserve-3d;

  animation: float3d 3s ease-in-out infinite;

  &:hover {
    transform: translateZ(15px) rotateX(6deg) rotateY(6deg) scale(1.06);
    background: linear-gradient(135deg, #5a5a5a, #000000);
    color: #ffffff;
    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.45);
  }

  @keyframes float3d {
    0% {
      transform: translateZ(0px) rotateX(0deg) rotateY(0deg);
      background: linear-gradient(135deg, #000000, #737373);
    }
    50% {
      transform: translateZ(10px) rotateX(4deg) rotateY(-4deg);
      background: linear-gradient(135deg, #1a1a1a, #8a8a8a);
    }
    100% {
      transform: translateZ(0px) rotateX(0deg) rotateY(0deg);
      background: linear-gradient(135deg, #000000, #737373);
    }
  }

  @media (max-width: 768px) {
    padding: 16px 24px;
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    padding: 14px 20px;
    font-size: 0.95rem;
  }
  @media (max-width: 420px) {
    padding: 12px 18px;
    font-size: 0.9rem;
  }
`;

export const Ideapad = styled.section`
  width: 80%;
  margin-top: -40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    margin: 40px auto 0 auto;
    gap: 30px;
  }
  @media (max-width: 480px) {
    width: 94%;
    gap: 22px;
  }
`;

export const IdeaImg = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* importante p/ efeitos */

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-height: 300px;
  }
  @media (max-width: 576px) {
    max-height: 240px;
  }
  @media (max-width: 420px) {
    max-height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease, filter 0.6s ease;
  }

  &:hover img {
    transform: scale(1.02) rotateX(2deg) rotateY(2deg);
    filter: brightness(1.1);
  }
`;

export const IdeapadText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: #4d7294;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 1.7rem;
  }
  @media (max-width: 420px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h3`
  color: #1c1c1c;
  font-size: 1.8rem;
  font-weight: 600;
  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
  @media (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const Descrip = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #2f2f2f;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 1.05rem;
    line-height: 1.5;
  }
  @media (max-width: 420px) {
    font-size: 0.95rem;
  }
`;

export const IdeaButton = styled.a`
  margin-top: 15px;
  padding: 24px 38px;
  text-decoration: none;
  background: transparent;
  border-radius: 38px;
  transition: all 0.3s ease;
  font-size: 1rem;
  color: #1c1c1c;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #4d7294;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    /* bolha perfeitamente circular */
    width: 70px;
    height: 70px;
    background: #3a5b7b;
    border-radius: 50%;

    /* nasce bem pequena e “fora” do canto */
    transform: translate(-45%, 45%) scale(0);
    transition: transform 0.65s ease;
    z-index: -1;
  }

  &:hover::before {
    /* cresce MUITO para preencher tudo */
    transform: translate(0, 0) scale(8);
  }

  &:hover {
    color: #ffffff;
  }
  @media (max-width: 576px) {
    padding: 16px 24px;
    font-size: 0.95rem;
  }
  @media (max-width: 420px) {
    padding: 14px 20px;
    font-size: 0.9rem;
  }
`;

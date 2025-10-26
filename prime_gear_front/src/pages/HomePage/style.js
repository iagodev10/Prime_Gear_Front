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
    object-fit: contain;
  }
`;

export const BannerBuy = styled.a`
  margin-top: 20px;
  padding: 24px 36px;
  text-decoration: none;
  background: linear-gradient(135deg, #000000, #737373);
  border-radius: 999px;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  color: #f5f5f5;

  &:hover {
    background: linear-gradient(135deg, #737373, #000000);
    color: #ffffff;
  }
`;


export const Ideapad = styled.section`
  width: 90%;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IdeaImg = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
`;

export const SubTitle = styled.h3`
  color: #1c1c1c;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Descrip = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #2f2f2f;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const IdeaButton = styled.a`
  margin-top: 15px;
  padding: 24px 38px;
  text-decoration: none;
  background: transparent;
  border-radius: 35px;
  transition: all 0.3s ease;
  font-size: 1rem;
  color: #1c1c1c;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #4d7294;

  &:hover {
    background: #3a5b7b;
    color: #ffffff;
  }
`;

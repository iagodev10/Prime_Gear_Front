import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: #f5f5f5;
  padding: 40px 0 20px 0;
  font-size: 0.95rem;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: auto;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #f5f5f5;
`;

export const Link = styled.a`
  color: #ccc;
  text-decoration: none;
  margin-bottom: 6px;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Icons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;

export const SocialIcon = styled.a`
  color: #f5f5f5;
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #444;
  margin: 25px 0;
`;

export const Payment = styled.div`
  text-align: center;
`;

export const PayIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const PayIcon = styled.img`
  width: 45px;
  height: auto;
  filter: brightness(0.95);
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: 12px;
  color: #888;
  margin-top: 15px;
`;


export const LeftGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

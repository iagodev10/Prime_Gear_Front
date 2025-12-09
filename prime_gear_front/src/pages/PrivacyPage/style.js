import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
  padding-top: 10vh;
`;

export const HeroSection = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 100px 5%;
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 5%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -1px;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #fff 0%, #ddd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LastUpdated = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 28px;
  position: relative;
  z-index: 1;
  color: #bbb;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 0 100px;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
    padding: 60px 0 80px;
  }
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: 120px;
  height: fit-content;
  background: #fff;
  padding: 28px 24px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

  @media (max-width: 1024px) {
    position: static;
  }
`;

export const IndexTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const IndexList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const IndexItem = styled.li`
  margin-bottom: 8px;
`;

export const IndexLink = styled.a`
  color: ${(props) => (props.$active ? "#1a1a1a" : "#666")};
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  display: block;
  padding: 10px 14px;
  border-radius: 8px;
  background: ${(props) => (props.$active ? "#f0f0f0" : "transparent")};
  transition: all 0.2s ease;
  border-left: 3px solid ${(props) => (props.$active ? "#1a1a1a" : "transparent")};

  &:hover {
    color: #1a1a1a;
    background: #f5f5f5;
    transform: translateX(2px);
  }
`;

export const MainContent = styled.main`
  width: 100%;
`;

export const Section = styled.section`
  margin-bottom: 80px;
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const SectionNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 28px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
`;

export const SectionContent = styled.div`
  color: #444;
  font-size: 1.05rem;
  line-height: 1.8;

  p {
    margin-bottom: 18px;
  }

  ul,
  ol {
    margin: 20px 0;
    padding-left: 28px;
  }

  li {
    margin-bottom: 14px;
    line-height: 1.7;
  }

  strong {
    color: #1a1a1a;
    font-weight: 600;
  }

  a {
    color: #1a1a1a;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 1px solid #ccc;
    transition: border-color 0.2s;

    &:hover {
      border-color: #1a1a1a;
    }
  }
`;

export const HighlightCard = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-left: 4px solid #1a1a1a;
  padding: 28px;
  border-radius: 12px;
  margin: 28px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

  h4 {
    color: #1a1a1a;
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 14px;
  }

  p {
    color: #444;
    margin-bottom: 10px;
    line-height: 1.7;
    font-size: 1rem;
  }

  ul {
    margin-top: 14px;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 32px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const InfoItem = styled.div`
  background: #fff;
  padding: 28px;
  border-radius: 14px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #1a1a1a;
  }
`;

export const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 18px;
`;

export const InfoTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
`;

export const InfoText = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

export const ContactCard = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 40px;
  margin-top: 40px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  h3 {
    color: #1a1a1a;
    font-size: 1.6rem;
    margin-bottom: 20px;
    font-weight: 700;
  }

  p {
    color: #666;
    margin-bottom: 28px;
    line-height: 1.8;
  }
`;

export const ContactButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #fff;
  padding: 16px 40px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent 0%, #e0e0e0 50%, transparent 100%);
  margin: 60px 0;
`;

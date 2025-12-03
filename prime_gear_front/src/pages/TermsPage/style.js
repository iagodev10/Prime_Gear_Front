import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  padding-top: 10vh;
`;

export const HeroSection = styled.div`
  background: #fff;
  padding: 80px 5%;
  color: #111;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LastUpdated = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 24px;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 0;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 0;
  }
`;

export const Sidebar = styled.aside`
  position: sticky;
  top: 120px;
  height: fit-content;

  @media (max-width: 1024px) {
    position: static;
  }
`;

export const IndexTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 20px;
`;

export const IndexList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const IndexItem = styled.li`
  margin-bottom: 12px;
`;

export const IndexLink = styled.a`
  color: ${(props) => (props.$active ? "#111" : "#666")};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  display: block;
  padding: 8px 12px;
  border-radius: 6px;
  background: ${(props) => (props.$active ? "#f5f5f5" : "transparent")};
  transition: all 0.2s;

  &:hover {
    color: #111;
    background: #f5f5f5;
  }
`;

export const MainContent = styled.main`
  width: 100%;
`;

export const Section = styled.section`
  margin-bottom: 60px;
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const SectionNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #e0e0e0;
  line-height: 1;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 24px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
`;

export const SectionContent = styled.div`
  color: #333;
  font-size: 1rem;
  line-height: 1.8;

  p {
    margin-bottom: 16px;
  }

  ul,
  ol {
    margin: 16px 0;
    padding-left: 24px;
  }

  li {
    margin-bottom: 12px;
  }

  strong {
    color: #111;
    font-weight: 600;
  }

  a {
    color: #111;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HighlightCard = styled.div`
  background: #f7f7f7;
  border-left: 4px solid #111;
  padding: 24px;
  border-radius: 8px;
  margin: 24px 0;

  h4 {
    color: #111;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 12px;
  }

  p {
    color: #333;
    margin-bottom: 8px;
    line-height: 1.6;
  }

  ul {
    margin-top: 12px;
  }
`;

export const ContactCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 32px;
  margin-top: 40px;
  text-align: center;

  h3 {
    color: #111;
    font-size: 1.5rem;
    margin-bottom: 16px;
  }

  p {
    color: #666;
    margin-bottom: 24px;
    line-height: 1.6;
  }
`;

export const ContactButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #111 0%, #000 100%);
  color: #fff;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #e0e0e0;
  margin: 40px 0;
`;

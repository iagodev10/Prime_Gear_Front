import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-top: 8vh; /* Compensa a altura do header fixo */
  
  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

// Hero Section
export const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e1e1e 0%, #2b2b2b 100%);
  padding: 80px 40px;
  display: flex;
  justify-content: center;
  min-height: 500px;

  @media (max-width: 900px) {
    padding: 60px 20px;
    min-height: auto;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

export const HeroContent = styled.div`
  color: white;
  max-width: 550px;
  z-index: 2;

  @media (max-width: 900px) {
    margin: 0 auto;
    order: 1;
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  img {
    width: 100%;
    max-width: 430px;
    height: auto;
    opacity: 1;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    order: 2;
    
    img {
      max-width: 280px;
      margin-top: 0;
    }
  }
  
  @media (max-width: 480px) {
    img {
      max-width: 220px;
    }
  }
`;

export const SectionLabel = styled.span`
  color: #b3b3b3;
  font-size: 1.3rem;
  letter-spacing: 2px;
  font-weight: 500;
  display: block;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 500;
  margin: 15px 0 25px;
  line-height: 1.3;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

export const HeroButton = styled.button`
  background: white;
  color: #111;
  padding: 14px 40px;
  border-radius: 40px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  margin-top: 35px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 12px 32px;
    font-size: 0.9rem;
  }
`;

// Objective Section
export const ObjectiveSection = styled.section`
  background: #f5f5f5;
  padding: 80px 20px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const ObjectiveContent = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
  
  @media (max-width: 968px) {
    max-width: 90%;
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const ObjectiveText = styled.div`
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 24px;
    color: #1a1a1a;
  }
  
  p {
    font-size: 1.3rem;
    line-height: 1.8;
    color: #333;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const ObjectiveCard = styled.div`
  background: linear-gradient(90deg, rgb(0, 0, 0), rgb(75, 75, 75));
  color: white;
  padding: 40px;
  border-radius: 50px;
  
  p {
    font-size: 1.3rem;
    line-height: 1.8;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    padding: 30px 24px;
    border-radius: 30px;
    
    p {
      font-size: 1rem;
    }
  }
`;

// Cards Section (Mission, Vision, Values)
export const CardsSection = styled.section`
  background: #f5f5f5;
  padding: 80px 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 50px 15px;
  }
`;

export const CardsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  background: #f5f5f5;
  border: 2px solid #000;
  border-radius: 55px;
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 30px;
    padding: 40px 30px;
    border-radius: 25px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 80px;
  background: #000;
  margin: 0 20px;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const CardBlock = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 12px;
    font-weight: 700;
    color: #000;
  }

  p {
    color: #313131;
    font-size: 1rem;
    line-height: 1.55;
  }

  @media (max-width: 768px) {
    text-align: center;

    h3 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
`;

// Passion Section
export const PassionSection = styled.section`
  background: #f5f5f5;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
    gap: 30px;
  }
`;

export const PassionHero = styled.section`
  background: linear-gradient(135deg, #0f323d 0%, #000c17 100%);
  width: 80%;
  padding: 40px 0;
  display: flex;
  justify-content: flex-start;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  margin-left: auto;

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0;
    margin-left: 0;
    padding: 30px 0;
  }
`;

export const PassionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #0f323d;
  width: 80%;
  text-align: left;
  margin: 0;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    font-size: 2.5rem;
    width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(50%, 35%);
  background: #031c27;
  padding: 20px 20px 0 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  z-index: 5;

  img {
    width: 280px;
    height: auto;
    display: block;
    object-fit: contain;
  }

  @media (max-width: 1200px) {
    transform: translate(30%, 35%);
    
    img {
      width: 240px;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const PassionContent = styled.section`
  background: linear-gradient(135deg, #0f323d 0%, #000c17 100%);
  width: 70%;
  padding: 80px 40px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  margin-right: auto;
  overflow: visible;
  min-height: 350px;

  @media (max-width: 1200px) {
    width: 75%;
  }

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0;
    margin-right: 0;
    padding: 60px 30px;
    min-height: auto;
  }
`;

export const Texto = styled.p`
  font-size: 1.5rem;
  line-height: 1.8;
  color: white;
  margin: 0;
  text-align: left;
  margin-left: 10%;
  max-width: 45%;
  
  @media (max-width: 1200px) {
    max-width: 55%;
  }
  
  @media (max-width: 900px) {
    margin-left: 0;
    max-width: 100%;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Team Section
export const TeamSection = styled.section`
  background: #f5f5f5;
  padding: 80px 20px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const TeamTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: left;
  margin: 0 0 40px 15%;
  color: #1a1a1a;
  
  @media (max-width: 968px) {
    margin: 0 0 40px 5%;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 40px 0;
    text-align: center;
  }
`;

export const TeamGrid = styled.div`
  max-width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  
  @media (max-width: 968px) {
    max-width: 85%;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const TeamMember = styled.div`
  text-align: center;
`;

export const TeamPhoto = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0 auto 16px;
  overflow: hidden;
  border: 3px solid #e0e0e0;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    border: 2px solid #e0e0e0;
  }
`;

export const TeamName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
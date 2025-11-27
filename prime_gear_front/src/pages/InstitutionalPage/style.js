import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

// Hero Section
export const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e1e1e 0%, #2b2b2b 100%);
  padding: 80px 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 60px 20px;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;


export const HeroContent = styled.div`
  color: white;
  max-width: 550px;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 430px;
    height: auto;
    opacity: 0.9;
  }

  @media (max-width: 900px) {
    img {
      width: 250px;
      margin-top: 30px;
    }
  }
`;


export const SectionLabel = styled.span`
  color: #b3b3b3;
  font-size: 1.3rem;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  margin: 15px 0 25px;

  @media (max-width: 900px) {
    font-size: 2rem;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
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
  border-radius: 55px;          /* igual ao da imagem */
  
  padding: 50px 80px;           /* espaço igual ao da imagem */
  
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
  height: 80px;               /* altura exata igual à imagem */
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
  }
`;




// Passion Section
export const PassionSection = styled.section`
  background: #f5f5f5;
  padding: 80px 20px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const PassionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const PassionText = styled.div`
  background: #1a4d5e;
  color: white;
  padding: 50px 40px;
  border-radius: 16px;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 24px;
    line-height: 1.3;
  }
  
  p {
    font-size: 1.05rem;
    line-height: 1.8;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    
    h2 {
      font-size: 1.6rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const PassionImage = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  
  @media (max-width: 968px) {
    height: 400px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

// Team Section
export const TeamSection = styled.section`
  background: #f5f5f5;
  padding: 60px 20px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const TeamTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: left;
  margin: 0 0 10px 15%;
  color: #1a1a1a;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 0 0 40px;
  }
`;

export const TeamGrid = styled.div`
  max-width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const TeamMember = styled.div`
  text-align: center;
`;

export const TeamPhoto = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 16px;
  overflow: hidden;
  border: 3px solid #e0e0e0;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
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
`;

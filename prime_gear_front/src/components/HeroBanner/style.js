import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  position: relative;
`;

export const StyledSwiperSlide = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: flex-end; 
  justify-content: flex-start; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: left;
  color: white;
  padding: 40px 60px;
  max-width: 800px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 80px;
`;

export const HeroButton = styled.a`
  position: relative;
  z-index: 3;
  padding: 22px 37px;
  background-color: #FFFFFF;
  color: #000000;
  text-decoration: none;
  font-weight: 400;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

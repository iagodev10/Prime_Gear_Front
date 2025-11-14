import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
`;

export const Logo = styled.img`
  width: 150px; 
  height: auto;
`;
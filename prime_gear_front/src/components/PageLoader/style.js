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

export const RingWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 90px;
  height: auto;
  z-index: 1;
`;

export const RingSvg = styled.svg`
  position: absolute;
  inset: 0;
`;
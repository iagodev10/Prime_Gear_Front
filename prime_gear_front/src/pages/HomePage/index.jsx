import React from 'react';
import styled from 'styled-components'; 


import HeroBanner from '../../components/HeroBanner';
import CategoryCarousel from '../../components/CategoryCarousel';

import ProductCarousel from '../../components/ProductCarousel';
import BrandsCarousel from '../../components/BrandsCarousel';


const FakeFooter = styled.div`
  height: 500px;
  background: #222;
  margin-top: 60px;
`;

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <CategoryCarousel />
      
      
      <ProductCarousel title="Destaques da Semana" />

      <BrandsCarousel />
      
      <ProductCarousel title="Até 50% de desconto" />

      <FakeFooter />
    </>
  );
};

export default HomePage;

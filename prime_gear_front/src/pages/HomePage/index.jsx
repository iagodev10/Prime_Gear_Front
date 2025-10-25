import React from 'react';
import styled from 'styled-components'; 


import HeroBanner from '../../components/HeroBanner';
import CategoryCarousel from '../../components/CategoryCarousel';

import ProductCarousel from '../../components/ProductCarousel';



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
      
      {/* 2. CHAME O COMPONENTE AQUI */}
      <ProductCarousel title="Destaques da Semana" />

      {/* 3. A MÁGICA DA REUTILIZAÇÃO!
         Usamos o mesmo componente de novo, com outro título.
         (No futuro, você passaria uma lista de produtos diferente)
      */}
      <ProductCarousel title="Até 50% de desconto" />

      <FakeFooter />
    </>
  );
};

export default HomePage;

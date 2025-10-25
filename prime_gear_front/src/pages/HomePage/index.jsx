import React from 'react';
import styled from 'styled-components';

import HeroBanner from '../../components/HeroBanner';


const FakeContent = styled.div`
  height: 2000px; /* Bem alto, para forçar o scroll */
  padding: 50px;
  background-color: #f4f4f4;
  text-align: center;
`;
// -------------------------

const HomePage = () => {
  return (
    // Usamos um Fragment (<>) para agrupar os elementos
    <>
      {/* 2. Este é o seu carrossel! */}
      <HeroBanner />
      
      {/* 3. Este é o conteúdo "falso" para testar o scroll */}
      <FakeContent>
        <h2>Resto da Página (Destaques, Produtos, etc.)</h2>
        <p>Role para baixo para testar o Header!</p>
      </FakeContent>
    </>
  );
};

export default HomePage;

import React from 'react';

import HeroBanner from '../../components/HeroBanner';
import CategoryCarousel from '../../components/CategoryCarousel';
import ProductCarousel from '../../components/ProductCarousel';
import BrandsCarousel from '../../components/BrandsCarousel';
import EmailSignUp from '../../components/EmailSignUp';

import { BannerPromo, BannerImg, BannerBuy } from './style'
import { IdeaButton, IdeaImg, IdeapadText, Ideapad, Descrip, Title, SubTitle,  } from './style'


import OutroNivelImersao from '../../assets/images/Outro-Nivel-Imersao.png';
import Ideapad1 from '../../assets/images/Ideapad1.png';




const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <CategoryCarousel />


      <ProductCarousel title="Destaques da Semana" />

      <BrandsCarousel />

      <BannerPromo>
        <BannerImg>
          <img src={OutroNivelImersao} alt="" />
        </BannerImg>

        <BannerBuy href="#">Compre Agora</BannerBuy>
      </BannerPromo>

      <ProductCarousel title="Até 50% de desconto" />

      <Ideapad>

        <IdeaImg>
          <img src={Ideapad1} alt="" />
        </IdeaImg>

        <IdeapadText>
          <Title>IDEAPAD 1I</Title>
          <SubTitle>O companheiro do dia a dia</SubTitle>
          <Descrip>
            O Ideapad 1i foi projetado para aumentar a produtividade e maximizar o prazer durante todo o dia. Apresentando um eficiente processador MediaTek Kompanio 520 e até 15 horas de duração da bateria, garante que você se mantenha produtivo e entretido ao longo do dia.
          </Descrip>
          <IdeaButton>Compre Agora</IdeaButton>
        </IdeapadText>

      </Ideapad>

      <EmailSignUp />
    </>
  );
};

export default HomePage;

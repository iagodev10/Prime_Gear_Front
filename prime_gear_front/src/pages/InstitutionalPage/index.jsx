import React from 'react';
import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroContainer,
  HeroImageWrapper,
  SectionLabel,
  HeroTitle,
  HeroButton,
  ObjectiveSection,
  ObjectiveContent,
  ObjectiveText,
  ObjectiveCard,
  CardsSection,
  CardsContainer,
  CardBlock,
  Divider,
  PassionSection,
  PassionHero,
  PassionTitle,
  PassionContent,
  Texto,
  ImageWrapper,
  TeamSection,
  TeamTitle,
  TeamGrid,
  TeamMember,
  TeamPhoto,
  TeamName
} from './style';

import EmailSignUp from '../../components/EmailSignUp';
import Logo from '../../assets/images/logoligth.png';

import Player from '../../assets/images/player.png';
import caioImg from '../../assets/images/caio.jpeg';
import felipeImg from '../../assets/images/felipe.jpeg';
import iagoImg from '../../assets/images/iago.jpeg';
import viniciusImg from '../../assets/images/vinicius.jpeg';

const InstitutionalPage = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContainer>

          {/* LADO ESQUERDO */}
          <HeroContent>
            <SectionLabel>QUEM SOMOS</SectionLabel>
            <HeroTitle>
              Conectando você ao melhor da tecnologia, onde performance encontra confiança.
            </HeroTitle>
            <HeroButton>Explorar</HeroButton>
          </HeroContent>

          {/* LADO DIREITO */}
          <HeroImageWrapper>
            <img src={Player} alt="logo" />
          </HeroImageWrapper>

        </HeroContainer>
      </HeroSection>


      {/* Nosso Objetivo Section */}
      <ObjectiveSection>
        <ObjectiveContent>
          <ObjectiveText>
            <h2>Nosso objetivo</h2>
            <p>
              A <b>PrimeGear</b> nasceu com a missão de tornar a tecnologia mais acessível, prática e poderosa para todos. Em um mundo cada vez mais conectado, acreditamos que computadores, laptops, periféricos e consoles não são apenas ferramentas: são portas para novas possibilidades, produtividade e entretenimento.
            </p>
          </ObjectiveText>
          <ObjectiveCard>
            <p>
              Acreditamos que a tecnologia deve ser acessível e confiável. Por isso, trabalhamos com as melhores marcas do mercado, garantindo produtos de qualidade superior. Nossa equipe está sempre pronta para ajudar você a encontrar exatamente o que precisa, com transparência e compromisso em cada etapa da sua jornada de compra.
            </p>
          </ObjectiveCard>
        </ObjectiveContent>
      </ObjectiveSection>

      {/* Mission, Vision, Values Cards */}
      <CardsSection>
        <CardsContainer>

          <CardBlock>
            <h3>Missão</h3>
            <p>Capacitar escolhas inteligentes com tecnologia acessível e suporte.</p>
          </CardBlock>

          <Divider />

          <CardBlock>
            <h3>Visão</h3>
            <p>Ser referência nacional em e-commerce tecnológico.</p>
          </CardBlock>

          <Divider />

          <CardBlock>
            <h3>Valores</h3>
            <p>Transparência, performance, compromisso e experiência do cliente.</p>
          </CardBlock>

        </CardsContainer>
      </CardsSection>


      {/* Paixão por tecnologia Section */}
      <PassionSection>

  <PassionHero />

  <PassionTitle>
    Paixão por tecnologia, <br />
    compromisso com você
  </PassionTitle>

  <PassionContent>

    <Texto>
      Na <b>PrimeGear</b>, aproximamos pessoas da tecnologia que transforma
      o dia a dia, e fazemos isso com compromisso, transparência e paixão
      pelo que fazemos.
    </Texto>

    <ImageWrapper>
      <img src="/homen.png" alt="Homem sorrindo" />
    </ImageWrapper>

  </PassionContent>

</PassionSection>


      {/* Nossa Equipe Section */}
      <TeamSection>
        <TeamTitle>Nossa equipe</TeamTitle>
        <TeamGrid>
          <TeamMember>
            <TeamPhoto>
              <img src={caioImg} alt="Caio" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </TeamPhoto>
            <TeamName>Caio Gabriel</TeamName>
          </TeamMember>
          <TeamMember>
            <TeamPhoto>
              <img src={felipeImg} alt="Felipe" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </TeamPhoto>
            <TeamName>Felipe Peixoto</TeamName>
          </TeamMember>
          <TeamMember>
            <TeamPhoto>
              <img src={iagoImg} alt="Iago" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </TeamPhoto>
            <TeamName>Iago Borges</TeamName>
          </TeamMember>
          <TeamMember>
            <TeamPhoto>
              <img src={viniciusImg} alt="Vinicius" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </TeamPhoto>
            <TeamName>Vinicius Mendes</TeamName>
          </TeamMember>
        </TeamGrid>
      </TeamSection>

      <EmailSignUp />

    </PageContainer>
  );
};

export default InstitutionalPage;

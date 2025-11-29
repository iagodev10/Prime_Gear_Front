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
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '50%'
              }} />
            </TeamPhoto>
            <TeamName>Caio Gabriel</TeamName>
          </TeamMember>
          <TeamMember>
            <TeamPhoto>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '50%'
              }} />
            </TeamPhoto>
            <TeamName>Iago Borges</TeamName>
          </TeamMember>
          <TeamMember>
            <TeamPhoto>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                borderRadius: '50%'
              }} />
            </TeamPhoto>
            <TeamName>Vinicius Mendes</TeamName>
          </TeamMember>
          <TeamMember>
            <TeamPhoto>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                borderRadius: '50%'
              }} />
            </TeamPhoto>
            <TeamName>Felipe Peixoto</TeamName>
          </TeamMember>
        </TeamGrid>
      </TeamSection>

      <EmailSignUp />

    </PageContainer>
  );
};

export default InstitutionalPage;
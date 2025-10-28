import React from 'react';
import styled from 'styled-components';

import { 
    FiSearch, FiShoppingCart, FiUser, FiHome, FiCreditCard, FiCheckCircle, 
    FiGift, FiTruck, FiShield, FiHeadphones, FiTag, FiAward 
} from 'react-icons/fi';

import {
    PageContainer,
    PageHeader,
    Title, Title1, SubTitle1,
    SubTitle,
    StepsGrid,
    StepCard,
    StepIconWrapper,
    StepTitle,
    StepDescription,
    CtaContainer,
    CtaButton, PageCont,
    HelpLink, Banner,
    BenefitsSection,
    BenefitsGrid,
    BenefitCard,
    BenefitIconWrapper,
    BenefitTitle,
    BenefitDescription
} from './style';

const PrimeiraCompra = () => {
    return (
        <PageContainer>
            
            <PageHeader>
                <Banner>
                <Title>Seja bem-vindo(a)!</Title>
                <SubTitle>Comprar conosco é fácil, rápido e 100% seguro. Siga os passos:</SubTitle>
                </Banner>
            </PageHeader>

            <PageCont>

            <StepsGrid>
                <StepCard>
                    <StepIconWrapper style={{ backgroundColor: '#fff8d6', color: '#b8860b' }}>
                        <FiSearch size={30} />
                    </StepIconWrapper>
                    <StepTitle>1. Encontre seu Produto</StepTitle>
                    <StepDescription>
                        Navegue por nossas categorias ou use a barra de busca
                        para encontrar o que deseja.
                    </StepDescription>
                </StepCard>

                <StepCard>
                    <StepIconWrapper style={{ backgroundColor: '#dfe8ff', color: '#004aad' }}>
                        <FiShoppingCart size={30} />
                    </StepIconWrapper>
                    <StepTitle>2. Adicione ao Carrinho</StepTitle>
                    <StepDescription>
                        Gostou do produto? Escolha a quantidade
                        e clique em "Adicionar ao carrinho".
                    </StepDescription>
                </StepCard>

                <StepCard>
                    <StepIconWrapper style={{ backgroundColor: '#f0f0f0', color: '#444' }}>
                        <FiUser size={30} />
                    </StepIconWrapper>
                    <StepTitle>3. Crie sua Conta</StepTitle>
                    <StepDescription>
                        Para fechar o pedido, vá ao carrinho e
                        clique em "Finalizar Compra". Você fará um
                        cadastro rápido.
                    </StepDescription>
                </StepCard>

                <StepCard>
                    <StepIconWrapper style={{ backgroundColor: '#f7d9ff', color: '#aa46c6' }}>
                        <FiHome size={30} />
                    </StepIconWrapper>
                    <StepTitle>4. Informe o Endereço</StepTitle>
                    <StepDescription>
                        Nos diga onde devemos entregar seu pedido.
                        Não se esqueça de calcular o frete!
                    </StepDescription>
                </StepCard>

                <StepCard>
                    <StepIconWrapper style={{ backgroundColor: '#fff0e6', color: '#e85a00' }}>
                        <FiCreditCard size={30} />
                    </StepIconWrapper>
                    <StepTitle>5. Escolha o Pagamento</StepTitle>
                    <StepDescription>
                        Aceitamos PIX, Boleto e Cartão de Crédito
                        em até 12x. Tudo com segurança.
                    </StepDescription>
                </StepCard>

                <StepCard>
                    <StepIconWrapper style={{ backgroundColor: '#d6f8d7', color: '#009601' }}>
                        <FiCheckCircle size={30} />
                    </StepIconWrapper>
                    <StepTitle>6. Pronto!</StepTitle>
                    <StepDescription>
                        Seu pedido será confirmado! Agora é só
                        aguardar e acompanhar a entrega pelo
                        seu e-mail.
                    </StepDescription>
                </StepCard>
            </StepsGrid>

            <CtaContainer>
                <SubTitle>Viu como é fácil?</SubTitle>
                <CtaButton to="/loja">Começar a Comprar</CtaButton>
                <HelpLink to="/fale-conosco">Ainda com dúvidas? Fale conosco</HelpLink>
            </CtaContainer>

            <BenefitsSection>

                <PageHeader>
                    <Title1>Benefícios Exclusivos</Title1>
                    <SubTitle1>Vantagens especiais que você só encontra na sua primeira compra com o PrimeGear</SubTitle1>
                </PageHeader>
                
                <BenefitsGrid>
                
                    <BenefitCard>
                        <BenefitIconWrapper bgColor="#ff4d6d">
                            <FiGift size={32} />
                        </BenefitIconWrapper>
                        <BenefitTitle>10% de Desconto</BenefitTitle>
                        <BenefitDescription>
                            Na primeira compra usando o cupom PRIMEGEAR10
                        </BenefitDescription>
                    </BenefitCard>

                    <BenefitCard>
                        <BenefitIconWrapper bgColor="#007bff"> 
                            <FiTruck size={32} />
                        </BenefitIconWrapper>
                        <BenefitTitle>Frete Grátis</BenefitTitle>
                        <BenefitDescription>
                            Em compras acima de R$ 500,00 para todo Brasil
                        </BenefitDescription>
                    </BenefitCard>

                    <BenefitCard>
                        <BenefitIconWrapper bgColor="#28a745"> 
                            <FiShield size={32} />
                        </BenefitIconWrapper>
                        <BenefitTitle>Compra 100% Segura</BenefitTitle>
                        <BenefitDescription>
                            Certificação SSL e pagamento protegido por criptografia
                        </BenefitDescription>
                    </BenefitCard>

                    <BenefitCard>
                        <BenefitIconWrapper bgColor="#4c6ef5"> 
                            <FiHeadphones size={32} />
                        </BenefitIconWrapper>
                        <BenefitTitle>Suporte Dedicado</BenefitTitle>
                        <BenefitDescription>
                            Atendimento especializado para novos clientes
                        </BenefitDescription>
                    </BenefitCard>

                    <BenefitCard>
                        <BenefitIconWrapper bgColor="#ff922b">
                            <FiTag size={32} />
                        </BenefitIconWrapper>
                        <BenefitTitle>Garantia Estendida</BenefitTitle>
                        <BenefitDescription>
                            Todos os produtos com garantia do fabricante
                        </BenefitDescription>
                    </BenefitCard>
                    
                    <BenefitCard>
                        <BenefitIconWrapper bgColor="#ae3ec9"> 
                            <FiAward size={32} />
                        </BenefitIconWrapper>
                        <BenefitTitle>Cashback Exclusivo</BenefitTitle>
                        <BenefitDescription>
                            Ganhe pontos a cada compra para usar em futuras compras
                        </BenefitDescription>
                    </BenefitCard>
                </BenefitsGrid>
            </BenefitsSection>

            </PageCont>

        </PageContainer>
    );
};

export default PrimeiraCompra;
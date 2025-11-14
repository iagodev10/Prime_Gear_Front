import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
    BenefitDescription,
    FAQSection,
    FAQItem,
    FAQQuestion,
    FAQAnswer,
    TestimonialsSection,
    TestimonialCard,
    TestimonialAuthor
} from './style';

const PrimeiraCompra = () => {
    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } }
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1 }
    };
    const [faqOpen, setFaqOpen] = React.useState([true, false, false]);
    const toggleFaq = (i) => setFaqOpen((prev) => prev.map((v, idx) => idx === i ? !v : v));

    return (
        <PageContainer>
            <PageHeader>
                <Banner>
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                        <Title>Seja bem-vindo(a)!</Title>
                        <SubTitle>Comprar conosco é fácil, rápido e 100% seguro. Siga os passos:</SubTitle>
                    </motion.div>
                </Banner>
            </PageHeader>

            <PageCont>
                <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                    <StepsGrid>
                        <motion.div variants={cardVariants}>
                            <StepCard>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <StepIconWrapper>
                                        <FiSearch size={30} />
                                    </StepIconWrapper>
                                </motion.div>
                                <StepTitle>1. Encontre seu Produto</StepTitle>
                                <StepDescription>
                                    Navegue por nossas categorias ou use a barra de busca
                                    para encontrar o que deseja.
                                </StepDescription>
                            </StepCard>
                        </motion.div>
                        <motion.div variants={cardVariants}>
                            <StepCard>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <StepIconWrapper>
                                        <FiShoppingCart size={30} />
                                    </StepIconWrapper>
                                </motion.div>
                                <StepTitle>2. Adicione ao Carrinho</StepTitle>
                                <StepDescription>
                                    Gostou do produto? Escolha a quantidade
                                    e clique em "Adicionar ao carrinho".
                                </StepDescription>
                            </StepCard>
                        </motion.div>
                        <motion.div variants={cardVariants}>
                            <StepCard>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <StepIconWrapper>
                                        <FiUser size={30} />
                                    </StepIconWrapper>
                                </motion.div>
                                <StepTitle>3. Crie sua Conta</StepTitle>
                                <StepDescription>
                                    Para fechar o pedido, vá ao carrinho e
                                    clique em "Finalizar Compra". Você fará um
                                    cadastro rápido.
                                </StepDescription>
                            </StepCard>
                        </motion.div>
                        <motion.div variants={cardVariants}>
                            <StepCard>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <StepIconWrapper>
                                        <FiHome size={30} />
                                    </StepIconWrapper>
                                </motion.div>
                                <StepTitle>4. Informe o Endereço</StepTitle>
                                <StepDescription>
                                    Nos diga onde devemos entregar seu pedido.
                                    Não se esqueça de calcular o frete!
                                </StepDescription>
                            </StepCard>
                        </motion.div>
                        <motion.div variants={cardVariants}>
                            <StepCard>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <StepIconWrapper>
                                        <FiCreditCard size={30} />
                                    </StepIconWrapper>
                                </motion.div>
                                <StepTitle>5. Escolha o Pagamento</StepTitle>
                                <StepDescription>
                                    Aceitamos PIX, Boleto e Cartão de Crédito
                                    em até 12x. Tudo com segurança.
                                </StepDescription>
                            </StepCard>
                        </motion.div>
                        <motion.div variants={cardVariants}>
                            <StepCard>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <StepIconWrapper>
                                        <FiCheckCircle size={30} />
                                    </StepIconWrapper>
                                </motion.div>
                                <StepTitle>6. Pronto!</StepTitle>
                                <StepDescription>
                                    Seu pedido será confirmado! Agora é só
                                    aguardar e acompanhar a entrega pelo
                                    seu e-mail.
                                </StepDescription>
                            </StepCard>
                        </motion.div>
                    </StepsGrid>
                </motion.div>

                <CtaContainer>
                    <SubTitle>Viu como é fácil?</SubTitle>
                    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                        <CtaButton to="/loja">Começar a Comprar</CtaButton>
                    </motion.div>
                    <HelpLink to="/fale-conosco">Ainda com dúvidas? Fale conosco</HelpLink>
                </CtaContainer>

                <BenefitsSection>
                    <PageHeader>
                        <Title1>Benefícios Exclusivos</Title1>
                        <SubTitle1>Vantagens especiais que você só encontra na sua primeira compra com o PrimeGear</SubTitle1>
                    </PageHeader>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                        <BenefitsGrid>
                            <motion.div variants={cardVariants}>
                                <BenefitCard>
                                    <motion.div whileHover={{ rotate: 2 }}>
                                        <BenefitIconWrapper bgColor="#ff4d6d">
                                            <FiGift size={32} />
                                        </BenefitIconWrapper>
                                    </motion.div>
                                    <BenefitTitle>10% de Desconto</BenefitTitle>
                                    <BenefitDescription>
                                        Na primeira compra usando o cupom PRIMEGEAR10
                                    </BenefitDescription>
                                </BenefitCard>
                            </motion.div>
                            <motion.div variants={cardVariants}>
                                <BenefitCard>
                                    <motion.div whileHover={{ rotate: 2 }}>
                                        <BenefitIconWrapper bgColor="#007bff">
                                            <FiTruck size={32} />
                                        </BenefitIconWrapper>
                                    </motion.div>
                                    <BenefitTitle>Frete Grátis</BenefitTitle>
                                    <BenefitDescription>
                                        Em compras acima de R$ 500,00 para todo Brasil
                                    </BenefitDescription>
                                </BenefitCard>
                            </motion.div>
                            <motion.div variants={cardVariants}>
                                <BenefitCard>
                                    <motion.div whileHover={{ rotate: 2 }}>
                                        <BenefitIconWrapper bgColor="#28a745">
                                            <FiShield size={32} />
                                        </BenefitIconWrapper>
                                    </motion.div>
                                    <BenefitTitle>Compra 100% Segura</BenefitTitle>
                                    <BenefitDescription>
                                        Certificação SSL e pagamento protegido por criptografia
                                    </BenefitDescription>
                                </BenefitCard>
                            </motion.div>
                            <motion.div variants={cardVariants}>
                                <BenefitCard>
                                    <motion.div whileHover={{ rotate: 2 }}>
                                        <BenefitIconWrapper bgColor="#4c6ef5">
                                            <FiHeadphones size={32} />
                                        </BenefitIconWrapper>
                                    </motion.div>
                                    <BenefitTitle>Suporte Dedicado</BenefitTitle>
                                    <BenefitDescription>
                                        Atendimento especializado para novos clientes
                                    </BenefitDescription>
                                </BenefitCard>
                            </motion.div>
                            <motion.div variants={cardVariants}>
                                <BenefitCard>
                                    <motion.div whileHover={{ rotate: 2 }}>
                                        <BenefitIconWrapper bgColor="#ff922b">
                                            <FiTag size={32} />
                                        </BenefitIconWrapper>
                                    </motion.div>
                                    <BenefitTitle>Garantia Estendida</BenefitTitle>
                                    <BenefitDescription>
                                        Todos os produtos com garantia do fabricante
                                    </BenefitDescription>
                                </BenefitCard>
                            </motion.div>
                            <motion.div variants={cardVariants}>
                                <BenefitCard>
                                    <motion.div whileHover={{ rotate: 2 }}>
                                        <BenefitIconWrapper bgColor="#ae3ec9">
                                            <FiAward size={32} />
                                        </BenefitIconWrapper>
                                    </motion.div>
                                    <BenefitTitle>Cashback Exclusivo</BenefitTitle>
                                    <BenefitDescription>
                                        Ganhe pontos a cada compra para usar em futuras compras
                                    </BenefitDescription>
                                </BenefitCard>
                            </motion.div>
                        </BenefitsGrid>
                    </motion.div>
                </BenefitsSection>

                <TestimonialsSection>
                    <PageHeader>
                        <Title1>O que dizem nossos clientes</Title1>
                        <SubTitle1>Experiências reais de quem já comprou</SubTitle1>
                    </PageHeader>
                    <Swiper modules={[Autoplay]} slidesPerView={1} spaceBetween={20} breakpoints={{768:{slidesPerView:2},1024:{slidesPerView:3}}} autoplay={{delay:3500, disableOnInteraction:false}} loop>
                        <SwiperSlide>
                            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <TestimonialCard>
                                    Ótima experiência! Site rápido e processo de compra simples.
                                    <TestimonialAuthor>— Ana Paula</TestimonialAuthor>
                                </TestimonialCard>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <TestimonialCard>
                                    Entrega antes do prazo e produto impecável. Recomendo!
                                    <TestimonialAuthor>— Carlos Henrique</TestimonialAuthor>
                                </TestimonialCard>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <TestimonialCard>
                                    Atendimento muito atencioso. Tiraram minhas dúvidas rapidamente.
                                    <TestimonialAuthor>— Juliana M.</TestimonialAuthor>
                                </TestimonialCard>
                            </motion.div>
                        </SwiperSlide>
                    </Swiper>
                </TestimonialsSection>

                <FAQSection>
                    <PageHeader>
                        <Title1>Dúvidas Frequentes</Title1>
                        <SubTitle1>Respostas rápidas para a sua primeira compra</SubTitle1>
                    </PageHeader>
                    <FAQItem>
                        <FAQQuestion onClick={() => toggleFaq(0)}>
                            Como aplico meu cupom de desconto?
                            <span>{faqOpen[0] ? '−' : '+'}</span>
                        </FAQQuestion>
                        <motion.div initial={false} animate={{ height: faqOpen[0] ? 'auto' : 0, opacity: faqOpen[0] ? 1 : 0 }} style={{ overflow: 'hidden' }}>
                            <FAQAnswer>
                                No carrinho, insira o código do cupom no campo indicado e clique em aplicar.
                            </FAQAnswer>
                        </motion.div>
                    </FAQItem>
                    <FAQItem>
                        <FAQQuestion onClick={() => toggleFaq(1)}>
                            Quais formas de pagamento vocês aceitam?
                            <span>{faqOpen[1] ? '−' : '+'}</span>
                        </FAQQuestion>
                        <motion.div initial={false} animate={{ height: faqOpen[1] ? 'auto' : 0, opacity: faqOpen[1] ? 1 : 0 }} style={{ overflow: 'hidden' }}>
                            <FAQAnswer>
                                PIX, Boleto e Cartão de Crédito em até 12x, com segurança e criptografia.
                            </FAQAnswer>
                        </motion.div>
                    </FAQItem>
                    <FAQItem>
                        <FAQQuestion onClick={() => toggleFaq(2)}>
                            Posso acompanhar meu pedido?
                            <span>{faqOpen[2] ? '−' : '+'}</span>
                        </FAQQuestion>
                        <motion.div initial={false} animate={{ height: faqOpen[2] ? 'auto' : 0, opacity: faqOpen[2] ? 1 : 0 }} style={{ overflow: 'hidden' }}>
                            <FAQAnswer>
                                Sim, você recebe atualizações por e-mail e pode consultar o status no seu perfil.
                            </FAQAnswer>
                        </motion.div>
                    </FAQItem>
                </FAQSection>
            </PageCont>
        </PageContainer>
    );
};

export default PrimeiraCompra;
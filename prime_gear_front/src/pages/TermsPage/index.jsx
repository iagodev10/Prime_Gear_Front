import React, { useState, useEffect } from "react";
import {
    PageContainer,
    HeroSection,
    HeroTitle,
    HeroSubtitle,
    LastUpdated,
    ContentWrapper,
    Sidebar,
    IndexTitle,
    IndexList,
    IndexItem,
    IndexLink,
    MainContent,
    Section,
    SectionNumber,
    SectionTitle,
    SectionContent,
    HighlightCard,
    InfoGrid,
    InfoItem,
    InfoIcon,
    InfoTitle,
    InfoText,
    ContactCard,
    ContactButton,
    Divider,
} from "./style";
import { FiShield, FiPackage, FiCreditCard, FiRefreshCw, FiTruck, FiFileText, FiUsers, FiGlobe } from "react-icons/fi";

const TermsPage = () => {
    const [activeSection, setActiveSection] = useState("");

    const sections = [
        { id: "aceitacao", title: "Aceitação" },
        { id: "uso", title: "Uso do Site" },
        { id: "compras", title: "Compras" },
        { id: "trocas", title: "Trocas e Devoluções" },
        { id: "entrega", title: "Entrega" },
        { id: "privacidade", title: "Privacidade e Dados" },
        { id: "responsabilidade", title: "Responsabilidade" },
        { id: "contato", title: "Contato" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: "smooth" });
        }
    };

    return (
        <PageContainer>
            <HeroSection>
                <HeroTitle>Termos e Condições</HeroTitle>
                <HeroSubtitle>
                    Direitos, deveres e políticas da PrimeGear
                </HeroSubtitle>
                <LastUpdated>Atualizado em dezembro de 2025</LastUpdated>
            </HeroSection>

            <ContentWrapper>
                <Sidebar>
                    <IndexTitle>Navegação</IndexTitle>
                    <IndexList>
                        {sections.map((section, index) => (
                            <IndexItem key={section.id}>
                                <IndexLink
                                    href={`#${section.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(section.id);
                                    }}
                                    $active={activeSection === section.id}
                                >
                                    {index + 1}. {section.title}
                                </IndexLink>
                            </IndexItem>
                        ))}
                    </IndexList>
                </Sidebar>

                <MainContent>
                    <Section id="aceitacao">
                        <SectionNumber>01</SectionNumber>
                        <SectionTitle>Aceitação dos Termos</SectionTitle>
                        <SectionContent>
                            <p>
                                Ao usar a <strong>PrimeGear</strong>, você concorda com estes termos. Se não concordar, não utilize nossos serviços. É necessário ser maior de 18 anos ou ter autorização dos responsáveis.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="uso">
                        <SectionNumber>02</SectionNumber>
                        <SectionTitle>Uso do Site</SectionTitle>
                        <SectionContent>
                            <p><strong>Você pode:</strong> navegar, comprar produtos e criar sua conta.</p>
                            <p><strong>Você NÃO pode:</strong></p>
                            <ul>
                                <li>Usar bots ou ferramentas automatizadas</li>
                                <li>Tentar acessar sistemas ou redes sem autorização</li>
                                <li>Copiar ou revender conteúdo do site</li>
                                <li>Publicar conteúdo ilegal ou ofensivo</li>
                            </ul>
                            <HighlightCard>
                                <h4>Sua Conta</h4>
                                <p>
                                    Mantenha sua senha segura. Você é responsável por todas as atividades da sua conta. Informações falsas podem resultar no cancelamento da conta.
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Section id="compras">
                        <SectionNumber>03</SectionNumber>
                        <SectionTitle>Compras</SectionTitle>
                        <SectionContent>
                            <InfoGrid>
                                <InfoItem>
                                    <InfoIcon><FiCreditCard size={24} /></InfoIcon>
                                    <InfoTitle>Pagamento</InfoTitle>
                                    <InfoText>Cartão, PIX ou boleto. Parcelamento em até 12x sem juros acima de R$ 500.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoIcon><FiPackage size={24} /></InfoIcon>
                                    <InfoTitle>Produtos</InfoTitle>
                                    <InfoText>Sujeitos à disponibilidade. Imagens ilustrativas. Preços podem mudar sem aviso.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoIcon><FiShield size={24} /></InfoIcon>
                                    <InfoTitle>Segurança</InfoTitle>
                                    <InfoText>Pedidos suspeitos podem ser recusados. Aprovação sujeita à confirmação do pagamento.</InfoText>
                                </InfoItem>
                            </InfoGrid>
                            <p>
                                <strong>Importante:</strong> Em caso de erro de preço evidente, podemos cancelar o pedido e reembolsar integralmente.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="trocas">
                        <SectionNumber>04</SectionNumber>
                        <SectionTitle>Trocas e Devoluções</SectionTitle>
                        <SectionContent>
                            <HighlightCard>
                                <h4>Direito de Arrependimento - 7 dias</h4>
                                <p>
                                    Você pode desistir da compra em até 7 dias corridos após o recebimento. O produto deve estar na embalagem original, sem uso, com todos acessórios e nota fiscal.
                                </p>
                            </HighlightCard>
                            <p><strong>Como solicitar:</strong></p>
                            <ol>
                                <li>Entre em contato pelo e-mail ou WhatsApp</li>
                                <li>Informe número do pedido e motivo</li>
                                <li>Envie o produto conforme instruções</li>
                                <li>Reembolso em até 10 dias úteis após aprovação</li>
                            </ol>
                            <p>
                                <strong>Defeito de fabricação?</strong> Contato imediato. Troca ou reparo pela garantia do fabricante.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="entrega">
                        <SectionNumber>05</SectionNumber>
                        <SectionTitle>Entrega</SectionTitle>
                        <SectionContent>
                            <InfoGrid>
                                <InfoItem>
                                    <InfoIcon><FiTruck size={24} /></InfoIcon>
                                    <InfoTitle>Prazo</InfoTitle>
                                    <InfoText>Varia por região. Conta após aprovação do pagamento. Dias úteis, horário comercial.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoIcon><FiPackage size={24} /></InfoIcon>
                                    <InfoTitle>Frete Grátis</InfoTitle>
                                    <InfoText>Compras acima de R$ 500 em regiões selecionadas. Consulte no checkout.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoIcon><FiGlobe size={24} /></InfoIcon>
                                    <InfoTitle>Rastreamento</InfoTitle>
                                    <InfoText>Disponível para todos os pedidos. Acompanhe em tempo real.</InfoText>
                                </InfoItem>
                            </InfoGrid>
                            <p>
                                Atrasos por transportadora, greves ou clima estão fora do nosso controle. Alguém deve estar no local para receber.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="privacidade">
                        <SectionNumber>06</SectionNumber>
                        <SectionTitle>Privacidade e Dados</SectionTitle>
                        <SectionContent>
                            <p>
                                Seus dados são protegidos conforme a <strong>LGPD</strong>. Coletamos apenas o necessário para processar pedidos e melhorar sua experiência.
                            </p>
                            <HighlightCard>
                                <h4>Conformidade Legal</h4>
                                <p>
                                    Seguimos: Código de Defesa do Consumidor, LGPD, Marco Civil da Internet e Decreto de E-commerce.
                                </p>
                            </HighlightCard>
                            <p><strong>Propriedade Intelectual:</strong> Todo conteúdo do site (textos, imagens, logos) é protegido por direitos autorais. Não reproduza sem autorização.</p>
                        </SectionContent>
                    </Section>

                    <Section id="responsabilidade">
                        <SectionNumber>07</SectionNumber>
                        <SectionTitle>Limitação de Responsabilidade</SectionTitle>
                        <SectionContent>
                            <p>
                                A PrimeGear não se responsabiliza por:
                            </p>
                            <ul>
                                <li>Indisponibilidade temporária do site</li>
                                <li>Problemas técnicos ou falhas de sistema</li>
                                <li>Incompatibilidade de produtos com sistemas específicos</li>
                                <li>Uso inadequado dos produtos</li>
                            </ul>
                            <p>
                                <strong>Garantia dos produtos:</strong> Responsabilidade do fabricante, conforme termos de cada marca.
                            </p>
                            <p>
                                Podemos modificar estes termos a qualquer momento. Alterações significativas serão comunicadas por e-mail. Continuar usando o site após mudanças significa que você aceita os novos termos.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="contato">
                        <SectionNumber>08</SectionNumber>
                        <SectionTitle>Contato</SectionTitle>
                        <SectionContent>
                            <p>
                                Dúvidas sobre os termos? Entre em contato:
                            </p>
                            <ContactCard>
                                <h3>Fale Conosco</h3>
                                <p>
                                    <strong>E-mail:</strong> contato@primegear.com.br<br />
                                    <strong>Telefone:</strong> (11) 4002-8922<br />
                                    <strong>WhatsApp:</strong> (11) 99999-9999<br />
                                    <strong>Atendimento:</strong> Seg-Sex, 9h às 18h
                                </p>
                                <ContactButton href="/faleconosco">
                                    Enviar Mensagem
                                </ContactButton>
                            </ContactCard>
                        </SectionContent>
                    </Section>

                    <Divider />

                    <SectionContent style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
                        <p>
                            <strong>PrimeGear Comércio de Produtos Eletrônicos Ltda.</strong><br />
                            CNPJ: 00.000.000/0001-00 | Av. Paulista, 1000 - São Paulo, SP
                        </p>
                        <p style={{ marginTop: "16px" }}>
                            © 2025 PrimeGear. Todos os direitos reservados.
                        </p>
                    </SectionContent>
                </MainContent>
            </ContentWrapper>
        </PageContainer>
    );
};

export default TermsPage;

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
import { FiLock, FiEye, FiDatabase, FiShare2, FiGlobe, FiUserCheck, FiShield, FiMail } from "react-icons/fi";

const PrivacyPage = () => {
    const [activeSection, setActiveSection] = useState("");

    const sections = [
        { id: "introducao", title: "Introdução" },
        { id: "coleta", title: "Dados Coletados" },
        { id: "uso", title: "Uso dos Dados" },
        { id: "compartilhamento", title: "Compartilhamento" },
        { id: "cookies", title: "Cookies" },
        { id: "direitos", title: "Seus Direitos (LGPD)" },
        { id: "seguranca", title: "Segurança" },
        { id: "contato", title: "Contato DPO" },
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
                <HeroTitle>Política de Privacidade</HeroTitle>
                <HeroSubtitle>
                    Como protegemos seus dados na PrimeGear
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
                    <Section id="introducao">
                        <SectionNumber>01</SectionNumber>
                        <SectionTitle>Introdução</SectionTitle>
                        <SectionContent>
                            <p>
                                A <strong>PrimeGear</strong> respeita sua privacidade. Esta política explica como tratamos seus dados pessoais em conformidade com a <strong>LGPD (Lei 13.709/2018)</strong>.
                            </p>
                            <HighlightCard>
                                <h4>Compromisso</h4>
                                <p>
                                    Nossa prioridade é garantir a transparência, segurança e o controle sobre suas informações.
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Section id="coleta">
                        <SectionNumber>02</SectionNumber>
                        <SectionTitle>Dados Coletados</SectionTitle>
                        <SectionContent>
                            <InfoGrid>
                                <InfoItem>
                                    <InfoIcon><FiUserCheck size={24} /></InfoIcon>
                                    <InfoTitle>Cadastro</InfoTitle>
                                    <InfoText>Nome, CPF, e-mail, telefone e endereço para processar seus pedidos e emitir notas.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoIcon><FiDatabase size={24} /></InfoIcon>
                                    <InfoTitle>Navegação</InfoTitle>
                                    <InfoText>Endereço IP, tipo de dispositivo e páginas visitadas para melhorar o site.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoIcon><FiLock size={24} /></InfoIcon>
                                    <InfoTitle>Pagamento</InfoTitle>
                                    <InfoText>Dados processados com segurança por gateways criptografados. Não armazenamos o CVV.</InfoText>
                                </InfoItem>
                            </InfoGrid>
                        </SectionContent>
                    </Section>

                    <Section id="uso">
                        <SectionNumber>03</SectionNumber>
                        <SectionTitle>Uso dos Dados</SectionTitle>
                        <SectionContent>
                            <p>Utilizamos suas informações para:</p>
                            <ul>
                                <li>Processar pedidos e entregas</li>
                                <li>Fornecer suporte e atendimento</li>
                                <li>Prevenir fraudes e garantir segurança</li>
                                <li>Melhorar nossos serviços e produtos</li>
                                <li>Marketing (apenas com seu consentimento)</li>
                            </ul>
                        </SectionContent>
                    </Section>

                    <Section id="compartilhamento">
                        <SectionNumber>04</SectionNumber>
                        <SectionTitle>Compartilhamento</SectionTitle>
                        <SectionContent>
                            <p>
                                Não vendemos seus dados. Compartilhamos apenas o necessário com:
                            </p>
                            <InfoGrid>
                                <InfoItem>
                                    <InfoIcon><FiShare2 size={24} /></InfoIcon>
                                    <InfoTitle>Parceiros</InfoTitle>
                                    <InfoText>Transportadoras e processadores de pagamento para operacionalizar compras.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoIcon><FiShield size={24} /></InfoIcon>
                                    <InfoTitle>Autoridades</InfoTitle>
                                    <InfoText>Apenas quando exigido por lei ou ordem judicial para proteger direitos.</InfoText>
                                </InfoItem>
                            </InfoGrid>
                        </SectionContent>
                    </Section>

                    <Section id="cookies">
                        <SectionNumber>05</SectionNumber>
                        <SectionTitle>Cookies</SectionTitle>
                        <SectionContent>
                            <InfoGrid>
                                <InfoItem>
                                    <InfoIcon><FiGlobe size={24} /></InfoIcon>
                                    <InfoTitle>Cookies</InfoTitle>
                                    <InfoText>Arquivos que salvam suas preferências.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoIcon><FiEye size={24} /></InfoIcon>
                                    <InfoTitle>Tecnologias</InfoTitle>
                                    <InfoText>Pixels e analytics para entender como você usa o site.</InfoText>
                                </InfoItem>
                            </InfoGrid>
                        </SectionContent>
                    </Section>

                    <Section id="direitos">
                        <SectionNumber>06</SectionNumber>
                        <SectionTitle>Seus Direitos (LGPD)</SectionTitle>
                        <SectionContent>
                            <p>Você tem controle total sobre seus dados:</p>
                            <ul>
                                <li>Acessar e corrigir suas informações</li>
                                <li>Solicitar a exclusão de dados</li>
                                <li>Revogar consentimento de marketing</li>
                                <li>Solicitar portabilidade dos dados</li>
                            </ul>
                            <p>
                                Para exercer esses direitos, contate nosso DPO abaixo.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="seguranca">
                        <SectionNumber>07</SectionNumber>
                        <SectionTitle>Segurança</SectionTitle>
                        <SectionContent>
                            <InfoGrid>
                                <InfoItem>
                                    <InfoIcon><FiLock size={24} /></InfoIcon>
                                    <InfoTitle>Criptografia</InfoTitle>
                                    <InfoText>Dados protegidos com SSL/TLS e criptografia de ponta a ponta.</InfoText>
                                </InfoItem>
                                <InfoItem>
                                    <InfoIcon><FiEye size={24} /></InfoIcon>
                                    <InfoTitle>Monitoramento</InfoTitle>
                                    <InfoText>Sistemas de proteção contra intrusão e acesso restrito a funcionários.</InfoText>
                                </InfoItem>
                            </InfoGrid>
                        </SectionContent>
                    </Section>

                    <Section id="contato">
                        <SectionNumber>08</SectionNumber>
                        <SectionTitle>Contato DPO</SectionTitle>
                        <SectionContent>
                            <p>
                                Dúvidas sobre privacidade? Fale com nosso Encarregado de Dados:
                            </p>
                            <ContactCard>
                                <h3>Encarregado de Dados (DPO)</h3>
                                <p>
                                    <strong>E-mail:</strong> dpo@primegear.com.br<br />
                                    <strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP
                                </p>
                                <p style={{ marginTop: "16px", fontSize: "0.9rem" }}>
                                    Prazo de resposta: até 15 dias úteis (LGPD).
                                </p>
                                <ContactButton href="mailto:dpo@primegear.com.br">
                                    Enviar E-mail
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
                            © 2025 PrimeGear. Política em conformidade com a LGPD.
                        </p>
                    </SectionContent>
                </MainContent>
            </ContentWrapper>
        </PageContainer>
    );
};

export default PrivacyPage;

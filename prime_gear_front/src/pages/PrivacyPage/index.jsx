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
    ContactCard,
    ContactButton,
    Divider,
} from "./style";

const PrivacyPage = () => {
    const [activeSection, setActiveSection] = useState("");

    const sections = [
        { id: "introducao", title: "Introdução" },
        { id: "dados-coletados", title: "Dados Coletados" },
        { id: "uso-dados", title: "Como Usamos Seus Dados" },
        { id: "compartilhamento", title: "Compartilhamento de Dados" },
        { id: "cookies", title: "Cookies e Tecnologias" },
        { id: "direitos", title: "Seus Direitos (LGPD)" },
        { id: "seguranca", title: "Segurança dos Dados" },
        { id: "retencao", title: "Retenção de Dados" },
        { id: "transferencia", title: "Transferência Internacional" },
        { id: "menores", title: "Menores de Idade" },
        { id: "alteracoes", title: "Alterações na Política" },
        { id: "contato-dpo", title: "Contato do DPO" },
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
                    Transparência total sobre como coletamos, usamos e protegemos seus dados pessoais
                </HeroSubtitle>
                <LastUpdated>Última atualização: 03 de dezembro de 2025</LastUpdated>
            </HeroSection>

            <ContentWrapper>
                <Sidebar>
                    <IndexTitle>Índice</IndexTitle>
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
                                A <strong>PrimeGear</strong> está comprometida em proteger sua privacidade e seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>.
                            </p>
                            <p>
                                Ao utilizar nosso site e serviços, você concorda com as práticas descritas nesta política. Recomendamos que você leia atentamente este documento para entender como tratamos seus dados pessoais.
                            </p>
                            <HighlightCard>
                                <h4>Compromisso com a LGPD</h4>
                                <p>
                                    A PrimeGear respeita todos os princípios da LGPD, incluindo finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e responsabilização.
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Section id="dados-coletados">
                        <SectionNumber>02</SectionNumber>
                        <SectionTitle>Dados Coletados</SectionTitle>
                        <SectionContent>
                            <p>
                                Coletamos diferentes tipos de dados pessoais dependendo da sua interação com nossos serviços:
                            </p>

                            <p><strong>Dados fornecidos por você:</strong></p>
                            <ul>
                                <li><strong>Cadastro:</strong> Nome completo, CPF, data de nascimento, e-mail, telefone</li>
                                <li><strong>Endereço:</strong> CEP, rua, número, complemento, bairro, cidade, estado</li>
                                <li><strong>Pagamento:</strong> Dados do cartão de crédito/débito (processados por gateway seguro)</li>
                                <li><strong>Comunicação:</strong> Mensagens enviadas através de formulários de contato</li>
                            </ul>

                            <p><strong>Dados coletados automaticamente:</strong></p>
                            <ul>
                                <li><strong>Navegação:</strong> Endereço IP, tipo de navegador, sistema operacional</li>
                                <li><strong>Cookies:</strong> Preferências, histórico de navegação, carrinho de compras</li>
                                <li><strong>Dispositivo:</strong> Modelo, resolução de tela, idioma</li>
                                <li><strong>Interações:</strong> Páginas visitadas, produtos visualizados, tempo de permanência</li>
                            </ul>

                            <HighlightCard>
                                <h4>Dados Sensíveis</h4>
                                <p>
                                    A PrimeGear não coleta dados sensíveis (origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dados genéticos, biométricos ou de saúde) sem seu consentimento explícito e específico.
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Section id="uso-dados">
                        <SectionNumber>03</SectionNumber>
                        <SectionTitle>Como Usamos Seus Dados</SectionTitle>
                        <SectionContent>
                            <p>
                                Utilizamos seus dados pessoais para as seguintes finalidades, sempre com base legal adequada:
                            </p>

                            <p><strong>Execução de contrato:</strong></p>
                            <ul>
                                <li>Processar e entregar seus pedidos</li>
                                <li>Emitir notas fiscais e documentos de compra</li>
                                <li>Gerenciar pagamentos e reembolsos</li>
                                <li>Fornecer suporte ao cliente</li>
                            </ul>

                            <p><strong>Legítimo interesse:</strong></p>
                            <ul>
                                <li>Melhorar a experiência de navegação no site</li>
                                <li>Prevenir fraudes e garantir segurança</li>
                                <li>Realizar análises estatísticas e pesquisas de mercado</li>
                                <li>Desenvolver novos produtos e serviços</li>
                            </ul>

                            <p><strong>Consentimento:</strong></p>
                            <ul>
                                <li>Enviar newsletters e comunicações de marketing</li>
                                <li>Personalizar ofertas e recomendações de produtos</li>
                                <li>Realizar campanhas promocionais</li>
                            </ul>

                            <p><strong>Obrigação legal:</strong></p>
                            <ul>
                                <li>Cumprir ordens judiciais e requisições de autoridades</li>
                                <li>Atender obrigações fiscais e contábeis</li>
                                <li>Manter registros para fins de auditoria</li>
                            </ul>
                        </SectionContent>
                    </Section>

                    <Section id="compartilhamento">
                        <SectionNumber>04</SectionNumber>
                        <SectionTitle>Compartilhamento de Dados</SectionTitle>
                        <SectionContent>
                            <p>
                                A PrimeGear não vende, aluga ou comercializa seus dados pessoais. Compartilhamos informações apenas quando necessário e com as seguintes entidades:
                            </p>

                            <p><strong>Prestadores de serviço:</strong></p>
                            <ul>
                                <li><strong>Transportadoras:</strong> Para entrega de produtos (nome, endereço, telefone)</li>
                                <li><strong>Gateways de pagamento:</strong> Para processar transações financeiras</li>
                                <li><strong>Plataformas de e-mail:</strong> Para envio de comunicações autorizadas</li>
                                <li><strong>Serviços de hospedagem:</strong> Para armazenamento seguro de dados</li>
                            </ul>

                            <p><strong>Autoridades:</strong></p>
                            <ul>
                                <li>Quando exigido por lei ou ordem judicial</li>
                                <li>Para proteger direitos, propriedade ou segurança da PrimeGear</li>
                                <li>Em investigações de fraude ou atividades ilegais</li>
                            </ul>

                            <HighlightCard>
                                <h4>Contratos de Processamento</h4>
                                <p>
                                    Todos os terceiros que processam dados em nosso nome são contratualmente obrigados a manter a confidencialidade e segurança das informações, utilizando-as apenas para as finalidades autorizadas.
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Section id="cookies">
                        <SectionNumber>05</SectionNumber>
                        <SectionTitle>Cookies e Tecnologias Similares</SectionTitle>
                        <SectionContent>
                            <p>
                                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. Cookies são pequenos arquivos de texto armazenados em seu dispositivo.
                            </p>

                            <p><strong>Tipos de cookies utilizados:</strong></p>
                            <ul>
                                <li><strong>Essenciais:</strong> Necessários para o funcionamento básico do site (carrinho, login)</li>
                                <li><strong>Funcionais:</strong> Lembram suas preferências e configurações</li>
                                <li><strong>Analíticos:</strong> Coletam informações sobre como você usa o site</li>
                                <li><strong>Marketing:</strong> Personalizam anúncios e ofertas (requerem consentimento)</li>
                            </ul>

                            <p>
                                Você pode gerenciar ou desabilitar cookies através das configurações do seu navegador. Note que desabilitar cookies essenciais pode afetar a funcionalidade do site.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="direitos">
                        <SectionNumber>06</SectionNumber>
                        <SectionTitle>Seus Direitos (LGPD)</SectionTitle>
                        <SectionContent>
                            <p>
                                De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
                            </p>

                            <HighlightCard>
                                <h4>Direitos do Titular de Dados</h4>
                                <ul>
                                    <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                                    <li><strong>Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados</li>
                                    <li><strong>Anonimização, bloqueio ou eliminação:</strong> De dados desnecessários, excessivos ou tratados em desconformidade</li>
                                    <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado e interoperável</li>
                                    <li><strong>Eliminação:</strong> Dos dados tratados com base em consentimento</li>
                                    <li><strong>Informação:</strong> Sobre compartilhamento de dados com terceiros</li>
                                    <li><strong>Revogação do consentimento:</strong> A qualquer momento</li>
                                    <li><strong>Oposição:</strong> Ao tratamento realizado com base em legítimo interesse</li>
                                    <li><strong>Revisão:</strong> De decisões automatizadas</li>
                                </ul>
                            </HighlightCard>

                            <p>
                                Para exercer qualquer um desses direitos, entre em contato com nosso Encarregado de Dados (DPO) através do e-mail: <strong>dpo@primegear.com.br</strong>
                            </p>

                            <p>
                                Responderemos sua solicitação em até 15 dias, conforme estabelecido pela LGPD.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="seguranca">
                        <SectionNumber>07</SectionNumber>
                        <SectionTitle>Segurança dos Dados</SectionTitle>
                        <SectionContent>
                            <p>
                                A segurança dos seus dados pessoais é nossa prioridade. Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                            </p>

                            <p><strong>Medidas de segurança:</strong></p>
                            <ul>
                                <li><strong>Criptografia:</strong> Dados sensíveis são criptografados em trânsito (SSL/TLS) e em repouso</li>
                                <li><strong>Controle de acesso:</strong> Apenas funcionários autorizados têm acesso a dados pessoais</li>
                                <li><strong>Autenticação:</strong> Senhas fortes e autenticação de dois fatores quando disponível</li>
                                <li><strong>Monitoramento:</strong> Sistemas de detecção e prevenção de intrusões</li>
                                <li><strong>Backups:</strong> Cópias de segurança regulares e seguras</li>
                                <li><strong>Treinamento:</strong> Equipe treinada em boas práticas de segurança e privacidade</li>
                            </ul>

                            <HighlightCard>
                                <h4>Incidentes de Segurança</h4>
                                <p>
                                    Em caso de incidente de segurança que possa acarretar risco ou dano relevante, notificaremos você e a Autoridade Nacional de Proteção de Dados (ANPD) conforme exigido pela LGPD.
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Section id="retencao">
                        <SectionNumber>08</SectionNumber>
                        <SectionTitle>Retenção de Dados</SectionTitle>
                        <SectionContent>
                            <p>
                                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, respeitando prazos legais e regulatórios.
                            </p>

                            <p><strong>Períodos de retenção:</strong></p>
                            <ul>
                                <li><strong>Dados de cadastro:</strong> Enquanto sua conta estiver ativa ou conforme necessário para fornecer serviços</li>
                                <li><strong>Histórico de compras:</strong> 5 anos (prazo legal para fins fiscais e contábeis)</li>
                                <li><strong>Dados de marketing:</strong> Até a revogação do consentimento</li>
                                <li><strong>Cookies:</strong> Conforme política de cookies (geralmente até 12 meses)</li>
                                <li><strong>Logs de acesso:</strong> 6 meses (conforme Marco Civil da Internet)</li>
                            </ul>

                            <p>
                                Após o término do período de retenção, os dados serão eliminados de forma segura ou anonimizados.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="transferencia">
                        <SectionNumber>09</SectionNumber>
                        <SectionTitle>Transferência Internacional de Dados</SectionTitle>
                        <SectionContent>
                            <p>
                                Alguns de nossos prestadores de serviço podem estar localizados fora do Brasil. Quando transferimos dados pessoais para outros países, garantimos que:
                            </p>

                            <ul>
                                <li>O país de destino oferece nível adequado de proteção de dados, ou</li>
                                <li>Implementamos salvaguardas apropriadas, como cláusulas contratuais padrão</li>
                                <li>Obtemos seu consentimento explícito quando necessário</li>
                            </ul>

                            <p>
                                Todas as transferências internacionais estão em conformidade com a LGPD e regulamentações da ANPD.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="menores">
                        <SectionNumber>10</SectionNumber>
                        <SectionTitle>Menores de Idade</SectionTitle>
                        <SectionContent>
                            <p>
                                Nossos serviços são destinados a pessoas maiores de 18 anos. Não coletamos intencionalmente dados pessoais de menores de idade sem o consentimento dos pais ou responsáveis legais.
                            </p>

                            <HighlightCard>
                                <h4>Proteção de Menores</h4>
                                <p>
                                    Se tomarmos conhecimento de que coletamos dados de um menor sem o devido consentimento, tomaremos medidas para eliminar essas informações o mais rápido possível.
                                </p>
                            </HighlightCard>

                            <p>
                                Pais e responsáveis podem entrar em contato conosco para exercer direitos em nome de menores sob sua responsabilidade.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="alteracoes">
                        <SectionNumber>11</SectionNumber>
                        <SectionTitle>Alterações na Política de Privacidade</SectionTitle>
                        <SectionContent>
                            <p>
                                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas, tecnologias ou requisitos legais.
                            </p>

                            <p>
                                Quando fizermos alterações significativas, notificaremos você por:
                            </p>
                            <ul>
                                <li>E-mail para o endereço cadastrado</li>
                                <li>Aviso destacado em nosso site</li>
                                <li>Notificação ao fazer login em sua conta</li>
                            </ul>

                            <p>
                                Recomendamos que você revise esta política regularmente. A data da última atualização está sempre indicada no topo desta página.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="contato-dpo">
                        <SectionNumber>12</SectionNumber>
                        <SectionTitle>Contato do Encarregado de Dados (DPO)</SectionTitle>
                        <SectionContent>
                            <p>
                                Se você tiver dúvidas sobre esta Política de Privacidade, quiser exercer seus direitos ou relatar uma preocupação relacionada à privacidade, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
                            </p>

                            <ContactCard>
                                <h3>Encarregado de Dados (DPO)</h3>
                                <p>
                                    <strong>Nome:</strong> Maria Silva Santos<br />
                                    <strong>E-mail:</strong> dpo@primegear.com.br<br />
                                    <strong>Telefone:</strong> (11) 4002-8922 (ramal 100)<br />
                                    <strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP - CEP 01310-100
                                </p>
                                <p style={{ marginTop: "16px", fontSize: "0.9rem" }}>
                                    Responderemos sua solicitação em até 15 dias úteis, conforme estabelecido pela LGPD.
                                </p>
                                <ContactButton href="mailto:dpo@primegear.com.br">
                                    Enviar E-mail ao DPO
                                </ContactButton>
                            </ContactCard>

                            <HighlightCard style={{ marginTop: "32px" }}>
                                <h4>Autoridade Nacional de Proteção de Dados (ANPD)</h4>
                                <p>
                                    Você também tem o direito de apresentar uma reclamação à ANPD se acreditar que o tratamento de seus dados pessoais viola a LGPD.
                                </p>
                                <p>
                                    <strong>Site da ANPD:</strong> <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">www.gov.br/anpd</a>
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Divider />

                    <SectionContent style={{ textAlign: "center", color: "#666", fontSize: "0.9rem" }}>
                        <p>
                            <strong>PrimeGear Comércio de Produtos Eletrônicos Ltda.</strong><br />
                            CNPJ: 00.000.000/0001-00<br />
                            Endereço: Av. Paulista, 1000 - São Paulo, SP - CEP 01310-100
                        </p>
                        <p style={{ marginTop: "24px" }}>
                            Esta Política de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)
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

export default PrivacyPage;

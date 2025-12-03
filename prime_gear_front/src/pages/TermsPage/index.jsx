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

const TermsPage = () => {
    const [activeSection, setActiveSection] = useState("");

    const sections = [
        { id: "aceitacao", title: "Aceitação dos Termos" },
        { id: "uso", title: "Uso do Site" },
        { id: "cadastro", title: "Cadastro e Conta" },
        { id: "produtos", title: "Produtos e Preços" },
        { id: "pedidos", title: "Pedidos e Pagamento" },
        { id: "entrega", title: "Entrega" },
        { id: "trocas", title: "Trocas e Devoluções" },
        { id: "propriedade", title: "Propriedade Intelectual" },
        { id: "limitacao", title: "Limitação de Responsabilidade" },
        { id: "modificacoes", title: "Modificações dos Termos" },
        { id: "lei", title: "Lei Aplicável" },
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
                <HeroTitle>Termos e Condições de Uso</HeroTitle>
                <HeroSubtitle>
                    Leia atentamente os termos que regem o uso da plataforma PrimeGear
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
                    <Section id="aceitacao">
                        <SectionNumber>01</SectionNumber>
                        <SectionTitle>Aceitação dos Termos</SectionTitle>
                        <SectionContent>
                            <p>
                                Bem-vindo à <strong>PrimeGear</strong>! Ao acessar e utilizar nosso site, você concorda em cumprir e estar vinculado aos seguintes Termos e Condições de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
                            </p>
                            <p>
                                Estes termos aplicam-se a todos os visitantes, usuários e outras pessoas que acessam ou utilizam o serviço. Ao criar uma conta ou realizar uma compra, você confirma que leu, compreendeu e concorda com estes Termos e Condições.
                            </p>
                            <HighlightCard>
                                <h4>Importante</h4>
                                <p>
                                    Ao utilizar a PrimeGear, você declara ser maior de 18 anos ou possuir autorização de seus responsáveis legais para realizar compras.
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Section id="uso">
                        <SectionNumber>02</SectionNumber>
                        <SectionTitle>Uso do Site</SectionTitle>
                        <SectionContent>
                            <p>
                                Você concorda em utilizar o site da PrimeGear apenas para fins legais e de maneira que não infrinja os direitos de terceiros ou restrinja ou iniba o uso e aproveitamento do site por qualquer outra pessoa.
                            </p>
                            <p><strong>É proibido:</strong></p>
                            <ul>
                                <li>Usar o site de qualquer forma que possa danificar, desabilitar, sobrecarregar ou prejudicar qualquer servidor da PrimeGear</li>
                                <li>Tentar obter acesso não autorizado a qualquer parte do site, sistemas ou redes conectadas</li>
                                <li>Reproduzir, duplicar, copiar ou revender qualquer parte do site sem nossa permissão expressa</li>
                                <li>Utilizar bots, scrapers ou qualquer ferramenta automatizada para acessar o site</li>
                                <li>Publicar ou transmitir conteúdo ilegal, ofensivo, difamatório ou que viole direitos de terceiros</li>
                            </ul>
                        </SectionContent>
                    </Section>

                    <Section id="cadastro">
                        <SectionNumber>03</SectionNumber>
                        <SectionTitle>Cadastro e Conta</SectionTitle>
                        <SectionContent>
                            <p>
                                Para realizar compras na PrimeGear, você deve criar uma conta fornecendo informações precisas, completas e atualizadas. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorram em sua conta.
                            </p>
                            <p><strong>Responsabilidades do usuário:</strong></p>
                            <ul>
                                <li>Fornecer informações verdadeiras e atualizadas durante o cadastro</li>
                                <li>Manter a segurança de sua senha e não compartilhá-la com terceiros</li>
                                <li>Notificar imediatamente a PrimeGear sobre qualquer uso não autorizado de sua conta</li>
                                <li>Atualizar suas informações cadastrais sempre que necessário</li>
                            </ul>
                            <p>
                                A PrimeGear reserva-se o direito de suspender ou encerrar contas que violem estes Termos ou que sejam utilizadas para atividades fraudulentas.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="produtos">
                        <SectionNumber>04</SectionNumber>
                        <SectionTitle>Produtos e Preços</SectionTitle>
                        <SectionContent>
                            <p>
                                Todos os produtos exibidos no site estão sujeitos à disponibilidade em estoque. Fazemos todos os esforços para garantir que as descrições, especificações e preços dos produtos sejam precisos, mas não podemos garantir que estejam 100% livres de erros.
                            </p>
                            <HighlightCard>
                                <h4>Política de Preços</h4>
                                <p>
                                    Os preços dos produtos podem ser alterados sem aviso prévio. Em caso de erro evidente de preço, a PrimeGear reserva-se o direito de cancelar o pedido e reembolsar integralmente o cliente.
                                </p>
                            </HighlightCard>
                            <p><strong>Informações sobre produtos:</strong></p>
                            <ul>
                                <li>As imagens são meramente ilustrativas e podem diferir do produto real</li>
                                <li>Especificações técnicas são fornecidas pelos fabricantes</li>
                                <li>Cores podem variar devido a configurações de monitor</li>
                                <li>Produtos em promoção têm quantidade limitada</li>
                            </ul>
                        </SectionContent>
                    </Section>

                    <Section id="pedidos">
                        <SectionNumber>05</SectionNumber>
                        <SectionTitle>Pedidos e Pagamento</SectionTitle>
                        <SectionContent>
                            <p>
                                Ao realizar um pedido, você concorda em fornecer informações de pagamento válidas e autoriza a PrimeGear a cobrar o valor total do pedido, incluindo impostos e frete.
                            </p>
                            <p><strong>Formas de pagamento aceitas:</strong></p>
                            <ul>
                                <li>Cartão de crédito (Visa, Mastercard, Elo, American Express)</li>
                                <li>Cartão de débito</li>
                                <li>PIX (aprovação instantânea)</li>
                                <li>Boleto bancário (aprovação em até 3 dias úteis)</li>
                            </ul>
                            <p>
                                A confirmação do pedido está sujeita à aprovação do pagamento. A PrimeGear reserva-se o direito de recusar ou cancelar pedidos em caso de suspeita de fraude, informações incorretas ou indisponibilidade de produtos.
                            </p>
                            <HighlightCard>
                                <h4>Parcelamento</h4>
                                <p>
                                    Oferecemos parcelamento em até 12x sem juros no cartão de crédito para compras acima de R$ 500,00. Consulte as condições no momento da compra.
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Section id="entrega">
                        <SectionNumber>06</SectionNumber>
                        <SectionTitle>Entrega</SectionTitle>
                        <SectionContent>
                            <p>
                                Os prazos de entrega são estimados e começam a contar a partir da confirmação do pagamento. Fazemos parceria com transportadoras confiáveis para garantir que seu pedido chegue com segurança.
                            </p>
                            <p><strong>Informações sobre entrega:</strong></p>
                            <ul>
                                <li>Prazo de entrega varia conforme a região e modalidade escolhida</li>
                                <li>Frete grátis para compras acima de R$ 500,00 (consulte regiões)</li>
                                <li>Rastreamento disponível para todos os pedidos</li>
                                <li>Entrega em dias úteis, no horário comercial</li>
                                <li>É necessário que haja alguém no local para receber o produto</li>
                            </ul>
                            <p>
                                A PrimeGear não se responsabiliza por atrasos causados por transportadoras, greves, condições climáticas adversas ou outros eventos fora de nosso controle.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="trocas">
                        <SectionNumber>07</SectionNumber>
                        <SectionTitle>Trocas e Devoluções</SectionTitle>
                        <SectionContent>
                            <p>
                                Conforme o Código de Defesa do Consumidor, você tem o direito de desistir da compra em até <strong>7 dias corridos</strong> a partir do recebimento do produto, sem necessidade de justificativa.
                            </p>
                            <HighlightCard>
                                <h4>Direito de Arrependimento</h4>
                                <p>
                                    Para exercer o direito de arrependimento, o produto deve estar em sua embalagem original, sem sinais de uso, com todos os acessórios, manuais e nota fiscal.
                                </p>
                            </HighlightCard>
                            <p><strong>Processo de troca ou devolução:</strong></p>
                            <ol>
                                <li>Entre em contato com nosso SAC através do e-mail ou telefone</li>
                                <li>Informe o número do pedido e o motivo da devolução</li>
                                <li>Aguarde as instruções para envio do produto</li>
                                <li>Após recebermos e analisarmos o produto, processaremos o reembolso</li>
                            </ol>
                            <p>
                                <strong>Produtos com defeito:</strong> Em caso de defeito de fabricação, entre em contato imediatamente. Realizaremos a troca ou reparo conforme garantia do fabricante.
                            </p>
                            <p>
                                O reembolso será processado na mesma forma de pagamento utilizada na compra, em até 10 dias úteis após a aprovação da devolução.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="propriedade">
                        <SectionNumber>08</SectionNumber>
                        <SectionTitle>Propriedade Intelectual</SectionTitle>
                        <SectionContent>
                            <p>
                                Todo o conteúdo do site da PrimeGear, incluindo textos, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da PrimeGear ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais.
                            </p>
                            <p><strong>Você não pode:</strong></p>
                            <ul>
                                <li>Reproduzir, modificar, distribuir ou exibir publicamente qualquer conteúdo do site</li>
                                <li>Usar marcas registradas, logos ou nomes comerciais da PrimeGear sem autorização</li>
                                <li>Criar trabalhos derivados baseados em nosso conteúdo</li>
                                <li>Fazer engenharia reversa de qualquer software ou tecnologia do site</li>
                            </ul>
                        </SectionContent>
                    </Section>

                    <Section id="limitacao">
                        <SectionNumber>09</SectionNumber>
                        <SectionTitle>Limitação de Responsabilidade</SectionTitle>
                        <SectionContent>
                            <p>
                                A PrimeGear não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar nossos serviços, mesmo que tenhamos sido avisados da possibilidade de tais danos.
                            </p>
                            <p><strong>Isenções:</strong></p>
                            <ul>
                                <li>Não garantimos que o site estará sempre disponível ou livre de erros</li>
                                <li>Não nos responsabilizamos por problemas técnicos ou falhas de sistema</li>
                                <li>Não garantimos a compatibilidade de produtos com sistemas específicos</li>
                                <li>Não nos responsabilizamos por uso inadequado dos produtos</li>
                            </ul>
                            <p>
                                A garantia dos produtos é de responsabilidade do fabricante, conforme termos específicos de cada marca.
                            </p>
                        </SectionContent>
                    </Section>

                    <Section id="modificacoes">
                        <SectionNumber>10</SectionNumber>
                        <SectionTitle>Modificações dos Termos</SectionTitle>
                        <SectionContent>
                            <p>
                                A PrimeGear reserva-se o direito de modificar estes Termos e Condições a qualquer momento. Quaisquer alterações entrarão em vigor imediatamente após a publicação no site.
                            </p>
                            <p>
                                É sua responsabilidade revisar periodicamente estes Termos. O uso continuado do site após alterações constitui aceitação dos novos termos.
                            </p>
                            <HighlightCard>
                                <h4>Notificação de Mudanças</h4>
                                <p>
                                    Alterações significativas serão comunicadas por e-mail aos usuários cadastrados ou através de aviso destacado no site.
                                </p>
                            </HighlightCard>
                        </SectionContent>
                    </Section>

                    <Section id="lei">
                        <SectionNumber>11</SectionNumber>
                        <SectionTitle>Lei Aplicável</SectionTitle>
                        <SectionContent>
                            <p>
                                Estes Termos e Condições são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
                            </p>
                            <p>
                                A PrimeGear está em conformidade com:
                            </p>
                            <ul>
                                <li>Código de Defesa do Consumidor (Lei 8.078/1990)</li>
                                <li>Lei Geral de Proteção de Dados - LGPD (Lei 13.709/2018)</li>
                                <li>Marco Civil da Internet (Lei 12.965/2014)</li>
                                <li>Decreto nº 7.962/2013 (E-commerce)</li>
                            </ul>
                        </SectionContent>
                    </Section>

                    <Section id="contato">
                        <SectionNumber>12</SectionNumber>
                        <SectionTitle>Contato</SectionTitle>
                        <SectionContent>
                            <p>
                                Se você tiver dúvidas sobre estes Termos e Condições, entre em contato conosco:
                            </p>
                            <ContactCard>
                                <h3>Fale Conosco</h3>
                                <p>
                                    <strong>E-mail:</strong> contato@primegear.com.br<br />
                                    <strong>Telefone:</strong> (11) 4002-8922<br />
                                    <strong>WhatsApp:</strong> (11) 99999-9999<br />
                                    <strong>Horário de atendimento:</strong> Segunda a sexta, das 9h às 18h
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
                            CNPJ: 00.000.000/0001-00<br />
                            Endereço: Av. Paulista, 1000 - São Paulo, SP - CEP 01310-100
                        </p>
                        <p style={{ marginTop: "24px" }}>
                            © 2025 PrimeGear. Todos os direitos reservados.
                        </p>
                    </SectionContent>
                </MainContent>
            </ContentWrapper>
        </PageContainer>
    );
};

export default TermsPage;

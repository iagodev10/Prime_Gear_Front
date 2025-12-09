import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { BsBoxSeam } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { FiShoppingBag, FiArchive, FiSettings } from "react-icons/fi";
import { FiPlus, FiMinus } from "react-icons/fi";

import {
  Container,
  Canais,
  Card,
  Titulo,
  Info,
  Content,
  Email,
  EmailImage,
  EmailText,
  Duvidas,
  DTitulo,
  Title,
  SubTitle,
  Cards,
  Suport,
  Texto,
  Button,
  SuporteTecnico,
  FormGroup,
  AjudaComprar,
  DTexto,
  FaqContainer,
  FaqItem,
  FaqQuestion,
  FaqAnswer,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  Comprar,
  Text,
  Title1,
  Buttond,
  FeatureSection,
  FeatureGrid,
  FeatureCard,
  ErrorText,
} from "./style";
import { validators } from "../../utils/formValidation";

const faqData = [
  {
    q: "Quais são as formas de pagamento aceitas?",
    a: "Aceitamos Cartão de Crédito (Visa, Master, Elo, Amex), PIX (com 5% de desconto) e Boleto Bancário. O parcelamento pode ser feito em até 12x sem juros.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "O prazo de entrega varia de acordo com seu CEP. Você pode calcular o prazo exato na página do produto ou no carrinho de compras. Em média, para capitais, o prazo é de 2 a 5 dias úteis.",
  },
  {
    q: "Como funciona a garantia dos produtos?",
    a: "Oferecemos uma garantia legal de 90 dias contra defeitos de fabricação. Além disso, muitos produtos possuem garantia contratual do fabricante de 1 ano ou mais. Verifique a página do produto para detalhes.",
  },
  {
    q: "O produto está disponível em estoque?",
    a: "Sim! Todos os produtos listados como 'disponíveis' em nosso site estão em nosso centro de distribuição prontos para envio imediato.",
  },
];

const FaleConosco = () => {
  const suporteRef = useRef(null);
  const tecnicoRef = useRef(null);
  const comprarRef = useRef(null);

  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ email: "", pedido: "", descricao: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleFieldChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validateField = (field) => {
    const value = form[field];
    const nextErrors = { ...formErrors };
    if (field === "email" && !validators.email(value)) {
      nextErrors.email = "E-mail inválido";
    } else if (field === "descricao" && !validators.required(value)) {
      nextErrors.descricao = "Este campo é obrigatório";
    } else {
      delete nextErrors[field];
    }
    setFormErrors(nextErrors);
  };

  const handleOpenTicket = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!validators.email(form.email)) nextErrors.email = "E-mail inválido";
    if (!validators.required(form.descricao))
      nextErrors.descricao = "Este campo é obrigatório";
    setFormErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      alert("Chamado aberto com sucesso!");
    }
  };

  const scrollToComprar = () => {
    comprarRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToSuporte = () => {
    suporteRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTecnico = () => {
    tecnicoRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleFaq = (index) => {
    // Se clicar no que já está aberto, fecha (seta para null)
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index); // Abre o novo
    }
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <Canais>
        <Title>Fale Conosco</Title>
        <SubTitle>Qual tipo de suporte você precisa?</SubTitle>
      </Canais>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Cards>
          <motion.div variants={itemVariants}>
            <Comprar onClick={scrollToComprar}>
              <FiShoppingBag size={50} color="black" />
              <Text>Ajuda para comprar</Text>
            </Comprar>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Comprar onClick={scrollToSuporte}>
              <BsBoxSeam size={50} color="black" />
              <Text>Ajuda com meu Pedido</Text>
            </Comprar>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Comprar onClick={scrollToTecnico}>
              <FiSettings size={50} color="black" />
              <Text>Suporte Técnico</Text>
            </Comprar>
          </motion.div>
        </Cards>
      </motion.div>

      <Title1>Estamos aqui para você</Title1>

      <AjudaComprar ref={comprarRef}>
        <Title>Ajuda para Comprar</Title>
        <SubTitle>Perguntas Frequentes de pré-venda</SubTitle>

        <FaqContainer>
          {faqData.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FaqItem>
                  <FaqQuestion onClick={() => toggleFaq(index)}>
                    <span>{item.q}</span>
                    {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </FaqQuestion>
                  <FaqAnswer isOpen={isOpen}>{item.a}</FaqAnswer>
                </FaqItem>
              </motion.div>
            );
          })}
        </FaqContainer>
      </AjudaComprar>

      <Suport ref={suporteRef}>
        <Title>Contato da Loja Online</Title>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Content>
            <Card>
              <Titulo>WhatsApp Loja Online</Titulo>
              <Texto>
                Para informações referentes à sua compra ou auxilio para
                comprar, através do nosso Canal Oficial de WhatsApp
              </Texto>
              <Info>
                Disponível de Segunda a Sexta: das 08h às 20h Sábado e Domingo:
                das 09h às 18h
              </Info>
              <Button href="#" target="_blank" rel="noopener noreferrer">
                Fale Conosco <BsArrowUpRight size={20} />
              </Button>
            </Card>

            <Card>
              <Titulo>E-mail de Atendimento</Titulo>
              <Texto>
                Prefere um contato mais formal? Envie-nos um e-mail para
                dúvidas, envio de anexos (como notas fiscais ou fotos) ou para
                solicitações de troca.
              </Texto>
              <Info>Responderemos sua solicitação em até 48 horas úteis.</Info>

              <Button
                href="mailto:suporte@sualoja.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar E-mail <BsArrowUpRight size={20} />
              </Button>
            </Card>

            <Card>
              <Titulo>Central de Ajuda (FAQ)</Titulo>
              <Texto>
                Muitas de suas dúvidas podem ser resolvidas instantaneamente.
                Confira nossas respostas para as perguntas mais frequentes.
              </Texto>
              <Info>Disponível 24 horas por dia, 7 dias por semana.</Info>
              {/* Coloque o link para sua página de FAQ aqui */}
              <Button href="/faq" rel="noopener noreferrer">
                Ver Perguntas <BsArrowUpRight size={20} />
              </Button>
            </Card>
          </Content>
        </motion.div>
      </Suport>

      <SuporteTecnico ref={tecnicoRef}>
        <Title>Suporte Técnico de Produtos</Title>
        <Texto>
          Seu produto apresentou um defeito ou você precisa de ajuda com a
          instalação? Abra um chamado e nossa equipe técnica irá te ajudar.
        </Texto>

        <FormGroup>
          <FormLabel htmlFor="email">
            Seu E-mail <span>*</span>
          </FormLabel>
          <FormInput
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={form.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            onBlur={() => validateField("email")}
            $error={!!formErrors.email}
          />
          {formErrors.email && <ErrorText>{formErrors.email}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="pedido">Nº do Pedido (Opcional)</FormLabel>
          <FormInput
            id="pedido"
            type="text"
            placeholder="#123456"
            value={form.pedido}
            onChange={(e) => handleFieldChange("pedido", e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="descricao">
            Descreva seu problema <span>*</span>
          </FormLabel>
          <FormTextArea
            id="descricao"
            rows={6}
            placeholder="Meu produto não está ligando..."
            value={form.descricao}
            onChange={(e) => handleFieldChange("descricao", e.target.value)}
            onBlur={() => validateField("descricao")}
            $error={!!formErrors.descricao}
          />
          {formErrors.descricao && (
            <ErrorText>{formErrors.descricao}</ErrorText>
          )}
        </FormGroup>

        <FormButton onClick={handleOpenTicket}>
          Abrir Chamado <BsArrowUpRight size={20} />
        </FormButton>
      </SuporteTecnico>

      <Email>
        <EmailImage>
          <EmailText>
            Responderemos as suas <br />
            solicitações por e-mail
          </EmailText>
        </EmailImage>

        <Duvidas>
          <DTitulo>Dúvidas Gerais</DTitulo>
          <DTexto>
            Nós responderemos seu e-mail para dúvidas gerais, como endereço de
            Assistência Técnica, Política de Garantia PrimeGear, etc.
          </DTexto>
          <Buttond
            href="mailto:suporte@sualoja.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dúvidas Gerais <BsArrowUpRight size={20} />
          </Buttond>
        </Duvidas>
      </Email>

      <FeatureSection>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Title>Por que falar conosco?</Title>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <FeatureGrid>
            <motion.div variants={itemVariants}>
              <FeatureCard>
                <h4>Tempo médio de resposta</h4>
                <p>Até 2 horas úteis pelo WhatsApp e 24–48h por e-mail.</p>
              </FeatureCard>
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard>
                <h4>Atendimento humano</h4>
                <p>Equipe especializada para resolver dúvidas com rapidez.</p>
              </FeatureCard>
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard>
                <h4>Garantia e troca fácil</h4>
                <p>Suporte completo para acionamento de garantia e trocas.</p>
              </FeatureCard>
            </motion.div>
          </FeatureGrid>
        </motion.div>
      </FeatureSection>
    </Container>
  );
};

export default FaleConosco;

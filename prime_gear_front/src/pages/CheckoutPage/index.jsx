import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  Wrapper,
  Steps,
  StepItem,
  StepCircle,
  StepDivider,
  Grid,
  Card,
  Title,
  Section,
  Row,
  Row3,
  Field,
  Label,
  Input,
  SummaryDivider,
  Select,
  CheckRow,
  Actions,
  PrimaryButton,
  SummaryHeader,
  BagItem,
  BagImage,
  BagTitle,
  RowPrice,
  PriceText,
  PriceValue,
  DiscountNote,
  ShippingFree,
  TotalBlock,
  TotalLabel,
  Total,
  Installments,
  SignUpBox,
  SearchButton,
  BagImageWrapper,
  BagBadge,
  FlipContainer,
  Flipper,
  Front,
  Back,
  PaymentOption,
  PaymentContent,
  PaymentIcon,
  PaymentLabel,
  PaymentIcons,
  CardIcon,
} from "./style";
import ProductImg from "../../assets/images/desktop-ilustration.png";
import { FiCreditCard, FiFileText } from "react-icons/fi";
import { RiQrCodeLine } from "react-icons/ri";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const handleContinue = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  return (
    <PageContainer>
      <Wrapper>
        <Steps>
          <StepItem $active={currentStep >= 1} onClick={handleBack} style={{ cursor: 'pointer' }}>
            <StepCircle $active={currentStep >= 1}>1</StepCircle>
            <span>Dados pessoais</span>
          </StepItem>
          <StepDivider />
          <StepItem $active={currentStep >= 2}>
            <StepCircle $active={currentStep >= 2}>2</StepCircle>
            <span>Pagamento</span>
          </StepItem>
        </Steps>

        <Grid>
          <FlipContainer>
            <Flipper $flipped={currentStep === 2}>
              <Front>
                <Card>
                  <Title>Dados pessoais</Title>

                  <Section>
                    <Field>
                      <Input type="email" placeholder="Seu e-mail *" />
                    </Field>
                    <CheckRow>
                      <input type="checkbox" id="news" />
                      <label htmlFor="news">
                        Envie-me e-mails sobre novidades e ofertas. (Opcional)
                      </label>
                      <Link
                        to="/login"
                        style={{ marginLeft: "auto", textDecoration: "none", color: "#4d7294", fontWeight: 500 }}
                      >
                        Entrar
                      </Link>
                    </CheckRow>
                  </Section>

                  <Section>
                    <Row>
                      <Field>
                        <Input type="text" placeholder="Primeiro nome *" />
                      </Field>
                      <Field>
                        <Input type="text" placeholder="Último nome *" />
                      </Field>
                    </Row>
                  </Section>

                  <Section>
                    <Row3>
                      <Field>
                        <Input type="text" placeholder="CPF *" />
                      </Field>
                      <Field>
                        <Input type="text" placeholder="Data de nascimento *" />
                      </Field>
                      <Field>
                        <Input type="text" placeholder="Telefone *" />
                      </Field>
                    </Row3>
                  </Section>

                  <CheckRow style={{ marginBottom: 40 }}>
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                      Aceito os termos e condições e política de privacidade. *
                    </label>
                  </CheckRow>

                  <Title>Entrega</Title>
                  <Section>
                    <Row3>
                      <Field>
                        <Select>
                          <option>País *</option>
                          <option>Brasil</option>
                        </Select>
                      </Field>
                      <Field>
                        <Select>
                          <option>Estado *</option>
                        </Select>
                      </Field>
                      <Field>
                        <Select>
                          <option>Cidade *</option>
                        </Select>
                      </Field>
                    </Row3>
                  </Section>

                  <Section>
                    <Row>
                      <Field>
                        <Input type="text" placeholder="Rua, número *" />
                      </Field>
                      <Field>
                        <Input type="text" placeholder="Bairro *" />
                      </Field>
                    </Row>
                  </Section>

                  <Section>
                    <Row>
                      <Field>
                        <Input type="text" placeholder="Complemento (Opcional)" />
                      </Field>
                      <Field>
                        <div style={{ position: 'relative' }}>
                          <Input type="text" placeholder="CEP *" />
                          <div style={{ position: 'absolute', right: 14, top: 14 }}>
                            <SearchButton>Buscar</SearchButton>
                          </div>
                        </div>
                      </Field>
                    </Row>
                  </Section>

                  <Actions>
                    <PrimaryButton onClick={handleContinue}>Continuar para pagamento</PrimaryButton>
                  </Actions>
                </Card>
              </Front>

              <Back>
                <Card>
                  <Title>Forma de pagamento</Title>

                  <Section>
                    <PaymentOption onClick={() => setPaymentMethod("credit")}>
                      <PaymentContent>
                        <PaymentIcon>
                          <FiCreditCard />
                        </PaymentIcon>
                        <div>
                          <PaymentLabel>Cartão de Crédito</PaymentLabel>
                          <PaymentIcons>
                            {/* Placeholders for card icons */}
                            <div style={{ fontSize: '0.7rem', color: '#666' }}>Visa, Master, Elo...</div>
                          </PaymentIcons>
                        </div>
                      </PaymentContent>
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "credit"}
                        onChange={() => setPaymentMethod("credit")}
                      />
                    </PaymentOption>

                    <PaymentOption onClick={() => setPaymentMethod("debit")}>
                      <PaymentContent>
                        <PaymentIcon>
                          <FiCreditCard />
                        </PaymentIcon>
                        <div>
                          <PaymentLabel>Cartão de Débito</PaymentLabel>
                          <PaymentIcons>
                            <div style={{ fontSize: '0.7rem', color: '#666' }}>Visa, Master, Elo...</div>
                          </PaymentIcons>
                        </div>
                      </PaymentContent>
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "debit"}
                        onChange={() => setPaymentMethod("debit")}
                      />
                    </PaymentOption>

                    <PaymentOption onClick={() => setPaymentMethod("pix")}>
                      <PaymentContent>
                        <PaymentIcon>
                          <RiQrCodeLine />
                        </PaymentIcon>
                        <PaymentLabel>PIX</PaymentLabel>
                      </PaymentContent>
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "pix"}
                        onChange={() => setPaymentMethod("pix")}
                      />
                    </PaymentOption>

                    <PaymentOption onClick={() => setPaymentMethod("boleto")}>
                      <PaymentContent>
                        <PaymentIcon>
                          <FiFileText />
                        </PaymentIcon>
                        <PaymentLabel>Boleto</PaymentLabel>
                      </PaymentContent>
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "boleto"}
                        onChange={() => setPaymentMethod("boleto")}
                      />
                    </PaymentOption>
                  </Section>

                  <Actions>
                    <PrimaryButton>Pagar agora</PrimaryButton>
                  </Actions>
                </Card>
              </Back>
            </Flipper>
          </FlipContainer>

          <Card $summary>
            <SummaryHeader>
              <Title style={{ margin: 0, fontSize: "1.2rem", fontWeight: 500 }}>
                Sua sacola
              </Title>
              <Link to="/loja" style={{ textDecoration: "none", color: "#666", fontSize: "0.9rem" }}>
                Editar
              </Link>
            </SummaryHeader>

            <BagItem>
              <BagImageWrapper>
                <BagImage src={ProductImg} alt="Produto" />
                <BagBadge>1</BagBadge>
              </BagImageWrapper>

              <div>
                <BagTitle>
                  Gabinete Gamer Rise Mode Galaxy Glass, Mid Tower, ATX,
                  Lateral e Frontal em Vidro Temperado, Preto - RM-GA-GG-FB
                </BagTitle>
              </div>
            </BagItem>

            <SummaryDivider />

            <RowPrice>
              <PriceText>Subtotal</PriceText>
              <PriceText>R$ 552,93</PriceText>
            </RowPrice>
            <RowPrice>
              <PriceText>Descontos totais</PriceText>
              <PriceValue $discount>-R$ 55,94</PriceValue>
            </RowPrice>
            <DiscountNote>Oferta especial PrimeGear -R$ 55,94</DiscountNote>
            <RowPrice>
              <PriceText>Frete</PriceText>
              <ShippingFree>Grátis</ShippingFree>
            </RowPrice>

            <SummaryDivider />

            <TotalBlock>
              <TotalLabel>
                <span>Total</span>
              </TotalLabel>
              <div style={{ textAlign: 'right' }}>
                <Total>R$ 496,99</Total>
                <Installments>
                  R$ 552,93 em até 4x de R$ 138,23 sem juros
                </Installments>
              </div>
            </TotalBlock>

            <SignUpBox>
              Cadastre-se na PrimeGear e ganhe 10% de desconto na primeira
              compra, além de acesso antecipado às vendas, novidades,
              promoções e muito mais.
            </SignUpBox>
          </Card>
        </Grid>
      </Wrapper>
    </PageContainer>
  );
};

export default CheckoutPage;

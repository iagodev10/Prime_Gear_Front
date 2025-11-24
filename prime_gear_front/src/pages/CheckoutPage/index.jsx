import React from "react";
import { Link } from "react-router-dom";
import {
  PageContainer,
  Wrapper,
  Steps,
  StepItem,
  StepCircle,
  Divider,
  Grid,
  Card,
  Title,
  Section,
  Row,
  Row3,
  Field,
  Label,
  Input,
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
} from "./style";

import ProductImg from "../../assets/images/desktop-ilustration.png";

const CheckoutPage = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Steps>
          <StepItem active>
            <StepCircle active>1</StepCircle>
            <span>Dados pessoais</span>
          </StepItem>
          <Divider />
          <StepItem>
            <StepCircle>2</StepCircle>
            <span>Pagamento</span>
          </StepItem>
        </Steps>

        <Grid>
          <div>
            <Card>
              <Title>Dados pessoais</Title>

              <Section>
                <Field>
                  <Label>Seu e-mail *</Label>
                  <Input type="email" placeholder="Seu e-mail" />
                </Field>
                <CheckRow>
                  <input type="checkbox" id="news" />
                  <label htmlFor="news">Envie e-mails sobre novidades e ofertas. (Opcional)</label>
                  <Link to="/login" style={{ marginLeft: "auto", textDecoration: "none" }}>Entrar</Link>
                </CheckRow>
              </Section>

              <Section>
                <Row>
                  <Field>
                    <Label>Primeiro nome *</Label>
                    <Input type="text" placeholder="Primeiro nome" />
                  </Field>
                  <Field>
                    <Label>Último nome *</Label>
                    <Input type="text" placeholder="Último nome" />
                  </Field>
                </Row>
              </Section>

              <Section>
                <Row3>
                  <Field>
                    <Label>CPF *</Label>
                    <Input type="text" placeholder="000.000.000-00" />
                  </Field>
                  <Field>
                    <Label>Data de nascimento *</Label>
                    <Input type="text" placeholder="dd/mm/aaaa" />
                  </Field>
                  <Field>
                    <Label>Telefone *</Label>
                    <Input type="text" placeholder="(00) 00000-0000" />
                  </Field>
                </Row3>
              </Section>

              <CheckRow>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">Aceito os termos e condições e política de privacidade.</label>
              </CheckRow>
            </Card>

            <Card style={{ marginTop: 18 }}>
              <Title>Entrega</Title>
              <Section>
                <Row>
                  <Field>
                    <Label>País *</Label>
                    <Select>
                      <option>Brasil</option>
                    </Select>
                  </Field>
                  <Field>
                    <Label>Estado *</Label>
                    <Select>
                      <option>Selecione</option>
                    </Select>
                  </Field>
                </Row>
              </Section>

              <Section>
                <Row>
                  <Field>
                    <Label>Cidade *</Label>
                    <Select>
                      <option>Selecione</option>
                    </Select>
                  </Field>
                  <Field>
                    <Label>Rua, número *</Label>
                    <Input type="text" placeholder="Rua, número" />
                  </Field>
                </Row>
              </Section>

              <Section>
                <Row>
                  <Field>
                    <Label>Bairro *</Label>
                    <Input type="text" placeholder="Bairro" />
                  </Field>
                  <Field>
                    <Label>Complemento (Opcional)</Label>
                    <Input type="text" placeholder="Complemento" />
                  </Field>
                </Row>
              </Section>

              <Section>
                <Row>
                  <Field>
                    <Label>CEP *</Label>
                    <Input type="text" placeholder="00000-000" />
                  </Field>
                  <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <PrimaryButton style={{ width: 140 }}>Buscar</PrimaryButton>
                  </div>
                </Row>
              </Section>

              <Actions>
                <PrimaryButton disabled>Continuar para pagamento</PrimaryButton>
              </Actions>
            </Card>
          </div>

          <div>
            <Card style={{ backgroundColor: '#e8e8e8' }}>
              <SummaryHeader>
                <Title style={{ margin: 0, fontSize: "1.2rem" }}>Sua sacola</Title>
                <Link to="/loja" style={{ textDecoration: "none" }}>Editar</Link>
              </SummaryHeader>

              <BagItem>
                <BagImage src={ProductImg} alt="Produto" />
                <div>
                  <BagTitle>Gabinete Gamer Rise Mode Galaxy Glass, Mid Tower, ATX, Lateral e Frontal em Vidro Temperado, Preto - RM-GA-GG-FB</BagTitle>
                </div>
              </BagItem>

              <RowPrice>
                <PriceText>Subtotal</PriceText>
                <PriceText>R$ 552,93</PriceText>
              </RowPrice>
              <RowPrice>
                <PriceText>Descontos totais</PriceText>
                <PriceValue>R$ 55,94</PriceValue>
              </RowPrice>
              <DiscountNote>Oferta especial PrimeGear - R$ 55,94</DiscountNote>
              <RowPrice>
                <PriceText>Frete</PriceText>
                <ShippingFree>Grátis</ShippingFree>
              </RowPrice>

              <TotalBlock>
                <TotalLabel>
                  <span>Total</span>
                  <Installments>R$ 552,93 em até 4x de R$ 138,23 sem juros</Installments>
                </TotalLabel>
                <Total>R$ 496,99</Total>
              </TotalBlock>

              <SignUpBox>
                Cadastre-se na PrimeGear e ganhe 10% de desconto na primeira
                compra, além de acesso antecipado às vendas, novidades, promoções
                e muito mais.
              </SignUpBox>
            </Card>
          </div>
        </Grid>
      </Wrapper>
    </PageContainer>
  );
};

export default CheckoutPage;


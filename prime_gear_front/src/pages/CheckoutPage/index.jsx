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
                  <Input type="email" placeholder="Seu e-mail *" />
                </Field>
                <CheckRow>
                  <input type="checkbox" id="news" />
                  <label htmlFor="news">Envie-me e-mails sobre novidades e ofertas. (Opcional)</label>
                  <Link to="/login" style={{ marginLeft: "auto", textDecoration: "underline", color: '#4d7294', fontSize: '0.9rem' }}>Entrar</Link>
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

              <CheckRow>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">Aceito os <span style={{ textDecoration: 'underline' }}>termos e condições</span> e <span style={{ textDecoration: 'underline' }}>política de privacidade</span>. *</label>
              </CheckRow>
            </Card>

            <Card style={{ marginTop: 18 }}>
              <Title>Entrega</Title>
              <Section>
                <Row3>
                  <Field>
                    <Select>
                      <option>País *</option>
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
                    <Input type="text" placeholder="CEP *" />
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: '4px' }}>
                      <a href="#" style={{ textDecoration: "underline", color: "#4d7294", fontSize: "0.85rem" }}>Buscar</a>
                    </div>
                  </Field>
                </Row>
              </Section>

              <Actions>
                <PrimaryButton disabled>Continuar para pagamento</PrimaryButton>
              </Actions>
            </Card>
          </div>

          <Divider className="vertical-divider" />

          <div>
            <Card style={{ backgroundColor: '#e8e8e8', border: 'none' }}> {/* Background matches layout, maybe need adjustment in style.js */}
              <SummaryHeader>
                <Title style={{ margin: 0, fontSize: "1.2rem" }}>Sua sacola</Title>
                <Link to="/loja" style={{ textDecoration: "underline", color: "#4d7294", fontSize: "0.9rem" }}>Editar</Link>
              </SummaryHeader>

              <BagItem>
                <BagImage src={ProductImg} alt="Produto" />
                <div>
                  <BagTitle>Gabinete Gamer Rise Mode Galaxy Glass, Mid Tower, ATX, Lateral e Frontal em Vidro Temperado, Preto - RM-GA-GG-FB</BagTitle>
                </div>
              </BagItem>

              <div style={{ borderTop: '1px solid #e0e0e0', margin: '16px 0' }}></div>

              <RowPrice>
                <PriceText>Subtotal</PriceText>
                <PriceText>R$ 552,93</PriceText>
              </RowPrice>
              <RowPrice>
                <PriceText>Descontos totais</PriceText>
                <PriceValue style={{ color: '#0c8a1f' }}>-R$ 55,94</PriceValue>
              </RowPrice>
              <DiscountNote>Oferta especial PrimeGear <span style={{ float: 'right' }}>-R$ 55,94</span></DiscountNote>
              <RowPrice>
                <PriceText>Frete</PriceText>
                <ShippingFree>Grátis</ShippingFree>
              </RowPrice>

              <div style={{ borderTop: '1px solid #e0e0e0', margin: '16px 0' }}></div>

              <TotalBlock>
                <TotalLabel>
                  <span style={{ fontSize: '1.5rem', fontWeight: '600' }}>Total</span>
                  <Installments>R$ 552,93 em até <strong>4x de R$138,23</strong> sem juros</Installments>
                </TotalLabel>
                <Total>R$ 496,99</Total>
              </TotalBlock>

              <SignUpBox>
                Cadastre-se na PrimeGear e ganhe 10% de desconto na primeira compra, além de acesso antecipado às vendas, novidades, promoções e muito mais.
              </SignUpBox>
            </Card>
          </div>
        </Grid>
      </Wrapper>
    </PageContainer>
  );
};

export default CheckoutPage;


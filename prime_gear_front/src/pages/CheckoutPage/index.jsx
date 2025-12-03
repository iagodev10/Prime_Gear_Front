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
  ErrorMessage,
} from "./style";
import ProductImg from "../../assets/images/desktop-ilustration.png";
import { FiCreditCard, FiFileText } from "react-icons/fi";
import { RiQrCodeLine } from "react-icons/ri";
import { masks, validators, errorMessages } from "../../utils/formValidation";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cpf: "",
    birthDate: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    street: "",
    neighborhood: "",
    complement: "",
    cep: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle input change with masks
  const handleInputChange = (field, value, maskFunction) => {
    const maskedValue = maskFunction ? maskFunction(value) : value;
    setFormData(prev => ({ ...prev, [field]: maskedValue }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  // Validate field on blur
  const handleBlur = (field, validatorFunction, errorMessage) => {
    const value = formData[field];

    if (!value || !validatorFunction(value)) {
      setErrors(prev => ({ ...prev, [field]: errorMessage }));
    }
  };

  // Validate all fields before continuing
  const validateForm = () => {
    const newErrors = {};

    if (!validators.email(formData.email)) {
      newErrors.email = errorMessages.email;
    }
    if (!validators.required(formData.firstName)) {
      newErrors.firstName = errorMessages.firstName;
    }
    if (!validators.required(formData.lastName)) {
      newErrors.lastName = errorMessages.lastName;
    }
    if (!validators.cpf(formData.cpf)) {
      newErrors.cpf = errorMessages.cpf;
    }
    if (!validators.date(formData.birthDate)) {
      newErrors.birthDate = errorMessages.date;
    }
    if (!validators.phone(formData.phone)) {
      newErrors.phone = errorMessages.phone;
    }
    if (!validators.required(formData.country)) {
      newErrors.country = errorMessages.country;
    }
    if (!validators.required(formData.state)) {
      newErrors.state = errorMessages.state;
    }
    if (!validators.required(formData.city)) {
      newErrors.city = errorMessages.city;
    }
    if (!validators.required(formData.street)) {
      newErrors.street = errorMessages.street;
    }
    if (!validators.required(formData.neighborhood)) {
      newErrors.neighborhood = errorMessages.neighborhood;
    }
    if (!validators.cep(formData.cep)) {
      newErrors.cep = errorMessages.cep;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      setCurrentStep(2);
    }
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
                      <Input
                        type="email"
                        placeholder="Seu e-mail *"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        onBlur={() => handleBlur("email", validators.email, errorMessages.email)}
                        $error={!!errors.email}
                      />
                      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
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
                        <Input
                          type="text"
                          placeholder="Primeiro nome *"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          onBlur={() => handleBlur("firstName", validators.required, errorMessages.firstName)}
                          $error={!!errors.firstName}
                        />
                        {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Último nome *"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          onBlur={() => handleBlur("lastName", validators.required, errorMessages.lastName)}
                          $error={!!errors.lastName}
                        />
                        {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
                      </Field>
                    </Row>
                  </Section>

                  <Section>
                    <Row3>
                      <Field>
                        <Input
                          type="text"
                          placeholder="CPF *"
                          value={formData.cpf}
                          onChange={(e) => handleInputChange("cpf", e.target.value, masks.cpf)}
                          onBlur={() => handleBlur("cpf", validators.cpf, errorMessages.cpf)}
                          $error={!!errors.cpf}
                          maxLength="14"
                        />
                        {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Data de nascimento *"
                          value={formData.birthDate}
                          onChange={(e) => handleInputChange("birthDate", e.target.value, masks.date)}
                          onBlur={() => handleBlur("birthDate", validators.date, errorMessages.date)}
                          $error={!!errors.birthDate}
                          maxLength="10"
                        />
                        {errors.birthDate && <ErrorMessage>{errors.birthDate}</ErrorMessage>}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Telefone *"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value, masks.phone)}
                          onBlur={() => handleBlur("phone", validators.phone, errorMessages.phone)}
                          $error={!!errors.phone}
                          maxLength="15"
                        />
                        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
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
                        <Select
                          value={formData.country}
                          onChange={(e) => handleInputChange("country", e.target.value)}
                          onBlur={() => handleBlur("country", validators.required, errorMessages.country)}
                          $error={!!errors.country}
                        >
                          <option value="">País *</option>
                          <option value="Brasil">Brasil</option>
                        </Select>
                        {errors.country && <ErrorMessage>{errors.country}</ErrorMessage>}
                      </Field>
                      <Field>
                        <Select
                          value={formData.state}
                          onChange={(e) => handleInputChange("state", e.target.value)}
                          onBlur={() => handleBlur("state", validators.required, errorMessages.state)}
                          $error={!!errors.state}
                        >
                          <option value="">Estado *</option>
                        </Select>
                        {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
                      </Field>
                      <Field>
                        <Select
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          onBlur={() => handleBlur("city", validators.required, errorMessages.city)}
                          $error={!!errors.city}
                        >
                          <option value="">Cidade *</option>
                        </Select>
                        {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                      </Field>
                    </Row3>
                  </Section>

                  <Section>
                    <Row>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Rua, número *"
                          value={formData.street}
                          onChange={(e) => handleInputChange("street", e.target.value)}
                          onBlur={() => handleBlur("street", validators.required, errorMessages.street)}
                          $error={!!errors.street}
                        />
                        {errors.street && <ErrorMessage>{errors.street}</ErrorMessage>}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Bairro *"
                          value={formData.neighborhood}
                          onChange={(e) => handleInputChange("neighborhood", e.target.value)}
                          onBlur={() => handleBlur("neighborhood", validators.required, errorMessages.neighborhood)}
                          $error={!!errors.neighborhood}
                        />
                        {errors.neighborhood && <ErrorMessage>{errors.neighborhood}</ErrorMessage>}
                      </Field>
                    </Row>
                  </Section>

                  <Section>
                    <Row>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Complemento (Opcional)"
                          value={formData.complement}
                          onChange={(e) => handleInputChange("complement", e.target.value)}
                        />
                      </Field>
                      <Field>
                        <div style={{ position: 'relative' }}>
                          <Input
                            type="text"
                            placeholder="CEP *"
                            value={formData.cep}
                            onChange={(e) => handleInputChange("cep", e.target.value, masks.cep)}
                            onBlur={() => handleBlur("cep", validators.cep, errorMessages.cep)}
                            $error={!!errors.cep}
                            maxLength="9"
                          />
                          <div style={{ position: 'absolute', right: 14, top: 14 }}>
                            <SearchButton>Buscar</SearchButton>
                          </div>
                        </div>
                        {errors.cep && <ErrorMessage>{errors.cep}</ErrorMessage>}
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

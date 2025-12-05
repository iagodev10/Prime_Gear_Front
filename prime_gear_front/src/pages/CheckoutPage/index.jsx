import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
  ErrorMessage,
} from "./style";
import ProductImg from "../../assets/images/desktop-ilustration.png";
import { FiCreditCard, FiFileText, FiTrash2 } from "react-icons/fi";
import { RiQrCodeLine } from "react-icons/ri";
import { masks, validators, errorMessages } from "../../utils/formValidation";
import { useAuth } from "../../contexts/AuthContext";

const CheckoutPage = () => {
  const { user } = useAuth();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cartProducts, setCartProducts] = useState([]);
  const [loadingCart, setLoadingCart] = useState(true);
  const [loadingPayment, setLoadingPayment] = useState(false);

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
    numero: "",
  });

  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (user) {
      const nomeCompleto = user.nome_user || "";
      const partesNome = nomeCompleto.trim().split(" ");
      const primeiroNome = partesNome[0] || "";
      const ultimoNome = partesNome.slice(1).join(" ") || "";

      const formatarData = (dataISO) => {
        if (!dataISO) return "";
        const [ano, mes, dia] = dataISO.split("-");
        return `${dia}/${mes}/${ano}`;
      };

      const formatarCPF = (cpf) => {
        if (!cpf) return "";
        const numeros = cpf.replace(/\D/g, "");
        return masks.cpf(numeros);
      };

      const formatarCEP = (cep) => {
        if (!cep) return "";
        const numeros = cep.replace(/\D/g, "");
        return masks.cep(numeros);
      };

      const formatarTelefone = (tel) => {
        if (!tel) return "";
        const numeros = tel.replace(/\D/g, "");
        return masks.phone(numeros);
      };

      setFormData({
        email: user.email_user || "",
        firstName: primeiroNome,
        lastName: ultimoNome,
        cpf: formatarCPF(user.cpf_user),
        birthDate: formatarData(user.data_nascimento_user),
        phone: formatarTelefone(user.telefone_user),
        country: user.pais_user === "BR" ? "Brasil" : user.pais_user || "",
        state: user.estado_user || "",
        city: user.cidade_user || "",
        street: user.rua_user || "",
        neighborhood: user.bairro_user || "",
        complement: user.complemento_user || "",
        cep: formatarCEP(user.cep_user),
        numero: user.numero_user || "",
      });
    }
  }, [user]);


  useEffect(() => {
    const fetchCartProducts = async () => {
      if (!user || !user.cod_user) {
        setLoadingCart(false);
        return;
      }

      try {
        setLoadingCart(true);
        
        const response = await axios.get(
          `http://localhost:8080/get-produtos-cart/${user.cod_user}`,
          {
            withCredentials: true
          }
        );

        setCartProducts(response.data);
        setLoadingCart(false);
      } catch (error) {
        console.error('Erro ao buscar produtos do carrinho:', error);
        setCartProducts([]);
        setLoadingCart(false);
      }
    };

    fetchCartProducts();
  }, [user]);

 
  const calcularTotais = () => {
    const subtotal = cartProducts.reduce((acc, item) => acc + item.preco_total, 0);
    const desconto = subtotal * 0.1;
    const total = subtotal - desconto;
    
    return {
      subtotal: subtotal.toFixed(2),
      desconto: desconto.toFixed(2),
      total: total.toFixed(2),
      parcela: (subtotal / 4).toFixed(2)
    };
  };

  const totais = calcularTotais();

 
  const handleRemoveItem = async (itemId) => {
    try {
      const token = localStorage.getItem('token');
      
      if (!window.confirm('Deseja realmente remover este item do carrinho?')) {
        return;
      }
  
      await axios.delete(
        `http://localhost:8080/remove-from-cart/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        }
      );
  
      setCartProducts(prev => prev.filter(item => item.id !== itemId));
      alert('Item removido com sucesso!');
      
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
      alert('Erro ao remover item. Tente novamente.');
    }
  };

  const handleInputChange = (field, value, maskFunction) => {
    const maskedValue = maskFunction ? maskFunction(value) : value;
    setFormData(prev => ({ ...prev, [field]: maskedValue }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleBlur = (field, validatorFunction, errorMessage) => {
    const value = formData[field];

    if (!value || !validatorFunction(value)) {
      setErrors(prev => ({ ...prev, [field]: errorMessage }));
    }
  };

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
    if (!validators.required(formData.numero)) {
      newErrors.numero = "Número é obrigatório";
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

  const handlePayment = async () => {
    try {
      setLoadingPayment(true);
      const token = localStorage.getItem('token');

      if (cartProducts.length === 0) {
        alert('Seu carrinho está vazio');
        return;
      }

  
      const enderecoCompleto = `${formData.street}, ${formData.numero}${formData.complement ? ', ' + formData.complement : ''} - ${formData.neighborhood}, ${formData.city} - ${formData.state}, ${formData.cep}`;

      const orderData = {
        paymentMethod: paymentMethod,
        shippingAddress: enderecoCompleto,
        total: totais.total,
        subtotal: totais.subtotal,
        discount: totais.desconto
      };

      const response = await axios.post(
        'http://localhost:8080/create-order',
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        }
      );

      if (response.data.success) {
        alert(`Pedido #${response.data.pedido.cod_pedido} realizado com sucesso!\n\nTotal: R$ ${response.data.pedido.total}\nStatus: ${response.data.pedido.status}`);
        setCartProducts([]);
        setCurrentStep(1);
      }

    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      alert(error.response?.data?.message || 'Erro ao processar pagamento. Tente novamente.');
    } finally {
      setLoadingPayment(false);
    }
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
              <Front $flipped={currentStep === 2}>
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
                          <option value="AC">Acre</option>
                          <option value="AL">Alagoas</option>
                          <option value="AP">Amapá</option>
                          <option value="AM">Amazonas</option>
                          <option value="BA">Bahia</option>
                          <option value="CE">Ceará</option>
                          <option value="DF">Distrito Federal</option>
                          <option value="ES">Espírito Santo</option>
                          <option value="GO">Goiás</option>
                          <option value="MA">Maranhão</option>
                          <option value="MT">Mato Grosso</option>
                          <option value="MS">Mato Grosso do Sul</option>
                          <option value="MG">Minas Gerais</option>
                          <option value="PA">Pará</option>
                          <option value="PB">Paraíba</option>
                          <option value="PR">Paraná</option>
                          <option value="PE">Pernambuco</option>
                          <option value="PI">Piauí</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="RN">Rio Grande do Norte</option>
                          <option value="RS">Rio Grande do Sul</option>
                          <option value="RO">Rondônia</option>
                          <option value="RR">Roraima</option>
                          <option value="SC">Santa Catarina</option>
                          <option value="SP">São Paulo</option>
                          <option value="SE">Sergipe</option>
                          <option value="TO">Tocantins</option>
                        </Select>
                        {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Cidade *"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          onBlur={() => handleBlur("city", validators.required, errorMessages.city)}
                          $error={!!errors.city}
                        />
                        {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                      </Field>
                    </Row3>
                  </Section>

                  <Section>
                    <Row>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Rua *"
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
                          placeholder="Número *"
                          value={formData.numero}
                          onChange={(e) => handleInputChange("numero", e.target.value)}
                          onBlur={() => handleBlur("numero", validators.required, "Número é obrigatório")}
                          $error={!!errors.numero}
                        />
                        {errors.numero && <ErrorMessage>{errors.numero}</ErrorMessage>}
                      </Field>
                    </Row>
                  </Section>

                  <Section>
                    <Row>
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
                      <Field>
                        <Input
                          type="text"
                          placeholder="Complemento (Opcional)"
                          value={formData.complement}
                          onChange={(e) => handleInputChange("complement", e.target.value)}
                        />
                      </Field>
                    </Row>
                  </Section>

                  <Section>
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
                  </Section>

                  <Actions>
                    <PrimaryButton onClick={handleContinue}>Continuar para pagamento</PrimaryButton>
                  </Actions>
                </Card>
              </Front>

              <Back $flipped={currentStep === 2}>
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
                    <PrimaryButton onClick={handlePayment} disabled={loadingPayment}>
                      {loadingPayment ? 'Processando...' : 'Pagar agora'}
                    </PrimaryButton>
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
            </SummaryHeader>

            {loadingCart ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#666' }}>
                Carregando produtos...
              </div>
            ) : cartProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#666' }}>
                Seu carrinho está vazio
              </div>
            ) : (
              <>
                {cartProducts.map((produto) => (
                  <BagItem key={produto.id}>
                    <BagImageWrapper>
                      <BagImage 
                        src={produto.imagem || ProductImg} 
                        alt={produto.nome}
                        onError={(e) => { e.target.src = ProductImg }}
                      />
                      <BagBadge>{produto.quantidade}</BagBadge>
                    </BagImageWrapper>

                    <div style={{ flex: 1 }}>
                      <BagTitle>{produto.nome}</BagTitle>
                      <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>
                        R$ {produto.preco_unitario.toFixed(2)} × {produto.quantidade}
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(produto.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#dc2626',
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'opacity 0.2s',
                        fontSize: '1.2rem'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                      title="Remover item"
                    >
                      <FiTrash2 />
                    </button>
                  </BagItem>
                ))}

                <SummaryDivider />

                <RowPrice>
                  <PriceText>Subtotal</PriceText>
                  <PriceText>R$ {totais.subtotal}</PriceText>
                </RowPrice>
                <RowPrice>
                  <PriceText>Descontos totais</PriceText>
                  <PriceValue $discount>-R$ {totais.desconto}</PriceValue>
                </RowPrice>
                <DiscountNote>Oferta especial PrimeGear -R$ {totais.desconto}</DiscountNote>
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
                    <Total>R$ {totais.total}</Total>
                    <Installments>
                      R$ {totais.subtotal} em até 4x de R$ {totais.parcela} sem juros
                    </Installments>
                  </div>
                </TotalBlock>

                <SignUpBox>
                  Cadastre-se na PrimeGear e ganhe 10% de desconto na primeira
                  compra, além de acesso antecipado às vendas, novidades,
                  promoções e muito mais.
                </SignUpBox>
              </>
            )}
          </Card>
        </Grid>
      </Wrapper>
    </PageContainer>
  );
};

export default CheckoutPage;
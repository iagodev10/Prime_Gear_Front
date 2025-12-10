import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  CreditCardSection,
  CreditCardForm,
  CardRow,
  CardField,
  CardLabel,
  CardInput,
  CardSelect,
  CardBrandSelector,
  BrandOption,
  InstallmentSelect,
  CardFormTitle,
  CardInfoIcon,
  SecurityBadge,
  PixSection,
  PixContainer,
  PixQRCode,
  PixTitle,
  PixKeyContainer,
  PixKeyLabel,
  PixKeyField,
  PixKeyInput,
  CopyButton,
  PixInstructions,
  BoletoSection,
  BoletoContainer,
  BoletoTitle,
  BoletoForm,
  GenerateBoletoButton,
  ShippingSection,
  ShippingTitle,
  ShippingOptions,
  ShippingOption,
  ShippingInfo,
  ShippingDetails,
  ShippingName,
  ShippingTime,
  ShippingPrice,
  ShippingRadio,
} from "./style";


import ProductImg from "../../assets/images/desktop-ilustration.png";
import QRCodeImg from "../../assets/images/qrcode.png";
import Elo from "../../assets/images/pay/elo.svg";
import MasterCard from "../../assets/images/pay/master.svg";
import PixIcon from "../../assets/images/pay/pix.svg";
import Visa from "../../assets/images/pay/visa.svg";
import {
  FiCreditCard,
  FiFileText,
  FiTrash2,
  FiShield,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import { RiQrCodeLine } from "react-icons/ri";


import { masks, validators, errorMessages } from "../../utils/formValidation";
import { useAuth } from "../../contexts/AuthContext";

const CheckoutPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cartProducts, setCartProducts] = useState([]);
  const [loadingCart, setLoadingCart] = useState(true);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [pixKeyCopied, setPixKeyCopied] = useState(false);

  const pixKey =
    "00020126580014br.gov.bcb.pix0136a7f7e4c9-1234-5678-90ab-cdef12345678520400005303986540510.005802BR5925PRIMEGEAR OFICIAL STORE6009SAO PAULO62070503***6304ABCD";

  const [selectedShipping, setSelectedShipping] = useState(null);
  const [shippingOptions, setShippingOptions] = useState([]);
  const [loadingShipping, setLoadingShipping] = useState(false);


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

  const [cardData, setCardData] = useState({
    cardHolderName: "",
    cardHolderCPF: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    cardBrand: "",
    installments: "1",
  });

  const [boletoData, setBoletoData] = useState({
    nomeCompleto: "",
    cpf: "",
    email: "",
    enderecoCompleto: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [errors, setErrors] = useState({});
  const [cardErrors, setCardErrors] = useState({});
  const [boletoErrors, setBoletoErrors] = useState({});


  useEffect(() => {
    const fetchTransportadoras = async () => {
      const cleanCep = formData.cep ? formData.cep.replace(/\D/g, '') : '';


      if (cleanCep.length !== 8) {
        setLoadingShipping(false);
        setShippingOptions([]);
        return;
      }

      if (cartProducts.length === 0 && !loadingCart) {
        return;
      }

      try {
        setLoadingShipping(true);
        console.log('entrou try');

        let totalPeso = 0;
        let totalAltura = 0;
        let maxLargura = 0;
        let maxComprimento = 0;

        cartProducts.forEach((item) => {
          const qtd = item.quantidade || 1;

          const peso = parseFloat(item.peso_produto || item.peso || 0.5);
          const alt = parseFloat(item.altura_produto || item.altura || 15);
          const larg = parseFloat(item.largura_produto || item.largura || 15);
          const comp = parseFloat(item.comprimento_produto || item.comprimento || 15);

          totalPeso += peso * qtd;
          totalAltura += alt * qtd;
          maxLargura = Math.max(maxLargura, larg);
          maxComprimento = Math.max(maxComprimento, comp);
        });
        console.log('cep pra api: ' + cleanCep);
        const response = await axios.post(
          'http://primegear.site:8080/calculate-shipping',
          {
            cep_cliente: cleanCep,
            peso_kg: totalPeso > 0 ? totalPeso : 1,
            altura: totalAltura > 0 ? totalAltura : 20,
            largura: maxLargura > 0 ? maxLargura : 20,
            comprimento: maxComprimento > 0 ? maxComprimento : 20
          },
          {
            withCredentials: true,
          }
        );

        const transportadorasFormatadas = response.data.map((transp) => ({
          id: transp.cod_transportadora,
          name: transp.nome_transp,
          time: transp.prazo_estimado || transp.tempo_estimado || "N/A",
          price: parseFloat(transp.preco_frete) || 0,
          distancia: transp.distancia_km,
          erro: transp.erro
        }));
        console.log(transportadorasFormatadas);

        const validOptions = transportadorasFormatadas.filter(t => !t.erro);

        setShippingOptions(validOptions);


        if (validOptions.length > 0) {
          setSelectedShipping(validOptions[0].id);
        }

        setLoadingShipping(false);
      } catch (error) {
        console.error('Erro ao calcular frete:', error);
        setLoadingShipping(false);

      }
    };


    const timeoutId = setTimeout(() => {
      fetchTransportadoras();
    }, 1000);

    return () => clearTimeout(timeoutId);

  }, [formData.cep, cartProducts, loadingCart]);



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

      const formatarCPF = (cpf) => (cpf ? masks.cpf(cpf.replace(/\D/g, "")) : "");
      const formatarCEP = (cep) => (cep ? masks.cep(cep.replace(/\D/g, "")) : "");
      const formatarTelefone = (tel) => (tel ? masks.phone(tel.replace(/\D/g, "")) : "");

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

      setBoletoData({
        nomeCompleto: nomeCompleto,
        cpf: formatarCPF(user.cpf_user),
        email: user.email_user || "",
        enderecoCompleto: `${user.rua_user || ""}, ${user.numero_user || ""} - ${user.bairro_user || ""}, ${user.cidade_user || ""} - ${user.estado_user || ""}, ${formatarCEP(user.cep_user)}`,
        cep: formatarCEP(user.cep_user),
        rua: user.rua_user || "",
        numero: user.numero_user || "",
        bairro: user.bairro_user || "",
        cidade: user.cidade_user || "",
        estado: user.estado_user || "",
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
          `http://primegear.site:8080/get-produtos-cart/${user.cod_user}`,
          { withCredentials: true }
        );
        setCartProducts(response.data);
        setLoadingCart(false);
      } catch (error) {
        console.error("Erro ao buscar carrinho:", error);
        setCartProducts([]);
        setLoadingCart(false);
      }
    };

    fetchCartProducts();
  }, [user]);


  const calcularTotais = () => {
    const subtotal = cartProducts.reduce(
      (acc, item) => acc + (item.preco_total || (item.preco_unitario * item.quantidade)),
      0
    );
    const desconto = subtotal * 0.1;

    const selectedShippingOption = shippingOptions.find(s => s.id === selectedShipping);
    const freteValor = selectedShippingOption ? selectedShippingOption.price : 0;

    const total = subtotal - desconto + freteValor;

    return {
      subtotal: subtotal.toFixed(2),
      desconto: desconto.toFixed(2),
      frete: freteValor.toFixed(2),
      total: total.toFixed(2),
      parcela: (total / 4).toFixed(2),
    };
  };

  const totais = calcularTotais();


  const handleRemoveItem = async (itemId) => {
    try {
      const token = localStorage.getItem("token");
      if (!window.confirm("Remover item do carrinho?")) return;

      await axios.delete(`http://primegear.site:8080/remove-from-cart/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      setCartProducts((prev) => prev.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Erro ao remover item:", error);
      alert("Erro ao remover item.");
    }
  };

  const handleInputChange = (field, value, maskFunction) => {
    const maskedValue = maskFunction ? maskFunction(value) : value;
    setFormData((prev) => ({ ...prev, [field]: maskedValue }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field, validatorFunction, errorMessage) => {
    if (!formData[field] || !validatorFunction(formData[field])) {
      setErrors((prev) => ({ ...prev, [field]: errorMessage }));
    }
  };

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setPixKeyCopied(true);
      setTimeout(() => setPixKeyCopied(false), 2000);
    } catch (err) {
      alert("Erro ao copiar chave PIX.");
    }
  };


  const cardMasks = {
    cardNumber: (v) => v.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ").trim(),
    cardExpiry: (v) => {
      const n = v.replace(/\D/g, "");
      return n.length >= 2 ? n.slice(0, 2) + "/" + n.slice(2, 4) : n;
    },
    cardCVV: (v) => v.replace(/\D/g, "").slice(0, 4),
    cardCPF: (v) => masks.cpf(v.replace(/\D/g, "")),
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const response = await axios.put(
        `http://primegear.site:8080/update-cart-quantity/${itemId}`,
        { quantidade: newQuantity },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
     
        setCartProducts((prev) =>
          prev.map((item) =>
            item.id === itemId
              ? { ...item, quantidade: newQuantity, preco_total: item.preco_unitario * newQuantity }
              : item
          )
        );
      }
    } catch (error) {
      console.error("Erro ao atualizar quantidade:", error);
      alert("Erro ao atualizar quantidade.");
    }
  };

  const detectCardBrand = (number) => {
    const n = number.replace(/\s/g, "");
    if (/^4/.test(n)) return "visa";
    if (/^5[1-5]/.test(n)) return "mastercard";
    if (/^(?:5[0678]|6304|6390|67)/.test(n)) return "elo";
    return "";
  };

  const handleCardInputChange = (field, value, maskFunction) => {
    const masked = maskFunction ? maskFunction(value) : value;
    if (field === "cardNumber") {
      setCardData(prev => ({ ...prev, [field]: masked, cardBrand: detectCardBrand(masked) }));
    } else {
      setCardData(prev => ({ ...prev, [field]: masked }));
    }
    if (cardErrors[field]) setCardErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validateCardForm = () => {
    const newErrors = {};
    if (!cardData.cardHolderName) newErrors.cardHolderName = "Nome obrigatório";
    if (!validators.cpf(cardData.cardHolderCPF)) newErrors.cardHolderCPF = "CPF inválido";
    if (cardData.cardNumber.replace(/\s/g, "").length < 13) newErrors.cardNumber = "Cartão inválido";
    if (cardData.cardExpiry.length !== 5) newErrors.cardExpiry = "Validade inválida";
    if (cardData.cardCVV.length < 3) newErrors.cardCVV = "CVV inválido";
    if (!cardData.cardBrand) newErrors.cardBrand = "Selecione a bandeira";

    setCardErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateBoletoForm = () => {
    const newErrors = {};

    if (!boletoData.nomeCompleto) newErrors.nomeCompleto = "Nome obrigatório";
    if (!validators.cpf(boletoData.cpf)) newErrors.cpf = "CPF inválido";
    if (!validators.email(boletoData.email)) newErrors.email = "Email inválido";

    setBoletoErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBoletoInputChange = (field, value) => {
    setBoletoData(prev => ({ ...prev, [field]: value }));
    if (boletoErrors[field]) setBoletoErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validators.email(formData.email)) newErrors.email = errorMessages.email;
    if (!formData.firstName) newErrors.firstName = errorMessages.firstName;
    if (!formData.lastName) newErrors.lastName = errorMessages.lastName;
    if (!validators.cpf(formData.cpf)) newErrors.cpf = errorMessages.cpf;
    if (!validators.cep(formData.cep)) newErrors.cep = errorMessages.cep;


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      if (!selectedShipping) {
        alert("Por favor, selecione uma opção de frete.");
        return;
      }
      setCurrentStep(2);
    } else {
      alert("Preencha todos os campos obrigatórios corretamente.");
    }
  };

  const handleBack = () => setCurrentStep(1);


  const handlePayment = async () => {
    try {
      setLoadingPayment(true);
      const token = localStorage.getItem("token");

      if (cartProducts.length === 0) return alert("Carrinho vazio");

      if ((paymentMethod === "credit" || paymentMethod === "debit") && !validateCardForm()) {
        setLoadingPayment(false);
        return alert("Verifique os dados do cartão");
      }

      if (paymentMethod === "boleto") {
        if (!validateBoletoForm()) {
          alert("Por favor, preencha todos os campos do boleto corretamente");
          setLoadingPayment(false);
          return;
        }

        try {
          const boletoResponse = await axios.post(
            'http://primegear.site:8080/generate-boleto',
            {
              nomeCompleto: boletoData.nomeCompleto,
              cpf: boletoData.cpf,
              email: boletoData.email,
              enderecoCompleto: boletoData.enderecoCompleto,
              cep: boletoData.cep,
              rua: boletoData.rua,
              numero: boletoData.numero,
              bairro: boletoData.bairro,
              cidade: boletoData.cidade,
              estado: boletoData.estado,
              valorTotal: totais.total,
              subtotal: totais.subtotal,
              desconto: totais.desconto,
              itensCarrinho: cartProducts.map(item => ({
                nome: item.nome || item.nome_produto,
                nome_produto: item.nome || item.nome_produto,
                quantidade: item.quantidade,
                preco_unitario: item.preco_unitario || item.preco,
                preco: item.preco_unitario || item.preco
              })),
              frete:totais.frete
            },
            {
              withCredentials: true,
              responseType: 'blob'
            }
          );


        } catch (error) {
          console.log(error);
        }

      }


      const enderecoFinal = `${formData.street}, ${formData.numero} ${formData.complement || ""} - ${formData.neighborhood}, ${formData.city} - ${formData.state}, ${formData.cep}`;


      let paymentDetails = {};
      if (paymentMethod === "credit" || paymentMethod === "debit") {
        paymentDetails = { ...cardData };
      } else if (paymentMethod === "pix") {
        paymentDetails = { pixKey };
      }

      const orderData = {
        paymentMethod,
        shippingAddress: enderecoFinal,
        total: parseFloat(totais.total),
        subtotal: parseFloat(totais.subtotal),
        discount: parseFloat(totais.desconto),
        shippingCost: parseFloat(totais.frete),
        shippingMethodId: selectedShipping,
        paymentData: paymentDetails,
        itens: cartProducts,
        frete: parseFloat(totais.frete)

      };

      const response = await axios.post(
        "http://primegear.site:8080/create-order",
        orderData,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        const selectedShippingOption = shippingOptions.find(
          option => option.id === selectedShipping
        );

        const prazoEntrega = selectedShippingOption
          ? selectedShippingOption.time
          : "Não informado";

        const orderDataForThankYou = {
          ...response.data.pedido,
          itens: cartProducts.map((item) => ({
            nome: item.nome_produto || item.nome,
            nome_produto: item.nome_produto || item.nome,
            imagem: item.imagem_produto || item.imagem,
            imagem_produto: item.imagem_produto || item.imagem,
            quantidade: item.quantidade,
            preco: item.preco_unitario || item.preco,
            preco_unitario: item.preco_unitario || item.preco,
          })),
          endereco_entrega: boletoData.enderecoCompleto,
          metodo_pagamento: paymentMethod,
          cartao_final:
            paymentMethod === "credit" || paymentMethod === "debit"
              ? cardData.cardNumber.replace(/\s/g, "").slice(-4)
              : null,
          subtotal: totais.subtotal,
          desconto: totais.desconto,
          frete: totais.frete,
          prazo_entrega: prazoEntrega,
          nome_transportadora: selectedShippingOption ? selectedShippingOption.name : "N/A"
        };

        setCartProducts([]);

        navigate("/obrigado", {
          state: {
            order: orderDataForThankYou,
          },
        });
      }

    } catch (error) {
      console.error("Erro pagamento:", error);
      alert(error.response?.data?.message || "Erro ao processar pedido.");
    } finally {
      setLoadingPayment(false);
    }
  };

  return (
    <PageContainer>
      <Wrapper>
        <Steps>
          <StepItem $active={currentStep >= 1} onClick={handleBack} style={{ cursor: "pointer" }}>
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

              {/* --- FRENTE: DADOS E FRETE --- */}
              <Front $flipped={currentStep === 2}>
                <Card>
                  <Title>Entrega</Title>
                  <ShippingSection>
                    <ShippingTitle>Escolha a transportadora</ShippingTitle>

                    {loadingShipping ? (
                      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>Calculando frete...</div>
                    ) : shippingOptions.length === 0 ? (
                      <div style={{ textAlign: 'center', padding: '20px', color: '#666', fontSize: '0.9rem' }}>
                        {formData.cep && formData.cep.length >= 8
                          ? "Nenhuma transportadora disponível para este CEP."
                          : "Digite seu CEP abaixo para ver as opções."}
                      </div>
                    ) : (
                      <ShippingOptions>
                        {shippingOptions.map((option) => (
                          <ShippingOption
                            key={option.id}
                            $selected={selectedShipping === option.id}
                            onClick={() => setSelectedShipping(option.id)}
                          >
                            <ShippingInfo>
                              <ShippingDetails>
                                <ShippingName>{option.name}</ShippingName>
                                <ShippingTime>
                                  {option.distancia ? `${parseFloat(option.distancia).toFixed(1)} km • ` : ""}
                                  {option.time}
                                </ShippingTime>
                              </ShippingDetails>
                            </ShippingInfo>
                            <ShippingPrice $free={option.price === 0}>
                              {option.price === 0 ? "Grátis" : `R$ ${option.price.toFixed(2)}`}
                            </ShippingPrice>
                            <ShippingRadio
                              type="radio"
                              name="shipping"
                              checked={selectedShipping === option.id}
                              readOnly
                            />
                          </ShippingOption>
                        ))}
                      </ShippingOptions>
                    )}
                  </ShippingSection>

                  <Title>Dados pessoais</Title>

                  <Section>
                    <Field>
                      <Input
                        type="email"
                        placeholder="Seu e-mail *"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        onBlur={() =>
                          handleBlur(
                            "email",
                            validators.email,
                            errorMessages.email
                          )
                        }
                        $error={!!errors.email}
                      />
                      {errors.email && (
                        <ErrorMessage>{errors.email}</ErrorMessage>
                      )}
                    </Field>

                    <CheckRow>



                      <input type="checkbox" id="news" />
                      <label htmlFor="news">
                        Envie-me e-mails sobre novidades e ofertas. (Opcional)
                      </label>
                      <Link
                        to="/login"
                        style={{
                          marginLeft: "auto",
                          textDecoration: "none",
                          color: "#4d7294",
                          fontWeight: 500,
                        }}
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
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          onBlur={() =>
                            handleBlur(
                              "firstName",
                              validators.required,
                              errorMessages.firstName
                            )
                          }
                          $error={!!errors.firstName}
                        />
                        {errors.firstName && (
                          <ErrorMessage>{errors.firstName}</ErrorMessage>
                        )}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Último nome *"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          onBlur={() =>
                            handleBlur(
                              "lastName",
                              validators.required,
                              errorMessages.lastName
                            )
                          }
                          $error={!!errors.lastName}
                        />
                        {errors.lastName && (
                          <ErrorMessage>{errors.lastName}</ErrorMessage>
                        )}
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
                          onChange={(e) =>
                            handleInputChange("cpf", e.target.value, masks.cpf)
                          }
                          onBlur={() =>
                            handleBlur("cpf", validators.cpf, errorMessages.cpf)
                          }
                          $error={!!errors.cpf}
                          maxLength="14"
                        />
                        {errors.cpf && (
                          <ErrorMessage>{errors.cpf}</ErrorMessage>
                        )}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Data de nascimento *"
                          value={formData.birthDate}
                          onChange={(e) =>
                            handleInputChange(
                              "birthDate",
                              e.target.value,
                              masks.date
                            )
                          }
                          onBlur={() =>
                            handleBlur(
                              "birthDate",
                              validators.date,
                              errorMessages.date
                            )
                          }
                          $error={!!errors.birthDate}
                          maxLength="10"
                        />
                        {errors.birthDate && (
                          <ErrorMessage>{errors.birthDate}</ErrorMessage>
                        )}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Telefone *"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange(
                              "phone",
                              e.target.value,
                              masks.phone
                            )
                          }
                          onBlur={() =>
                            handleBlur(
                              "phone",
                              validators.phone,
                              errorMessages.phone
                            )
                          }
                          $error={!!errors.phone}
                          maxLength="15"
                        />
                        {errors.phone && (
                          <ErrorMessage>{errors.phone}</ErrorMessage>
                        )}
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
                          onChange={(e) =>
                            handleInputChange("country", e.target.value)
                          }
                          onBlur={() =>
                            handleBlur(
                              "country",
                              validators.required,
                              errorMessages.country
                            )
                          }
                          $error={!!errors.country}
                        >
                          <option value="">País *</option>
                          <option value="Brasil">Brasil</option>
                        </Select>
                        {errors.country && (
                          <ErrorMessage>{errors.country}</ErrorMessage>
                        )}
                      </Field>
                      <Field>
                        <Select
                          value={formData.state}
                          onChange={(e) =>
                            handleInputChange("state", e.target.value)
                          }
                          onBlur={() =>
                            handleBlur(
                              "state",
                              validators.required,
                              errorMessages.state
                            )
                          }
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
                        {errors.state && (
                          <ErrorMessage>{errors.state}</ErrorMessage>
                        )}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Cidade *"
                          value={formData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          onBlur={() =>
                            handleBlur(
                              "city",
                              validators.required,
                              errorMessages.city
                            )
                          }
                          $error={!!errors.city}
                        />
                        {errors.city && (
                          <ErrorMessage>{errors.city}</ErrorMessage>
                        )}
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
                          onChange={(e) =>
                            handleInputChange("street", e.target.value)
                          }
                          onBlur={() =>
                            handleBlur(
                              "street",
                              validators.required,
                              errorMessages.street
                            )
                          }
                          $error={!!errors.street}
                        />
                        {errors.street && (
                          <ErrorMessage>{errors.street}</ErrorMessage>
                        )}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Número *"
                          value={formData.numero}
                          onChange={(e) =>
                            handleInputChange("numero", e.target.value)
                          }
                          onBlur={() =>
                            handleBlur(
                              "numero",
                              validators.required,
                              "Número é obrigatório"
                            )
                          }
                          $error={!!errors.numero}
                        />
                        {errors.numero && (
                          <ErrorMessage>{errors.numero}</ErrorMessage>
                        )}
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
                          onChange={(e) =>
                            handleInputChange("neighborhood", e.target.value)
                          }
                          onBlur={() =>
                            handleBlur(
                              "neighborhood",
                              validators.required,
                              errorMessages.neighborhood
                            )
                          }
                          $error={!!errors.neighborhood}
                        />
                        {errors.neighborhood && (
                          <ErrorMessage>{errors.neighborhood}</ErrorMessage>
                        )}
                      </Field>
                      <Field>
                        <Input
                          type="text"
                          placeholder="Complemento (Opcional)"
                          value={formData.complement}
                          onChange={(e) =>
                            handleInputChange("complement", e.target.value)
                          }
                        />
                      </Field>
                    </Row>
                  </Section>

                  <Section>
                    <Field>
                      <div style={{ position: "relative" }}>
                        <Input
                          type="text"
                          placeholder="CEP *"
                          value={formData.cep}
                          onChange={(e) =>
                            handleInputChange("cep", e.target.value, masks.cep)
                          }
                          onBlur={() =>
                            handleBlur("cep", validators.cep, errorMessages.cep)
                          }
                          $error={!!errors.cep}
                          maxLength="9"
                        />
                        <div
                          style={{ position: "absolute", right: 14, top: 14 }}
                        >
                          <SearchButton>Buscar</SearchButton>
                        </div>
                      </div>
                      {errors.cep && <ErrorMessage>{errors.cep}</ErrorMessage>}
                    </Field>
                  </Section>

                  <Actions>
                    <PrimaryButton onClick={handleContinue}>
                      Continuar para pagamento
                    </PrimaryButton>
                  </Actions>
                </Card>
              </Front>

              {/* --- VERSO: PAGAMENTO --- */}
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
                            <div style={{ fontSize: "0.7rem", color: "#666" }}>
                              Elo, Master, Visa...
                            </div>
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

                    {/* Expandable Credit Card Form */}
                    <CreditCardSection $expanded={paymentMethod === "credit"}>
                      <CreditCardForm $expanded={paymentMethod === "credit"}>
                        <CardFormTitle>
                          Dados do Cartão de Crédito
                        </CardFormTitle>

                        <CardRow $columns={1}>
                          <CardField>
                            <CardLabel>
                              Nome impresso no cartão <span>*</span>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="Nome como está no cartão"
                              value={cardData.cardHolderName}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardHolderName",
                                  e.target.value
                                )
                              }
                              $error={!!cardErrors.cardHolderName}
                            />
                            {cardErrors.cardHolderName && (
                              <ErrorMessage>
                                {cardErrors.cardHolderName}
                              </ErrorMessage>
                            )}
                          </CardField>
                        </CardRow>

                        <CardRow $columns={2}>
                          <CardField>
                            <CardLabel>
                              CPF do titular <span>*</span>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="000.000.000-00"
                              value={cardData.cardHolderCPF}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardHolderCPF",
                                  e.target.value,
                                  cardMasks.cardCPF
                                )
                              }
                              $error={!!cardErrors.cardHolderCPF}
                              maxLength="14"
                            />
                            {cardErrors.cardHolderCPF && (
                              <ErrorMessage>
                                {cardErrors.cardHolderCPF}
                              </ErrorMessage>
                            )}
                          </CardField>

                          <CardField>
                            <CardLabel>
                              Número do cartão <span>*</span>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="0000 0000 0000 0000"
                              value={cardData.cardNumber}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardNumber",
                                  e.target.value,
                                  cardMasks.cardNumber
                                )
                              }
                              $error={!!cardErrors.cardNumber}
                              maxLength="19"
                            />
                            {cardErrors.cardNumber && (
                              <ErrorMessage>
                                {cardErrors.cardNumber}
                              </ErrorMessage>
                            )}
                          </CardField>
                        </CardRow>

                        <CardRow $columns={3}>
                          <CardField>
                            <CardLabel>
                              Validade <span>*</span>
                              <CardInfoIcon title="Mês/Ano">?</CardInfoIcon>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="MM/AA"
                              value={cardData.cardExpiry}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardExpiry",
                                  e.target.value,
                                  cardMasks.cardExpiry
                                )
                              }
                              $error={!!cardErrors.cardExpiry}
                              maxLength="5"
                            />
                            {cardErrors.cardExpiry && (
                              <ErrorMessage>
                                {cardErrors.cardExpiry}
                              </ErrorMessage>
                            )}
                          </CardField>

                          <CardField>
                            <CardLabel>
                              CVV <span>*</span>
                              <CardInfoIcon title="Código de segurança">
                                ?
                              </CardInfoIcon>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="000"
                              value={cardData.cardCVV}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardCVV",
                                  e.target.value,
                                  cardMasks.cardCVV
                                )
                              }
                              $error={!!cardErrors.cardCVV}
                              maxLength="4"
                            />
                            {cardErrors.cardCVV && (
                              <ErrorMessage>{cardErrors.cardCVV}</ErrorMessage>
                            )}
                          </CardField>

                          <CardField>
                            <CardLabel>
                              Parcelas <span>*</span>
                            </CardLabel>
                            <InstallmentSelect
                              value={cardData.installments}
                              onChange={(e) =>
                                setCardData((prev) => ({
                                  ...prev,
                                  installments: e.target.value,
                                }))
                              }
                            >
                              <option value="1">
                                1x de R$ {totais.total} sem juros
                              </option>
                              <option value="2">
                                2x de R${" "}
                                {((totais.total) / 2).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} sem
                                juros
                              </option>
                              <option value="3">
                                3x de R${" "}
                                {(parseFloat(totais.total) / 3).toFixed(2)} sem
                                juros
                              </option>
                              <option value="4">
                                4x de R${" "}
                                {(parseFloat(totais.total) / 4).toFixed(2)} sem
                                juros
                              </option>
                              <option value="5">
                                5x de R${" "}
                                {(parseFloat(totais.total) / 5).toFixed(2)} sem
                                juros
                              </option>
                              <option value="6">
                                6x de R${" "}
                                {(parseFloat(totais.total) / 6).toFixed(2)} sem
                                juros
                              </option>
                            </InstallmentSelect>
                          </CardField>
                        </CardRow>

                        <CardField>
                          <CardLabel>
                            Bandeira do cartão <span>*</span>
                          </CardLabel>
                          <CardBrandSelector>
                            <BrandOption
                              $selected={cardData.cardBrand === "elo"}
                            >
                              <input
                                type="radio"
                                name="cardBrand"
                                value="elo"
                                checked={cardData.cardBrand === "elo"}
                                onChange={(e) =>
                                  setCardData((prev) => ({
                                    ...prev,
                                    cardBrand: e.target.value,
                                  }))
                                }
                              />
                              <img src={Elo} alt="Elo" style={{ width: 45 }} />
                            </BrandOption>
                            <BrandOption
                              $selected={cardData.cardBrand === "mastercard"}
                            >
                              <input
                                type="radio"
                                name="cardBrand"
                                value="mastercard"
                                checked={cardData.cardBrand === "mastercard"}
                                onChange={(e) =>
                                  setCardData((prev) => ({
                                    ...prev,
                                    cardBrand: e.target.value,
                                  }))
                                }
                              />
                              <img
                                src={MasterCard}
                                alt="MasterCard"
                                style={{ width: 45 }}
                              />
                            </BrandOption>
                            <BrandOption
                              $selected={cardData.cardBrand === "visa"}
                            >
                              <input
                                type="radio"
                                name="cardBrand"
                                value="visa"
                                checked={cardData.cardBrand === "visa"}
                                onChange={(e) =>
                                  setCardData((prev) => ({
                                    ...prev,
                                    cardBrand: e.target.value,
                                  }))
                                }
                              />
                              <img
                                src={Visa}
                                alt="Visa"
                                style={{ width: 45 }}
                              />
                            </BrandOption>
                          </CardBrandSelector>
                          {cardErrors.cardBrand && (
                            <ErrorMessage>{cardErrors.cardBrand}</ErrorMessage>
                          )}
                        </CardField>

                        <SecurityBadge>
                          <FiShield />
                          <span>Pagamento 100% seguro e criptografado</span>
                        </SecurityBadge>
                      </CreditCardForm>
                    </CreditCardSection>

                    <PaymentOption onClick={() => setPaymentMethod("debit")}>
                      <PaymentContent>
                        <PaymentIcon>
                          <FiCreditCard />
                        </PaymentIcon>
                        <div>
                          <PaymentLabel>Cartão de Débito</PaymentLabel>
                          <PaymentIcons>
                            <div style={{ fontSize: "0.7rem", color: "#666" }}>
                              Visa, Master, Elo...
                            </div>
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

                    {/* Expandable Debit Card Form */}
                    <CreditCardSection $expanded={paymentMethod === "debit"}>
                      <CreditCardForm $expanded={paymentMethod === "debit"}>
                        <CardFormTitle>Dados do Cartão de Débito</CardFormTitle>

                        <CardRow $columns={1}>
                          <CardField>
                            <CardLabel>
                              Nome impresso no cartão <span>*</span>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="Nome como está no cartão"
                              value={cardData.cardHolderName}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardHolderName",
                                  e.target.value
                                )
                              }
                              $error={!!cardErrors.cardHolderName}
                            />
                            {cardErrors.cardHolderName && (
                              <ErrorMessage>
                                {cardErrors.cardHolderName}
                              </ErrorMessage>
                            )}
                          </CardField>
                        </CardRow>

                        <CardRow $columns={2}>
                          <CardField>
                            <CardLabel>
                              CPF do titular <span>*</span>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="000.000.000-00"
                              value={cardData.cardHolderCPF}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardHolderCPF",
                                  e.target.value,
                                  cardMasks.cardCPF
                                )
                              }
                              $error={!!cardErrors.cardHolderCPF}
                              maxLength="14"
                            />
                            {cardErrors.cardHolderCPF && (
                              <ErrorMessage>
                                {cardErrors.cardHolderCPF}
                              </ErrorMessage>
                            )}
                          </CardField>

                          <CardField>
                            <CardLabel>
                              Número do cartão <span>*</span>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="0000 0000 0000 0000"
                              value={cardData.cardNumber}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardNumber",
                                  e.target.value,
                                  cardMasks.cardNumber
                                )
                              }
                              $error={!!cardErrors.cardNumber}
                              maxLength="19"
                            />
                            {cardErrors.cardNumber && (
                              <ErrorMessage>
                                {cardErrors.cardNumber}
                              </ErrorMessage>
                            )}
                          </CardField>
                        </CardRow>

                        <CardRow $columns={2}>
                          <CardField>
                            <CardLabel>
                              Validade <span>*</span>
                              <CardInfoIcon title="Mês/Ano">?</CardInfoIcon>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="MM/AA"
                              value={cardData.cardExpiry}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardExpiry",
                                  e.target.value,
                                  cardMasks.cardExpiry
                                )
                              }
                              $error={!!cardErrors.cardExpiry}
                              maxLength="5"
                            />
                            {cardErrors.cardExpiry && (
                              <ErrorMessage>
                                {cardErrors.cardExpiry}
                              </ErrorMessage>
                            )}
                          </CardField>

                          <CardField>
                            <CardLabel>
                              CVV <span>*</span>
                              <CardInfoIcon title="Código de segurança">
                                ?
                              </CardInfoIcon>
                            </CardLabel>
                            <CardInput
                              type="text"
                              placeholder="000"
                              value={cardData.cardCVV}
                              onChange={(e) =>
                                handleCardInputChange(
                                  "cardCVV",
                                  e.target.value,
                                  cardMasks.cardCVV
                                )
                              }
                              $error={!!cardErrors.cardCVV}
                              maxLength="4"
                            />
                            {cardErrors.cardCVV && (
                              <ErrorMessage>{cardErrors.cardCVV}</ErrorMessage>
                            )}
                          </CardField>
                        </CardRow>

                        <CardField>
                          <CardLabel>
                            Bandeira do cartão <span>*</span>
                          </CardLabel>
                          <CardBrandSelector>
                            <BrandOption
                              $selected={cardData.cardBrand === "elo"}
                            >
                              <input
                                type="radio"
                                name="cardBrand"
                                value="elo"
                                checked={cardData.cardBrand === "elo"}
                                onChange={(e) =>
                                  setCardData((prev) => ({
                                    ...prev,
                                    cardBrand: e.target.value,
                                  }))
                                }
                              />
                              <img src={Elo} alt="Elo" style={{ width: 45 }} />
                            </BrandOption>
                            <BrandOption
                              $selected={cardData.cardBrand === "mastercard"}
                            >
                              <input
                                type="radio"
                                name="cardBrand"
                                value="mastercard"
                                checked={cardData.cardBrand === "mastercard"}
                                onChange={(e) =>
                                  setCardData((prev) => ({
                                    ...prev,
                                    cardBrand: e.target.value,
                                  }))
                                }
                              />
                              <img
                                src={MasterCard}
                                alt="MasterCard"
                                style={{ width: 45 }}
                              />
                            </BrandOption>
                            <BrandOption
                              $selected={cardData.cardBrand === "visa"}
                            >
                              <input
                                type="radio"
                                name="cardBrand"
                                value="visa"
                                checked={cardData.cardBrand === "visa"}
                                onChange={(e) =>
                                  setCardData((prev) => ({
                                    ...prev,
                                    cardBrand: e.target.value,
                                  }))
                                }
                              />
                              <img
                                src={Visa}
                                alt="Visa"
                                style={{ width: 45 }}
                              />
                            </BrandOption>
                          </CardBrandSelector>
                          {cardErrors.cardBrand && (
                            <ErrorMessage>{cardErrors.cardBrand}</ErrorMessage>
                          )}
                        </CardField>

                        <SecurityBadge>
                          <FiShield />
                          <span>Pagamento 100% seguro e criptografado</span>
                        </SecurityBadge>
                      </CreditCardForm>
                    </CreditCardSection>

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

                    {/* Expandable PIX Section */}
                    <PixSection $expanded={paymentMethod === "pix"}>
                      <PixContainer $expanded={paymentMethod === "pix"}>
                        <PixTitle>Pagamento via PIX</PixTitle>

                        <PixQRCode>
                          <img src={QRCodeImg} alt="QR Code PIX" />
                          <span
                            style={{
                              fontSize: "0.85rem",
                              color: "#666",
                              textAlign: "center",
                            }}
                          >
                            Escaneie o QR Code com o app do seu banco
                          </span>
                        </PixQRCode>

                        <PixKeyContainer>
                          <PixKeyLabel>
                            Ou copie a chave PIX Copia e Cola:
                          </PixKeyLabel>
                          <PixKeyField>
                            <PixKeyInput
                              type="text"
                              value={pixKey}
                              readOnly
                              onClick={(e) => e.target.select()}
                            />
                            <CopyButton
                              onClick={copyPixKey}
                              className={pixKeyCopied ? "copied" : ""}
                            >
                              {pixKeyCopied ? (
                                <>
                                  <FiCheck />
                                  Copiado!
                                </>
                              ) : (
                                <>
                                  <FiCopy />
                                  Copiar
                                </>
                              )}
                            </CopyButton>
                          </PixKeyField>
                        </PixKeyContainer>

                        <PixInstructions>
                          <strong>Como pagar:</strong>
                          <ol>
                            <li>Abra o app do seu banco</li>
                            <li>Escolha pagar com PIX</li>
                            <li>Escaneie o QR Code ou cole a chave PIX</li>
                            <li>Confirme o pagamento</li>
                          </ol>
                        </PixInstructions>

                        <SecurityBadge>
                          <FiShield />
                          <span>Pagamento processado instantaneamente</span>
                        </SecurityBadge>
                      </PixContainer>
                    </PixSection>

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

                    {/* Expandable Boleto Section */}
                    <BoletoSection $expanded={paymentMethod === "boleto"}>
                      <BoletoContainer $expanded={paymentMethod === "boleto"}>
                        <BoletoTitle>Dados para Geração do Boleto</BoletoTitle>

                        <BoletoForm>
                          <CardRow $columns={1}>
                            <CardField>
                              <CardLabel>
                                Nome completo do pagador <span>*</span>
                              </CardLabel>
                              <CardInput
                                type="text"
                                placeholder="Nome completo"
                                value={boletoData.nomeCompleto}
                                onChange={(e) =>
                                  handleBoletoInputChange(
                                    "nomeCompleto",
                                    e.target.value
                                  )
                                }
                                $error={!!boletoErrors.nomeCompleto}
                              />
                              {boletoErrors.nomeCompleto && (
                                <ErrorMessage>
                                  {boletoErrors.nomeCompleto}
                                </ErrorMessage>
                              )}
                            </CardField>
                          </CardRow>

                          <CardRow $columns={2}>
                            <CardField>
                              <CardLabel>
                                CPF <span>*</span>
                              </CardLabel>
                              <CardInput
                                type="text"
                                placeholder="000.000.000-00"
                                value={boletoData.cpf}
                                onChange={(e) =>
                                  handleBoletoInputChange(
                                    "cpf",
                                    e.target.value,
                                    masks.cpf
                                  )
                                }
                                $error={!!boletoErrors.cpf}
                                maxLength="14"
                              />
                              {boletoErrors.cpf && (
                                <ErrorMessage>{boletoErrors.cpf}</ErrorMessage>
                              )}
                            </CardField>

                            <CardField>
                              <CardLabel>
                                E-mail do cliente <span>*</span>
                              </CardLabel>
                              <CardInput
                                type="email"
                                placeholder="email@exemplo.com"
                                value={boletoData.email}
                                onChange={(e) =>
                                  handleBoletoInputChange(
                                    "email",
                                    e.target.value
                                  )
                                }
                                $error={!!boletoErrors.email}
                              />
                              {boletoErrors.email && (
                                <ErrorMessage>
                                  {boletoErrors.email}
                                </ErrorMessage>
                              )}
                            </CardField>
                          </CardRow>

                          <CardRow $columns={1}>
                            <CardField>
                              <CardLabel>
                                Endereço completo <span>*</span>
                              </CardLabel>
                              <CardInput
                                type="text"
                                placeholder="Rua, número, bairro, cidade - estado, CEP"
                                value={boletoData.enderecoCompleto}
                                onChange={(e) =>
                                  handleBoletoInputChange(
                                    "enderecoCompleto",
                                    e.target.value
                                  )
                                }
                                readOnly
                                style={{
                                  background: "#f5f5f5",
                                  cursor: "not-allowed",
                                }}
                              />
                            </CardField>
                          </CardRow>

                          <CardRow $columns={2}>
                            <CardField>
                              <CardLabel>
                                CEP <span>*</span>
                              </CardLabel>
                              <CardInput
                                type="text"
                                placeholder="00000-000"
                                value={boletoData.cep}
                                onChange={(e) =>
                                  handleBoletoInputChange(
                                    "cep",
                                    e.target.value,
                                    masks.cep
                                  )
                                }
                                $error={!!boletoErrors.cep}
                                maxLength="9"
                              />
                              {boletoErrors.cep && (
                                <ErrorMessage>{boletoErrors.cep}</ErrorMessage>
                              )}
                            </CardField>

                            <CardField>
                              <CardLabel>
                                Rua <span>*</span>
                              </CardLabel>
                              <CardInput
                                type="text"
                                placeholder="Nome da rua"
                                value={boletoData.rua}
                                onChange={(e) =>
                                  handleBoletoInputChange("rua", e.target.value)
                                }
                                $error={!!boletoErrors.rua}
                              />
                              {boletoErrors.rua && (
                                <ErrorMessage>{boletoErrors.rua}</ErrorMessage>
                              )}
                            </CardField>
                          </CardRow>

                          <CardRow $columns={3}>
                            <CardField>
                              <CardLabel>
                                Número <span>*</span>
                              </CardLabel>
                              <CardInput
                                type="text"
                                placeholder="123"
                                value={boletoData.numero}
                                onChange={(e) =>
                                  handleBoletoInputChange(
                                    "numero",
                                    e.target.value
                                  )
                                }
                                $error={!!boletoErrors.numero}
                              />
                              {boletoErrors.numero && (
                                <ErrorMessage>
                                  {boletoErrors.numero}
                                </ErrorMessage>
                              )}
                            </CardField>

                            <CardField>
                              <CardLabel>
                                Bairro <span>*</span>
                              </CardLabel>
                              <CardInput
                                type="text"
                                placeholder="Nome do bairro"
                                value={boletoData.bairro}
                                onChange={(e) =>
                                  handleBoletoInputChange(
                                    "bairro",
                                    e.target.value
                                  )
                                }
                                $error={!!boletoErrors.bairro}
                              />
                              {boletoErrors.bairro && (
                                <ErrorMessage>
                                  {boletoErrors.bairro}
                                </ErrorMessage>
                              )}
                            </CardField>

                            <CardField>
                              <CardLabel>
                                Cidade <span>*</span>
                              </CardLabel>
                              <CardInput
                                type="text"
                                placeholder="Nome da cidade"
                                value={boletoData.cidade}
                                onChange={(e) =>
                                  handleBoletoInputChange(
                                    "cidade",
                                    e.target.value
                                  )
                                }
                                $error={!!boletoErrors.cidade}
                              />
                              {boletoErrors.cidade && (
                                <ErrorMessage>
                                  {boletoErrors.cidade}
                                </ErrorMessage>
                              )}
                            </CardField>
                          </CardRow>

                          <CardRow $columns={1}>
                            <CardField>
                              <CardLabel>
                                Estado <span>*</span>
                              </CardLabel>
                              <CardSelect
                                value={boletoData.estado}
                                onChange={(e) =>
                                  handleBoletoInputChange(
                                    "estado",
                                    e.target.value
                                  )
                                }
                                $error={!!boletoErrors.estado}
                              >
                                <option value="">Selecione o estado</option>
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
                              </CardSelect>
                              {boletoErrors.estado && (
                                <ErrorMessage>
                                  {boletoErrors.estado}
                                </ErrorMessage>
                              )}
                            </CardField>
                          </CardRow>



                          <SecurityBadge>
                            <FiShield />
                            <span>Boleto válido por 3 dias úteis</span>
                          </SecurityBadge>
                        </BoletoForm>
                      </BoletoContainer>
                    </BoletoSection>
                  </Section>

                  <Actions>
                    <PrimaryButton
                      onClick={handlePayment}
                      disabled={loadingPayment}
                    >
                      {loadingPayment ? "Processando..." : "Pagar agora"}
                    </PrimaryButton>
                  </Actions>
                </Card>
              </Back>
            </Flipper>
          </FlipContainer>

          {/* --- LATERAL: RESUMO DA SACOLA --- */}
          <Card $summary>
            <SummaryHeader>
              <Title style={{ margin: 0, fontSize: "1.2rem" }}>Sua sacola</Title>
            </SummaryHeader>

            {loadingCart ? (
              <div style={{ padding: "20px", textAlign: "center" }}>Carregando...</div>
            ) : cartProducts.length === 0 ? (
              <div style={{ padding: "20px", textAlign: "center" }}>Carrinho vazio</div>
            ) : (
              <>
                {cartProducts.map((produto) => (
                  <BagItem key={produto.id}>
                    <BagImageWrapper>
                      <BagImage
                        src={produto.imagem || ProductImg}
                        onError={(e) => e.target.src = ProductImg}
                      />
                    </BagImageWrapper>
                    <div style={{ flex: 1 }}>
                      <BagTitle>{produto.nome || produto.nome_produto}</BagTitle>
                      <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px' }}>
                        R$ {produto.preco_unitario ? produto.preco_unitario.toFixed(2) : "0.00"}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          onClick={() => handleUpdateQuantity(produto.id, produto.quantidade - 1)}
                          style={{
                            width: '24px',
                            height: '24px',
                            border: '1px solid #ddd',
                            background: '#fff',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px'
                          }}
                        >
                          -
                        </button>
                        <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: '500' }}>
                          {produto.quantidade}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(produto.id, produto.quantidade + 1)}
                          style={{
                            width: '24px',
                            height: '24px',
                            border: '1px solid #ddd',
                            background: '#fff',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px'
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(produto.id)}
                      style={{
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        color: '#d00',
                        fontSize: '18px',
                        padding: '4px'
                      }}
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
                  <PriceText>Descontos</PriceText>
                  <PriceValue $discount>- R$ {totais.desconto}</PriceValue>
                </RowPrice>
                <RowPrice>
                  <PriceText>Frete</PriceText>
                  {parseFloat(totais.frete) === 0 ? (
                    <ShippingFree>Grátis</ShippingFree>
                  ) : (
                    <PriceText>R$ {totais.frete}</PriceText>
                  )}
                </RowPrice>

                <SummaryDivider />

                <TotalBlock>
                  <TotalLabel><span>Total</span></TotalLabel>
                  <div style={{ textAlign: 'right' }}>
                    <Total>R$ {totais.total}</Total>
                    <Installments>em até 4x de R$ {totais.parcela} sem juros</Installments>
                  </div>
                </TotalBlock>
              </>
            )}
          </Card>
        </Grid>
      </Wrapper>
    </PageContainer>
  );
};

export default CheckoutPage;
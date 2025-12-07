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
  ShippingIcon,
  ShippingDetails,
  ShippingName,
  ShippingTime,
  ShippingPrice,
  ShippingRadio,

} from "./style";
import ProductImg from "../../assets/images/desktop-ilustration.png";
import QRCodeImg from "../../assets/images/qrcode.png";
import Inter from "../../assets/images/pay/inter.svg";
import Elo from "../../assets/images/pay/elo.svg";
import Itau from "../../assets/images/pay/itau.svg";
import MasterCard from "../../assets/images/pay/master.svg";
import Mercado from "../../assets/images/pay/mercado.svg";
import PicPay from "../../assets/images/pay/picpay.svg";
import Pix from "../../assets/images/pay/pix.svg";
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
  const [loadingShipping, setLoadingShipping] = useState(true);

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

  const [cardErrors, setCardErrors] = useState({});

  const [errors, setErrors] = useState({});

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

  const [boletoErrors, setBoletoErrors] = useState({});

  useEffect(() => {
    const fetchTransportadoras = async () => {
      try {
        setLoadingShipping(true);

        const response = await axios.get(
          'http://localhost:8080/get-transportadoras',
          {
            withCredentials: true,
          }
        );

      
        const transportadorasFormatadas = response.data.map((transp) => ({
          id: transp.cod_transportadora,
          name: transp.nome_transp,
          time: "Conforme região", 
          price: transp.preco_base_frete_transp || 0,
          cnpj: transp.cnpj_transp,
          telefone: transp.telefone_transp,
          avaliacao: transp.avaliacao_media_transp,
          regioes: transp.regioes_atendidas_transp,
        }));

        setShippingOptions(transportadorasFormatadas);

      
        if (transportadorasFormatadas.length > 0) {
          setSelectedShipping(transportadorasFormatadas[0].id);
        }

        setLoadingShipping(false);
      } catch (error) {
        console.error('Erro ao buscar transportadoras:', error);
        setLoadingShipping(false);
        alert('Erro ao carregar transportadoras. Tente novamente.');
      }
    };

    fetchTransportadoras();
  }, []);

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

    
      setBoletoData({
        nomeCompleto: nomeCompleto,
        cpf: formatarCPF(user.cpf_user),
        email: user.email_user || "",
        enderecoCompleto: `${user.rua_user || ""}, ${user.numero_user || ""}${user.complemento_user ? ", " + user.complemento_user : ""
          } - ${user.bairro_user || ""}, ${user.cidade_user || ""} - ${user.estado_user || ""
          }, ${formatarCEP(user.cep_user)}`,
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
          `http://localhost:8080/get-produtos-cart/${user.cod_user}`,
          {
            withCredentials: true,
          }
        );

        setCartProducts(response.data);
        setLoadingCart(false);
      } catch (error) {
        console.error("Erro ao buscar produtos do carrinho:", error);
        setCartProducts([]);
        setLoadingCart(false);
      }
    };

    fetchCartProducts();
  }, [user]);

  const calcularTotais = () => {
    const subtotal = cartProducts.reduce(
      (acc, item) => acc + item.preco_total,
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
      parcela: (subtotal / 4).toFixed(2),
    };
  };

  const totais = calcularTotais();

  const handleRemoveItem = async (itemId) => {
    try {
      const token = localStorage.getItem("token");

      if (!window.confirm("Deseja realmente remover este item do carrinho?")) {
        return;
      }

      await axios.delete(`http://localhost:8080/remove-from-cart/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      setCartProducts((prev) => prev.filter((item) => item.id !== itemId));
      alert("Item removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover item do carrinho:", error);
      alert("Erro ao remover item. Tente novamente.");
    }
  };

  const handleInputChange = (field, value, maskFunction) => {
    const maskedValue = maskFunction ? maskFunction(value) : value;
    setFormData((prev) => ({ ...prev, [field]: maskedValue }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleBlur = (field, validatorFunction, errorMessage) => {
    const value = formData[field];

    if (!value || !validatorFunction(value)) {
      setErrors((prev) => ({ ...prev, [field]: errorMessage }));
    }
  };

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setPixKeyCopied(true);
      setTimeout(() => setPixKeyCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar chave PIX:", err);
      alert("Erro ao copiar chave PIX. Tente copiar manualmente.");
    }
  };


  const cardMasks = {
    cardNumber: (value) => {
      const numbers = value.replace(/\D/g, "");
      return numbers.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    },
    cardExpiry: (value) => {
      const numbers = value.replace(/\D/g, "");
      if (numbers.length >= 2) {
        return numbers.slice(0, 2) + "/" + numbers.slice(2, 4);
      }
      return numbers;
    },
    cardCVV: (value) => {
      return value.replace(/\D/g, "").slice(0, 4);
    },
    cardCPF: (value) => {
      const numbers = value.replace(/\D/g, "");
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        .slice(0, 14);
    },
  };

  const detectCardBrand = (cardNumber) => {
    const number = cardNumber.replace(/\s/g, "");

    if (/^4/.test(number)) return "visa";
    if (/^5[1-5]/.test(number)) return "mastercard";
    if (/^3[47]/.test(number)) return "amex";
    if (/^6(?:011|5)/.test(number)) return "discover";
    if (/^35/.test(number)) return "jcb";
    if (/^(?:5[0678]|6304|6390|67)/.test(number)) return "elo";
    if (/^(606282|3841)/.test(number)) return "hipercard";

    return "";
  };

  const handleCardInputChange = (field, value, maskFunction) => {
    let maskedValue = maskFunction ? maskFunction(value) : value;


    if (field === "cardNumber") {
      const brand = detectCardBrand(maskedValue);
      setCardData((prev) => ({
        ...prev,
        [field]: maskedValue,
        cardBrand: brand,
      }));
    } else {
      setCardData((prev) => ({ ...prev, [field]: maskedValue }));
    }


    if (cardErrors[field]) {
      setCardErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateCardForm = () => {
    const newErrors = {};

    if (!cardData.cardHolderName.trim()) {
      newErrors.cardHolderName = "Nome do titular é obrigatório";
    }
    if (!validators.cpf(cardData.cardHolderCPF)) {
      newErrors.cardHolderCPF = "CPF inválido";
    }
    const cardNumberClean = cardData.cardNumber.replace(/\s/g, "");
    if (cardNumberClean.length < 13 || cardNumberClean.length > 19) {
      newErrors.cardNumber = "Número do cartão inválido";
    }
    if (!cardData.cardExpiry || cardData.cardExpiry.length !== 5) {
      newErrors.cardExpiry = "Validade inválida";
    } else {
      const [month, year] = cardData.cardExpiry.split("/");
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      if (parseInt(month) < 1 || parseInt(month) > 12) {
        newErrors.cardExpiry = "Mês inválido";
      } else if (
        parseInt(year) < currentYear ||
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)
      ) {
        newErrors.cardExpiry = "Cartão vencido";
      }
    }
    if (!cardData.cardCVV || cardData.cardCVV.length < 3) {
      newErrors.cardCVV = "CVV inválido";
    }
    if (!cardData.cardBrand) {
      newErrors.cardBrand = "Selecione a bandeira do cartão";
    }

    setCardErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateBoletoForm = () => {
    const newErrors = {};

    if (!validators.required(boletoData.nomeCompleto)) {
      newErrors.nomeCompleto = "Nome completo é obrigatório";
    }
    if (!validators.cpf(boletoData.cpf)) {
      newErrors.cpf = "CPF inválido";
    }
    if (!validators.email(boletoData.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!validators.required(boletoData.cep)) {
      newErrors.cep = "CEP é obrigatório";
    } else if (!validators.cep(boletoData.cep)) {
      newErrors.cep = "CEP inválido";
    }
    if (!validators.required(boletoData.rua)) {
      newErrors.rua = "Rua é obrigatória";
    }
    if (!validators.required(boletoData.numero)) {
      newErrors.numero = "Número é obrigatório";
    }
    if (!validators.required(boletoData.bairro)) {
      newErrors.bairro = "Bairro é obrigatório";
    }
    if (!validators.required(boletoData.cidade)) {
      newErrors.cidade = "Cidade é obrigatória";
    }
    if (!validators.required(boletoData.estado)) {
      newErrors.estado = "Estado é obrigatório";
    }

    setBoletoErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBoletoInputChange = (field, value, maskFunction) => {
    const maskedValue = maskFunction ? maskFunction(value) : value;
    setBoletoData((prev) => {
      const updated = { ...prev, [field]: maskedValue };
    
      if (
        ["rua", "numero", "bairro", "cidade", "estado", "cep"].includes(field)
      ) {
        updated.enderecoCompleto = `${updated.rua || ""}, ${updated.numero || ""
          } - ${updated.bairro || ""}, ${updated.cidade || ""} - ${updated.estado || ""
          }, ${updated.cep || ""}`
          .replace(/^,\s*|,\s*$/g, "")
          .replace(/,\s*,/g, ",");
      }
      return updated;
    });

    if (boletoErrors[field]) {
      setBoletoErrors((prev) => ({ ...prev, [field]: "" }));
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
      const token = localStorage.getItem("token");

      if (cartProducts.length === 0) {
        alert("Seu carrinho está vazio");
        setLoadingPayment(false);
        return;
      }

      if (
        (paymentMethod === "credit" || paymentMethod === "debit") &&
        !validateCardForm()
      ) {
        alert("Por favor, preencha todos os campos do cartão corretamente");
        setLoadingPayment(false);
        return;
      }

      if (paymentMethod === "boleto") {
        if (!validateBoletoForm()) {
          alert("Por favor, preencha todos os campos do boleto corretamente");
          setLoadingPayment(false);
          return;
        }


        const boletoResponse = await axios.post(
          'http://localhost:8080/generate-boleto',
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
            }))
          },
          {
            withCredentials: true,
            responseType: 'blob'
          }
        );


        const url = window.URL.createObjectURL(new Blob([boletoResponse.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `boleto-primegear-${Date.now()}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      }

      const enderecoCompleto =
        paymentMethod === "boleto"
          ? boletoData.enderecoCompleto
          : `${formData.street}, ${formData.numero}${formData.complement ? ", " + formData.complement : ""
          } - ${formData.neighborhood}, ${formData.city} - ${formData.state
          }, ${formData.cep}`;

      let paymentData = {};

      if (paymentMethod === "credit" || paymentMethod === "debit") {
        paymentData = {
          cardHolderName: cardData.cardHolderName,
          cardHolderCPF: cardData.cardHolderCPF.replace(/\D/g, ""),
          cardNumber: cardData.cardNumber.replace(/\s/g, ""),
          cardExpiry: cardData.cardExpiry,
          cardCVV: cardData.cardCVV,
          cardBrand: cardData.cardBrand,
          installments:
            paymentMethod === "credit" ? cardData.installments : "1",
        };
      } else if (paymentMethod === "boleto") {
        paymentData = {
          nomeCompleto: boletoData.nomeCompleto,
          cpf: boletoData.cpf.replace(/\D/g, ""),
          email: boletoData.email,
          enderecoCompleto: boletoData.enderecoCompleto,
          cep: boletoData.cep.replace(/\D/g, ""),
          rua: boletoData.rua,
          numero: boletoData.numero,
          bairro: boletoData.bairro,
          cidade: boletoData.cidade,
          estado: boletoData.estado,
        };
      } else if (paymentMethod === "pix") {
        paymentData = {
          pixKey: pixKey,
          payerEmail: formData.email,
          payerName: `${formData.firstName} ${formData.lastName}`,
          payerCPF: formData.cpf.replace(/\D/g, ""),
        };
      }

      const orderData = {
        paymentMethod: paymentMethod,
        shippingAddress: enderecoCompleto,
        total: parseFloat(totais.total),
        subtotal: parseFloat(totais.subtotal),
        discount: parseFloat(totais.desconto),
        shippingCost: parseFloat(totais.frete), 
        shippingMethod: selectedShipping,
        paymentData: paymentData,
      };

      console.log("Enviando pedido:", orderData);

      const response = await axios.post(
        "http://localhost:8080/create-order",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
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
          endereco_entrega: enderecoCompleto,
          metodo_pagamento: paymentMethod,
          cartao_final:
            paymentMethod === "credit" || paymentMethod === "debit"
              ? cardData.cardNumber.replace(/\s/g, "").slice(-4)
              : null,
          subtotal: totais.subtotal,
          desconto: totais.desconto,
          frete: "0.00",
        };

        setCartProducts([]);

        alert("Pedido realizado com sucesso!");

        navigate("/obrigado", {
          state: {
            order: orderDataForThankYou,
          },
        });
      }
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);

      if (error.response) {
        const errorMessage =
          error.response.data?.message || "Erro ao processar pagamento";
        alert(errorMessage);

        if (error.response.status === 401) {
          alert("Sessão expirada. Por favor, faça login novamente.");
          navigate("/login");
        } else if (error.response.status === 404) {
          alert("Carrinho não encontrado. Adicione produtos ao carrinho.");
          navigate("/produtos");
        }
      } else if (error.request) {
        alert("Erro de conexão. Verifique sua internet e tente novamente.");
      } else {
        alert("Erro inesperado. Tente novamente.");
      }
    } finally {
      setLoadingPayment(false);
    }
  };

  return (
    <PageContainer>
      <Wrapper>
        <Steps>
          <StepItem
            $active={currentStep >= 1}
            onClick={handleBack}
            style={{ cursor: "pointer" }}
          >
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
                  <Title>Entrega</Title>
                  <ShippingSection>
                    <ShippingTitle>
                      Escolha a transportadora
                    </ShippingTitle>

                    {loadingShipping ? (
                      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                        Carregando transportadoras...
                      </div>
                    ) : shippingOptions.length === 0 ? (
                      <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
                        Nenhuma transportadora disponível no momento.
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
                                <ShippingTime>{option.time}</ShippingTime>
                                {option.avaliacao && (
                                  <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '2px' }}>
                                    ⭐ {option.avaliacao}
                                  </div>
                                )}
                              </ShippingDetails>
                            </ShippingInfo>
                            <ShippingPrice $free={option.price === 0}>
                              {option.price === 0 ? "Grátis" : `R$ ${option.price.toFixed(2)}`}
                            </ShippingPrice>
                            <ShippingRadio
                              type="radio"
                              name="shipping"
                              checked={selectedShipping === option.id}
                              onChange={() => setSelectedShipping(option.id)}
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
                                {(parseFloat(totais.total) / 2).toFixed(2)} sem
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

                          <GenerateBoletoButton >
                            Gerar Boleto
                          </GenerateBoletoButton>

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

          <Card $summary>
            <SummaryHeader>
              <Title style={{ margin: 0, fontSize: "1.2rem", fontWeight: 500 }}>
                Sua sacola
              </Title>
            </SummaryHeader>

            {loadingCart ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 0",
                  color: "#666",
                }}
              >
                Carregando produtos...
              </div>
            ) : cartProducts.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 0",
                  color: "#666",
                }}
              >
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
                        onError={(e) => {
                          e.target.src = ProductImg;
                        }}
                      />
                      <BagBadge>{produto.quantidade}</BagBadge>
                    </BagImageWrapper>

                    <div style={{ flex: 1 }}>
                      <BagTitle>{produto.nome}</BagTitle>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          marginTop: "4px",
                        }}
                      >
                        R$ {produto.preco_unitario.toFixed(2)} ×{" "}
                        {produto.quantidade}
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(produto.id)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#dc2626",
                        cursor: "pointer",
                        padding: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "opacity 0.2s",
                        fontSize: "1.2rem",
                      }}
                      onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                      onMouseLeave={(e) => (e.target.style.opacity = "1")}
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
                <DiscountNote>
                  Oferta especial PrimeGear -R$ {totais.desconto}
                </DiscountNote>
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
                  <TotalLabel>
                    <span>Total</span>
                  </TotalLabel>
                  <div style={{ textAlign: "right" }}>
                    <Total>R$ {totais.total}</Total>
                    <Installments>
                      R$ {totais.subtotal} em até 4x de R$ {totais.parcela} sem
                      juros
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

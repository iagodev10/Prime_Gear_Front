import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { masks, validators, errorMessages } from "../../utils/formValidation";

import {
  LoginBack,
  LoginLogin,
  LoginBox,
  FlipWrapper,
  FlipCard,
  FaceFront,
  FaceBack,
  Title,
  Form,
  InputGroup,
  Label,
  LabelOptional,
  Input,
  ForgotPassword,
  SubmitButton,
  SignUpLink,
  FeaturesGrid,
  FeatureCardLarge,
  FeatureCardSmall,
  FeaturesCarousel,
  FeatureCard,
  FeatureTitle,
  FeatureMainText,
  Row,
  Select,
  CepRow,
  CepInput,
  CepButton,
  AddressSection,
  SectionTitle,
  ErrorMessage,
} from "./style";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [flipped, setFlipped] = useState(false);
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginSenha: "",

    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
    genero: "",

    pais: "",
    estado: "",
    cidade: "",
    rua: "",
    numero: "",
    bairro: "",
    complemento: "",
    cep: "",
  });

  const [estados, setEstados] = useState([]);
  const [errors, setErrors] = useState({});

  const paises = [
    { value: "", label: "Selecione um país" },
    { value: "BR", label: "Brasil" },
    { value: "US", label: "Estados Unidos" },
    { value: "AR", label: "Argentina" },
  ];

  const estadosBrasileiros = [
    { value: "", label: "Selecione um estado" },
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    let maskedValue = value;

        // Apply masks based on field name
        if (name === 'cpf') {
            maskedValue = masks.cpf(value);
        } else if (name === 'telefone') {
            maskedValue = masks.phone(value);
        } else if (name === 'cep') {
            maskedValue = masks.cep(value);
        }

    setFormData((prev) => ({
      ...prev,
      [name]: maskedValue,
    }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }

    if (name === "pais" && value === "BR") {
      setEstados(estadosBrasileiros);
    }
  };

  const handleBlur = (field) => {
    const value = formData[field];
    const newErrors = { ...errors };

        switch (field) {
            case 'nome':
                if (!validators.required(value)) {
                    newErrors[field] = 'Nome completo é obrigatório';
                } else if (value.trim().split(' ').length < 2) {
                    newErrors[field] = 'Digite nome e sobrenome';
                }
                break;
            case 'email':
                if (!validators.email(value)) {
                    newErrors[field] = 'E-mail inválido';
                }
                break;
            case 'cpf':
                if (!validators.cpf(value)) {
                    newErrors[field] = 'CPF inválido';
                }
                break;
            case 'telefone':
                if (!validators.required(value)) {
                    newErrors[field] = 'Telefone é obrigatório';
                } else if (value.replace(/\D/g, '').length < 10) {
                    newErrors[field] = 'Telefone incompleto';
                }
                break;
            case 'senha':
                if (!validators.required(value)) {
                    newErrors[field] = 'Senha é obrigatória';
                } else if (value.length < 6) {
                    newErrors[field] = 'Senha deve ter no mínimo 6 caracteres';
                }
                // Re-validar confirmarSenha se já foi preenchida
                if (formData.confirmarSenha && value !== formData.confirmarSenha) {
                    newErrors.confirmarSenha = 'As senhas não coincidem';
                } else if (formData.confirmarSenha && value === formData.confirmarSenha) {
                    delete newErrors.confirmarSenha;
                }
                break;
            case 'confirmarSenha':
                if (!validators.required(value)) {
                    newErrors[field] = 'Confirmação de senha é obrigatória';
                } else if (value !== formData.senha) {
                    newErrors[field] = 'As senhas não coincidem';
                }
                break;
            case 'dataNascimento':
                if (!validators.required(value)) {
                    newErrors[field] = 'Data de nascimento é obrigatória';
                } else {
                    const birthDate = new Date(value);
                    const today = new Date();
                    const age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    const dayDiff = today.getDate() - birthDate.getDate();

          const actualAge =
            monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;

          if (actualAge < 18) {
            newErrors[field] = "Você deve ter pelo menos 18 anos";
          } else if (actualAge > 120) {
            newErrors[field] = "Data de nascimento inválida";
          }
        }
        break;
      case "genero":
        if (!validators.required(value)) {
          newErrors[field] = "Selecione o gênero";
        }
        break;
      case "pais":
        if (!validators.required(value)) {
          newErrors[field] = "Selecione o país";
        }
        break;
      case "estado":
        if (!validators.required(value)) {
          newErrors[field] = "Selecione o estado";
        }
        break;
      case "cep":
        if (!validators.cep(value)) {
          newErrors[field] = "CEP inválido";
        }
        break;
      case "rua":
      case "bairro":
      case "cidade":
      case "numero":
        if (!validators.required(value)) {
          newErrors[field] = "Este campo é obrigatório";
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const buscarCep = async () => {
    const cepLimpo = formData.cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      alert("CEP deve ter 8 dígitos");
      return;
    }

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );
      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        rua: data.logradouro || "",
        bairro: data.bairro || "",
        cidade: data.localidade || "",
        estado: data.uf || "",
        pais: "BR",
      }));

      setEstados(estadosBrasileiros);
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      alert("Erro ao buscar CEP");
    }
  };

  const handleFlipToLogin = () => {
    setFlipped(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFlipToSignup = () => {
    setFlipped(true);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData.loginEmail, formData.loginSenha);
      console.log("==>Dados retornados:", data);

            if (data.user.perfil === 'Administrador' || data.user.perfil === 'Transportadora' || data.user.perfil === 'Funcionário') {
                navigate('/admin');
            } else {
                navigate('/user');
            }

        } catch (error) {
            console.error('Erro completo:', error);
            let errorMessage = 'Erro desconhecido';

      if (error.response) {
        errorMessage =
          error.response.data?.message || `Erro ${error.response.status}`;
      } else if (error.request) {
        errorMessage = "Sem resposta do servidor. Verifique sua conexão.";
      } else {
        errorMessage = error.message || "Erro ao processar requisição";
      }

      alert(`Erro: ${errorMessage}`);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    const enderecoCompleto = `${formData.rua}, ${formData.numero}${
      formData.complemento ? " (" + formData.complemento + ")" : ""
    } - ${formData.bairro}, ${formData.cidade} - ${formData.estado}`;

    const generoMapeado =
      formData.genero === "masculino"
        ? "M"
        : formData.genero === "feminino"
        ? "F"
        : formData.genero;

    const payload = {
      nome_user: formData.nome,
      email_user: formData.email,
      senha_user: formData.senha,
      data_nascimento_user: formData.dataNascimento,
      telefone_user: formData.telefone.replace(/\D/g, ""),
      genero_user: generoMapeado,
      cpf_user: formData.cpf.replace(/\D/g, ""),
      login_user: formData.email,

      cep_user: formData.cep.replace(/\D/g, ""),
      pais_user: formData.pais,
      estado_user: formData.estado,
      cidade_user: formData.cidade,
      rua_user: formData.rua,
      numero_user: formData.numero,
      bairro_user: formData.bairro,
      complemento_user: formData.complemento,

      endereco_user: enderecoCompleto,
    };

    try {
      const response = await axios.post(
        "http://72.62.10.218:8080/criar-user-cliente",
        payload
      );

      console.log("Resposta do Cadastro:", response.data);
     

      setFlipped(false);
      setFormData((prev) => ({
        ...prev,
        senha: "",
        confirmarSenha: "",
      }));
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Erro desconhecido ao cadastrar.";
      console.error("Erro no Cadastro:", errorMessage);

      if (error.response && error.response.status === 409) {
        alert(`Falha no cadastro: Usuário ou e-mail já cadastrado.`);
      } else {
        alert(`Falha no cadastro: ${errorMessage}`);
      }
    }
  };

  return (
    <LoginBack>
      <LoginLogin $hasLargeContent={flipped}>
        <FlipWrapper $flipped={flipped}>
          <FlipCard $flipped={flipped}>
            {/* FRENTE DO LOGIN TA AQUI*/}
            <FaceFront $visible={!flipped}>
              <LoginBox $isVisible={!flipped} $flipped={flipped}>
                <Title>Login</Title>
                <Form onSubmit={handleLoginSubmit}>
                  <InputGroup>
                    <Label>E-mail</Label>
                    <Input
                      type="email"
                      name="loginEmail"
                      value={formData.loginEmail}
                      onChange={handleChange}
                      onBlur={() => handleBlur("loginEmail")}
                      placeholder="Digite seu e-mail"
                      required
                    />
                    {errors.loginEmail && (
                      <ErrorMessage>{errors.loginEmail}</ErrorMessage>
                    )}
                  </InputGroup>

                  <InputGroup>
                    <Label>Senha</Label>
                    <Input
                      type="password"
                      name="loginSenha"
                      value={formData.loginSenha}
                      onChange={handleChange}
                      onBlur={() => handleBlur("loginSenha")}
                      placeholder="Digite sua senha"
                      required
                    />
                    {errors.loginSenha && (
                      <ErrorMessage>{errors.loginSenha}</ErrorMessage>
                    )}
                  </InputGroup>

                  <ForgotPassword href="#">Esqueceu a senha?</ForgotPassword>

                  <SubmitButton type="submit">Entrar</SubmitButton>

                  <SignUpLink>
                    Não tem uma conta?{" "}
                    <span onClick={handleFlipToSignup}>Cadastre-se</span>
                  </SignUpLink>
                </Form>
              </LoginBox>
            </FaceFront>

            {/* VERSO DO CADASTRO AQUI */}
            <FaceBack $visible={flipped}>
              <LoginBox $isVisible={flipped} $flipped={flipped}>
                <Title>Criar Conta</Title>
                <Form onSubmit={handleSignUpSubmit}>
                  <InputGroup>
                    <Label>Nome Completo</Label>
                    <Input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      onBlur={() => handleBlur("nome")}
                      placeholder="Digite seu nome completo"
                      required
                    />
                    {errors.nome && <ErrorMessage>{errors.nome}</ErrorMessage>}
                  </InputGroup>

                  <InputGroup>
                    <Label>E-mail</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur("email")}
                      placeholder="Digite seu e-mail"
                      required
                    />
                    {errors.email && (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                  </InputGroup>

                  <Row>
                    <InputGroup>
                      <Label>CPF</Label>
                      <Input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        onBlur={() => handleBlur("cpf")}
                        placeholder="000.000.000-00"
                        maxLength="14"
                        required
                      />
                      {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}
                    </InputGroup>

                    <InputGroup>
                      <Label>Telefone</Label>
                      <Input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        onBlur={() => handleBlur("telefone")}
                        placeholder="(00) 00000-0000"
                        maxLength="15"
                        required
                      />
                      {errors.telefone && (
                        <ErrorMessage>{errors.telefone}</ErrorMessage>
                      )}
                    </InputGroup>
                  </Row>

                  <Row>
                    <InputGroup>
                      <Label>Data de Nascimento</Label>
                      <Input
                        type="date"
                        name="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                        onBlur={() => handleBlur("dataNascimento")}
                        required
                      />
                      {errors.dataNascimento && (
                        <ErrorMessage>{errors.dataNascimento}</ErrorMessage>
                      )}
                    </InputGroup>

                    <InputGroup>
                      <Label>Gênero</Label>
                      <Select
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        onBlur={() => handleBlur("genero")}
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                      </Select>
                      {errors.genero && (
                        <ErrorMessage>{errors.genero}</ErrorMessage>
                      )}
                    </InputGroup>
                  </Row>

                  <Row>
                    <InputGroup>
                      <Label>Senha</Label>
                      <Input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        onBlur={() => handleBlur("senha")}
                        placeholder="Digite sua senha"
                        required
                      />
                      {errors.senha && (
                        <ErrorMessage>{errors.senha}</ErrorMessage>
                      )}
                    </InputGroup>

                    <InputGroup>
                      <Label>Confirmar Senha</Label>
                      <Input
                        type="password"
                        name="confirmarSenha"
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                        onBlur={() => handleBlur("confirmarSenha")}
                        placeholder="Confirme sua senha"
                        required
                      />
                      {errors.confirmarSenha && (
                        <ErrorMessage>{errors.confirmarSenha}</ErrorMessage>
                      )}
                    </InputGroup>
                  </Row>

                  <AddressSection>
                    <SectionTitle>Endereço</SectionTitle>

                    <InputGroup>
                      <Label>CEP</Label>
                      <CepRow>
                        <CepInput
                          type="text"
                          name="cep"
                          value={formData.cep}
                          onChange={handleChange}
                          onBlur={() => handleBlur("cep")}
                          placeholder="00000-000"
                          maxLength="9"
                          required
                        />
                        <CepButton type="button" onClick={buscarCep}>
                          Buscar
                        </CepButton>
                      </CepRow>
                      {errors.cep && <ErrorMessage>{errors.cep}</ErrorMessage>}
                    </InputGroup>

                    <Row>
                      <InputGroup>
                        <Label>País</Label>
                        <Select
                          name="pais"
                          value={formData.pais}
                          onChange={handleChange}
                          onBlur={() => handleBlur("pais")}
                          required
                        >
                          {paises.map((pais) => (
                            <option key={pais.value} value={pais.value}>
                              {pais.label}
                            </option>
                          ))}
                        </Select>
                        {errors.pais && (
                          <ErrorMessage>{errors.pais}</ErrorMessage>
                        )}
                      </InputGroup>

                      <InputGroup>
                        <Label>Estado</Label>
                        <Select
                          name="estado"
                          value={formData.estado}
                          onChange={handleChange}
                          onBlur={() => handleBlur("estado")}
                          required
                          disabled={!formData.pais}
                        >
                          {estados.length > 0 ? (
                            estados.map((estado) => (
                              <option key={estado.value} value={estado.value}>
                                {estado.label}
                              </option>
                            ))
                          ) : (
                            <option value="">Selecione um país primeiro</option>
                          )}
                        </Select>
                        {errors.estado && (
                          <ErrorMessage>{errors.estado}</ErrorMessage>
                        )}
                      </InputGroup>
                    </Row>

                    <InputGroup>
                      <Label>Cidade</Label>
                      <Input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        onBlur={() => handleBlur("cidade")}
                        placeholder="Digite sua cidade"
                        required
                      />
                      {errors.cidade && (
                        <ErrorMessage>{errors.cidade}</ErrorMessage>
                      )}
                    </InputGroup>

                    <Row>
                      <InputGroup>
                        <Label>Rua</Label>
                        <Input
                          type="text"
                          name="rua"
                          value={formData.rua}
                          onChange={handleChange}
                          onBlur={() => handleBlur("rua")}
                          placeholder="Nome da rua"
                          required
                        />
                        {errors.rua && (
                          <ErrorMessage>{errors.rua}</ErrorMessage>
                        )}
                      </InputGroup>

                      <InputGroup>
                        <Label>Bairro</Label>
                        <Input
                          type="text"
                          name="bairro"
                          value={formData.bairro}
                          onChange={handleChange}
                          onBlur={() => handleBlur("bairro")}
                          placeholder="Nome do bairro"
                          required
                        />
                        {errors.bairro && (
                          <ErrorMessage>{errors.bairro}</ErrorMessage>
                        )}
                      </InputGroup>
                    </Row>

                    <Row>
                      <InputGroup>
                        <LabelOptional>Complemento (Opcional)</LabelOptional>
                        <Input
                          type="text"
                          name="complemento"
                          value={formData.complemento}
                          onChange={handleChange}
                          placeholder="Apto, bloco, etc."
                        />
                      </InputGroup>

                      <InputGroup>
                        <Label>Número</Label>
                        <Input
                          type="text"
                          name="numero"
                          value={formData.numero}
                          onChange={handleChange}
                          onBlur={() => handleBlur("numero")}
                          placeholder="Número"
                          required
                        />
                        {errors.numero && (
                          <ErrorMessage>{errors.numero}</ErrorMessage>
                        )}
                      </InputGroup>
                    </Row>
                  </AddressSection>

                  <SubmitButton type="submit">Cadastrar</SubmitButton>

                  <SignUpLink>
                    Já tem uma conta?{" "}
                    <span onClick={handleFlipToLogin}>Entre aqui</span>
                  </SignUpLink>
                </Form>
              </LoginBox>
            </FaceBack>
          </FlipCard>
        </FlipWrapper>
      </LoginLogin>

      <FeaturesGrid>
        <FeatureCardLarge>
          <FeatureTitle>Atendimento humanizado</FeatureTitle>
          <FeatureMainText>Converse com a gente!</FeatureMainText>
        </FeatureCardLarge>
        <FeatureCardLarge>
          <FeatureTitle>Devolução grátis</FeatureTitle>
          <FeatureMainText>Compra garantida!</FeatureMainText>
        </FeatureCardLarge>
        <FeatureCardSmall>
          <FeatureTitle>Frete grátis</FeatureTitle>
          <FeatureMainText>Sul e sudeste</FeatureMainText>
        </FeatureCardSmall>
        <FeatureCardSmall>
          <FeatureTitle>Parcele em até</FeatureTitle>
          <FeatureMainText>10x sem juros</FeatureMainText>
        </FeatureCardSmall>
        <FeatureCardSmall>
          <FeatureTitle>Loja 100%</FeatureTitle>
          <FeatureMainText>Segura</FeatureMainText>
        </FeatureCardSmall>
      </FeaturesGrid>

      {/* Features Carousel - Mobile/Tablet */}
      <FeaturesCarousel>
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 2.5, spaceBetween: 20 },
          }}
        >
          <SwiperSlide>
            <FeatureCard>
              <FeatureTitle>Atendimento humanizado</FeatureTitle>
              <FeatureMainText>Converse com a gente!</FeatureMainText>
            </FeatureCard>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureCard>
              <FeatureTitle>Devolução grátis</FeatureTitle>
              <FeatureMainText>Compra garantida!</FeatureMainText>
            </FeatureCard>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureCard>
              <FeatureTitle>Frete grátis</FeatureTitle>
              <FeatureMainText>Sul e sudeste</FeatureMainText>
            </FeatureCard>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureCard>
              <FeatureTitle>Parcele em até</FeatureTitle>
              <FeatureMainText>10x sem juros</FeatureMainText>
            </FeatureCard>
          </SwiperSlide>
          <SwiperSlide>
            <FeatureCard>
              <FeatureTitle>Loja 100%</FeatureTitle>
              <FeatureMainText>Segura</FeatureMainText>
            </FeatureCard>
          </SwiperSlide>
        </Swiper>
      </FeaturesCarousel>
    </LoginBack>
  );
};

export default Login;

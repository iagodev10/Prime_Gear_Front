import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from 'axios';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import EmailSignUp from "../../components/EmailSignUp";

import {
  LoginBack,
  LoginBox,
  Title,
  Form,
  InputGroup,
  LoginLogin,
  Input,
  Label,
  ForgotPassword,
  SubmitButton,
  SignUpLink,
  FeaturesGrid,
  FeaturesCarousel,
  FeatureCardLarge,
  FeatureCardSmall,
  FeatureCard,
  FeatureTitle,
  FeatureMainText,
  FlipWrapper,
  FlipCard,
  FaceFront,
  FaceBack,
  Row,
  Select,
  CepRow,
  CepInput,
  CepButton,
} from "./style";

const LoginPage = () => {

  const navigate=useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flipped, setFlipped] = useState(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { login } = useAuth()


  const [nome, setNome] = useState("");
  const [emailCreate, setEmailCreate] = useState("");
  const [data_nascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [senhaCadastro,setSenhaCadastro]=useState()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await login(email, password)
      
      console.log('Dados retornados:', data); 
    

      if (data.user.tipo === 'Administrador') {
        navigate('/admin')
      } else {
        navigate('/user')
      }

    } catch (error) {
   
      console.error('Erro completo:', error); 
      
      let errorMessage = 'Erro desconhecido';
      
      if (error.response) {
        errorMessage = error.response.data?.message || `Erro ${error.response.status}`;
      } else if (error.request) {
        errorMessage = 'Sem resposta do servidor. Verifique sua conexão.';
      } else {
        errorMessage = error.message || 'Erro ao processar requisição';
      }
      
      alert(`Erro: ${errorMessage}`);
    }
};

  const handleRegister = async (event) => {
    event.preventDefault();

    const payload = {
        nome_user: nome,
        email_user: emailCreate,
        senha_user: senhaCadastro,
        data_nascimento_user: data_nascimento,
        telefone_user: telefone,
        genero_user: genero === 'masculino' ? 'M' : genero === 'feminino' ? 'F' : genero,
        endereco_user: endereco,
        cpf_user: cpf.replace(/\D/g, ''),
        login_user: emailCreate,
       
    };

    try {
     
        const response = await axios.post(
            'http://localhost:8080/criar-user-cliente', 
            payload
        );
    
        console.log('Resposta do Cadastro:', response.data);
        alert('Cadastro realizado com sucesso! Faça o login para continuar.');
        setFlipped(false);

    } catch (error) {
        const errorMessage = error.response?.data?.message || 'Erro desconhecido ao cadastrar.';
        
        console.error('Erro no Cadastro:', errorMessage);
        
        if (error.response && error.response.status === 409) {
            alert(`Falha no cadastro: Usuário ou e-mail já cadastrado.`);
        } else {
            alert(`Falha no cadastro: ${errorMessage}`);
        }
    }
};

  const handleBuscarCep = async () => {
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const data = await response.json();
        if (!data.erro) {
          const enderecoCompleto = `${data.logradouro || ''}, ${data.bairro || ''}, ${data.localidade || ''} - ${data.uf || ''}`.replace(/^,\s*|,\s*$/g, '').replace(/,\s*,/g, ',');
          setEndereco(enderecoCompleto);
        } else {
          alert("CEP não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        alert("Erro ao buscar CEP");
      }
    } else {
      alert("CEP deve ter 8 dígitos");
    }
  };

  useEffect(() => {
    const measure = () => {
      const frontEl = frontRef.current;
      const backEl = backRef.current;
      if (frontEl && backEl) {
     
        const frontHeight = frontEl.offsetHeight;
        const backHeight = backEl.offsetHeight;
        const maxHeight = Math.max(frontHeight, backHeight);
        setCardHeight(maxHeight);
      }
    };
    
 
    const timeoutId = setTimeout(measure, 100);
    measure();
    
    const onResize = () => {
      clearTimeout(timeoutId);
      setTimeout(measure, 100);
    };
    
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timeoutId);
    };
  }, [
    flipped,
    email,
    password,
    nome,
    data_nascimento,
    telefone,
    genero,
    endereco,
    cpf,
    cep,
    emailCreate
  ]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <LoginBack>
      <LoginLogin>
        <FlipWrapper>
          <FlipCard $flipped={flipped} style={{ height: cardHeight || "auto" }}>
            <FaceFront ref={frontRef} $visible={!flipped}>
              <LoginBox>
                <Title>Login</Title>
                <Form onSubmit={handleSubmit}>
                  <InputGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="john.smith@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label>Senha</Label>
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <ForgotPassword href="#">Esqueceu sua Senha?</ForgotPassword>

                  <SubmitButton type="submit">Entrar</SubmitButton>
                </Form>

                <SignUpLink>
                  Novo por aqui?{" "}
                  <span onClick={() => setFlipped(true)}>Crie sua conta</span>
                </SignUpLink>
              </LoginBox>
            </FaceFront>

            <FaceBack ref={backRef} $visible={flipped}>
              <LoginBox>
                <Title>Crie sua conta</Title>
                <Form onSubmit={handleRegister}>
                  <Row>
                    <InputGroup>
                      <Label>Nome</Label>
                      <Input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                      />
                    </InputGroup>
                    <InputGroup>
                      <Label>Data de Nascimento</Label>
                      <Input
                        type="date"
                        value={data_nascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Row>

                  <Row>
                    <InputGroup>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        value={emailCreate}
                        onChange={(e) => setEmailCreate(e.target.value)}
                        required
                      />
                    </InputGroup>
                    <InputGroup>
                      <Label>Telefone</Label>
                      <Input
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Row>

                  <Row>
                    <InputGroup>
                      <Label>Gênero</Label>
                      <Select
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                      </Select>
                    </InputGroup>
                    <InputGroup>
                      <Label>CPF</Label>
                      <Input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Row>

                  <CepRow>
                    <InputGroup style={{ flex: 1 }}>
                      <Label>CEP</Label>
                      <CepInput
                        type="text"
                        placeholder="00000-000"
                        value={cep.length > 0 ? (cep.length <= 5 ? cep : cep.replace(/(\d{5})(\d{0,3})/, '$1-$2')) : ''}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 8) {
                            setCep(value);
                          }
                        }}
                        required
                      />
                    </InputGroup>
                    <CepButton type="button" onClick={handleBuscarCep}>
                      Buscar
                    </CepButton>
                  </CepRow>

                  <InputGroup>
                    <Label>Endereço</Label>
                    <Input
                      type="text"
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>Senha</Label>
                    <Input
                      type="text"
                      value={senhaCadastro}
                      onChange={(e) => setSenhaCadastro(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <SubmitButton type="submit">Cadastrar</SubmitButton>
                </Form>

                <SignUpLink>
                  Já tem conta?{" "}
                  <span onClick={() => setFlipped(false)}>Voltar ao login</span>
                </SignUpLink>
              </LoginBox>
            </FaceBack>
          </FlipCard>
        </FlipWrapper>
      </LoginLogin>

      {isMobile ? (
        <FeaturesCarousel>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <FeatureCard>
                <FeatureTitle>Entrega rápida com DHL</FeatureTitle>
                <FeatureMainText>Entrega Expressa</FeatureMainText>
              </FeatureCard>
            </SwiperSlide>
            <SwiperSlide>
              <FeatureCard>
                <FeatureTitle>
                  Produtos de informática com garantia para sua tranquilidade
                </FeatureTitle>
                <FeatureMainText>Garantia de Satisfação</FeatureMainText>
              </FeatureCard>
            </SwiperSlide>
            <SwiperSlide>
              <FeatureCard>
                <FeatureTitle>Entre em Contato para Suporte</FeatureTitle>
                <FeatureMainText>Atendimento ao Cliente</FeatureMainText>
              </FeatureCard>
            </SwiperSlide>
            <SwiperSlide>
              <FeatureCard>
                <FeatureTitle>Produtos com preços acessíveis</FeatureTitle>
                <FeatureMainText>Preços Competitivos</FeatureMainText>
              </FeatureCard>
            </SwiperSlide>
            <SwiperSlide>
              <FeatureCard>
                <FeatureTitle>Produtos tecnológicos de qualidade</FeatureTitle>
                <FeatureMainText>Alta Qualidade</FeatureMainText>
              </FeatureCard>
            </SwiperSlide>
          </Swiper>
        </FeaturesCarousel>
      ) : (
        <FeaturesGrid>
          {/* Linha 1 */}
          <FeatureCardLarge>
            <FeatureTitle>Entrega rápida com DHL</FeatureTitle>
            <FeatureMainText>Entrega Expressa</FeatureMainText>
          </FeatureCardLarge>
          <FeatureCardLarge>
            <FeatureTitle>
              Produtos de informática com garantia para sua tranquilidade
            </FeatureTitle>
            <FeatureMainText>Garantia de Satisfação</FeatureMainText>
          </FeatureCardLarge>

          {/* Linha 2 */}
          <FeatureCardSmall>
            <FeatureTitle>Entre em Contato para Suporte</FeatureTitle>
            <FeatureMainText>Atendimento ao Cliente</FeatureMainText>
          </FeatureCardSmall>
          <FeatureCardSmall>
            <FeatureTitle>Produtos com preços acessíveis</FeatureTitle>
            <FeatureMainText>Preços Competitivos</FeatureMainText>
          </FeatureCardSmall>
          <FeatureCardSmall>
            <FeatureTitle>Produtos tecnológicos de qualidade</FeatureTitle>
            <FeatureMainText>Alta Qualidade</FeatureMainText>
          </FeatureCardSmall>
        </FeaturesGrid>
      )}

      <EmailSignUp />
    </LoginBack>
  );
};

export default LoginPage;

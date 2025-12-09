import React, { useState } from "react";
import { PageContainer, Card, Logo, Title, Form, LabelRow, Required, Input, Submit, HelpLink, ErrorMessage } from "./style";
import { validators } from "../../utils/formValidation";
import LogoDark from "../../assets/images/logodark.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    const next = { ...errors };
    if (field === "email") {
      if (!validators.email(value)) next.email = "E-mail inválido"; else delete next.email;
    }
    if (field === "senha") {
      if (!value || value.length < 6) next.senha = "Senha deve ter ao menos 6 caracteres"; else delete next.senha;
    }
    setErrors(next);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!validators.email(email)) next.email = "E-mail inválido";
    if (!senha || senha.length < 6) next.senha = "Senha deve ter ao menos 6 caracteres";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // TODO: integrar com fluxo real de autenticação admin
      alert("Login válido");
    }
  };

  return (
    <PageContainer>
      <Card>
        <Logo src={LogoDark} alt="PrimeGear" />
        <Title>Login Administrador</Title>

        <Form onSubmit={handleSubmit}>
          <div>
            <LabelRow>
              <span>Email</span>
              <Required>*</Required>
            </LabelRow>
            <Input type="email" placeholder="jonh.smith@exemplo.com" value={email} onChange={(e)=>setEmail(e.target.value)} onBlur={()=>validateField('email', email)} $error={!!errors.email} />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </div>

          <div>
            <LabelRow>
              <span>Senha</span>
              <Required>*</Required>
            </LabelRow>
            <Input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e)=>setSenha(e.target.value)} onBlur={()=>validateField('senha', senha)} $error={!!errors.senha} />
            {errors.senha && <ErrorMessage>{errors.senha}</ErrorMessage>}
          </div>

          <Submit type="submit">Entrar</Submit>
        </Form>

        <HelpLink>Esqueceu sua Senha?</HelpLink>
      </Card>
    </PageContainer>
  );
};

export default AdminLogin;

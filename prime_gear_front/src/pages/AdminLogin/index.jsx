import React, { useState } from "react";
import { PageContainer, Card, Logo, Title, Form, LabelRow, Required, Input, Submit, HelpLink } from "./style";
import LogoDark from "../../assets/images/logodark.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <Input type="email" placeholder="jonh.smith@exemplo.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div>
            <LabelRow>
              <span>Senha</span>
              <Required>*</Required>
            </LabelRow>
            <Input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e)=>setSenha(e.target.value)} />
          </div>

          <Submit type="submit">Entrar</Submit>
        </Form>

        <HelpLink>Esqueceu sua Senha?</HelpLink>
      </Card>
    </PageContainer>
  );
};

export default AdminLogin;

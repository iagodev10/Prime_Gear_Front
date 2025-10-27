import React, { useState } from "react";
import styled from "styled-components";

import EmailSignUp from '../../components/EmailSignUp'

import {
    LoginBack, LoginBox, Title, Form, InputGroup,LoginLogin,
    Input, Label, ForgotPassword, SubmitButton, SignUpLink,
    FeaturesGrid, FeatureCardLarge, FeatureCardSmall, FeatureTitle, FeatureMainText
} from './style'

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o recarregamento da página
        console.log("Dados do Login:", { email, password });
        // Aqui você adicionaria a lógica de login (ex: API, Firebase, etc.)
    };

    return (
        <LoginBack>
            <LoginLogin>
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
                        />
                    </InputGroup>

                    <InputGroup>
                        <Label>Senha</Label>
                        <Input
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChnge={(e) => setPassword(e.target.value)} required
                        />
                    </InputGroup>

                    <ForgotPassword href="#">
                        Esqueceu sua Senha?
                    </ForgotPassword>

                    <SubmitButton type="submit">
                        Entrar
                    </SubmitButton>

                </Form>

                <SignUpLink>
                    Novo por aqui? <span>Crie sua conta</span>
                </SignUpLink>

            </LoginBox>
            </LoginLogin>

            <FeaturesGrid>
                {/* Linha 1 */}
                <FeatureCardLarge>
                    <FeatureTitle>Entrega rápida com DHL</FeatureTitle>
                    <FeatureMainText>Entrega Expressa</FeatureMainText>
                </FeatureCardLarge>
                <FeatureCardLarge>
                    <FeatureTitle>Produtos de informática com garantia para sua tranquilidade</FeatureTitle>
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

            <EmailSignUp />
        </LoginBack>
    
    )
}

export default LoginPage;
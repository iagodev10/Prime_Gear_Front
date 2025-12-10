import React from "react";
import styled from "styled-components";

import Wallpaper from "../../assets/images/wallpaper.png";

import {Container, Content, Form} from './style';
import { useNavigate } from "react-router-dom";

const EmailSignUp = () => {
    const navigate=useNavigate()
    return (
        <Container>
            <Content>
                <h2>Cadastre-se e ganhe 10% de desconto</h2>
                <p>
                    Cadastre-se para acesso antecipado às vendas, novidades,
                    promoções e muito mais
                </p>
                <Form>
                    <input type="email" placeholder="Seu e-mail" />
                    <button onClick={()=>navigate('/login')}>Inscrever-se</button>
                </Form>
            </Content>
        </Container>
    )
};

export default EmailSignUp;
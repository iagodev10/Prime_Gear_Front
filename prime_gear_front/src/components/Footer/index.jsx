import React from "react";
import styled from "styled-components";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Inter from "../../assets/images/pay/inter.svg";
import Elo from "../../assets/images/pay/elo.svg";
import Itau from "../../assets/images/pay/itau.svg";
import MasterCard from "../../assets/images/pay/master.svg";
import Mercado from "../../assets/images/pay/mercado.svg";
import PicPay from "../../assets/images/pay/picpay.svg";
import Pix from "../../assets/images/pay/pix.svg";
import Visa from "../../assets/images/pay/visa.svg";

import {
    FooterContainer,
    Content,
    Top,
    Group,
    LeftGroup,
    Link,
    Social,
    Title,
    Icons,
    SocialIcon,
    Divider,
    Payment,
    PayIcons,
    PayIcon,
    Copyright
} from "./style";

const Footer = () => {
    return (
        <FooterContainer>
            <Content>
                <Top>
                    {/* Coluna esquerda com "Sobre" + "Atendimento" */}
                    <LeftGroup>
                        <Group>
                            <Title>Sobre a PrimeGear</Title>
                            <Link href="#">Nossas Lojas</Link>
                            <Link href="#">Institucional</Link>
                        </Group>

                        <Group>
                            <Title>Atendimento PrimeGear</Title>
                            <Link href="#">Fale Conosco</Link>
                            <Link href="#">Primeira Compra</Link>
                        </Group>
                    </LeftGroup>

                    {/* Colunas da direita */}
                    <Group>
                        <Title>Compre Agora</Title>
                        <Link href="#">Notebooks</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Monitores</Link>
                        <Link href="#">Consoles</Link>
                        <Link href="#">Teclados</Link>
                        <Link href="#">Todos</Link>
                    </Group>

                    <Group>
                        <Title>Conta PrimeGear</Title>
                        <Link href="#">Gerencie sua conta PrimeGear</Link>
                    </Group>

                    <Social>
                        <Title>PrimeGear nas Redes Sociais</Title>
                        <Icons>
                            <SocialIcon href="#" target="_blank"><FaInstagram /></SocialIcon>
                            <SocialIcon href="#" target="_blank"><FaTwitter /></SocialIcon>
                            <SocialIcon href="#" target="_blank"><FaFacebook /></SocialIcon>
                        </Icons>
                    </Social>
                </Top>

                <Divider />

                <Payment>
                    <Title>Formas de Pagamento</Title>
                    <PayIcons>
                        <PayIcon src={Inter} />
                        <PayIcon src={Elo} />
                        <PayIcon src={Itau} />
                        <PayIcon src={MasterCard} />
                        <PayIcon src={Mercado} />
                        <PayIcon src={PicPay} />
                        <PayIcon src={Visa} />
                        <PayIcon src={Pix} />
                    </PayIcons>
                </Payment>

                <Divider />

                <Copyright>© PrimeGear. Todos os direitos Reservados.</Copyright>
            </Content>
        </FooterContainer>
    );
};

export default Footer;

import React from "react";

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
    Social,
    Title,
    Icons,
    Divider,
    Payment,
    PayIcons,
    PayIcon,
    Copyright,
    FooterNavLink,
    SocialLink
} from "./style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate=useNavigate()
    const handleCategoryClick = (e, categoryIdentifier) => {
        e.preventDefault();
    
        console.log('🔗 Header: Navegando para loja com categoria:', categoryIdentifier);
    
        navigate('/loja', {
          state: {
            categoryIdentifier: categoryIdentifier
          },
          replace: false
        });
    
    
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <FooterContainer>
            <Content>
                <Top>
                    {/* Coluna esquerda com "Sobre" + "Atendimento" */}
                    <LeftGroup>
                        <Group>
                            <Title>Sobre a PrimeGear</Title>
                            <FooterNavLink as={Link} to="/loja">Loja</FooterNavLink>
                            <FooterNavLink as={Link} to="/institucional">Institucional</FooterNavLink>
                        </Group>

                        <Group>
                            <Title>Atendimento PrimeGear</Title>
                            <FooterNavLink as={Link} to="/fale-conosco">Fale Conosco</FooterNavLink>
                            <FooterNavLink as={Link} to="/primeira-compra">Primeira Compra</FooterNavLink>
                        </Group>
                    </LeftGroup>

                    {/* Colunas da direita */}
                    <Group>
                        <Title>Compre Agora</Title>
                        <FooterNavLink as={Link} to="/loja" onClick={(e)=>handleCategoryClick(e,"laptop")}>Laptops</FooterNavLink>
                        <FooterNavLink as={Link} to="/loja" onClick={(e)=>handleCategoryClick(e,"desktop")}>Desktops</FooterNavLink>
                        <FooterNavLink as={Link} to="/loja" onClick={(e)=>handleCategoryClick(e,"console")}>Consoles</FooterNavLink>
                        <FooterNavLink as={Link} to="/loja" onClick={(e)=>handleCategoryClick(e,"perifericos")}>Periféricos</FooterNavLink>
                        <FooterNavLink as={Link} to="/loja">Todos</FooterNavLink>
                    </Group>

                    <Group>
                        <Title>Conta PrimeGear</Title>
                        <FooterNavLink as={Link} to="/login">Gerencie sua conta PrimeGear</FooterNavLink>
                    </Group>

                    <Social>
                        <Title>PrimeGear nas Redes Sociais</Title>
                        <Icons>
                            <SocialLink href="/" target="_blank"><FaInstagram /></SocialLink>
                            <SocialLink href="/" target="_blank"><FaTwitter /></SocialLink>
                            <SocialLink href="/" target="_blank"><FaFacebook /></SocialLink>
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

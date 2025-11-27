import React from "react";
import { FiX, FiClock, FiHeart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import foneJBL from "../../assets/images/foneJBL.png";

import {
  ModalOverlay,
  Container,
  Header,
  Title,
  ViewCartButton,
  CloseButton,
  CartContent,
  CartItemsList,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  MoreItemsText,
  ProfileSection,
  ProfileTitle,
  ProfileLinks,
  ProfileLink,
  ProfileLinkIcon,
  ProfileLinkText,
} from "./style";

// Mock de produtos do carrinho (total de 10 itens)
const allCartItems = [
  {
    id: 1,
    name: "Headphone Bluetooth JBL Tune 520BT com Microfone - Preto",
    image: foneJBL,
  },
  {
    id: 2,
    name: "Mouse Gamer Logitech G502 HERO com RGB LIGHTSYNC, Ajustes de Peso, 11 Botões Programáveis e Sensor HERO 25K",
    image: foneJBL,
  },
  {
    id: 3,
    name: "Teclado Mecânico Gamer Redragon Lakshmi, Rainbow Brown, Switch, ABNT2, Preto - K606R",
    image: foneJBL,
  },
  {
    id: 4,
    name: "Produto 4",
    image: foneJBL,
  },
  {
    id: 5,
    name: "Produto 5",
    image: foneJBL,
  },
  {
    id: 6,
    name: "Produto 6",
    image: foneJBL,
  },
  {
    id: 7,
    name: "Produto 7",
    image: foneJBL,
  },
  {
    id: 8,
    name: "Produto 8",
    image: foneJBL,
  },
  {
    id: 9,
    name: "Produto 9",
    image: foneJBL,
  },
  {
    id: 10,
    name: "Produto 10",
    image: foneJBL,
  },
];

const CartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Mostrar apenas os 3 primeiros produtos
  const displayedItems = allCartItems.slice(0, 3);
  const remainingItems = allCartItems.length - 3; 

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick} />
      <Container>
        <Header>
          <Title>Carrinho</Title>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <ViewCartButton as={Link} to="/checkout" onClick={onClose}>
              Ver carrinho
            </ViewCartButton>
            <CloseButton onClick={onClose}>
              <FiX size={20} />
            </CloseButton>
          </div>
        </Header>

        <CartContent>
          <CartItemsList>
            {displayedItems.map((item) => (
              <CartItem key={item.id}>
                <ItemImage>
                  <img src={item.image} alt={item.name} />
                </ItemImage>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                </ItemInfo>
              </CartItem>
            ))}
          </CartItemsList>

          {remainingItems > 0 && (
            <MoreItemsText>
              Mais {remainingItems} item(ns) no seu carrinho
            </MoreItemsText>
          )}

          <ProfileSection>
            <ProfileTitle>Meu perfil</ProfileTitle>
            <ProfileLinks>
              <ProfileLink as={Link} to="/user" onClick={onClose}>
                <ProfileLinkIcon>
                  <FiClock size={20} />
                </ProfileLinkIcon>
                <ProfileLinkText>Pedidos</ProfileLinkText>
              </ProfileLink>
              <ProfileLink as={Link} to="/user" onClick={onClose}>
                <ProfileLinkIcon>
                  <FiHeart size={20} />
                </ProfileLinkIcon>
                <ProfileLinkText>Itens salvos</ProfileLinkText>
              </ProfileLink>
              <ProfileLink as={Link} to="/user" onClick={onClose}>
                <ProfileLinkIcon>
                  <FiUser size={20} />
                </ProfileLinkIcon>
                <ProfileLinkText>Conta</ProfileLinkText>
              </ProfileLink>
            </ProfileLinks>
          </ProfileSection>
        </CartContent>
      </Container>
    </>
  );
};

export default CartModal;


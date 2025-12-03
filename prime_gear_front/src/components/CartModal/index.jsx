import React, { useState, useEffect } from "react";
import { FiX, FiClock, FiHeart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

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
import { useAuth } from "../../contexts/AuthContext";

const CartModal = ({ isOpen, onClose }) => {

  const { user } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetchCartItems();
    }
  }, [isOpen]);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`http://localhost:8080/get-produtos-cart/${user.cod_user}`, {
        withCredentials: true
      });
      
      console.log("Produtos recebidos:", response.data);
      setCartItems(response.data || []);
    } catch (err) {
      console.error("Erro ao buscar itens do carrinho:", err);
      setError("Não foi possível carregar os itens do carrinho");
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  const displayedItems = cartItems.slice(0, 3);
  const remainingItems = cartItems.length > 3 ? cartItems.length - 3 : 0;

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
          {loading ? (
            <div style={{ padding: "20px", textAlign: "center" }}>
              Carregando...
            </div>
          ) : error ? (
            <div style={{ padding: "20px", textAlign: "center", color: "#e74c3c" }}>
              {error}
            </div>
          ) : cartItems.length === 0 ? (
            <div style={{ padding: "20px", textAlign: "center" }}>
              Seu carrinho está vazio
            </div>
          ) : (
            <>
              <CartItemsList>
                {displayedItems.map((item) => (
                  <CartItem key={item.id}>
                    <ItemImage>
                      <img 
                        src={item.imagem} 
                        alt={item.nome}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/80x80?text=Sem+Imagem';
                        }}
                      />
                    </ItemImage>
                    <ItemInfo>
                      <ItemName>{item.nome}</ItemName>
                    </ItemInfo>
                  </CartItem>
                ))}
              </CartItemsList>

              {remainingItems > 0 && (
                <MoreItemsText>
                  Mais {remainingItems} item(ns) no seu carrinho
                </MoreItemsText>
              )}
            </>
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
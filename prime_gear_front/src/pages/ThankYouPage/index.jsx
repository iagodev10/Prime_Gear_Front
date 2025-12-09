import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  PageContainer,
  ContentWrapper,
  SuccessSection,
  SuccessIcon,
  SuccessTitle,
  ThankYouMessage,
  OrderNumberSection,
  OrderNumber,
  EmailMessage,
  ActionButtons,
  PrimaryButton,
  SecondaryButton,
  OrderSummarySection,
  SummaryTitle,
  SummaryGrid,
  OrderItems,
  OrderItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemQuantity,
  ItemPrice,
  SummaryDetails,
  DetailCard,
  DetailTitle,
  DetailIcon,
  TotalSection,
  TotalRow,
  TotalLabel,
  TotalValue,
  DeliveryInfo,
  PaymentInfo
} from "./style";
import { FiCheck, FiPackage, FiMapPin, FiCreditCard, FiTruck } from "react-icons/fi";

import Notebook from "../../assets/images/cat-notebook.png";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const orderState = location.state?.order;
  console.log(orderState);
  console.log(orderState);
  const orderData = orderState || {
    cod_pedido: 1,
    itens: [
      {
        nome: "NVIDIA RTX 4090 24GB",
        nome_produto: "NVIDIA RTX 4090 24GB",
        imagem: Notebook,
        imagem_produto: Notebook,
        quantidade: 1,
        preco: 12999.99,
        preco_unitario: 12999.99
      },
      {
        nome: "AMD Ryzen 9 7950X",
        nome_produto: "AMD Ryzen 9 7950X",
        imagem: Notebook,
        imagem_produto: Notebook,
        quantidade: 1,
        preco: 3499.99,
        preco_unitario: 3499.99
      },
      {
        nome: "Corsair DDR5 32GB",
        nome_produto: "Corsair DDR5 32GB",
        imagem: Notebook,
        imagem_produto: Notebook,
        quantidade: 2,
        preco: 1799.98,
        preco_unitario: 899.99
      }
    ],
    subtotal: 18299.96,
    frete: 49.90,
    total: 18349.86,
    endereco_entrega: "Rua Exemplo, 123, Bairro Centro, São Paulo - SP, 01234-567",
    metodo_pagamento: "credit",
    cartao_final: "1234",
    prazo_entrega: "5 a 7 dias úteis",
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };

  const formatOrderNumber = (orderId) => {
    const year = new Date().getFullYear();
    const paddedId = String(orderId).padStart(4, "0");
    return `#PG-${year}-${paddedId}`;
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <SuccessSection>
          <SuccessIcon>
            <FiCheck />
          </SuccessIcon>
          <SuccessTitle>Pedido confirmado com sucesso!</SuccessTitle>
          <ThankYouMessage>Obrigado por escolher a Prime Gear</ThankYouMessage>
          
          <OrderNumberSection>
            <FiPackage />
            <span>Número do pedido: <OrderNumber>{formatOrderNumber(orderData.cod_pedido)}</OrderNumber></span>
          </OrderNumberSection>

          <EmailMessage>
            Enviamos a confirmação para seu e-mail cadastrado com os detalhes do pedido.
          </EmailMessage>

          <ActionButtons>
            {/* TIREI PORQUE NAO VAMOS FAZER RASTREAMENTO
               <PrimaryButton onClick={() => navigate(`/user?section=meus-pedidos`)}>
              Rastrear pedido
            </PrimaryButton>
            */
            }
           
            <SecondaryButton onClick={() => navigate("/loja")}>
              Continuar comprando
            </SecondaryButton>
          </ActionButtons>
        </SuccessSection>

        <OrderSummarySection>
          <SummaryTitle>Resumo do pedido</SummaryTitle>
          
          <SummaryGrid>
            <OrderItems>
              <h3>Itens do pedido</h3>
              {orderData.itens.map((item, index) => (
                <OrderItem key={index}>
                  <ItemImage 
                    src={item.imagem || item.imagem_produto} 
                    alt={item.nome || item.nome_produto}
                  />
                  <ItemInfo>
                    <ItemName>{item.nome || item.nome_produto}</ItemName>
                    <ItemQuantity>Quantidade: {item.quantidade}</ItemQuantity>
                    <ItemPrice>{formatCurrency(item.preco || item.preco_unitario)}</ItemPrice>
                  </ItemInfo>
                </OrderItem>
              ))}
            </OrderItems>

            <SummaryDetails>
              <TotalSection>
                <TotalRow>
                  <TotalLabel>Subtotal:</TotalLabel>
                  <TotalValue>{formatCurrency(orderData.subtotal)}</TotalValue>
                </TotalRow>
                <TotalRow>
                  <TotalLabel>Frete:</TotalLabel>
                  <TotalValue>{formatCurrency(orderData.frete)}</TotalValue>
                </TotalRow>
                <TotalRow $highlight>
                  <TotalLabel>Total:</TotalLabel>
                  <TotalValue $highlight>{formatCurrency(orderData.total)}</TotalValue>
                </TotalRow>
              </TotalSection>

              <DetailCard>
                <DetailTitle>
                  <DetailIcon><FiMapPin /></DetailIcon>
                  Endereço de entrega
                </DetailTitle>
                <DeliveryInfo>{orderData.endereco_entrega}</DeliveryInfo>
              </DetailCard>

              <DetailCard>
                <DetailTitle>
                  <DetailIcon><FiCreditCard /></DetailIcon>
                  Método de pagamento
                </DetailTitle>
                <PaymentInfo>
                  {orderData.metodo_pagamento === "credit" && "Cartão de crédito"}
                  {orderData.metodo_pagamento === "debit" && "Cartão de débito"}
                  {orderData.metodo_pagamento === "pix" && "PIX"}
                  {orderData.metodo_pagamento === "boleto" && "Boleto"}
                  {orderData.cartao_final && ` terminado em ****${orderData.cartao_final}`}
                </PaymentInfo>
              </DetailCard>

              <DetailCard>
                <DetailTitle>
                  <DetailIcon><FiTruck /></DetailIcon>
                  Prazo de entrega
                </DetailTitle>
                <DeliveryInfo>{orderData.prazo_entrega}</DeliveryInfo>
              </DetailCard>
            </SummaryDetails>
          </SummaryGrid>
        </OrderSummarySection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ThankYouPage;


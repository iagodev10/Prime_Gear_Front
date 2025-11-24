import React from "react";
import { FiX, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import imagem from "../../assets/images/desktop.png";

import {
  ModalOverlay,
  Container,
  SearchBar,
  Input,
  SearchIconWrap,
  TopLeft,
  TopRight,
  ClearBtn,
  CloseCircle,
  Divider,
  Results,
  MaisPesquisados,
  SectionTitle,
  List,
  Item,
  StyledLink,
  Content,
  Tabs,
  TabItem,
  Mock,
  Card,
  ImageWrap,
  Badge,
  CardTitle,
  PriceBlock,
  PriceMain,
  PriceOld,
  ViewAll,
} from "./style";

const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const mockData = [
    { id: 1, name: "SFSQ4K TV", image: imagem, price: 2800, currency: "BRL" },
    {
      id: 2,
      name: "SFS24+ Phone",
      image: imagem,
      price: 1100,
      oldPrice: 1200,
      currency: "BRL",
      badges: ["New", "Sale"],
    },
    { id: 3, name: "GU9 Tablet", image: imagem, price: 449, currency: "BRL" },
  ];

  const formatPrice = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        <Container>
          <SearchBar>
            <TopLeft>
              <SearchIconWrap>
                <FiSearch size={18} />
              </SearchIconWrap>
              <Input type="text" placeholder="Pesquisar" />
            </TopLeft>

            <TopRight>
              <ClearBtn>Limpar</ClearBtn>
              <CloseCircle onClick={onClose}>
                <FiX />
              </CloseCircle>
            </TopRight>
          </SearchBar>

          <Divider />

          <Results>
            <MaisPesquisados>
              <SectionTitle>Mais pesquisados</SectionTitle>
              <List>
                <Item>
                  <StyledLink to="/laptops">Laptops</StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/desktops">Desktops</StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/perifericos">Periféricos</StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/loja">Consoles</StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/loja">Em Destaque</StyledLink>
                </Item>
              </List>
            </MaisPesquisados>

            <Content>

              <Mock>
                {mockData.map((item) => (
                  <Card key={item.id}>
                    <ImageWrap>
                      <img src={item.image} alt={item.name} />
                      {Array.isArray(item.badges) &&
                        item.badges.includes("New") && (
                          <Badge variant="green">New</Badge>
                        )}
                      {Array.isArray(item.badges) &&
                        item.badges.includes("Sale") && (
                          <Badge style={{ left: 70 }} variant="red">
                            Sale
                          </Badge>
                        )}
                    </ImageWrap>
                    <CardTitle>{item.name}</CardTitle>
                    <PriceBlock>
                      <PriceMain>From {formatPrice(item.price)}</PriceMain>
                      {item.oldPrice && (
                        <PriceOld>{formatPrice(item.oldPrice)}</PriceOld>
                      )}
                    </PriceBlock>
                  </Card>
                ))}
              </Mock>

              <ViewAll>View All Results</ViewAll>
            </Content>
          </Results>
        </Container>
      </ModalOverlay>
    </>
  );
};

export default SearchModal;

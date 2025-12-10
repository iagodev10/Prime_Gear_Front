import React, { useState, useEffect, useRef } from "react";
import { FiX, FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  Mock,
  Card,
  ImageWrap,
  Badge,
  CardContent,
  CardTitle,
  PriceBlock,
  PriceMain,
  ViewAll,
} from "./style";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (searchTerm.trim() === "") {
      setProdutosFiltrados([]);
      return;
    }

    debounceTimer.current = setTimeout(() => {
      buscarProdutos(searchTerm);
    }, 500);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [searchTerm]);


  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
      setProdutosFiltrados([]);
    }
  }, [isOpen]);

  const buscarProdutos = async (termo) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://72.62.10.218:8080/buscar-produtos?termo=${encodeURIComponent(termo)}&limite=6`
      );
      
      if (response.data.success) {
        setProdutosFiltrados(response.data.produtos);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setProdutosFiltrados([]);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    setProdutosFiltrados([]);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleViewAll = () => {
    onClose();
    navigate("/loja");
  };

  const handleProductClick = (produto) => {
    onClose();

    console.log("Produto clicado:", produto);
  };

  const formatPrice = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <Container>
        <SearchBar>
          <TopLeft>
            <SearchIconWrap>
              <FiSearch size={26} />
            </SearchIconWrap>
            <Input
              type="text"
              placeholder="Pesquisar produtos..."
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </TopLeft>

          <TopRight>
            {searchTerm && (
              <ClearBtn onClick={handleClear}>Limpar</ClearBtn>
            )}
            <CloseCircle onClick={onClose}>
              <FiX />
            </CloseCircle>
          </TopRight>
        </SearchBar>

        <Divider />

        <Results>
          {/* Mostrar "Mais pesquisados" apenas quando não há busca */}
          {searchTerm.trim() === "" && (
            <MaisPesquisados>
              <SectionTitle>Mais pesquisados</SectionTitle>
              <List>
                <Item>
                  <StyledLink to="/loja" onClick={onClose}>
                    Laptops
                  </StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/loja" onClick={onClose}>
                    Desktops
                  </StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/loja" onClick={onClose}>
                    Periféricos
                  </StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/loja" onClick={onClose}>
                    Consoles
                  </StyledLink>
                </Item>
                <Item>
                  <StyledLink to="/loja" onClick={onClose}>
                    Em Destaque
                  </StyledLink>
                </Item>
              </List>
            </MaisPesquisados>
          )}

          <Content>
            {loading ? (
              <div style={{ 
                textAlign: "center", 
                padding: "60px 40px", 
                color: "#6b6b71" 
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  border: "3px solid #eef1f7",
                  borderTopColor: "#e4005c",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                  margin: "0 auto 16px"
                }} />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                <p style={{ fontSize: "15px", fontWeight: "500" }}>
                  Buscando produtos...
                </p>
              </div>
            ) : searchTerm.trim() === "" ? (
              <div style={{ 
                textAlign: "center", 
                padding: "60px 40px", 
                color: "#6b6b71" 
              }}>
                <FiSearch size={48} style={{ marginBottom: "16px", opacity: 0.3 }} />
                <p style={{ fontSize: "16px", fontWeight: "500", color: "#1b1b1f" }}>
                  Digite para pesquisar produtos
                </p>
                <p style={{ fontSize: "14px", marginTop: "8px" }}>
                  Encontre laptops, desktops, periféricos e mais
                </p>
              </div>
            ) : produtosFiltrados.length === 0 ? (
              <div style={{ 
                textAlign: "center", 
                padding: "60px 40px", 
                color: "#6b6b71" 
              }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#f7f7fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px"
                }}>
                  <FiSearch size={28} style={{ opacity: 0.4 }} />
                </div>
                <p style={{ fontSize: "16px", fontWeight: "500", color: "#1b1b1f" }}>
                  Nenhum produto encontrado
                </p>
                <p style={{ fontSize: "14px", marginTop: "8px" }}>
                  Tente outros termos de pesquisa para "{searchTerm}"
                </p>
              </div>
            ) : (
              <>
                <SectionTitle style={{ marginBottom: "24px", fontSize: "17px" }}>
                  {produtosFiltrados.length} resultado(s) para "{searchTerm}"
                </SectionTitle>
                <Mock>
                  {produtosFiltrados.map((produto) => (
                    <Card
                      key={produto.cod_produto}
                      onClick={() => handleProductClick(produto)}
                    >
                      <ImageWrap>
                        <img
                          src={produto.url_img_prod || "/placeholder.png"}
                          alt={produto.nome_prod}
                          onError={(e) => {
                            e.target.src = "/placeholder.png";
                          }}
                        />
                        {produto.qtd_estoque_prod > 0 ? (
                          <Badge variant="green">Em estoque</Badge>
                        ) : (
                          <Badge variant="red">Esgotado</Badge>
                        )}
                      </ImageWrap>
                      <CardContent>
                        <CardTitle>{produto.nome_prod}</CardTitle>
                        <PriceBlock>
                          <PriceMain>{formatPrice(produto.preco_prod)}</PriceMain>
                        </PriceBlock>
                      </CardContent>
                    </Card>
                  ))}
                </Mock>

                {produtosFiltrados.length >= 6 && (
                  <ViewAll onClick={handleViewAll}>
                    Ver Todos os Resultados
                  </ViewAll>
                )}
              </>
            )}
          </Content>
        </Results>
      </Container>
    </ModalOverlay>
  );
};

export default SearchModal
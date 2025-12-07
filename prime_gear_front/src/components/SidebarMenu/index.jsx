import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Backdrop,
  Sidebar,
  SideHeader,
  Close,
  SideBody,
  NavList,
  NavItem,
  BestSellers,
  BackButton,
  CategoryTitle,
  CategoryContent,
  CategoryHeroCard,
  CategoryHeroLink,
  CategoryProductsList,
  CategoryProductCard,
} from "./style";

import { FiX, FiChevronRight, FiArrowLeft } from "react-icons/fi";

import BestSeller from "../../assets/images/bestseller.png";
import LaptopImg from "../../assets/images/laptop.png";
import DesktopImg from "../../assets/images/desktop.png";
import ConsolesImg from "../../assets/images/consoles.png";
import HeadsetImg from "../../assets/images/headset.jpeg";


const categoriaMap = {
  laptops: "Laptops",
  desktops: "Desktops",
  consoles: "Consoles",
  perifericos: "Periféricos"
};

const SidebarMenu = ({ isOpen, onClose, onOpenCategory, openCategory }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleClose = useCallback(() => {
    onOpenCategory?.(null);
    onClose?.();
  }, [onOpenCategory, onClose]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handler);
    }
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, handleClose]);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);


  useEffect(() => {
    if (!isMobile || !openCategory || !isOpen) {
      setProdutos([]);
      return;
    }

    const buscarProdutos = async () => {
      console.log('ativou');
      try {
        setLoading(true);
        
        const categoriaNome = categoriaMap[openCategory];
        
        if (!categoriaNome) {
          console.error("Categoria não mapeada:", openCategory);
          return;
        }

        console.log('Buscando produtos da categoria:', categoriaNome);

        const response = await axios.post(
          'http://localhost:8080/produtos-filtrados',
          {
            categorias: [categoriaNome],
            marcas: [],
            avaliacoes: [],
            precoMin: undefined,
            precoMax: undefined
          }
        );

        if (response.data.success) {
          console.log('Produtos encontrados:', response.data.produtos.length);
         
          setProdutos(response.data.produtos.slice(0, 5));
        }
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setProdutos([]);
      } finally {
        setLoading(false);
      }
    };

    buscarProdutos();
  }, [isMobile, openCategory, isOpen]);

  const handleBack = () => {
    onOpenCategory?.(null);
    setProdutos([]);
  };

  const hero = {
    laptops: LaptopImg,
    desktops: DesktopImg,
    consoles: ConsolesImg,
    perifericos: HeadsetImg
  };

  const categoryNames = {
    laptops: 'Laptops',
    desktops: 'Desktops',
    consoles: 'Consoles',
    perifericos: 'Periféricos'
  };


  if (isMobile && openCategory && isOpen) {
    return (
      <>
        <Backdrop $isOpen={isOpen} onClick={handleClose} />
        <Sidebar $isOpen={isOpen}>
          <SideHeader>
            <BackButton onClick={handleBack}>
              <FiArrowLeft size={20} />
            </BackButton>
            <CategoryTitle>{categoryNames[openCategory] || 'Categoria'}</CategoryTitle>
            <Close onClick={handleClose}>
              <FiX size={24} />
            </Close>
          </SideHeader>

          <CategoryContent>
            {hero[openCategory] && (
              <CategoryHeroCard>
                <img src={hero[openCategory]} alt="Ver tudo" />
                <CategoryHeroLink 
                  to="/loja" 
                  state={{ categoryIdentifier: openCategory }}
                  onClick={handleClose}
                >
                  Ver todos os {categoryNames[openCategory]}
                </CategoryHeroLink>
              </CategoryHeroCard>
            )}

            <CategoryProductsList>
              {loading ? (
                <div style={{ 
                  padding: '2rem', 
                  textAlign: 'center',
                  color: '#666',
                  width: '100%'
                }}>
                  Carregando produtos...
                </div>
              ) : produtos.length === 0 ? (
                <div style={{ 
                  padding: '2rem', 
                  textAlign: 'center',
                  color: '#666',
                  width: '100%'
                }}>
                  Nenhum produto encontrado
                </div>
              ) : (
                produtos.map((produto) => (
                  <CategoryProductCard 
                    key={produto.cod_produto} 
                    to={`/produto/${produto.cod_produto}`} 
                    onClick={handleClose}
                  >
                    <img 
                      src={produto.url_img_prod || LaptopImg} 
                      alt={produto.nome_prod || 'Produto'}
                      onError={(e) => {
                        e.target.src = LaptopImg;
                      }}
                    />
                    <div className="info">
                      <div className="title">
                        {produto.nome_prod || 'Produto'}
                      </div>
                      <div className="price">
                        R$ {produto.preco_prod?.toFixed(2).replace('.', ',') || '0,00'}
                      </div>
                      {produto.avaliacao_prod && (
                        <div className="rating" style={{ 
                          fontSize: '0.85rem', 
                          color: '#fbbf24',
                          marginTop: '4px'
                        }}>
                          ⭐ {produto.avaliacao_prod}/5
                        </div>
                      )}
                    </div>
                  </CategoryProductCard>
                ))
              )}
            </CategoryProductsList>
          </CategoryContent>
        </Sidebar>
      </>
    );
  }

  return (
    <>
      <Backdrop $isOpen={isOpen} onClick={handleClose} />

      <Sidebar $isOpen={isOpen}>
        <SideHeader>
          <Close onClick={handleClose}>
            <FiX size={24} />
          </Close>
        </SideHeader>

        <SideBody>
          <NavList>
            <NavItem>
              <Link to="/institucional" onClick={handleClose}>
                Sobre
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/primeira-compra" onClick={handleClose}>
                Primeira Compra
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/fale-conosco" onClick={handleClose}>
                Fale Conosco
              </Link>
            </NavItem>

            <hr />

            <NavItem>
              <Link to="/loja" onClick={handleClose}>
                Categorias
              </Link>
              <FiChevronRight size={20} />
            </NavItem>

            <NavItem>
              <Link to="/termos" onClick={handleClose}>
                Termos
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/privacidade" onClick={handleClose}>
                Política de Privacidade
              </Link>
            </NavItem>

            {isMobile && (
              <>
                <hr />
                
                <NavItem>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenCategory?.("laptops");
                    }}
                  >
                    Laptops
                  </Link>
                  <FiChevronRight size={20} />
                </NavItem>
                <NavItem>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenCategory?.("desktops");
                    }}
                  >
                    Desktops
                  </Link>
                  <FiChevronRight size={20} />
                </NavItem>
                <NavItem>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenCategory?.("consoles");
                    }}
                  >
                    Consoles
                  </Link>
                  <FiChevronRight size={20} />
                </NavItem>
                <NavItem>
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenCategory?.("perifericos");
                    }}
                  >
                    Periféricos
                  </Link>
                  <FiChevronRight size={20} />
                </NavItem>
              </>
            )}
          </NavList>

          <Link
            to="/loja"
            onClick={handleClose}
            style={{ display: "block", textDecoration: "none" }}
          >
            <BestSellers>
              <img src={BestSeller} alt="Bestsellers" />
              <h3>Produtos em Destaque</h3>
            </BestSellers>
          </Link>
        </SideBody>
      </Sidebar>
    </>
  );
};

export default SidebarMenu;
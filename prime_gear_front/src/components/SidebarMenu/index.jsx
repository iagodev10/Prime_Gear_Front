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
import DesktopFundo from "../../assets/images/desktop-fundo.png";
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
  };

  const cards = {
    laptops: [
      { img: LaptopImg, title: 'Lenovo IdeaPad Gaming', price: '1.100,00', old: '1.200,00' },
      { img: UltrabookImg, title: 'MacBook Pro M2', price: '1.800,00' },
      { img: LaptopImg, title: 'Dell Inspiron', price: '900,00', old: '1.000,00' },
      { img: UltrabookImg, title: 'Asus Zenbook', price: '1.300,00' },
      { img: LaptopImg, title: 'HP Pavilion', price: '700,00', old: '850,00' }
    ],
    desktops: [
      { img: DesktopImg, title: 'Desktop Gamer RGB', price: '1.500,00' },
      { img: DesktopImg, title: 'Workstation Pro', price: '2.000,00', old: '2.200,00' },
      { img: DesktopImg, title: 'All-in-One', price: '850,00' },
      { img: DesktopImg, title: 'Mini PC', price: '450,00' },
      { img: DesktopImg, title: 'Servidor doméstico', price: '600,00' }
    ],
    consoles: [
      { img: ConsolesImg, title: 'PlayStation 5', price: '500,00' },
      { img: ConsolesImg, title: 'Xbox Series X', price: '480,00' },
      { img: ConsolesImg, title: 'Nintendo Switch', price: '300,00' },
      { img: ConsolesImg, title: 'Promoções', price: '—' },
      { img: ConsolesImg, title: 'Bundles especiais', price: '—' }
    ],
    perifericos: [
      { img: HeadsetImg, title: 'Headset Gamer', price: '120,00' },
      { img: MouseImg, title: 'Mouse Pro', price: '90,00', old: '110,00' },
      { img: HeadsetImg, title: 'Teclado RGB', price: '150,00' },
      { img: MouseImg, title: 'Mousepad XL', price: '25,00' },
      { img: HeadsetImg, title: 'Microfone USB', price: '80,00' }
    ]
  };

  const hero = {
    laptops: LaptopImg,
    desktops: DesktopImg,
    consoles: ConsolesImg,
    perifericos: HeadsetImg,
  };

  const viewAll = {
    laptops: '/laptops',
    desktops: '/desktops',
    consoles: '/consoles',
    perifericos: '/perifericos'
  };

  const categoryNames = {
    laptops: "Laptops",
    desktops: "Desktops",
    consoles: "Consoles",
    perifericos: "Periféricos",
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
            <CategoryTitle>
              {categoryNames[openCategory] || "Categoria"}
            </CategoryTitle>
            <Close onClick={handleClose}>
              <FiX size={24} />
            </Close>
          </SideHeader>

          <CategoryContent>
            {hero[openCategory] && (
              <CategoryHeroCard>
                <img src={hero[openCategory]} alt="Ver tudo" />
                {viewAll[openCategory] && (
                  <CategoryHeroLink to={viewAll[openCategory]} onClick={handleClose}>
                    Ver tudo
                  </CategoryHeroLink>
                )}
              </CategoryHeroCard>
            )}

            <CategoryProductsList>
              {(cards[openCategory] || []).map((c, i) => (
                <CategoryProductCard key={i} to={viewAll[openCategory] || '#'} onClick={handleClose}>
                  <img src={c.img} alt={c.title || 'Produto'} />
                  <div className="info">
                    <div className="title">{c.title || 'Produto'}</div>
                    <div className="price">R$ {c.price || '0,00'}</div>
                    {c.old && <div className="oldPrice">R$ {c.old}</div>}
                  </div>
                </CategoryProductCard>
              ))}
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
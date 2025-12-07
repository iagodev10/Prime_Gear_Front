import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiX } from "react-icons/fi";

import {
  Container,
  Panel,
  RightGrid,
  HeroCard,
  HeroLink,
  ProductsGrid,
  ProductCard,
  MobileContainer,
  MobileHeader,
  MobileBackButton,
  MobileTitle,
  MobileCloseButton,
  MobileContent,
  MobileHeroCard,
  MobileHeroLink,
  MobileProductsGrid,
  MobileProductCard
} from "./style";

import LaptopImg from "../../assets/images/laptop.png";

import UltrabookImg from "../../assets/images/Macbook.png";
import DesktopImg from "../../assets/images/desktop.png";
import ConsolesImg from "../../assets/images/consoles.png";
import HeadsetImg from "../../assets/images/headset.jpeg";
import MouseImg from "../../assets/images/foneJBL.png";

import DesktopImagem from "../../assets/images/desktop-fundo.png";
import LaptopImagem from "../../assets/images/laptop-fundo.png";
import PerifericoImagem from "../../assets/images/periferico-fundo.png";
import ConsoleImagem from "../../assets/images/console-fundo.png";

const SidebarLaptop = ({ isOpen, category, onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Versão Mobile - não renderizar, deixar o SidebarMenu cuidar disso
  if (isMobile) {
    return null;
  }
  
  const cards = {
    laptops: [
      { img: LaptopImagem, title: 'Lenovo IdeaPad Gaming', price: '1.100,00', old: '1.200,00' },
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
      { img: ConsoleImagem, title: 'PlayStation 5', price: '500,00' },
      { img: ConsoleImagem, title: 'Xbox Series X', price: '480,00' },
      { img: ConsoleImagem, title: 'Nintendo Switch', price: '300,00' },
      { img: ConsoleImagem, title: 'Promoções', price: '—' },
      { img: ConsoleImagem, title: 'Bundles especiais', price: '—' }
    ],

    perifericos: [
      { img: PerifericoImagem, title: 'Headset Gamer', price: '120,00' },
      { img: MouseImg, title: 'Mouse Pro', price: '90,00', old: '110,00' },
      { img: PerifericoImagem, title: 'Teclado RGB', price: '150,00' },
      { img: MouseImg, title: 'Mousepad XL', price: '25,00' },
      { img: PerifericoImagem, title: 'Microfone USB', price: '80,00' }
    ]
  };

  const hero = {
    laptops: LaptopImagem,
    desktops: DesktopImagem,
    consoles: ConsoleImagem,
    perifericos: PerifericoImagem
  };

  const viewAll = {
    laptops: '/laptops',
    desktops: '/desktops',
    consoles: '/consoles',
    perifericos: '/perifericos'
  };

  const categoryNames = {
    laptops: 'Laptops',
    desktops: 'Desktops',
    consoles: 'Consoles',
    perifericos: 'Periféricos'
  };

  // Versão Desktop
  return (
    <>
      {isOpen && (
        <Container onMouseLeave={onClose}>
          <Panel>
            <RightGrid>

              <HeroCard>
                <img src={hero[category]} alt="Ver tudo" />
                <HeroLink href={viewAll[category]}>Ver tudo</HeroLink>
              </HeroCard>

              <ProductsGrid>
                {(cards[category] || []).slice(0, 5).map((c, i) => (
                  <ProductCard key={i}>
                    <img src={c.img} alt={c.title} />

                    <div className="info">
                      <div className="title">{c.title}</div>
                      <div className="price">R$ {c.price}</div>
                      {c.old && <div className="oldPrice">R$ {c.old}</div>}
                    </div>
                  </ProductCard>
                ))}
              </ProductsGrid>

            </RightGrid>
          </Panel>
        </Container>
      )}
    </>
  );
};

export default SidebarLaptop;

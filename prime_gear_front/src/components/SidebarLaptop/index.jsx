import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Panel,
  RightGrid,
  HeroCard,
  HeroLink,
  ProductsGrid,
  ProductCard
} from "./style";

import LaptopImg from "../../assets/images/laptop.png";
import UltrabookImg from "../../assets/images/Macbook.png";
import DesktopImg from "../../assets/images/desktop.png";
import ConsolesImg from "../../assets/images/consoles.png";
import HeadsetImg from "../../assets/images/headset.jpeg";
import MouseImg from "../../assets/images/foneJBL.png";

const SidebarLaptop = ({ isOpen, category, onClose }) => {
  
  const cards = {
    laptops: [
      { img: LaptopImg, title: 'Lenovo IdeaPad Gaming', price: '€1.100,00', old: '€1.200,00' },
      { img: UltrabookImg, title: 'MacBook Pro M2', price: '€1.800,00' },
      { img: LaptopImg, title: 'Dell Inspiron', price: '€900,00', old: '€1.000,00' },
      { img: UltrabookImg, title: 'Asus Zenbook', price: '€1.300,00' },
      { img: LaptopImg, title: 'HP Pavilion', price: '€700,00', old: '€850,00' }
    ],

    desktops: [
      { img: DesktopImg, title: 'Desktop Gamer RGB', price: '€1.500,00' },
      { img: DesktopImg, title: 'Workstation Pro', price: '€2.000,00', old: '€2.200,00' },
      { img: DesktopImg, title: 'All-in-One', price: '€850,00' },
      { img: DesktopImg, title: 'Mini PC', price: '€450,00' },
      { img: DesktopImg, title: 'Servidor doméstico', price: '€600,00' }
    ],

    consoles: [
      { img: ConsolesImg, title: 'PlayStation 5', price: '€500,00' },
      { img: ConsolesImg, title: 'Xbox Series X', price: '€480,00' },
      { img: ConsolesImg, title: 'Nintendo Switch', price: '€300,00' },
      { img: ConsolesImg, title: 'Promoções', price: '€—' },
      { img: ConsolesImg, title: 'Bundles especiais', price: '€—' }
    ],

    perifericos: [
      { img: HeadsetImg, title: 'Headset Gamer', price: '€120,00' },
      { img: MouseImg, title: 'Mouse Pro', price: '€90,00', old: '€110,00' },
      { img: HeadsetImg, title: 'Teclado RGB', price: '€150,00' },
      { img: MouseImg, title: 'Mousepad XL', price: '€25,00' },
      { img: HeadsetImg, title: 'Microfone USB', price: '€80,00' }
    ]
  };

  const hero = {
    laptops: LaptopImg,
    desktops: DesktopImg,
    consoles: ConsolesImg,
    perifericos: HeadsetImg
  };

  const viewAll = {
    laptops: '/laptops',
    desktops: '/desktops',
    consoles: '/consoles',
    perifericos: '/perifericos'
  };

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
                      <div className="price">{c.price}</div>
                      {c.old && <div className="oldPrice">{c.old}</div>}
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

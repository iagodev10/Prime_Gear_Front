import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiArrowLeft, FiX } from "react-icons/fi";

import {
  Container,
  Panel,
  RightGrid,
  HeroCard,
  HeroLink,
  ProductsGrid,
  ProductCard,
} from "./style";

import LaptopImg from "../../assets/images/laptop.png";
import UltrabookImg from "../../assets/images/Macbook.png";
import DesktopImg from "../../assets/images/desktop.png";
import ConsolesImg from "../../assets/images/consoles.png";
import HeadsetImg from "../../assets/images/headset.jpeg";
import MouseImg from "../../assets/images/foneJBL.png";
import LaptopImagem from "../../assets/images/laptop-fundo.png";
import DesktopImagem from "../../assets/images/desktop-fundo.png";
import ConsoleImagem from "../../assets/images/console-fundo.png";
import PerifericoImagem from "../../assets/images/periferico-fundo.png";

const categoriaMap = {
  laptops: "Laptops",
  desktops: "Desktops",
  consoles: "Consoles",
  perifericos: "Periféricos"
};

const SidebarLaptop = ({ isOpen, category, onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);


  useEffect(() => {
  
    if (isMobile || !category || !isOpen) {
      setProdutos([]);
      return;
    }

    const buscarProdutos = async () => {
      console.log('🖥️ SidebarLaptop: Buscando produtos...');
      try {
        setLoading(true);

        const categoriaNome = categoriaMap[category];

        if (!categoriaNome) {
          console.error("❌ Categoria não mapeada:", category);
          return;
        }

        console.log('📤 Categoria para backend:', categoriaNome);

        const response = await axios.post(
          'http://primegear.site:8080/produtos-filtrados',
          {
            categorias: [categoriaNome],
            marcas: [],
            avaliacoes: [],
            precoMin: undefined,
            precoMax: undefined
          }
        );

        console.log('📥 Resposta:', response.data);

        if (response.data.success) {
          console.log('✅ Produtos encontrados:', response.data.produtos.length);

          setProdutos(response.data.produtos.slice(0, 5));
        }
      } catch (error) {
        console.error('❌ Erro ao buscar produtos:', error);
        setProdutos([]);
      } finally {
        setLoading(false);
      }
    };

    buscarProdutos();
  }, [isMobile, category, isOpen]);


  if (isMobile) {
    return null;
  }

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
    laptops: LaptopImagem,
    desktops: DesktopImagem,
    consoles: ConsoleImagem,
    perifericos: PerifericoImagem
  };

  const categoryNames = {
    laptops: 'Laptops',
    desktops: 'Desktops',
    consoles: 'Consoles',
    perifericos: 'Periféricos'
  };


  return (
    <>
      {isOpen && (
        <Container onMouseLeave={onClose}>
          <Panel>
            <RightGrid>
              <HeroCard>
                <img src={hero[category]} alt="Ver tudo" />
                <HeroLink
                  as={Link}
                  to="/loja"
                  state={{ categoryIdentifier: category }}
                >
                  Ver todos os {categoryNames[category]}
                </HeroLink>
              </HeroCard>

              <ProductsGrid>
                {loading ? (
                  <div style={{
                    gridColumn: '1 / -1',
                    padding: '2rem',
                    textAlign: 'center',
                    color: '#666'
                  }}>
                    Carregando produtos...
                  </div>
                ) : produtos.length === 0 ? (
                  <div style={{
                    gridColumn: '1 / -1',
                    padding: '2rem',
                    textAlign: 'center',
                    color: '#666'
                  }}>
                    Nenhum produto encontrado
                  </div>
                ) : (
                  produtos.map((produto) => (
                    <ProductCard
                      key={produto.cod_produto}
                      as={Link}
                      to={`/produto/${produto.cod_produto}`}
                      onClick={onClose}
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

                      </div>
                    </ProductCard>
                  ))
                )}
              </ProductsGrid>
            </RightGrid>
          </Panel>
        </Container>
      )}
    </>
  );
};

export default SidebarLaptop;
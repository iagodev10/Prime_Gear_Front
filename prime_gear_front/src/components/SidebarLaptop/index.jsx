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
import DesktopImg from "../../assets/images/desktop.png";
import ConsolesImg from "../../assets/images/consoles.png";
import HeadsetImg from "../../assets/images/headset.jpeg";


const categoriaMap = {
  laptops: "Laptops",
  desktops: "Desktop",
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
          'http://localhost:8080/produtos-filtrados',
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
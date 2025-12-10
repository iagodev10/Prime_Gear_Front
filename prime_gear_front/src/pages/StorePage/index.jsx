import CategoryNav from "../../components/CategoryNav"
import React, { useState, useEffect, useRef } from 'react';
import { Heart, ChevronDown, ChevronUp, ShoppingCart, Filter } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useLocation } from "react-router-dom"

import ProductCard from "../../components/ProductCard"
import Email from "../../assets/images/e-mail.svg"

import notebook from "../../assets/images/laptop-comprar.png"
import desktop from "../../assets/images/desktopPC.png"
import fone from "../../assets/images/foneJBL.png"

import axios from 'axios'


const FilterSection = ({
  categorias,
  toggleCategory,
  selectedCategories,
  marcas,
  toggleBrand,
  selectedBrands,
  priceRanges,
  togglePriceRange,
  selectedPriceRanges,
  expandedFilters,
  toggleFilter,
  labelStyle,
  inputStyle,
  selectedRatings,
  toggleRating,
}) => (
    <>
        {/* Categoria */}
        <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
            <button
                onClick={() => toggleFilter('categoria')}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: '500',
                    color: 'black'
                }}
            >
                Categoria
                {expandedFilters.categoria ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {expandedFilters.categoria && (
                <div style={{ paddingTop: '12px' }}>
                    {categorias.map(cat => (
                        <label
                            key={cat.nome_cat}
                            style={labelStyle}
                        >
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(cat.nome_cat)}
                                onChange={() => toggleCategory(cat.nome_cat)}
                                style={inputStyle}
                            />
                            {cat.nome_cat}
                        </label>
                    ))}
                </div>
            )}
        </div>

        {/* Marca */}
        <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
            <button
                onClick={() => toggleFilter('marca')}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: '500',
                    color: 'black'
                }}
            >
                Marca
                {expandedFilters.marca ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {expandedFilters.marca && (
                <div style={{ paddingTop: '12px' }}>
                    {marcas.map(marca => (
                        <label
                            key={marca.nome_marca}
                            style={labelStyle}
                        >
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(marca.nome_marca)}
                                onChange={() => toggleBrand(marca.nome_marca)}
                                style={inputStyle}
                            />
                            {marca.nome_marca}
                        </label>
                    ))}
                </div>
            )}
        </div>

        {/* Preço */}
        <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
            <button
                onClick={() => toggleFilter('preco')}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: '500',
                    color: 'black'
                }}
            >
                Preço
                {expandedFilters.preco ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {expandedFilters.preco && (
                <div style={{ paddingTop: '12px' }}>
                    {priceRanges.map(range => (
                        <label key={range.label} style={labelStyle}>
                            <input
                                type="checkbox"
                                checked={selectedPriceRanges.includes(range.label)}
                                onChange={() => togglePriceRange(range.label)}
                                style={inputStyle}
                            />
                            {range.label}
                        </label>
                    ))}
                </div>
            )}
        </div>

        {/* Avaliações (Deixadas aqui, mas pode ser removida se a lógica não for implementada) */}
        <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
            <button
                onClick={() => toggleFilter('avaliacoes')}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    fontSize: '15px',
                    fontWeight: '500',
                    color: 'black'
                }}
            >
                Avaliações
                {expandedFilters.avaliacoes ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {expandedFilters.avaliacoes && (
                <div style={{ paddingTop: '12px' }}>
                    {[5, 4, 3, 2, 1].map(rating => (
                        <label key={rating} style={labelStyle}>
                            <input
                                type="checkbox"
                                style={inputStyle}
                                checked={selectedRatings.includes(rating)}
                                onChange={() => toggleRating(rating)}
                            />
                            {rating} {rating === 1 ? 'estrela' : 'estrelas'} ou mais
                        </label>
                    ))}
                </div>
            )}
        </div>

        {/* Outros filtros comentados na versão original (removidos para simplificar o código) */}
    </>
);


function Store() {

    const handleCategoryChange = (category) => {
        const categoryName = category.nome_cat;

    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories((prev) => prev.filter((c) => c !== categoryName))
      if (categoryFromCarousel?.nome_cat === categoryName) {
        setCategoryFromCarousel(null)
      }
    } else {
      setSelectedCategories((prev) => [...prev, categoryName])
      setCategoryFromCarousel(category)
    }

        setCurrentPage(1);
    };

   
    const [selectedRatings, setSelectedRatings] = useState([])
    const location = useLocation();

  const [produtos, setProdutos] = useState([])
  const [categorias, setCategorias] = useState([])
  const [marcas, setMarcas] = useState([])

  
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]); 
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [categoryFromCarousel, setCategoryFromCarousel] = useState(null);
    const [favorites, setFavorites] = useState([]); 

 
    const [expandedFilters, setExpandedFilters] = useState({
        categoria: false,
        marca: false,
        preco: false,
        capacidadeSSD: false,
        avaliacoes: false,
        memoriaRAM: false,
        sistemaOperacional: false,
        tamanhoTela: false,
        processador: false
    });

  

   
    const [sidebarHeight, setSidebarHeight] = useState('auto');
    const [isMobile, setIsMobile] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);


    const [isStickyFixed, setIsStickyFixed] = useState(false);
    const [stickyLeft, setStickyLeft] = useState(0);

    const sidebarRef = useRef(null);
    const paginationRef = useRef(null);
    const containerRef = useRef(null);

    const itemsPerPage = 6;

    
    const priceRanges = [
        { label: "Até R$ 1.000", min: 0, max: 1000 },
        { label: "R$ 1.000 a R$ 2.500", min: 1000, max: 2500 },
        { label: "R$ 2.500 a R$ 4.000", min: 2500, max: 4000 },
        { label: "R$ 4.000 a R$ 6.000", min: 4000, max: 6000 },
        { label: "R$ 6.000 a R$ 8.000", min: 6000, max: 8000 },
        { label: "R$ 8.000 a R$ 12.000", min: 8000, max: 12000 },
        { label: "Acima de R$ 12.000", min: 12000, max: Infinity },
    ];



  const labelStyle = {
    display: "flex",
    alignItems: "center",
    padding: "8px 0",
    cursor: "pointer",
    fontSize: "14px",
    color: "black",
  }

  const inputStyle = {
    width: "16px",
    height: "16px",
    marginRight: "10px",
    cursor: "pointer",
  }

  const totalPages = Math.ceil(produtos.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = produtos.slice(startIndex, endIndex)

  useEffect(() => {
    const handleScroll = () => {
      if (!productsContainerRef.current || isMobile) return

      const productsContainer = productsContainerRef.current
      const productsRect = productsContainer.getBoundingClientRect()
      const productsBottom = productsRect.bottom
      const windowHeight = window.innerHeight

      // Se o final da área de produtos está visível na tela, desabilita o sticky
      if (productsBottom <= windowHeight) {
        setIsFilterSticky(false)
      } else {
        setIsFilterSticky(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Chama imediatamente para definir o estado inicial

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile, produtos])

  async function getCats() {
    try {
      const response = await axios.get("http://localhost:8080/get-categorias")
      console.log("alou")
      setCategorias(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function getMarcas() {
    try {
      const response = await axios.get("http://localhost:8080/get-marcas")
      setMarcas(response.data)
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(()=>{
        getMarcas()
        getCats()
    },[])

  async function obterProdutosFiltrados() {
    try {
      let precoMin = undefined
      let precoMax = undefined

      if (selectedPriceRanges.length > 0) {
        const ranges = selectedPriceRanges.map((label) => priceRanges.find((r) => r.label === label)).filter((r) => r)

        if (ranges.length > 0) {
          precoMin = Math.min(...ranges.map((r) => r.min))
          precoMax = Math.max(...ranges.map((r) => r.max))
        }
      }

      const categoriasParaFiltrar = [...selectedCategories]
      if (categoryFromCarousel && !categoriasParaFiltrar.includes(categoryFromCarousel.nome_cat)) {
        categoriasParaFiltrar.push(categoryFromCarousel.nome_cat)
      }

            const filtros = {
                categorias: categoriasParaFiltrar,
                marcas: selectedBrands,
                avaliacoes: selectedRatings,  
                precoMin,
                precoMax
            };

            console.log('Enviando filtros:', filtros);

            const response = await axios.post('http://localhost:8080/produtos-filtrados', filtros);
            setProdutos(response.data.produtos || []);
            setCurrentPage(1);
        } catch (error) {
            console.log('Erro ao filtrar produtos:', error);
        }
    }

  
    async function obterTodosProdutos() {
        try {
            const response = await axios.get('http://localhost:8080/produtos-adm')
            setProdutos(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (selectedCategories.length > 0 || selectedBrands.length > 0 || selectedPriceRanges.length > 0 || selectedRatings.length > 0 || categoryFromCarousel) {
            obterProdutosFiltrados();
        } else {
            obterTodosProdutos();
        }
    }, [selectedCategories, selectedBrands, selectedPriceRanges, selectedRatings, categoryFromCarousel]); // ✅ ADICIONE selectedRatings

   


useEffect(() => {
    if (categorias.length > 0) {
     
        if (location.state?.categoryIdentifier) {
            const identifier = location.state.categoryIdentifier.toLowerCase();
            
            console.log('🔍 Buscando categoria com identificador:', identifier);
            console.log('📦 Categorias disponíveis:', categorias.map(c => c.nome_cat));
            
       
            const matchedCategory = categorias.find(cat => {
                const catName = cat.nome_cat.toLowerCase();
                
      
                return catName.includes(identifier) || 
                       identifier.includes(catName) ||
                     
                       (identifier === 'laptop' && (catName.includes('notebook') || catName.includes('laptop'))) ||
                       (identifier === 'desktop' && (catName.includes('desktop') || catName.includes('pc') || catName.includes('computador'))) ||
                       (identifier === 'console' && (catName.includes('console') || catName.includes('videogame'))) ||
                       (identifier === 'periferico' && (catName.includes('periférico') || catName.includes('periferico')));
            });
            
            console.log('✅ Categoria encontrada:', matchedCategory);
            
            if (matchedCategory) {
                setCategoryFromCarousel(matchedCategory);
                
                if (!selectedCategories.includes(matchedCategory.nome_cat)) {
                    setSelectedCategories(prev => [...prev, matchedCategory.nome_cat]);
                }
            } else {
                console.warn('⚠️ Nenhuma categoria encontrada para:', identifier);
            }
            
          
            window.history.replaceState({}, document.title);
        }
    
        else if (location.state?.selectedCategory) {
            const category = location.state.selectedCategory;
            console.log('📌 Categoria selecionada diretamente:', category);
            
            setCategoryFromCarousel(category);
            
            if (!selectedCategories.includes(category.nome_cat)) {
                setSelectedCategories(prev => [...prev, category.nome_cat]);
            }
            
        
            window.history.replaceState({}, document.title);
        }
    }
}, [location.state, categorias])

useEffect(() => {
    if (marcas.length > 0 && location.state?.selectedBrand) {
        const brandName = location.state.selectedBrand;
        
        console.log('Marca selecionada:', brandName);
        console.log('Marcas disponíveis:', marcas.map(m => m.nome_marca));
        
        const matchedBrand = marcas.find(m => m.nome_marca === brandName);
        
        if (matchedBrand && !selectedBrands.includes(brandName)) {
            setSelectedBrands(prev => [...prev, brandName]);
            console.log('Marca adicionada aos filtros:', brandName);
        }
        
        window.history.replaceState({}, document.title);
    }
}, [location.state, marcas]);

 
    useEffect(() => {
        if (selectedCategories.length > 0 || selectedBrands.length > 0 || selectedPriceRanges.length > 0 || categoryFromCarousel) {
            obterProdutosFiltrados();
        } else {
            obterTodosProdutos();
        }
    }, [selectedCategories, selectedBrands, selectedPriceRanges, categoryFromCarousel]);


   
    const toggleRating = (rating) => {
        setSelectedRatings(prev =>
            prev.includes(rating)
                ? prev.filter(r => r !== rating)
                : [...prev, rating]
        );
    };
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 900);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

   


  const handleCategoryFromCarousel = (category) => {
    setCategoryFromCarousel(category)

        if (category) {
        
            setSelectedCategories(prev => {
                const categoryName = category.nome_cat;
                if (!prev.includes(categoryName)) {
                    return [...prev, categoryName];
                }
                return prev;
            });
        } else {
          
            if (categoryFromCarousel) {
                setSelectedCategories(prev =>
                    prev.filter(c => c !== categoryFromCarousel.nome_cat)
                );
            }
        }
    };


  const toggleFilter = (filterName) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }))
  }

  const toggleCategory = (categoryName) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]

           
            if (categoryFromCarousel && categoryFromCarousel.nome_cat === categoryName && !newCategories.includes(categoryName)) {
                setCategoryFromCarousel(null);
            }

            return newCategories;
        });
    };

  
    const toggleBrand = (brandName) => {
        setSelectedBrands(prev =>
            prev.includes(brandName)
                ? prev.filter(b => b !== brandName)
                : [...prev, brandName]
        );
    };

  const togglePriceRange = (rangeLabel) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(rangeLabel) ? prev.filter((r) => r !== rangeLabel) : [...prev, rangeLabel],
    )
  }

    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
        setSelectedPriceRanges([]);
        setSelectedRatings([]);  
        setCategoryFromCarousel(null);
    };

 
    const renderPagination = () => {
        const pages = [];

   

    pages.push(
      <button
        key="prev"
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid #ddd",
          backgroundColor: "white",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: currentPage === 1 ? 0.5 : 1,
          marginRight: "8px",
        }}
      >
        ←
      </button>,
    )

        if (totalPages > 0) {
          
            if (currentPage > 2) {
                pages.push(
                    <button
                        key={1}
                        onClick={() => setCurrentPage(1)}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            fontWeight: '500'
                        }}
                    >
                        1
                    </button>
                );

                if (currentPage > 3) {
                    pages.push(
                        <span key="dots1" style={{ padding: '0 8px' }}>...</span>
                    );
                }
            }

          
            for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid #ddd',
                            backgroundColor: currentPage === i ? '#000' : 'white',
                            color: currentPage === i ? 'white' : '#333',
                            cursor: 'pointer',
                            fontWeight: currentPage === i ? '600' : '500'
                        }}
                    >
                        {i}
                    </button>
                );
            }

         
            if (currentPage < totalPages - 1) {
                if (currentPage < totalPages - 2) {
                    pages.push(
                        <span key="dots2" style={{ padding: '0 8px' }}>...</span>
                    );
                }

                pages.push(
                    <button
                        key={totalPages}
                        onClick={() => setCurrentPage(totalPages)}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid #ddd',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            fontWeight: '500'
                        }}
                    >
                        {totalPages}
                    </button>
                );
            }
        }

      
        pages.push(
            <button
                key="next"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid #ddd',
                    backgroundColor: 'white',
                    cursor: currentPage === totalPages || totalPages === 0 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: currentPage === totalPages || totalPages === 0 ? 0.5 : 1,
                    marginLeft: '8px'
                }}
            >
                →
            </button>
        );

    return pages
  }

  return (
    <>
      <style>{`
                @keyframes slideUpFromBottom {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .filter-drawer-enter {
                    animation: slideUpFromBottom 0.3s ease-out forwards;
                }
                
                /* Estilos novos para o Carrossel de Categorias */
                .category-swiper-wrapper {
                    position: relative;
                    overflow: visible; /* Permite setas fora */
                }
                
                .category-swiper {
                    overflow: hidden !important; /* Corta os slides */
                    position: static; /* Para não atrapalhar os botões absolutos */
                }
                
                /* Botões customizados */
                .custom-cat-nav-btn {
                    position: absolute;
                    top: 40%; /* Ajuste vertical */
                    transform: translateY(-50%);
                    width: 40px;
                    height: 40px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    z-index: 20;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: none;
                    color: #000;
                    transition: all 0.3s ease;
                }
                
                .custom-cat-nav-btn:hover {
                    background: #f0f0f0;
                    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
                }
                // Garante que o indicador da paginação seja branco sobre fundo preto
                .pagination-button-active {
                    background-color: #000 !important; 
                    color: white !important; 
                    font-weight: 600 !important;
                }
            `}</style>
            <CategoryNav
                categorias={categorias}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
            />
            <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: isMobile ? '100px 10px 100px' : '40px 20px' }}>
                <div ref={containerRef} style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: isMobile ? '20px' : '40px', position: 'relative', flexDirection: isMobile ? 'column' : 'row' }}>

                    {/* Sidebar de Filtros (desktop) */}
                    {!isMobile && (
                        <div
                            ref={sidebarRef}
                            style={{
                                width: '280px',
                                flexShrink: 0,
                              
                                position: 'sticky',
                                top: '20px',
                                alignSelf: 'flex-start',
                                maxHeight: 'calc(100vh - 40px)', 
                                overflowY: 'auto'
                            }}
                        >
                            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#333' }}>Filtros</h2>

                                {/* Uso do componente auxiliar para renderizar os filtros na sidebar desktop */}
                                <FilterSection
                                    categorias={categorias}
                                    toggleCategory={toggleCategory}
                                    selectedCategories={selectedCategories}
                                    marcas={marcas}
                                    toggleBrand={toggleBrand}
                                    selectedBrands={selectedBrands}
                                    priceRanges={priceRanges}
                                    togglePriceRange={togglePriceRange}
                                    selectedPriceRanges={selectedPriceRanges}
                                    expandedFilters={expandedFilters}
                                    toggleFilter={toggleFilter}
                                    labelStyle={labelStyle}
                                    inputStyle={inputStyle}
                                    toggleRating={toggleRating}
                                    selectedRatings={selectedRatings}
                                />

                <button
                  onClick={clearAllFilters}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    padding: "12px",
                    marginTop: "20px",
                    border: "1px solid #ddd",
                    background: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Limpar Filtros
                </button>
              </div>
            </div>
          )}

                    {/* Conteúdo Principal */}
                    <div style={{ flex: 1 }}>
                        {/* Botão flutuante de filtros (mobile) */}
                        {isMobile && (
                            <button
                                onClick={() => setIsFilterOpen(true)}
                                style={{
                                    position: 'fixed',
                                    bottom: '24px',
                                    right: '24px',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    background: '#000',
                                    color: '#fff',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    zIndex: 998
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <Filter size={24} />
                            </button>
                        )}
                        {/* Grid de Produtos */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                            gap: isMobile ? '12px' : '24px',
                            marginBottom: isMobile ? '40px' : '80px'
                        }}>
                            {/* Erro corrigido: Removidas as chamadas redundantes a <ProductCard /> sem props */}
                            {currentProducts.length > 0 ? (
                                currentProducts.map((prod) => (
                                 
                                    <ProductCard
                                        key={prod.cod_produto}
                                        cod_produto={prod.cod_produto}
                                        title={prod.nome_prod}
                                        priceInfo={`ou 10x de ${(prod.preco_prod / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                                        price={prod.preco_prod.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                        oldPrice={prod.preco_prod.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                        image={prod.url_img_prod}
                                        idProd={prod.cod_produto}
                                    />
                                ))
                            ) : (
                               
                                <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: '1.2rem', padding: '40px', backgroundColor: 'white', borderRadius: '8px' }}>
                                    Nenhum produto encontrado com os filtros selecionados.
                                </p>
                            )}
                        </div>

                        {/* Paginação */}
                        {totalPages > 1 && ( 
                            <div
                                ref={paginationRef}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '8px',
                                    paddingTop: isMobile ? '20px' : '40px',
                                    paddingBottom: isMobile ? '20px' : '40px',
                                    flexWrap: 'wrap'
                                }}
                            >
                                {renderPagination()}
                            </div>
                        )}


                    </div>
                </div>
            </div>

      {/* Modal Mobile */}
      {isMobile && isFilterOpen && (
        <>
          <div
            onClick={() => setIsFilterOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 999,
              animation: "fadeIn 0.3s ease-out",
            }}
          />
          <div
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "100%",
              background: "#fff",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              boxShadow: "0 -10px 24px rgba(0,0,0,0.2)",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              zIndex: 1000,
              animation: "slideUpFromBottom 0.3s ease-out",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: "1px solid #eee",
                background: "#fff",
              }}
            >
              <strong style={{ fontSize: "18px", fontWeight: "700" }}>Filtros</strong>
              <span style={{ color: "#666", fontSize: "14px" }}>{produtos.length} Resultados</span>
              <button
                onClick={() => setIsFilterOpen(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#666",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f5f5f5"
                  e.currentTarget.style.color = "#000"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent"
                  e.currentTarget.style.color = "#666"
                }}
              >
                ×
              </button>
            </div>

            {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedPriceRanges.length > 0) && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  padding: "12px 20px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {selectedCategories.map((chip) => (
                  <button
                    key={`cat-${chip}`}
                    onClick={() => toggleCategory(chip)}
                    style={{
                      border: "1px solid #000",
                      borderRadius: "999px",
                      padding: "6px 12px",
                      background: "#fff",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {chip} ×
                  </button>
                ))}
                {selectedBrands.map((chip) => (
                  <button
                    key={`brand-${chip}`}
                    onClick={() => toggleBrand(chip)}
                    style={{
                      border: "1px solid #000",
                      borderRadius: "999px",
                      padding: "6px 12px",
                      background: "#fff",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {chip} ×
                  </button>
                ))}
                {selectedPriceRanges.map((chip) => (
                  <button
                    key={`price-${chip}`}
                    onClick={() => togglePriceRange(chip)}
                    style={{
                      border: "1px solid #000",
                      borderRadius: "999px",
                      padding: "6px 12px",
                      background: "#fff",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {chip} ×
                  </button>
                ))}
                {selectedRatings.map((chip) => (
                  <button
                    key={`rating-${chip}`}
                    onClick={() => toggleRating(chip)}
                    style={{
                      border: "1px solid #000",
                      borderRadius: "999px",
                      padding: "6px 12px",
                      background: "#fff",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {chip} ★ ×
                  </button>
                ))}
              </div>
            )}

            <div style={{ flex: 1, overflowY: "auto", padding: "8px 20px" }}>
              <FilterSection
                categorias={categorias}
                toggleCategory={toggleCategory}
                selectedCategories={selectedCategories}
                marcas={marcas}
                toggleBrand={toggleBrand}
                selectedBrands={selectedBrands}
                priceRanges={priceRanges}
                togglePriceRange={togglePriceRange}
                selectedPriceRanges={selectedPriceRanges}
                expandedFilters={expandedFilters}
                toggleFilter={toggleFilter}
                labelStyle={labelStyle}
                inputStyle={inputStyle}
                toggleRating={toggleRating}
                selectedRatings={selectedRatings}
              />
            </div>
            <div
              style={{
                borderTop: "1px solid #eee",
                padding: "12px 20px",
                display: "flex",
                gap: "12px",
              }}
            >
              <button
                onClick={clearAllFilters}
                style={{
                  flex: 1,
                  borderRadius: "12px",
                  padding: "12px",
                  border: "1px solid #ddd",
                  background: "#fff",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Limpar
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                style={{
                  flex: 1,
                  borderRadius: "12px",
                  padding: "12px",
                  border: "none",
                  background: "#000",
                  color: "#fff",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Aplicar
              </button>
            </div>
          </div>
        </>
      )}

            {/* Seção de Cards de Categorias (Mantida) */}
            <>
                {/* ... restante do código do carrossel/grid de categorias e do rodapé ... */}
                <div style={{
                    width: '100%',
                    background: '',
                    minHeight: isMobile ? 'auto' : '25vh',
                    padding: isMobile ? '40px 20px' : '40px 0',
                    maxWidth: '1400px',
                    margin: '0 auto'
                }}>
                    {isMobile ? (
                       
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            slidesPerView={1}
                            spaceBetween={20}
                            className="category-swiper"
                            style={{ paddingBottom: '40px' }}
                        >
                            {[
                                { id: 1, name: 'Laptops', image: notebook },
                                { id: 2, name: 'Fones de Ouvido', image: fone },
                                { id: 3, name: 'Desktops', image: desktop }
                            ].map((category) => (
                                <SwiperSlide key={category.id}>
                                    <div style={{
                                        width: "100%",
                                        background: "#e1e1e1",
                                        height: "140px",
                                        borderRadius: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-around",
                                        padding: "16px 20px",
                                        flexDirection: "row",
                                        gap: "16px"
                                    }}>
                                        <img src={category.image} alt={category.name} style={{ width: "35%", maxHeight: "110px", objectFit: "contain", flexShrink: 0 }} />
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            gap: "12px",
                                            flex: 1,
                                            justifyContent: "center"
                                        }}>
                                            <p style={{ fontSize: "1.1rem", textAlign: "center", margin: 0, fontWeight: 500 }}>{category.name}</p>
                                            <button style={{
                                                background: "black",
                                                color: "white",
                                                padding: "10px 20px",
                                                borderRadius: "60px",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                border: "none",
                                                transition: "0.3s",
                                                fontSize: "0.9rem",
                                                fontWeight: 500,
                                                whiteSpace: "nowrap"
                                            }}>
                                                Comprar Agora
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                    
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            gap: "20px",
                            padding: "0 20px"
                        }}>
                            {[
                                { id: 1, name: 'Laptops', image: notebook },
                                { id: 2, name: 'Fones de Ouvido', image: fone },
                                { id: 3, name: 'Desktops', image: desktop }
                            ].map((category) => (
                                <div key={category.id} style={{
                                    width: "23%",
                                    background: "#e1e1e1",
                                    height: "160px",
                                    borderRadius: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-around",
                                    padding: "20px",
                                    flexDirection: "row",
                                    gap: "16px"
                                }}>
                                    <img src={category.image} alt={category.name} style={{ width: "35%", maxHeight: "120px", objectFit: "contain", flexShrink: 0 }} />
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        gap: "12px",
                                        flex: 1,
                                        justifyContent: "center"
                                    }}>
                                        <p style={{ fontSize: "1.3rem", textAlign: "center", margin: 0, fontWeight: 500 }}>{category.name}</p>
                                        <button style={{
                                            background: "black",
                                            color: "white",
                                            padding: "10px 20px",
                                            borderRadius: "60px",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            border: "none",
                                            transition: "0.3s",
                                            fontSize: "0.95rem",
                                            fontWeight: 500,
                                            whiteSpace: "nowrap"
                                        }}>
                                            Comprar Agora
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>



                <div style={{
                    width: '100%',
                    background: '#2f2f2f',
                    minHeight: isMobile ? 'auto' : '12vh',
                    padding: isMobile ? '40px 20px' : '0',
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: isMobile ? "40px" : "100px"
                }}>
                    <div style={{
                        width: isMobile ? "100%" : "70%",
                        height: isMobile ? "auto" : "60%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: isMobile ? "column" : "row",
                        gap: isMobile ? "20px" : "0",
                        padding: isMobile ? '0' : '20px 0' 
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: isMobile ? "center" : "space-between",
                            width: isMobile ? "100%" : "56%",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "15px" : "20px", 
                            textAlign: isMobile ? "center" : "left"
                        }}>
                            {!isMobile && <img src={Email} alt="Ícone de E-mail" style={{ width: "40px" }} />}
                            <div>
                                <p style={{ color: "#f5f5f5", fontSize: isMobile ? "1.2rem" : "1.5rem", fontWeight: "600", marginBottom: isMobile ? "8px" : "0" }}>Cadastre-se para receber descontos</p>
                                <p style={{ color: "#f5f5f5", fontSize: isMobile ? "1rem" : "1.2rem", margin: 0 }}>Cadastre-se para receber ofertas e atualizações da empresa.</p>
                            </div>
                        </div>
                        <div style={{
                            background: "#5c595933",
                            width: isMobile ? "100%" : "40%",
                            height: isMobile ? "auto" : "85%",
                            minHeight: "50px", 
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderRadius: "40px",
                            padding: "4px", 
                        }}>
                            <input placeholder="Seu e-mail" type="text" style={{
                                background: "transparent",
                                outline: "none",
                                height: "45px",
                                paddingLeft: "25px",
                                fontSize: isMobile ? "14px" : "16px",
                                color: "white",
                                width: "65%", 
                                border: "none"
                            }} />
                            <div>
                                <button style={{
                                    padding: "10px 20px",
                                    borderRadius: "60px",
                                    background: "#fff",
                                    color: "#000",
                                    border: "none",
                                    cursor: "pointer",
                                    fontWeight: "600",
                                    whiteSpace: "nowrap"
                                }}>Increver-se</button>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        </>
    )
}

export default Store

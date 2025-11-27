import CategoryNav from "../../components/CategoryNav"
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import ProductCard from "../../components/ProductCard";
import axios from 'axios'

function Store() {
    const location = useLocation();
    const [produtos, setProdutos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [marcas, setMarcas] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    
  
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [categoryFromCarousel, setCategoryFromCarousel] = useState(null); // Nova state
    
    const [expandedFilters, setExpandedFilters] = useState({
        categoria: true,
        marca: true,
        preco: false,
        avaliacoes: false
    });

    const [sidebarHeight, setSidebarHeight] = useState('auto');
    const [isMobile, setIsMobile] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const sidebarRef = useRef(null);
    const paginationRef = useRef(null);
    const containerRef = useRef(null);

    const itemsPerPage = 6;

    const labelStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
        cursor: 'pointer',
        fontSize: '14px',
        color: 'black',
    };

    const inputStyle = {
        width: '16px',
        height: '16px',
        marginRight: '10px',
        cursor: 'pointer',
    };

   
    const priceRanges = [
        { label: 'Até R$ 1.000', min: 0, max: 1000 },
        { label: 'R$ 1.000 a R$ 2.500', min: 1000, max: 2500 },
        { label: 'R$ 2.500 a R$ 4.000', min: 2500, max: 4000 },
        { label: 'R$ 4.000 a R$ 6.000', min: 4000, max: 6000 },
        { label: 'R$ 6.000 a R$ 8.000', min: 6000, max: 8000 },
        { label: 'R$ 8.000 a R$ 12.000', min: 8000, max: 12000 },
        { label: 'Acima de R$ 12.000', min: 12000, max: 999999 }
    ];

    const totalPages = Math.ceil(produtos.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = produtos.slice(startIndex, endIndex);

 
    async function getCats() {
        try {
            const response = await axios.get('http://localhost:8080/get-categorias')
            setCategorias(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    
    async function getMarcas() {
        try {
            const response = await axios.get('http://localhost:8080/get-marcas')
            setMarcas(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function obterProdutosFiltrados() {
        try {
           
            let precoMin = undefined;
            let precoMax = undefined;
            
            if (selectedPriceRanges.length > 0) {
                const ranges = selectedPriceRanges.map(label => 
                    priceRanges.find(r => r.label === label)
                );
                precoMin = Math.min(...ranges.map(r => r.min));
                precoMax = Math.max(...ranges.map(r => r.max));
            }

           
            let categoriasParaFiltrar = [...selectedCategories];
            if (categoryFromCarousel) {
                if (!categoriasParaFiltrar.includes(categoryFromCarousel.nome_cat)) {
                    categoriasParaFiltrar.push(categoryFromCarousel.nome_cat);
                }
            }

            const filtros = {
                categorias: categoriasParaFiltrar,
                marcas: selectedBrands,
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
            const response = await axios.get('http://localhost:8080/produtos-adm');
            setProdutos(response.data);
        } catch (error) {
            console.log(error);
        }
    }

  
    useEffect(() => {
        getCats();
        getMarcas();
        obterTodosProdutos();
    }, []);

   
    useEffect(() => {
        if (location.state?.selectedCategory && categorias.length > 0) {
            const category = location.state.selectedCategory;
            setCategoryFromCarousel(category);
            setSelectedCategories([category.nome_cat]);
        }
    }, [location.state, categorias]);

   
    useEffect(() => {
        if (selectedCategories.length > 0 || selectedBrands.length > 0 || selectedPriceRanges.length > 0 || categoryFromCarousel) {
            obterProdutosFiltrados();
        } else {
            obterTodosProdutos();
        }
    }, [selectedCategories, selectedBrands, selectedPriceRanges, categoryFromCarousel]);

   
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 900);
        onResize();
        window.addEventListener('resize', onResize);
        
        const handleScroll = () => {
            if (!sidebarRef.current || !paginationRef.current || !containerRef.current) return;
            const containerTop = containerRef.current.offsetTop;
            const paginationTop = paginationRef.current.offsetTop;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const sidebarOffsetHeight = sidebarRef.current.offsetHeight;
            const stopPoint = paginationTop - sidebarOffsetHeight - 20;

            if (scrollY > containerTop && scrollY < stopPoint) {
                setSidebarHeight(windowHeight - 100);
            } else {
                setSidebarHeight('auto');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', onResize);
        }
    }, []);


    const handleCategoryFromCarousel = (category) => {
        setCategoryFromCarousel(category);
        
        if (category) {
          
            if (!selectedCategories.includes(category.nome_cat)) {
                setSelectedCategories(prev => [...prev, category.nome_cat]);
            }
        } else {
           
            if (categoryFromCarousel) {
                setSelectedCategories(prev => 
                    prev.filter(c => c !== categoryFromCarousel.nome_cat)
                );
            }
        }
    };

    const toggleFilter = (filterName) => {
        setExpandedFilters(prev => ({
            ...prev,
            [filterName]: !prev[filterName]
        }));
    };

    const toggleCategory = (categoryName) => {
        setSelectedCategories(prev => {
            const newCategories = prev.includes(categoryName)
                ? prev.filter(c => c !== categoryName)
                : [...prev, categoryName];
            
           
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
        setSelectedPriceRanges(prev =>
            prev.includes(rangeLabel)
                ? prev.filter(r => r !== rangeLabel)
                : [...prev, rangeLabel]
        );
    };

    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
        setSelectedPriceRanges([]);
        setCategoryFromCarousel(null);
    };

    const renderPagination = () => {
        const pages = [];
        pages.push(
            <button
                key="prev"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid #ddd',
                    backgroundColor: 'white',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: currentPage === 1 ? 0.5 : 1
                }}
            >
                ←
            </button>
        );

        if (currentPage > 2) {
            pages.push(
                <button key={1} onClick={() => setCurrentPage(1)} style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: 'white', cursor: 'pointer', fontWeight: '500'
                }}>1</button>
            );
            if (currentPage > 3) {
                pages.push(<span key="dots1" style={{ padding: '0 8px' }}>...</span>);
            }
        }

        for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
            pages.push(
                <button key={i} onClick={() => setCurrentPage(i)} style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: currentPage === i ? '#000' : 'white',
                    color: currentPage === i ? 'white' : '#333', cursor: 'pointer',
                    fontWeight: currentPage === i ? '600' : '500'
                }}>{i}</button>
            );
        }

        if (currentPage < totalPages - 1) {
            if (currentPage < totalPages - 2) {
                pages.push(<span key="dots2" style={{ padding: '0 8px' }}>...</span>);
            }
            pages.push(
                <button key={totalPages} onClick={() => setCurrentPage(totalPages)} style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: 'white', cursor: 'pointer', fontWeight: '500'
                }}>{totalPages}</button>
            );
        }

        pages.push(
            <button key="next" onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages} style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd',
                    backgroundColor: 'white', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: currentPage === totalPages ? 0.5 : 1
                }}>→</button>
        );

        return pages;
    };

    const FilterSection = () => (
        <>
            {/* Categoria */}
            <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
                <button onClick={() => toggleFilter('categoria')} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '12px 0', border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
                    fontSize: '15px', fontWeight: '500', color: 'black'
                }}>
                    Categoria
                    {expandedFilters.categoria ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedFilters.categoria && (
                    <div style={{ paddingTop: '12px' }}>
                        {categorias.map(cat => (
                            <label key={cat.cod_categoria} style={labelStyle}>
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
                <button onClick={() => toggleFilter('marca')} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '12px 0', border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
                    fontSize: '15px', fontWeight: '500', color: 'black'
                }}>
                    Marca
                    {expandedFilters.marca ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {expandedFilters.marca && (
                    <div style={{ paddingTop: '12px' }}>
                        {marcas.map(marca => (
                            <label key={marca.cod_marca} style={labelStyle}>
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
                <button onClick={() => toggleFilter('preco')} style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '12px 0', border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
                    fontSize: '15px', fontWeight: '500', color: 'black'
                }}>
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
        </>
    );

    return (
        <>
            <CategoryNav 
                categorias={categorias} 
                onCategoryChange={handleCategoryFromCarousel}
                initialCategory={categoryFromCarousel}
            />
            <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: isMobile ? '100px 10px 100px' : '40px 20px' }}>
                <div ref={containerRef} style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: isMobile ? '20px' : '40px', position: 'relative', flexDirection: isMobile ? 'column' : 'row' }}>

                    {/* Sidebar Desktop */}
                    {!isMobile && (
                        <div ref={sidebarRef} style={{
                            width: '280px', flexShrink: 0, position: 'sticky', top: '20px',
                            alignSelf: 'flex-start', maxHeight: sidebarHeight, overflowY: 'auto'
                        }}>
                            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                    <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#333', margin: 0 }}>Filtros</h2>
                                    {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedPriceRanges.length > 0) && (
                                        <button onClick={clearAllFilters} style={{
                                            fontSize: '12px', color: '#0b74ff', background: 'none',
                                            border: 'none', cursor: 'pointer', textDecoration: 'underline'
                                        }}>Limpar</button>
                                    )}
                                </div>
                                <FilterSection />
                            </div>
                        </div>
                    )}

                    {/* Conteúdo Principal */}
                    <div style={{ flex: 1 }}>
                        {/* Botão Mobile */}
                        {isMobile && (
                            <button onClick={() => setIsFilterOpen(true)} style={{
                                position: 'fixed', bottom: '24px', right: '24px', width: '60px', height: '60px',
                                borderRadius: '50%', border: 'none', background: '#000', color: '#fff',
                                cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 998
                            }}>
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
                            {currentProducts.length > 0 ? (
                                currentProducts.map((prod) => (
                                    <ProductCard
                                        key={prod.cod_produto}
                                        cod_produto={prod.cod_produto}
                                        title={prod.nome_prod}
                                        price={prod.preco_prod.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}
                                        oldPrice={prod.preco_prod.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}
                                        image={prod.url_img_prod}
                                    />
                                ))
                            ) : (
                                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#666' }}>
                                    <p style={{ fontSize: '18px', fontWeight: '500' }}>Nenhum produto encontrado</p>
                                    <p style={{ fontSize: '14px' }}>Tente ajustar os filtros</p>
                                </div>
                            )}
                        </div>

                        {/* Paginação */}
                        {produtos.length > 0 && (
                            <div ref={paginationRef} style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                gap: '8px', paddingTop: isMobile ? '20px' : '40px',
                                paddingBottom: isMobile ? '20px' : '40px', flexWrap: 'wrap'
                            }}>
                                {renderPagination()}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal Mobile */}
            {isMobile && isFilterOpen && (
                <>
                    <div onClick={() => setIsFilterOpen(false)} style={{
                        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999
                    }} />
                    <div style={{
                        position: 'fixed', left: 0, right: 0, bottom: 0, width: '100%',
                        background: '#fff', borderTopLeftRadius: '20px', borderTopRightRadius: '20px',
                        boxShadow: '0 -10px 24px rgba(0,0,0,0.2)', maxHeight: '90vh',
                        display: 'flex', flexDirection: 'column', zIndex: 1000
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #eee' }}>
                            <strong style={{ fontSize: '18px' }}>Filtros</strong>
                            <span style={{ color: '#666' }}>{produtos.length} Resultados</span>
                            <button onClick={() => setIsFilterOpen(false)} style={{
                                border: 'none', background: 'transparent', fontSize: '24px', cursor: 'pointer'
                            }}>×</button>
                        </div>
                        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 20px' }}>
                            <FilterSection />
                        </div>
                        <div style={{ borderTop: '1px solid #eee', padding: '12px 20px', display: 'flex', gap: '12px' }}>
                            <button onClick={clearAllFilters} style={{
                                flex: 1, borderRadius: '12px', padding: '12px', border: '1px solid #ddd',
                                background: '#fff', fontWeight: 600, cursor: 'pointer'
                            }}>Limpar</button>
                            <button onClick={() => setIsFilterOpen(false)} style={{
                                flex: 1, borderRadius: '12px', padding: '12px', border: 'none',
                                background: '#000', color: '#fff', fontWeight: 700, cursor: 'pointer'
                            }}>Aplicar</button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Store
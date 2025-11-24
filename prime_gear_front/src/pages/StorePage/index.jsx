import CategoryNav from "../../components/CategoryNav"
import React, { useState, useEffect, useRef } from 'react';
import { Heart, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';
import ProductCard from "../../components/ProductCard";
import Email from '../../assets/images/e-mail.svg'
import notebook from '../../assets/images/laptop-comprar.png'
import desktop from '../../assets/images/desktopPC.png'
import fone from '../../assets/images/foneJBL.png'
import axios from 'axios'

function Store() {

    const [produtos, setProdutos] = useState([])
    const [categorias, setCategorias]=useState([])
    const [marcas, setMarcas]=useState([])

    

    console.log(categorias);

    const [currentPage, setCurrentPage] = useState(1);
    const [expandedFilters, setExpandedFilters] = useState({
        categoria: true,
        marca: true,
        preco: false,
        capacidadeSSD: false,
        avaliacoes: false,
        memoriaRAM: false,
        sistemaOperacional: false,
        tamanhoTela: false,
        processador: false
    });

    const [selectedBrands, setSelectedBrands] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [sidebarHeight, setSidebarHeight] = useState('auto');
    const [isMobile, setIsMobile] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const sidebarRef = useRef(null);
    const paginationRef = useRef(null);
    const containerRef = useRef(null);

    const itemsPerPage = 6;
    
    
    
    

    const totalPages = Math.ceil(produtos.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = produtos.slice(startIndex, endIndex);

    async function getCats(){
        try {
            const response= await axios.get('http://localhost:8080/get-categorias')
            setCategorias(response.data)
       
        } catch (error) {
            console.log(error);
        }
    }
    async function getMarcas(){
        try {
            const response= await axios.get('http://localhost:8080/get-marcas')
            setMarcas(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getCats()
        getMarcas()
    },[])

    const toggleFilter = (filterName) => {
        setExpandedFilters(prev => ({
            ...prev,
            [filterName]: !prev[filterName]
        }));
    };

    const toggleBrand = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    const toggleFavorite = (productId) => {
        setFavorites(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    async function obterProdutos() {
        try {
            const response = await axios.get('http://localhost:8080/produtos-adm')
            setProdutos(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obterProdutos()
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

            // Calcula quando a sidebar deve parar (quando chegar na paginação)
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

    const renderPagination = () => {
        const pages = [];

        // Botão anterior
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

        // Primeira página
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

        // Páginas próximas à atual
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

        // Última página
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

        // Botão próximo
        pages.push(
            <button
                key="next"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid #ddd',
                    backgroundColor: 'white',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: currentPage === totalPages ? 0.5 : 1
                }}
            >
                →
            </button>
        );

        return pages;
    };
    return (
        <>
            <CategoryNav></CategoryNav>
            <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '40px 20px' }}>
                <div ref={containerRef} style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '40px', position: 'relative' }}>

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
                            maxHeight: sidebarHeight,
                            overflowY: 'auto'
                        }}
                    >
                        <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', color: '#333' }}>Filtros</h2>

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
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '8px 0',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    color: 'black'
                                                }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedBrands.includes(cat.nome_cat)}
                                                    onChange={() => toggleBrand(cat.nome_cat)}
                                                    style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        marginRight: '10px',
                                                        cursor: 'pointer'
                                                    }}
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
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '8px 0',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    color: 'black'
                                                }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedBrands.includes(marca.nome_marca)}
                                                    onChange={() => toggleBrand(marca.nome_marca)}
                                                    style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        marginRight: '10px',
                                                        cursor: 'pointer'
                                                    }}
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
                            </div>

                            {/* Capacidade SSD */}
                            <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
                                <button
                                    onClick={() => toggleFilter('capacidadeSSD')}
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
                                    Capacidade SSD
                                    {expandedFilters.capacidadeSSD ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                            </div>

                            {/* Avaliações */}
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
                            </div>

                            {/* Memória RAM */}
                            <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
                                <button
                                    onClick={() => toggleFilter('memoriaRAM')}
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
                                    Memória RAM
                                    {expandedFilters.memoriaRAM ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                            </div>

                            {/* Sistema Operacional */}
                            <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
                                <button
                                    onClick={() => toggleFilter('sistemaOperacional')}
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
                                    Sistema Operacional
                                    {expandedFilters.sistemaOperacional ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                            </div>

                            {/* Tamanho da Tela */}
                            <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
                                <button
                                    onClick={() => toggleFilter('tamanhoTela')}
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
                                    Tamanho da Tela
                                    {expandedFilters.tamanhoTela ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                            </div>

                            {/* Processador */}
                            <div style={{ marginBottom: '16px' }}>
                                <button
                                    onClick={() => toggleFilter('processador')}
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
                                    Processador
                                    {expandedFilters.processador ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>
                    )}

                    {/* Conteúdo Principal */}
                    <div style={{ flex: 1 }}>
                        {/* Barra de ações mobile */}
                        {isMobile && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <button onClick={()=>setIsFilterOpen(true)} style={{
                                    padding: '10px 16px',
                                    borderRadius: '999px',
                                    border: '1px solid #000',
                                    background: '#fff',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}>Filtros</button>
                                <span style={{ color: '#333' }}>{produtos.length} resultados</span>
                            </div>
                        )}
                        {/* Grid de Produtos */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '24px',
                            marginBottom: '60px'
                        }}>
                            {
                                produtos.map((prod) => (
                                    <>
                                        <ProductCard title={prod.nome_prod} price={prod.preco_prod.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })} oldPrice={prod.preco_prod.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })} image={prod.url_img_prod}></ProductCard>
                                    </>
                                ))
                            }

                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                        </div>

                        {/* Paginação */}
                        <div
                            ref={paginationRef}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '8px',
                                paddingTop: '40px',
                                paddingBottom: '40px'
                            }}
                        >
                            {renderPagination()}
                        </div>


                    </div>

                </div>

            </div>
            {/* Drawer de filtros (mobile) */}
            {isMobile && isFilterOpen && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 }}>
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bottom: 0,
                        width: '100%',
                        maxWidth: '520px',
                        background: '#fff',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        boxShadow: '0 -10px 24px rgba(0,0,0,0.2)',
                        maxHeight: '85vh',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #eee' }}>
                            <strong style={{ fontSize: '18px' }}>Filtros</strong>
                            <span style={{ color: '#666' }}>{produtos.length} Resultados</span>
                            <button onClick={()=>setIsFilterOpen(false)} style={{ border: 'none', background: 'transparent', fontSize: '18px' }}>×</button>
                        </div>
                        {selectedBrands.length > 0 && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '12px 20px' }}>
                                {selectedBrands.map((chip)=> (
                                    <button key={chip} onClick={()=>toggleBrand(chip)} style={{
                                        border: '1px solid #000', borderRadius: '999px', padding: '6px 12px', background: '#fff', cursor: 'pointer'
                                    }}>{chip} ×</button>
                                ))}
                            </div>
                        )}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 20px' }}>
                            <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
                                <button
                                    onClick={() => toggleFilter('categoria')}
                                    style={{
                                        width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '15px', fontWeight: '500', color: 'black'
                                    }}
                                >
                                    Categoria
                                    {expandedFilters.categoria ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                {expandedFilters.categoria && (
                                    <div style={{ paddingTop: '12px' }}>
                                        {categorias.map(cat => (
                                            <label key={cat.nome_cat} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', cursor: 'pointer', fontSize: '14px', color: 'black' }}>
                                                <input type="checkbox" checked={selectedBrands.includes(cat.nome_cat)} onChange={() => toggleBrand(cat.nome_cat)} style={{ width: '16px', height: '16px', marginRight: '10px', cursor: 'pointer' }} />
                                                {cat.nome_cat}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
                                <button onClick={() => toggleFilter('marca')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '15px', fontWeight: '500', color: 'black' }}>
                                    Marca
                                    {expandedFilters.marca ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                {expandedFilters.marca && (
                                    <div style={{ paddingTop: '12px' }}>
                                        {marcas.map(marca => (
                                            <label key={marca} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', cursor: 'pointer', fontSize: '14px', color: 'black' }}>
                                                <input type="checkbox" checked={selectedBrands.includes(marca)} onChange={() => toggleBrand(marca)} style={{ width: '16px', height: '16px', marginRight: '10px', cursor: 'pointer' }} />
                                                {marca}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div style={{ marginBottom: '16px', borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
                                <button onClick={() => toggleFilter('preco')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '15px', fontWeight: '500', color: 'black' }}>
                                    Faixa de preço
                                    {expandedFilters.preco ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                            </div>
                        </div>
                        <div style={{ borderTop: '1px solid #eee', padding: '12px 20px', display: 'flex', gap: '12px' }}>
                            <button onClick={()=>{ setSelectedBrands([]); }} style={{ flex: 1, borderRadius: '12px', padding: '12px', border: '1px solid #ddd', background: '#fff', fontWeight: 600 }}>Remover todos</button>
                            <button onClick={()=>setIsFilterOpen(false)} style={{ flex: 1, borderRadius: '12px', padding: '12px', border: 'none', background: '#0b74ff', color: '#fff', fontWeight: 700 }}>Aplicar filtros</button>
                        </div>
                    </div>
                </div>
            )}
            <div style={{
                width: '100%',
                background: '',
                height: '25vh',
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <div style={{
                    width: "23%",
                    background: "#e1e1e1",
                    height: "75%",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <img src={notebook} alt="" style={{ width: "30%" }} />
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "12px",              // 👈 espaçamento fixo entre texto e botão
                        height: "50%"
                    }}>
                        <p style={{ fontSize: "1.3rem", textAlign: "center" }}>Laptops</p>
                        <button style={{
                            background: "black",
                            color: "white",
                            padding: "12px 20px",
                            borderRadius: "60px",
                            textAlign: "center",
                            cursor: "pointer",
                            border: "none",
                            transition: "0.3s",
                        }}>
                            Comprar Agora
                        </button>
                    </div>
                </div>

                <div style={{
                    width: "23%",
                    background: "#e1e1e1",
                    height: "75%",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <img src={fone} alt="" style={{ width: "30%" }} />
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "12px",              // 👈 espaçamento fixo entre texto e botão
                        height: "50%"
                    }}>
                        <p style={{ fontSize: "1.3rem", textAlign: "center" }}>Fones de Ouvido</p>
                        <button style={{
                            background: "black",
                            color: "white",
                            padding: "12px 20px",
                            borderRadius: "60px",
                            textAlign: "center",
                            cursor: "pointer",
                            border: "none",
                            transition: "0.3s",
                        }}>
                            Comprar Agora
                        </button>
                    </div>
                </div>

                <div style={{
                    width: "23%",
                    background: "#e1e1e1",
                    height: "75%",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <img src={desktop} alt="" style={{ width: "30%" }} />
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "12px",              // 👈 espaçamento fixo entre texto e botão
                        height: "50%"
                    }}>
                        <p style={{ fontSize: "1.3rem", textAlign: "center" }}>Desktops</p>
                        <button style={{
                            background: "black",
                            color: "white",
                            padding: "12px 20px",
                            borderRadius: "60px",
                            textAlign: "center",
                            cursor: "pointer",
                            border: "none",
                            transition: "0.3s",
                        }}>
                            Comprar Agora
                        </button>

                    </div>
                </div>
            </div>



            <div style={{
                width: '100%',
                background: '#2f2f2f',
                height: '12vh',
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "100px"
            }}>
                <div style={{
                    width: "70%",
                    height: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "56%"
                    }}>
                        <img src={Email} alt="" style={{ width: "10%" }} />
                        <div>
                            <p style={{ color: "#f5f5f5", fontSize: "1.5rem", fontWeight: "600" }}>Cadastre-se para receber descontos</p>
                            <p style={{ color: "#f5f5f5", fontSize: "1.2rem" }}>Cadastre-se para receber ofertas e atualizações da empresa.</p>
                        </div>

                    </div>
                    <div style={{
                        background: "#5c595933",
                        width: "40%",
                        height: "85%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: "40px",
                        paddingRight: "5%"
                    }}>
                        <input placeholder="Seu e-mail" type="text" style={{
                            background: "transparent",
                            outline: "none",
                            height: "90%",
                            paddingLeft: "25px",
                            fontSize: "16px",
                            color: "white"
                        }} />
                        <div>
                            <button style={{
                                padding: "12px",
                                borderRadius: "60px",
                                width: "140%"
                            }}>Increver-se</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Store

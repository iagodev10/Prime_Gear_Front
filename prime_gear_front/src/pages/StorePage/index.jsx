import CategoryNav from "../../components/CategoryNav"
import React, { useState, useEffect, useRef } from 'react';
import { Heart, ChevronDown, ChevronUp, ShoppingCart } from 'lucide-react';
import ProductCard from "../../components/ProductCard";
import Email from '../../assets/images/e-mail.svg'
import notebook from '../../assets/images/laptop-comprar.png'
import desktop from '../../assets/images/desktopPC.png'
import fone from '../../assets/images/foneJBL.png'


function Store() {

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

    const sidebarRef = useRef(null);
    const paginationRef = useRef(null);
    const containerRef = useRef(null);

    const itemsPerPage = 6;

    // Mock data - 18 produtos para demonstrar paginação
    const produtos = Array.from({ length: 18 }, (_, i) => ({
        id: i + 1,
        nome: `Notebook Lenovo ideaPad 1i, Intel Core i7-1255U, 12GB/512GB SSD...`,
        preco: 3524.02,
        precoVista: 3524.02,
        imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop'
    }));

    const marcas = ['ACER', 'ASUS', 'DELL', 'HP', 'LENOVO', 'SAMSUNG'];

    const totalPages = Math.ceil(produtos.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = produtos.slice(startIndex, endIndex);

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

    useEffect(() => {
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

        return () => window.removeEventListener('scroll', handleScroll);
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

                    {/* Sidebar de Filtros */}
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
                                        color: '#333'
                                    }}
                                >
                                    Categoria
                                    {expandedFilters.categoria ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
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
                                        color: '#333'
                                    }}
                                >
                                    Marca
                                    {expandedFilters.marca ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>

                                {expandedFilters.marca && (
                                    <div style={{ paddingTop: '12px' }}>
                                        {marcas.map(marca => (
                                            <label
                                                key={marca}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '8px 0',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    color: '#555'
                                                }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedBrands.includes(marca)}
                                                    onChange={() => toggleBrand(marca)}
                                                    style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        marginRight: '10px',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                                {marca}
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
                                        color: '#333'
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
                                        color: '#333'
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
                                        color: '#333'
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
                                        color: '#333'
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
                                        color: '#333'
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
                                        color: '#333'
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
                                        color: '#333'
                                    }}
                                >
                                    Processador
                                    {expandedFilters.processador ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Conteúdo Principal */}
                    <div style={{ flex: 1 }}>
                        {/* Grid de Produtos */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '24px',
                            marginBottom: '60px'
                        }}>
                            <ProductCard></ProductCard>
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
                    background: "rgb(227 208 208)",
                    height: "75%",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <img src={notebook} alt="" style={{ width: "30%" }} />
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "50%"
                    }}>
                        <p style={{ fontSize: "1.3rem" }}>Laptops</p>
                        <button style={{
                            background: "black",
                            color: "white",
                            padding: "10px",
                            borderRadius: "60px",
                            width: "100%"
                        }}>Comprar Agora</button>
                    </div>
                </div>

                <div style={{
                    width: "23%",
                    background: "rgb(227 208 208)",
                    height: "75%",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <img src={fone} alt="" style={{ width: "30%" }} />
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "50%"
                    }}>
                        <p style={{ fontSize: "1.3rem" }}>Fones de Ouvido</p>
                        <button style={{
                            background: "black",
                            color: "white",
                            padding: "10px",
                            borderRadius: "60px",
                            width: "100%"
                        }}>Comprar Agora</button>
                    </div>
                </div>

                <div style={{
                    width: "23%",
                    background: "rgb(227 208 208)",
                    height: "75%",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}>
                    <img src={desktop} alt="" style={{ width: "30%" }} />
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "50%"
                    }}>
                        <p style={{ fontSize: "1.3rem" }}>Desktops</p>
                        <button style={{
                            background: "black",
                            color: "white",
                            padding: "10px",
                            borderRadius: "60px",
                            width: "100%"
                        }}>Comprar Agora</button>
                    </div>
                </div>
            </div>



            <div style={{
                width: '100%',
                background: '#383333',
                height: '17vh',
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "100px"
            }}>
                <div style={{
                    width: "60%",
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
                        <img src={Email} alt="" style={{ width: "14%" }} />
                        <div>
                            <p style={{ color: "white", fontSize: "1.5rem" }}>Cadastra-se para receber descontos</p>
                            <p style={{ color: "white", fontSize: "1.2rem" }}>Cadastra-se para receber descontos</p>
                        </div>

                    </div>
                    <div style={{
                        background: "#5c595933",
                        width: "40%",
                        height: "65%",
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
                            paddingLeft: "5%",
                            color: "white"
                        }} />
                        <div>
                            <button style={{
                                padding: "10px",
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
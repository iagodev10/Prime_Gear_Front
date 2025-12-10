import React, { useState, useEffect } from "react";
import { FiHeart, FiCheckCircle } from "react-icons/fi";
import axios from "axios";

import laptopvendaImage from '../../assets/images/laptopvenda.png';
import { createPortal } from 'react-dom';

import {
    Container,
    ImageContainer,
    Info,
    ProdTitle,
    Price,
    PriceInfo,
    Cart,
    Buy
} from "./style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


const toastContainerStyle = {
    position: 'fixed',
    top: '80px',
    right: '20px',
    zIndex: 1000,
    animation: 'slideInRight 0.4s ease-out'
};

const toastStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '16px 20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    minWidth: '300px',
    maxWidth: '400px',
    border: '2px solid #4CAF50'
};

const iconStyle = {
    color: '#4CAF50',
    fontSize: '24px',
    flexShrink: 0
};

const textContainerStyle = {
    flex: 1
};

const titleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    color: '#000',
    marginBottom: '4px'
};

const messageStyle = {
    fontSize: '14px',
    color: '#000',
    lineHeight: '1.4'
};


const CartToast = ({ isVisible, productTitle }) => {
    if (!isVisible) return null;

  
    return createPortal(
        <div style={toastContainerStyle}>
            <style>
                {`
                    @keyframes slideInRight {
                        from { 
                            opacity: 0;
                            transform: translateX(100%);
                        }
                        to { 
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    /* Removi o slideOutRight pois não estava sendo usado na lógica atual, 
                       mas se quiser usar, mantenha */
                `}
            </style>
            <div style={toastStyle}>
                <FiCheckCircle style={iconStyle} />
                <div style={textContainerStyle}>
                    <div style={titleStyle}>Produto adicionado!</div>
                    <div style={messageStyle}>{productTitle}</div>
                </div>
            </div>
        </div>,
        document.body 
    );
};

const ProductCard = ({
    title = "Notebook Lenovo IdeaPad 1i, Intel Core i7-1255U, 12GB/512GB SSD...",
    price = "R$ 3.524,02",
    priceInfo = "no pix",
    image = laptopvendaImage, 
    onAddToCart,
    onBuy,
    idProd
}) => {
    const navigate = useNavigate();
    const [isAdding, setIsAdding] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000); 

            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const handleAddToCart = async (e) => {
        e.stopPropagation(); 
        
        if (isAdding) return; 
        if (!user) {
            navigate('/login');
            return;
        }
        
        setIsAdding(true);
        
        try {
            const priceFloat = parseFloat(price.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());
            
            const response = await axios.post(
                'http://primegear.site:8080/add-to-cart/' + user.cod_user,
                {
                    cod_produto: idProd,
                    quantidade: 1,
                    preco_unitario: priceFloat
                },
                {
                    withCredentials: true
                }
            );

            if (response.data.success) {
                setShowToast(true);
                
                if (onAddToCart) {
                    onAddToCart();
                }
            }
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
            
            if (error.response?.status === 401) {
                alert('Você precisa estar logado para adicionar itens ao carrinho');
                navigate('/login');
            }
        } finally {
            setIsAdding(false);
        }
    };

    const handleBuy = async (e) => {
        e.stopPropagation(); 
        
        await handleAddToCart(e);
        
        if (onBuy) {
            onBuy();
        } else {
            navigate('/checkout');
        }
    };

    return (
        <>
            <Container onClick={() => navigate('/detalhe/' + idProd)} style={{cursor: 'pointer'}}>
                <ImageContainer>
                    <img src={image} alt={title} />
                </ImageContainer>

                <Info>
                    <ProdTitle>{title}</ProdTitle>

                    <div className="price-row" style={{display:'block'}}>
                        <Price>{price}</Price><br />
                        <PriceInfo style={{marginTop:'-20px'}}>{priceInfo}</PriceInfo>
                    </div>
                </Info>

                <div>
                    <Cart onClick={handleAddToCart} disabled={isAdding}>
                        {isAdding ? 'Adicionando...' : 'Adicionar ao carrinho'}
                    </Cart>
                    <Buy onClick={handleBuy}>Comprar agora</Buy>
                </div>
            </Container>

            <CartToast 
                isVisible={showToast}
                productTitle={title}
            />
        </>
    );
};

export default ProductCard;
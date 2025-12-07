import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import axios from "axios";

import laptopvendaImage from '../../assets/images/laptopvenda.png';



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
import { Logo } from "../Header/style";

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
    const {user}=useAuth()
    console.log(user);
    const handleAddToCart = async (e) => {
        e.stopPropagation(); 
        
        if (isAdding) return; 
        
        setIsAdding(true);
        
        try {
        
            const priceFloat = parseFloat(price.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());
            
            const response = await axios.post(
                'http://localhost:8080/add-to-cart/'+user.cod_user,
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
                alert('Produto adicionado ao carrinho!');
                
            
                if (onAddToCart) {
                    onAddToCart();
                }
            }
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
            
            if (error.response?.status === 401) {
                alert('Você precisa estar logado para adicionar itens ao carrinho');
                navigate('/login');
            } else {
                alert('Erro ao adicionar produto ao carrinho. Tente novamente.');
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
        <Container onClick={() => navigate('/detalhe/' + idProd)} style={{cursor: 'pointer'}}>
            <ImageContainer>
                <img src={image} alt={title} />
            </ImageContainer>

            <Info>
                <ProdTitle>{title}</ProdTitle>

                <div className="price-row">
                    <Price>{price}</Price>
                    <PriceInfo>{priceInfo}</PriceInfo>
                </div>

              
            </Info>

          
            <div>
                <Cart onClick={handleAddToCart} disabled={isAdding}>
                    {isAdding ? 'Adicionando...' : 'Adicionar ao carrinho'}
                </Cart>
                <Buy onClick={handleBuy}>Comprar agora</Buy>
            </div>
        </Container>
    );
};

export default ProductCard;
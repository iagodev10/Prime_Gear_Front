import React from "react";
import { FiHeart } from "react-icons/fi";

// 1. IMPORTA a imagem (ajuste o caminho se estiver errado)
import laptopvendaImage from '../../assets/images/laptopvenda.png';

// 2. IMPORTA todos os blocos de estilo, incluindo o novo OldPrice
import {
    Container,
    ImageContainer,
    Info,
    ProdTitle,
    Price,
    PriceInfo,
    OldPrice, // Adicionado
    Cart,
    Buy
} from "./style";

const ProductCard = ({
    title = "Notebook Lenovo IdeaPad 1i, Intel Core i7-1255U, 12GB/512GB SSD...",
    price = "R$ 3.524,02",
    priceInfo = "no pix",
    oldPrice = "R$ 3.800,00",
    image = laptopvendaImage, 
    onAddToCart,
    onBuy
}) => {

    return (
        <Container>
            <ImageContainer>
                <img src={image} alt={title} />
                <FiHeart />
            </ImageContainer>

            <Info>
                <ProdTitle>{title}</ProdTitle>

                <div className="price-row">
                    <Price>{price}</Price>
                    <PriceInfo>{priceInfo}</PriceInfo>
                </div>

                <OldPrice>{oldPrice}</OldPrice>
            </Info>

            {/* Os botões ficam fora do <Info> para alinhar no rodapé do card */}
            <div>
                <Cart onClick={onAddToCart}>Adicionar ao carrinho</Cart>
                <Buy onClick={onBuy}>Comprar agora</Buy>
            </div>
        </Container>
    );
};

export default ProductCard;

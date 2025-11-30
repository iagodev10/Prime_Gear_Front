import React from "react";
import { FiHeart } from "react-icons/fi";


import laptopvendaImage from '../../assets/images/laptopvenda.png';


import {
    Container,
    ImageContainer,
    Info,
    ProdTitle,
    Price,
    PriceInfo,
    OldPrice, 
    Cart,
    Buy
} from "./style";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
    title = "Notebook Lenovo IdeaPad 1i, Intel Core i7-1255U, 12GB/512GB SSD...",
    price = "R$ 3.524,02",
    priceInfo = "no pix",
    oldPrice = "R$ 3.800,00",
    image = laptopvendaImage, 
    onAddToCart,
    onBuy,
    idProd
}) => {
    const navigate=useNavigate()
    return (
        <Container onClick={()=>navigate('/detalhe/'+idProd)} style={{cursor:'pointer'}}>
            <ImageContainer>
                <img src={image} alt={title} />
               
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

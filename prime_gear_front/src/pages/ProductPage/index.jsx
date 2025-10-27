import React, { useState } from "react";

import Image1 from "../../assets/images/desktop-ilustration.png"
import Image2 from "../../assets/images/desktop-ilustration (2).png"
import Image3 from "../../assets/images/desktop-ilustration (3).png"
import Image4 from "../../assets/images/desktop-ilustration (4).png"

// Imports dos seus Styled Components (note que NÃO importamos "styled-components" aqui)
import {
    PageContainer, ProductContainer, LeftColumn, MainImage, Miniaturas, Thumbnail,
    RightColumn, ProdName, PriceBlock, MainPrice, PixInfo, OtherPrice, QuantitySelector, QuantityLabel,
    QuantityButton, QuantityValue, Divider, ButtonBlock, BuyNow, AddCart, CEP, CepLabel, InputCep, CepInput, CepButton,
} from './style'; 

const produtos = {
    name: "Gabinete Gamer Rise Mode Galaxy Glass, Mid Tower, ATX, Lateral e Frontal em Vidro Temperado, Preto - RM-GA-GG-FB",
    price: "R$ 496,99",
    pixInfo: "à vista no PIX (15% de desconto)",
    otherPrice: "ou R$ 552,93 em 4x de R$ 138,23 sem juros",
    images: [
        Image1,
        Image2,
        Image3,
        Image4
    ],
    description: `
      O Gabinete Gamer Rise Mode Galaxy Glass é a escolha ideal para quem busca estilo e desempenho.
        Possui lateral e frontal em vidro temperado, design moderno com iluminação RGB e espaço para excelente ventilação.
      
        Projetado com material de altíssima qualidade e acabamento premium, este gabinete Mid Tower oferece um
      layout de fácil instalação e amplo espaço interno, com suporte para placas-mãe ATX, M-ATX e ITX,
      e placas de vídeo de até 400mm.
      `,
    especificacoes: {
        "Marca": "Rise Mode",
        "Modelo": "Galaxy Glass (RM-GA-GG-FB)",
        "Cor": "Preto",
        "Formato": "Mid Tower",
        "Material": "Aço SPCC, Vidro Temperado",
        "Placa-mãe Suportada": "ATX, M-ATX, ITX",
        "Slots de Expansão": "7",
        "Baias": "2x 3.5” HDD | 2x 2.5” SSD",
        "Painel Frontal I/O": "1x USB 3.0, 1x USB 2.0, 1x USB-C 3.2, Áudio HD (Fone e Microfone)",
        "Painel Lateral": "Vidro Temperado",
        "Painel Frontal": "Vidro Temperado",
        "Suporte para Placa de Vídeo (GPU)": "Até 400mm",
        "Suporte para Air Cooler (CPU)": "Até 157mm",
        "Suporte para Fans": "Suporta até 10 fans (Não inclusos) \n- Superior: 3x 120mm \n- Lateral: 3x 120mm \n- Inferior: 3x 120mm \n- Traseira: 1x 120mm",
        "Suporte para Water Cooler": "- Superior: 360mm \n- Lateral: 360mm \n- Inferior: 360mm \n- Traseira: 120mm",
        "Dimensões (C x L x A)": "440mm x 280mm x 427mm"
    },
};

const ProductPage = () => {

    const [activeImage, setActiveImage] = useState(produtos.images[0]);
    const [quantity, setQuantity] = useState(1);

    const Diminuir = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const Aumentar = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    return (
        <PageContainer>
            <ProductContainer>
                <LeftColumn>
                    <MainImage src={activeImage} alt={produtos.name} />
                    <Miniaturas>
                        {produtos.images.map((img, index) => (
                            <Thumbnail
                                key={index}
                                src={img}
                                isActive={img === activeImage}
                                onClick={() => setActiveImage(img)}
                            />
                        ))}
                    </Miniaturas>
                </LeftColumn>

                <RightColumn>
                    <ProdName>{produtos.name}</ProdName>

                    <Divider />

                    <PriceBlock>
                        <MainPrice>{produtos.price}</MainPrice>
                        <PixInfo>{produtos.pixInfo}</PixInfo>
                        <OtherPrice>{produtos.otherPrice}</OtherPrice>
                    </PriceBlock>

                    <Divider />

                    <QuantitySelector>
                        <QuantityLabel>Quantidade:</QuantityLabel>
                        <QuantityButton onClick={Diminuir} disabled={quantity === 1}>-</QuantityButton>
                        <QuantityValue>{quantity}</QuantityValue>
                        <QuantityButton onClick={Aumentar}>+</QuantityButton>
                    </QuantitySelector>

                    <ButtonBlock>
                        <BuyNow>Comprar agora</BuyNow>
                        <AddCart>Adicionar ao carrinho</AddCart>
                    </ButtonBlock>

                    <CEP>
                        <CepLabel>Calcular frete:</CepLabel>
                        <InputCep>
                            <CepInput type="text" placeholder="Digite seu CEP" />
                            <CepButton>Calcular</CepButton>
                        </InputCep>
                    </CEP>
                </RightColumn>
            </ProductContainer>
        </PageContainer>
    )
}

export default ProductPage;
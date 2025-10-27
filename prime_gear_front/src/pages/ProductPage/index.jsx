import React, { useState } from "react";
import { FiShoppingCart, FiTruck, FiShield, FiCreditCard } from "react-icons/fi";

import Image1 from "../../assets/images/desktop-ilustration.png"
import Image2 from "../../assets/images/desktop-ilustration (2).png"
import Image3 from "../../assets/images/desktop-ilustration (3).png"
import Image4 from "../../assets/images/desktop-ilustration (4).png"

import ProductCarousel from '../../components/ProductCarousel';
import EmailSignUp from '../../components/EmailSignUp'

// Imports dos seus Styled Components (note que NÃO importamos "styled-components" aqui)
import {
    PageContainer, ProductContainer, LeftColumn, MainImage, Miniaturas, Thumbnail,
    RightColumn, ProdName, PriceBlock, MainPrice, PixInfo, OtherPrice, QuantitySelector, QuantityLabel,
    QuantityButton, QuantityValue, Divider, ButtonBlock, BuyNow, AddCart, CEP, CepLabel, InputCep, CepInput, CepButton,
    SelectorRow, QuantityPill, StockInfo, FeaturesContainer, FeatureItem, FeatureIconCircle, FeatureText,
    TabSection, TabHeader, TabButton, TabContent,
    SpecTable, SpecRow, SpecCell, ReviewList, ReviewItem, ReviewAuthor, ReviewComment, Texto
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
    stock: 50,
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
    avaliacoes: [
        { id: 1, author: "João Silva", rating: 5, comment: "Gabinete espetacular! Muito espaçoso, fácil de montar e o vidro dá um visual incrível. Recomendo!" },
        { id: 2, author: "Maria Oliveira", rating: 4, comment: "Lindo e com bom fluxo de ar (depois que instalei os fans). O espaço para cable management na traseira é um pouco justo, mas dá conta." },
        { id: 3, author: "Carlos Souza", rating: 5, comment: "Qualidade de construção top. Valeu cada centavo. Atenção que ele não vem com fans, tem que comprar à parte." }
    ]
};

const ProductPage = () => {

    const [activeImage, setActiveImage] = useState(produtos.images[0]);
    const [quantity, setQuantity] = useState(1);

    const [activeTab, setActiveTab] = useState('descricao');

    const Diminuir = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const Aumentar = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'especificacoes':
                return <ProductSpecs specs={produtos.especificacoes} />;
            case 'avaliacoes':
                return <ProductReviews reviews={produtos.avaliacoes} />;
            case 'descricao':
            default:
                // Usamos <div style> para preservar a quebra de linha do texto
                return <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                    {produtos.description}
                </div>;
        }
    };

    const ProductSpecs = ({ specs }) => {
        return (
            <SpecTable>
                <tbody>
                    {Object.entries(specs || {}).map(([key, value]) => (
                        <SpecRow key={key}>
                            <SpecCell as="th">{key}</SpecCell>
                            <SpecCell>{value}</SpecCell>
                        </SpecRow>
                    ))}
                </tbody>
            </SpecTable>
        );
    };

    // Componente para renderizar as avaliações
    const ProductReviews = ({ reviews }) => {
        return (
            <ReviewList>
                {(reviews || []).map(review => (
                    <ReviewItem key={review.id}>
                        <ReviewAuthor>{review.author} - ⭐ {review.rating}/5</ReviewAuthor>
                        <ReviewComment>{review.comment}</ReviewComment>
                    </ReviewItem>
                ))}
            </ReviewList>
        );
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


                        <SelectorRow>


                            <QuantityPill>
                                <QuantityButton onClick={Diminuir} disabled={quantity === 1}>-</QuantityButton>
                                <QuantityValue>{quantity}</QuantityValue>
                                <QuantityButton onClick={Aumentar}>+</QuantityButton>
                            </QuantityPill>


                            <StockInfo>{produtos.stock} unidades disponíveis</StockInfo>

                        </SelectorRow>
                    </QuantitySelector>

                    <ButtonBlock>
                        <AddCart><FiShoppingCart /> Adicionar ao carrinho</AddCart>
                        <BuyNow>Comprar agora</BuyNow>
                    </ButtonBlock>

                    <CEP>
                        <CepLabel>Calcular Frete:</CepLabel>
                        <InputCep>
                            <CepInput type="text" placeholder="00000-000" />
                            <CepButton>Calcular</CepButton>
                        </InputCep>
                    </CEP>

                    <FeaturesContainer>
                        <FeatureItem>
                            <FeatureIconCircle bgColor="#dfe8ff">
                                <FiTruck size={24} color="#007bff" />
                            </FeatureIconCircle>
                            <FeatureText>Frete grátis</FeatureText>
                        </FeatureItem>

                        <FeatureItem>
                            <FeatureIconCircle bgColor="#d6f8d7">
                                <FiShield size={24} color="#28a745" />
                            </FeatureIconCircle>
                            <FeatureText>Compra segura</FeatureText>
                        </FeatureItem>

                        <FeatureItem>
                            <FeatureIconCircle bgColor="#f7d9ff">
                                <FiCreditCard size={24} color="#aa46c6" />
                            </FeatureIconCircle>
                            <FeatureText>Parcele sem juros</FeatureText>
                        </FeatureItem>
                    </FeaturesContainer>

                </RightColumn>
            </ProductContainer>

            <TabSection>
                <TabHeader>
                    <TabButton
                        isActive={activeTab === 'descricao'}
                        onClick={() => setActiveTab('descricao')}
                    >
                        Descrição
                    </TabButton>
                    <TabButton
                        isActive={activeTab === 'especificacoes'}
                        onClick={() => setActiveTab('especificacoes')}
                    >
                        Especificações
                    </TabButton>
                    <TabButton
                        isActive={activeTab === 'avaliacoes'}
                        onClick={() => setActiveTab('avaliacoes')}
                    >
                        Avaliações
                    </TabButton>
                </TabHeader>
                <TabContent>
                    {renderTabContent()}
                </TabContent>
            </TabSection>

            <Texto>Produtos correspondentes</Texto>

            <ProductCarousel />
            <EmailSignUp />

        </PageContainer>
    )
}

export default ProductPage;
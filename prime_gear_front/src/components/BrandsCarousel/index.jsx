import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation';

import { Container, Title, Card, SwiperContainer } from './style';

import Asus from '../../assets/images/Asus.png';
import Dell from '../../assets/images/Dell.png';
import Samsung from '../../assets/images/samsung.png'
import Apple from '../../assets/images/apple-logo.svg'
import Lenovo from '../../assets/images/lenovo.png'


const Marcas = [
    { id: 1, name: "Asus", image: Asus },
    { id: 2, name: "Dell", image: Dell },
    { id: 3, name: "Samsung", image: Samsung },
    { id: 4, name: "Apple", image: Apple },
    { id: 5, name: "Lenovo", image: Lenovo },
    { id: 6, name: "Asus", image: Asus },
    { id: 7, name: "Dell", image: Dell },
    { id: 8, name: "Samsung", image: Samsung },
]

const BrandsCarousel = ({marcas}) => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleBrandClick = (brandName) => {
        console.log('Navegando para loja com marca:', brandName);
        
        navigate('/loja', {
            state: {
                selectedBrand: brandName
            },
            replace: false
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container>
            <Title>Nossas Marcas</Title>

            <SwiperContainer>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={isMobile ? false : true}
                    loop={isMobile}
                    autoplay={isMobile ? { delay: 2500, disableOnInteraction: false } : false}
                    slidesPerView={5}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 12 },
                        480: { slidesPerView: 3, spaceBetween: 16 },
                        768: { slidesPerView: 4, spaceBetween: 20 },
                        1024: { slidesPerView: 5, spaceBetween: 25 }
                    }}
                >
                    {marcas.map((brand) => (
                        <SwiperSlide key={brand.cod_marca}>
                            <Card onClick={() => handleBrandClick(brand.nome_marca)}>
                                <img src={brand.url_nome_img_marca} alt={brand.nome_marca} />
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperContainer>
        </Container>
    )
}

export default BrandsCarousel;

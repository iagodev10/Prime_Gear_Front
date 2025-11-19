import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation';

import {Container, Title, Card, SwiperContainer} from './style';

import Asus from '../../assets/images/Asus.png';
import Dell from '../../assets/images/Dell.png';
import Samsung from '../../assets/images/samsung.png'
import Apple from '../../assets/images/apple-logo.svg'
import Lenovo from '../../assets/images/lenovo.png'


const Marcas = [
    { id: 1, name: "Asus", image: Asus },
    { id: 1, name: "Asus", image: Dell },
    { id: 1, name: "Samsung", image: Samsung },
    { id: 1, name: "Apple", image: Apple },
    { id: 1, name: "Lenovo", image: Lenovo },
    { id: 1, name: "Asus", image: Asus },
    { id: 1, name: "Asus", image: Asus },
    { id: 1, name: "Asus", image: Asus },
]

const BrandsCarousel = () => {
    return (
        <Container>
            <Title>Nossas Marcas</Title>

            <SwiperContainer>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}

                    // Este carrossel tem mais itens visíveis
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 30 },
                        1024: { slidesPerView: 6, spaceBetween: 30 }
                    }}
                >
                    {Marcas.map((brand) =>(
                        <SwiperSlide key={brand.id}>
                            <Card>
                                <img src={brand.image} alt={brand.name} />
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperContainer>
        </Container>
    )
}

export default BrandsCarousel;
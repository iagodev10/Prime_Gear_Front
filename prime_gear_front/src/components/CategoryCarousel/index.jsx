import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

import DesktopImg from "../../assets/images/desktop.png";
import LaptopImg from "../../assets/images/laptop.png";
import Console from "../../assets/images/consoles.png";

const categorias = [
    {
        name: 'Desktops',
        image: DesktopImg,
    },
    {
        name: 'Laptops',
        image: LaptopImg,
    },
    {
        name: 'Consoles',
        image: Console,
    },
    {
        name: 'Laptops',
        image: LaptopImg,
    },
    {
        name: 'Desktops',
        image: Console,
    },
    {
        name: 'Laptops',
        image: LaptopImg,
    },
    {
        name: 'Desktops',
        image: DesktopImg,
    },
    {
        name: 'Laptops',
        image: LaptopImg,
    },
];


import { CarouselContainer, SwiperContainer, CategoryCard } from './style';

const CategoryCarousel = () => {
    return (
        <CarouselContainer>

            <SwiperContainer>
                <Swiper modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 12 },
                        480: { slidesPerView: 2, spaceBetween: 16 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                >
                    {categorias.map((cat, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <CategoryCard>
                                    <img src={cat.image} alt={cat.name} />
                                </CategoryCard>
                                <p className="category-name">{cat.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
            </SwiperContainer>
        </CarouselContainer>
    )
}

export default CategoryCarousel;
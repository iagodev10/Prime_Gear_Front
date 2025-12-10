import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";

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
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <CarouselContainer>

            <SwiperContainer>
                <Swiper modules={[Navigation, Autoplay]}
                    navigation={isMobile ? false : true}
                    loop={isMobile}
                    autoplay={isMobile ? { delay: 2500, disableOnInteraction: false } : false}
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

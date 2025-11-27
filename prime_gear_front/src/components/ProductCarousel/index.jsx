import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import ProductCard from '../ProductCard';
import laptopvendaImage from '../../assets/images/laptopvenda.png';

import { CarouselContainer, SectionTitle, SwiperContainer } from './style';


const mockProducts = [
  {
    id: 1,
    title: 'Notebook Lenovo IdeaPad 1i, Intel Core i7-1255U...',
    price: 'R$ 3.524,02',
    oldPrice: 'R$ 3.800,00',
    priceInfo: 'no pix',
    image: laptopvendaImage
  },
  {
    id: 2,
    title: 'Headset Gamer Sem Fio Logitech G535 LIGHTSPEED...',
    price: 'R$ 589,90',
    oldPrice: 'R$ 650,00',
    priceInfo: 'no pix',
    image: laptopvendaImage
  },
  {
    id: 3,
    title: 'Monitor Gamer Samsung Odyssey G32 32" Full HD...',
    price: 'R$ 1.599,99',
    oldPrice: 'R$ 1.800,00',
    priceInfo: 'no pix',
    image: laptopvendaImage
  },
  {
    id: 4,
    title: 'Console Sony PlayStation 5 Edição Digital...',
    price: 'R$ 3.799,00',
    oldPrice: 'R$ 4.000,00',
    priceInfo: 'no pix',
    image: laptopvendaImage
  },
  {
    id: 5,
    title: 'Teclado Mecânico Gamer Redragon Kumara, LED...',
    price: 'R$ 219,90',
    oldPrice: 'R$ 250,00',
    priceInfo: 'no pix',
    image: laptopvendaImage
  }
];


const ProductCarousel = ({ title }) => {
  return (
    <CarouselContainer>
      <SectionTitle>{title}</SectionTitle>

      <SwiperContainer>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={4}
          spaceBetween={25}
          breakpoints={{
            // Mobile pequeno - 2 cards por linha
            320: {
              slidesPerView: 2,
              spaceBetween: 6
            },
            // Mobile grande - 2 cards por linha
            480: {
              slidesPerView: 2,
              spaceBetween: 8
            },
            // Tablet - 3 cards por linha
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            // Desktop - 4 cards por linha (padrão)
            1024: {
              slidesPerView: 4,
              spaceBetween: 25
            }
          }}
        >

          {mockProducts.map((product) => (


            <SwiperSlide key={product.id}>


              <ProductCard
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                priceInfo={product.priceInfo}
                image={product.image}
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </SwiperContainer>
    </CarouselContainer>
  );
};

export default ProductCarousel;

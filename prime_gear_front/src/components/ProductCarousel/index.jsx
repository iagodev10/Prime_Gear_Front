import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import ProductCard from '../ProductCard';
import laptopvendaImage from '../../assets/images/laptopvenda.png';

import { CarouselContainer, SectionTitle, SwiperContainer } from './style';


const ProductCarousel = ({ title, produtos }) => {
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
           
            320: {
              slidesPerView: 2,
              spaceBetween: 6
            },
        
            480: {
              slidesPerView: 2,
              spaceBetween: 8
            },
          
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
         
            1024: {
              slidesPerView: 4,
              spaceBetween: 25
            }
          }}
        >
          
          {produtos.map((product) => (
            
            
            <SwiperSlide key={product.id}>
              
              
              <ProductCard 
                title={product.name}
                price={product.price}
              
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

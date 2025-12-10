import React, { useRef, useState, useEffect } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import ProductCard from '../ProductCard'; 
import { CarouselContainer, SectionTitle, SwiperContainer } from './style';



const ProductCarousel = ({ title, produtos }) => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <CarouselContainer>
      <SectionTitle>{title}</SectionTitle>

      <SwiperContainer>
     
        {!isMobile && (
          <>
            <button ref={prevRef} className="custom-swiper-button prev-btn">❮</button>
            <button ref={nextRef} className="custom-swiper-button next-btn">❯</button>
          </>
        )}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={isMobile ? false : {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (!isMobile) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          loop={isMobile}
          autoplay={isMobile ? { delay: 2500, disableOnInteraction: false } : false}
          slidesPerView={4}
          spaceBetween={25}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 6 },
            480: { slidesPerView: 2, spaceBetween: 8 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 }
          }}
        >
          {produtos.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                idProd={product.id}
                title={product.name}
                price={product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                priceInfo={`ou 10x de ${(product.price / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
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

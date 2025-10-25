import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeadSet from '../../assets/images/headset.jpeg';
import { HeroContainer, StyledSwiperSlide, HeroButton, SlideContent } from './style';

const HeroBanner = () => {
    return (
        <HeroContainer>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <StyledSwiperSlide
                        style={{
                            backgroundImage: `url(${HeadSet})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <SlideContent>
                            <HeroButton href="#">Compre Agora</HeroButton>
                        </SlideContent>
                    </StyledSwiperSlide>
                </SwiperSlide>

                <SwiperSlide>
                    <StyledSwiperSlide
                        style={{
                            backgroundImage: `url(${HeadSet})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <SlideContent>
                            <HeroButton href="#">Compre Agora</HeroButton>
                        </SlideContent>
                    </StyledSwiperSlide>
                </SwiperSlide>        

            </Swiper>
        </HeroContainer>
    );
};

export default HeroBanner;

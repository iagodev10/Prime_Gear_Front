import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeadSet from "../../assets/images/headset.jpeg";
import HeadSetMobile from "../../assets/images/resized-headset.png";
import Macbook from "../../assets/images/Macbook.png";
import Omelhor from "../../assets/images/omelhor.png";
import OmelhorMobile from "../../assets/images/omelhor-mobile.png";

import { useNavigate } from "react-router-dom";

import {
  HeroContainer,
  StyledSwiperSlide,
  HeadsetSlide,
  OmelhorSlide,
  HeroButton,
  SlideContent,
  FixedButtons,
  ButtonGroup
} from "./style";

const HeroBanner = () => {

  const navigate=useNavigate()

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
          <HeadsetSlide>
            <SlideContent>
              <HeroButton href="/detalhe/8">Compre Agora</HeroButton>
            </SlideContent>
          </HeadsetSlide>
        </SwiperSlide>

        <SwiperSlide>
          <StyledSwiperSlide
            style={{
              backgroundImage: `image-set(url(${Macbook}) 1x, url(${Macbook}) 2x)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <SlideContent style={{ alignItems: "center", margin: "auto", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <ButtonGroup>
                <HeroButton href="#" onClick={()=>navigate('/detalhe/13')} >Saiba mais</HeroButton>
                <HeroButton
                  href="#"
                  style={{
                    backgroundColor: "transparent",
                    color: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                    boxShadow: "none"
                  }}
                onClick={()=>navigate('/detalhe/13')} >
                  Ver preços
                </HeroButton>
              </ButtonGroup>
            </SlideContent>
          </StyledSwiperSlide>
        </SwiperSlide>

        <SwiperSlide>
          <OmelhorSlide>
            <SlideContent
              style={{
                alignItems: "center",
                margin: "auto",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Conteúdo normal do slide */}
            </SlideContent>

            {/* BOTÕES FIXOS, SEM DESCONFIGURAR */}
            <FixedButtons>
              <HeroButton href="#" onClick={()=>navigate('/detalhe/12')}>Confira já</HeroButton>

              <HeroButton
                href="#"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid #e60000",
                  boxShadow: "none",
                }}
                onClick={()=>navigate('/detalhe/13')} >
                Lançamentos
              </HeroButton>
            </FixedButtons>
          </OmelhorSlide>
        </SwiperSlide>

      </Swiper>
    </HeroContainer>
  );
};

export default HeroBanner;

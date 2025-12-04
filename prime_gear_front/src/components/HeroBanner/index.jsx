import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import HeadSet from "../../assets/images/headset.jpeg";
import Macbook from "../../assets/images/Macbook.png";
import Omelhor from "../../assets/images/omelhor.png";

import {
  HeroContainer,
  StyledSwiperSlide,
  HeroButton,
  SlideContent,
  FixedButtons,
  ButtonGroup
} from "./style";

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
              backgroundImage: `image-set(url(${HeadSet}) 1x, url(${HeadSet}) 2x)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
              backgroundImage: `image-set(url(${Macbook}) 1x, url(${Macbook}) 2x)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <SlideContent style={{ alignItems: "center", margin: "auto", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <ButtonGroup>
                <HeroButton href="#">Saiba mais</HeroButton>
                <HeroButton
                  href="#"
                  style={{
                    backgroundColor: "transparent",
                    color: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                    boxShadow: "none"
                  }}
                >
                  Ver preços
                </HeroButton>
              </ButtonGroup>
            </SlideContent>
          </StyledSwiperSlide>
        </SwiperSlide>

        <SwiperSlide>
          <StyledSwiperSlide
            style={{
              backgroundImage: `image-set(url(${Omelhor}) 1x, url(${Omelhor}) 2x)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
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
              <HeroButton href="#">Confira já</HeroButton>

              <HeroButton
                href="#"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid #e60000",
                  boxShadow: "none",
                }}
              >
                Lançamentos
              </HeroButton>
            </FixedButtons>
          </StyledSwiperSlide>
        </SwiperSlide>

      </Swiper>
    </HeroContainer>
  );
};

export default HeroBanner;

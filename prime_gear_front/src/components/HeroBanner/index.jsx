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
              backgroundImage: `url(${HeadSet})`,
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
              backgroundImage: `url(${Macbook})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <SlideContent style={{ alignItems: "center", margin: "auto" }}>
              <div
                style={{ display: "flex", gap: "45px", marginTop: "-130px" }}
              >
                <HeroButton href="#" style={{ padding: "25px 60px" }}>
                  Saiba mais
                </HeroButton>
                <HeroButton
                  href="#"
                  style={{
                    backgroundColor: "transparent",
                    color: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                    boxShadow: "none",
                    padding: "25px 60px",
                  }}
                >
                  Ver preços
                </HeroButton>
              </div>
            </SlideContent>
          </StyledSwiperSlide>
        </SwiperSlide>

        <SwiperSlide>
          <StyledSwiperSlide
            style={{
              backgroundImage: `url(${Omelhor})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative", // <-- necessário
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
            <div
              style={{
                position: "absolute",
                bottom: "140px", // <-- MEXA AQUI (vertical)
                right: "400px", // <-- MEXA AQUI (horizontal)
                display: "flex",
                gap: "45px",
              }}
            >
              <HeroButton href="#" style={{ padding: "25px 60px" }}>
                Confira já
              </HeroButton>

              <HeroButton
                href="#"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid #e60000",
                  boxShadow: "none",
                  padding: "25px 60px",
                }}
              >
                Lançamentos
              </HeroButton>
            </div>
          </StyledSwiperSlide>
        </SwiperSlide>

      </Swiper>
    </HeroContainer>
  );
};

export default HeroBanner;

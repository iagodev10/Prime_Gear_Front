import styled from "styled-components";
import bannerImg from "../../assets/images/bannerFaleConosco.jpg";

export const Container = styled.section`
  width: 100%;
  display: flex;
  margin-top: 8vh;
`;

export const BannerSection = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${bannerImg});
  background-size: cover;
  background-position: center;
`;

import styled from "styled-components";
import imgBanner from "../../assets/imgs/banner_manutencao_2.jpg";

export const Header = styled.header`
  min-height: 75vh;
  background-image: url(${imgBanner});

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeaderBlu = styled.div`
  background-color: #000000;
  opacity: 0.7;

  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;

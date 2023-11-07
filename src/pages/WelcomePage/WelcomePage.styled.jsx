import styled from 'styled-components';
import welcomeCocktailDesk from '../../assets/images/welcomePage/cocktail-desk@1x.jpg';
import welcomeCocktailDesk2 from '../../assets/images/welcomePage/cocktail-desk@2x.jpg';
import welcomeCocktailTab from '../../assets/images/welcomePage/cocktail-tab@1x.jpg';
import welcomeCocktailTab2 from '../../assets/images/welcomePage/cocktail-tab@2x.jpg';
import welcomeCocktailMob from '../../assets/images/welcomePage/cocktail-mob@1x.jpg';
import welcomeCocktailMob2 from '../../assets/images/welcomePage/cocktail-mob@2x.jpg';
import { colors } from 'src/colors';

export const WelcomeBox = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  overflow-y: hidden;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;

  /* background-color: black; */
  background-repeat: no-repeat;
  background-position: right top;

  background-size: 300px 812px;
  background-image: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.2) 0%,
      rgba(10, 10, 17, 0.2) 100%
    ),
    linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 51.07%),
    url(${welcomeCocktailMob});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.2) 0%,
        rgba(10, 10, 17, 0.2) 100%
      ),
      linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
      linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 51.07%),
      url(${welcomeCocktailMob2});
  }

  @media screen and (max-width: 767px) {
    align-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-right: 64px;
    padding-left: 64px;

    background-size: 466px 1024px;
    background-image: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.2) 0%,
        rgba(10, 10, 17, 0.2) 100%
      ),
      linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
      linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 51.07%),
      url(${welcomeCocktailTab});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(10, 10, 17, 0.2) 0%,
          rgba(10, 10, 17, 0.2) 100%
        ),
        linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
        linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 51.07%),
        url(${welcomeCocktailTab2});
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    max-height: 770px;
    padding-right: 100px;
    padding-left: 100px;

    background-size: 703px 770px;
    background-image: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.2) 0%,
        rgba(10, 10, 17, 0.2) 100%
      ),
      linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
      linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 51.07%),
      url(${welcomeCocktailDesk});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: 
      /* linear-gradient(
          0deg,
          rgba(10, 10, 17, 0.2) 0%,
          rgba(10, 10, 17, 0.2) 100%
        ),
        linear-gradient(1deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
        linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 51.07%), */ url(${welcomeCocktailDesk2});
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;
  color: ${colors.light};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.56px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
    letter-spacing: -0.8px;
  }
`;

export const WelcomeText = styled.p`
  margin-bottom: 40px;

  font-size: 14px;
  line-height: calc(18 / 14);

  color: ${colors.light};

  @media screen and (max-width: 767px) {
    width: 319px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 470px;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;

export const StyledBGElement6 = styled.div`
  position: absolute;
  background-color: rgba(188, 230, 210, 0.4);
  filter: blur(105px);
  z-index: 1;
  width: 257px;
  height: 247px;
  top: -52px;
  right: 254px;

  @media screen and (min-width: 768px) {
    width: 387px;
    height: 373px;
    top: 46px;
    left: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 387px;
    height: 381px;
    top: -132px;
    left: 171px;
  }
`;
export const StyledBGElement7 = styled.div`
  position: absolute;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(105px);
  z-index: 1;
  width: 520px;
  height: 550px;
  top: 20px;
  left: -399px;

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 830px;
    bottom: 245px;
    right: 649px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    bottom: 152px;
    right: 1150px;
  }
`;

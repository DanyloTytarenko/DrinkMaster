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
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;

  background-repeat: no-repeat;
  background-position: right top;

  background-size: 300px 812px;
  background-image: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.2) 0%,
      rgba(10, 10, 17, 0.2) 100%
    ),
    linear-gradient(91deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 51.93%),
    linear-gradient(0deg, #0a0a11 11.92%, rgba(10, 10, 17, 0) 91.07%),
    url(${welcomeCocktailMob});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        0deg,
        rgba(10, 10, 17, 0.2) 0%,
        rgba(10, 10, 17, 0.2) 100%
      ),
      linear-gradient(91deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 51.93%),
      linear-gradient(0deg, #060609 5.92%, rgba(10, 10, 17, 0) 91.07%),
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
      linear-gradient(91deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 51.93%),
      linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 91.07%),
      url(${welcomeCocktailTab});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(10, 10, 17, 0.2) 0%,
          rgba(10, 10, 17, 0.2) 100%
        ),
        linear-gradient(91deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 51.93%),
        linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 91.07%),
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
      linear-gradient(91deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 51.93%),
      linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 91.07%),
      url(${welcomeCocktailDesk});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          0deg,
          rgba(10, 10, 17, 0.2) 0%,
          rgba(10, 10, 17, 0.2) 100%
        ),
        linear-gradient(91deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 51.93%),
        linear-gradient(85deg, #060609 5.92%, rgba(10, 10, 17, 0) 91.07%),
        url(${welcomeCocktailDesk2});
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  margin-bottom: 14px;
 gap: 2px;
  align-items: baseline;
  color: ${colors.light};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.56px;

  z-index: 5;

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
  z-index: 5;
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
  border-radius: 387px;
  background-color: rgba(188, 230, 210, 0.4);
  filter: blur(105px);
  z-index: 2;
  width: 257px;
  height: 247px;
  top: 52px;
  left: 54px;

  @media screen and (min-width: 768px) {
    width: 387px;
    height: 373px;
    top: 46px;
    left: 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 387px;
    height: 251px;
    top: 0;
    left: 101px;
  }
`;
export const StyledBGElement7 = styled.div`
  position: absolute;
  border-radius: 550px;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(105px);
  z-index: 1;
  width: 120px;
  height: 526px;
  top: 20px;
  left: -50px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 650px;
    top: 0;
    right: 649px;

    border-radius: 830px;
  }

  @media screen and (min-width: 1440px) {
    width: 304px;
    height: 600px;
    top: 0;
    right: 650px;
  }
`;

export const StyledBGElement8 = styled.div`
  position: absolute;
  border-radius: 549px;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(105px);
  z-index: 1;
  width: 150px;
  height: 250px;
  bottom: 0;
  right: 0;

  @media screen and (min-width: 768px) {
    width: 620px;
    height: 350px;
    bottom: 20px;
    right: -399px;
  }

  @media screen and (min-width: 1440px) {
    width: 520px;
    height: 550px;
    bottom: 20px;
    right: -399px;
  }
`;

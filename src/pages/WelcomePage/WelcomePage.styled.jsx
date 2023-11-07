import styled from 'styled-components';
import { colors } from 'src/colors';

export const WelcomeBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (max-width: 767px) {
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-right: 64px;
    padding-left: 64px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
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

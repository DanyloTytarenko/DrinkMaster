import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'src/colors';

import { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 123px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 130px;
    margin-bottom: 160px;
  }
`;

export const AddDrinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 335px;

  margin-bottom: 47px;
  @media only screen and (min-width: 768px) {
    max-width: 619px;
    margin-bottom: 54px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 500px;
    margin-bottom: 0px;
  }
`;

export const DesktopTitle = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
    margin-top: 185px;
  }
  animation: ${slideDown} 1s forwards;
`;

export const AppDescription = styled.p`
height: 60px;
font-size: 14px;
font-weight: 400px;
line-height: 20px;
margin-bottom: 32px;
${({ theme }) =>
  theme === 'dark'
    ? `color: ${colors.light};`
    : `color: ${colors.secondaryDark};`}
@media only screen and (min-width: 768px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1440px) {
width: 500px;
margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  width: 151px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  font-size: 14px;
  font-weight: 600;
  transition: 250ms ease;
  ${({ theme }) =>
    theme === 'dark'
      ? `color: ${colors.secondaryDark};`
      : `color: ${colors.light};`};
  ${({ theme }) =>
    theme === 'dark'
      ? `background-color: ${colors.light};`
      : `background-color: ${colors.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 169px;
    height: 54px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1440px) {
    width: 160px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({ theme }) =>
      theme === 'dark'
        ? `color: ${colors.light};`
        : `color: ${colors.secondaryDark};`}
    ${({ theme }) =>
      theme === 'dark'
        ? `background-color: ${colors.secondaryDark};`
        : `background-color: ${colors.light};`}
  }
`;

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  animation: ${slideLeft} 1s forwards;
  @media only screen and (min-width: 1440px) {
    margin-top: 128px;
  }
`;

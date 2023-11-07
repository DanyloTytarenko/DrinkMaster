import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CategoryName = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  color: ${colors.light};
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

export const ListCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${colors.light};
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`;

export const DrinkList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`;

export const DrinksItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;

  @media only screen and (min-width: 768px) {
    max-width: 342px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 400px;
  }
`;

export const DrinkPhoto = styled.img`
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 1440px) {
    height: 400px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DrinkTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const StyledLinkToDrinkPage = styled(Link)`
  color: rgba(243, 243, 243, 0.5);
  text-align: right;
  font-weight: 500;
  line-height: 18px;
  transition: 250ms ease;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    color: ${colors.light};
  }
`;

export const StyledLinkToDrinksPage = styled(Link)`
  display: flex;
  width: 163px;
  height: 46px;
  justify-content: center;
  align-items: center;
  color: ${colors.secondaryDark};
  background: ${colors.light};
  border-radius: 42px;
  font-weight: 600;
  transition: 250ms ease;

  @media only screen and (min-width: 768px) {
    width: 183px;
    height: 54px;
    font-size: 16px;
  }
  @media only screen and (min-width: 1440px) {
    margin-bottom: 140px;
  }
  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    color: ${colors.light};
    background-color: ${colors.secondaryDark};
  }
`;

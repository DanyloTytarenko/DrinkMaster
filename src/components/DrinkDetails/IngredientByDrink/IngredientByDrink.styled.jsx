import styled from '@emotion/styled';
import { colors } from '../../../colors';

export const AllTitleIngredients = styled.h2`
  color: ${colors.light};
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;
  margin-top: 18px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.13;
  }
`;

export const ListIngredient = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
`;

export const ItemIngredient = styled.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ImageIngredient = styled.img`
  width: 167px;
  // height: 360px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const DescriptionIngredient = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

export const TitleIngredient = styled.p`
  margin: 0;
  color: ${colors.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`;

export const MeasureIngredien = styled.p`
  /* text-decoration: none; */
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover {
    color: ${colors.light}; //#f3f3f3;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const Title = styled.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: #f3f3f3;
`;

export const Description = styled.p`
  color: ${colors.light};
  margin-bottom: 20px;
`;

export const AnyCocktail = styled.img`
  width: 335px;
  height: 430px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

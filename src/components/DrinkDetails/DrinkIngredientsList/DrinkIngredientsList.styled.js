import styled from '@emotion/styled';
import { colors } from '../../../colors';

export const AllTitleIngredients = styled.h2`
  color: ${colors.light};
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  transition: color 250ms ease;
  margin-top: 18px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const ListIngredient = styled.ul`
  display: flex;
  // flex-direction: column;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 21px;
  // justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    // flex-direction: row;
    // flex-wrap: wrap;
    // column-gap: 20px;
  }
`;

export const ItemIngredient = styled.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ImageIngredient = styled.img`
  width: 157px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 220px;
  }
  @media (min-width: 1440px) {
    // width: 400px;
    // height: 400px;
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

  @media (min-width: 1440px) {
    // width: 400px;
    // height: 400px;
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

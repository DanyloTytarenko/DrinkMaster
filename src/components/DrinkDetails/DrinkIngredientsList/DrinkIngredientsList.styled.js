import styled from '@emotion/styled';
import { colors } from '../../../colors';

export const AllTitleIngredients = styled.h2`
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.halfLight};`
      : `color: ${colors.halfPrimaryDark};`}
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
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 21px;
  align-items: center;

  @media (min-width: 1440px) {
    column-gap: 35px;
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
`;

export const DescriptionIngredient = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

export const TitleIngredient = styled.p`
  margin: 0;
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.light};`
      : `color: ${colors.primaryDark};`}
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
  ${({ theme }) =>
    theme === 'dark'
      ? ` color: ${colors.halfLight};`
      : `color: ${colors.halfPrimaryDark};`}
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;

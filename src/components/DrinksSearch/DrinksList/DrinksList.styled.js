import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../colors';

export const StyledDrinksList = styled.ul`
  margin-top: 40px;
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

export const StyledDrinksItem = styled.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const StyledDrinkImage = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const DescriptionWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

export const DrinkTitle = styled.p`
  margin: 0;
  /* color: ${colors.light}; //#f3f3f3 */
  color: ${({ theme }) =>
    theme === 'dark' ? colors.light : colors.primaryDark};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`;

export const DescriptionLink = styled(Link)`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({ theme }) =>
    theme === 'dark' ? 'rgba(243, 243, 243, 0.5)' : 'rgba(10, 10, 17, 0.5)'};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    /* color: ${colors.light}; //#f3f3f3; */
    color: ${({ theme }) =>
      theme === 'dark' ? colors.light : colors.primaryDark};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`;

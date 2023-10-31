import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';

export const CategoryName = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  color: ${colors.light};
  @media only screen and (min-width: 704px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

export const StyledLinkToDrinkPage = styled(Link)`
  color: rgba(243, 243, 243, 0.5);
  text-align: right;
  font-weight: 500;
  line-height: 18px;
`;

export const StyledLinkToDrinksPage = styled(Link)`
display: flex;
width: 163px;
height: 46px;
padding: 14px 40px;
justify-content: center;
align-items: center;
color: ${colors.secondaryDark}
background: ${colors.light};
border-radius: 42px;
font-weight: 600;

@media only screen and (min-width: 704px) {
width: 183px;
height: 54px;
padding: 18px 44px;
font-size: 16px;
};

&:active {
border: 2px solid rgba(64, 112, 205, 0.50);
};
 `;

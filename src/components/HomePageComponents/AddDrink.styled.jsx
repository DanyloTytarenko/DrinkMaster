import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';

export const AddDrinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const AppDescription = styled.p`
width: 500px;
font-size: 14px;
line-height: 20px;
color: ${colors.light};
margin-bottom: 32px;
@media only screen and (min-width: 704px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1140px) {
width: 500px;
margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
display: flex;
width: 151px;
height: 46px;
justify-content: center;
align-items: center;
color: ${colors.secondaryDark};
background-color: ${colors.light};
border-radius: 42px;
margin-bottom: 47px;
font-size: 14px;
font-weight: 600;

@media only screen and (min-width: 704px) {
width: 169px;
height: 54px;
font-size: 16px;
margin-bottom: 54px;
};

@media only screen and (min-width: 1140px) {
width: 160px;
};

&:active {
  border: 2px solid rgba(64, 112, 205, 0.50);
}
`;

export const HomePageImage = styled.img`
  width: 252px;
  height: 313px;
  flex-shrink: 0;
  margin: auto;
  @media only screen and (min-width: 704px) {
    width: 359px;
    height: 445px;
  }
`;

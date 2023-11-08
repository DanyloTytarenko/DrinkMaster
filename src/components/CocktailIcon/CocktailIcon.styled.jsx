import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { ReactComponent as Cocktail } from '../../assets/images/welcomePage/cocktail.svg';
import { colors } from 'src/colors';

const rotate = keyframes`
 0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
    25% {
    -webkit-transform: rotate(-25deg);
            transform: rotate(-25deg);
    opacity: 1;
  }
  75% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 0;
  }
`;

export const StyledCocktailIcon = styled(Cocktail)`
  display: block;
  fill: ${colors.disabled};
  stroke: ${colors.light};

  animation: ${rotate} 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

import styled from '@emotion/styled';
import { colors } from './colors';
// import example from './assets/background.png';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.primaryDark};
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;

// background-image: url(${ example });
import styled from '@emotion/styled';
import example from './assets/background.png';
import { colors } from './colors';
export const AppWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 58.58%,
    rgba(0, 0, 0, 0.345172) 78.98%,
    rgba(0, 0, 0, 0) 100%
  ); */
  ${({ theme }) =>
    theme === 'light' &&
    ` background: ${colors.light};`}
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;

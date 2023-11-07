import styled from 'styled-components';
import { colors } from 'src/colors';

export const Title = styled.h1`
  width: 335px;
  margin-bottom: 28px;
  text-align: start;
  color: ${colors.light};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: calc(32 / 28);
  letter-spacing: -0.56px;
  z-index: 5;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
    letter-spacing: -0.8px;
  }
`;

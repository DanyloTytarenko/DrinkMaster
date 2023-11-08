import { colors } from 'src/colors';
import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 200px;
  align-items: center;
  text-align: center;
  color: ${colors.light};
  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: calc(32 / 28);
  letter-spacing: -0.56px;
  z-index: 5;
`;

export const Box = styled.div`
  max-height: 500px;
`;

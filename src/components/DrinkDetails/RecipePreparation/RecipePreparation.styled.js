import styled from '@emotion/styled';
import { colors } from '../../../colors';

export const Title = styled.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: #f3f3f3;
`;

export const Description = styled.p`
  color: ${colors.light};
  margin-bottom: 20px;
`;

export const AnyCocktail = styled.img`
  width: 335px;
  height: 430px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

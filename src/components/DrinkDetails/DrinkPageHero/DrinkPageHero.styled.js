import styled from '@emotion/styled';
import { colors } from '../../../colors';

export const Title = styled.h1`
  color: ${colors.light};
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;

export const Glass = styled.p`
  color: rgba(243, 243, 243, 0.5);
  margin-top: -32px;
  margin-bottom: 20px;
  // text-shadow:
  //   0 0 5px #00baff,
  //   0 0 10px #00baff,
  //   0 0 20px #00baff,
  //   0 0 40px #00baff,
  //   0 0 80px #00baff;
`;

export const Description = styled.p`
  color: ${colors.light};
  margin-bottom: 40px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const Button = styled.button`
  // color: #000000;
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
`;

export const StyledImage = styled.img`
  width: 335px;
  height: 400px;
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

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

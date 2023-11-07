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
  font-size: 12px;
  line-height: 1.29;

  @media (min-width: 768px) {
    margin-top: -42px;
    font-size: 16px;
    line-height: 1.25;
  }

  @media (min-width: 1440px) {
    margin-top: -62px;
    // width: 400px;
    // height: 400px;
  }
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

  @media (min-width: 1440px) {
    width: 593px;
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
    width: 704px;
    height: 400px;
    object-fit: none;
    object-position: 50% 20%;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
    object-fit: contain;
    object-position: 50% 50%;
    margin-top: -160px;
    margin-right: 0px;
    margin-left: 300px;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Hero = styled.div`
  @media (min-width: 1440px) {
    display: flex;
  }
`;

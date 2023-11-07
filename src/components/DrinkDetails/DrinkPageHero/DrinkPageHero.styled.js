import styled from '@emotion/styled';
import { colors } from '../../../colors';

export const Glass = styled.p`
  ${({ theme }) =>
    theme === 'dark'
      ? `color: ${colors.halfLight};`
      : `color: ${colors.halfSecondaryDark};`}
  margin-top: 8px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const Description = styled.p`
  ${({ theme }) =>
    theme === 'dark'
      ? `color: ${colors.light};`
      : `color: ${colors.primaryDark};`}
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
    margin-right: 0px;
  }
`;

export const Hero = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

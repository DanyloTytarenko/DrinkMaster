import styled from 'styled-components';
import { colors } from '../../colors';

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 28px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
    @media screen and (min-width: 1440px) {
    margin-left: 28px;
  }
`;

export const UserLogoWrap = styled.div``;

export const UserSvg = styled.svg`
  width: 32px;
  height: 32px;
  display: block;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.div`
color: ${colors.light};
font-size: 14px;
font-weight: 500;
line-height: 18px;

@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 24px; 
  }
`;

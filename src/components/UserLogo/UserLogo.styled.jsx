import styled from 'styled-components';
import { colors } from '../../colors';

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
  margin-left: 70px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;

export const UserLogoWrap = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 44px;
    height:44px;
} 
`;

export const UserImg = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.p`
  color: ${colors.light};
  font-size: 14px;
  font-weight: 500;
  max-width: 104px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
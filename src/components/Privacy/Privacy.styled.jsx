import styled from 'styled-components';
import { colors } from '../../colors';

export const PrivacyWrap = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  } 

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
  }
`;

export const MainTitle = styled.h1`
  color: ${colors.light};
  font-size: 36px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const Title = styled.h2`
  color: ${colors.light};
  font-size: 24px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const PrivacyText = styled.div`
  color: ${colors.light};
  font-size: 16px;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const SubTitle = styled.span`
  font-size: 24px;
`;


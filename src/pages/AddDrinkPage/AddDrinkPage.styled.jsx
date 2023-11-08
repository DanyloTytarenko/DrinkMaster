import styled from '@emotion/styled';
import { colors } from 'src/colors';

export const SubContainer = styled.div`
  width: 100%;
  padding: 80px 0;
  @media only screen and (min-width: 768px) {
    padding: 140px 0;
    @media only screen and (min-width: 1440px) {
      padding: 160px 0;
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  column-gap: 94px;
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const DivFollowUs = styled.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const Undertitle = styled.h3`
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  letter-spacing: 0;
  color: ${({ theme }) =>
    theme === 'dark' ? `${colors.light}` : `${colors.primaryDark}`};
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

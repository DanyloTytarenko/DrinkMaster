import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 20px;
  @media only screen and (min-width: 768px) {
    padding: 140px 32px;
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      padding: 160px 100px;
      max-width: 1240px;
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  column-gap: 94px;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
    @media only screen and (min-width: 1440px) {
      flex-direction: row;
    }
  }
`;

export const DivFollowUs = styled.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;

export const Undertitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  letter-spacing: 0;
  color: #f3f3f3;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

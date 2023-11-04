import styled from '@emotion/styled';

export const Wrapper = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`;

export const Button = styled.button`
  padding: 14px 40px;
  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  border: 0 solid transparent;
  border-radius: 42px;
  background-color: #f3f3f3;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(18 / 16);
    padding: 18px 44px;
  }
`;

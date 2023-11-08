import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 80px 0;
  min-height: 100hv;
  width: 335px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    padding: 140px 0;
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 160px 0 140px;
    width: 1240px;
  }
`;
export const Title = styled.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;

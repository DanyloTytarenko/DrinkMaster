import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  min-height: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 80px 20px;

  @media screen and (min-width: 768px) {
    padding: 120px 32px 140px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 158px 100px 140px 100px;
  }
`;


import styled from '@emotion/styled';
// import { colors } from '../../../src/colors';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;

  @media only screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 0px;
  }
`;

export const StyledBGElement5 = styled.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    /* background-color: rgba(188, 230, 210, 0.3); */
    background-color: ${({ theme }) =>
      theme === 'dark'
        ? 'rgba(188, 230, 210, 0.3)'
        : 'rgba(188, 230, 210, 0.4)'};
    filter: blur(105px);
    z-index: -10;
    width: 387px;
    height: 381px;
    top: 343px;
    right: 193px;
  }
`;

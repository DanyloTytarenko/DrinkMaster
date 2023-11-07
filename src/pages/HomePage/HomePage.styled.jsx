import styled from '@emotion/styled';
import { colors } from '../../colors';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 80px 20px; */
  padding-top: 80px;
  padding-bottom: 80px;
  /* background-color: ${colors.primaryDark}; */
  @media only screen and (min-width: 768px) {
    /* padding: 120px 32px; */
    padding-top: 120px;
    padding-bottom: 120px;
  }
  /* @media only screen and (min-width: 1440px) {
    padding: 0px 100px;
  } */
`;

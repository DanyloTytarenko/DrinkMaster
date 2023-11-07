import styled from '@emotion/styled';
import { colors } from '../../colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background-color: ${colors.primaryDark} @media only screen and
    (min-width: 768px) {
    padding: 120px 32px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 0px 100px;
  }
`;

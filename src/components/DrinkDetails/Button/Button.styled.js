import styled from '@emotion/styled';
import { colors } from '../../../colors';

export const StyledButton = styled.button`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
  color: ${colors.secondaryDark};
  transition:
    color 250ms ease,
    background-color 250ms ease;

  &:hover {
    background-color: ${colors.secondaryDark};
    color: ${colors.light};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
    border-radius: 42px;
    padding: 18px 44px;
    margin-bottom: 80px;
  }
`;

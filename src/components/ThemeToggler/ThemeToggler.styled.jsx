import styled from 'styled-components';
import { colors } from '../../colors';

export const ThemeToggle = styled.div`
  position: relative;
  margin-left: 122px;

  @media screen and (min-width: 768px) {
    margin-left: 320px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 0;
  }
`;

export const TogglerInput = styled.input`
  display: none;
  background: ${colors.light};
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.10) inset;

  &:checked {
    transform: translateX(110%);
  }
`;

export const TogglerLabel = styled.label`
  border-radius: 50%;
  background: ${colors.secondaryDark};
  position: absolute;
  width: 18px;
  height: 18px;
  translate: 0 -50%;
  right: 1px;
  top: 50%;
  cursor: pointer;
  transition: transform 300ms ease;

    &:checked {
      background: ${colors.light};
  }
`;

export const TogglerBg = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.light};
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.10) inset;

    &:checked {
    background: ${colors.secondaryDark};
  }
`;



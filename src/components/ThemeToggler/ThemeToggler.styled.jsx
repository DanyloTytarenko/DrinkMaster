import styled from 'styled-components';
import { colors } from '../../colors';

export const ThemeToggle = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.10) inset;
  ${({ theme }) =>
    theme === 'dark' ?
    `background: ${colors.light}` : ` background: ${colors.secondaryDark};`} 
`;

export const TogglerBtn = styled.button`
  border-radius: 50%;
  position: absolute;
  width: 18px;
  height: 18px;
  translate: 0 -50%;
  top: 50%;
  cursor: pointer;
  transition: transform 300ms ease;
  border: none;
${({ theme }) =>
    theme === 'dark' ?
    ` right: 1px; background: ${colors.secondaryDark};` : `left: 1px; background: ${colors.light};`} }
`;




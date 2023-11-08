import styled from 'styled-components';
import { colors } from '../../../colors';

export const BurgerContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export const BurgerIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 32px;
  height: 32px;
  justify-content: space-evenly;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;

export const Bar = styled.div`
  width: 26px;
  height: 2px;
  border-radius: 10px;
  ${({ theme }) =>
    theme === 'dark' ?
    ` background: ${colors.light};` : `background: ${colors.secondaryDark};`}
  margin: 0;
  transition: 0.4s;

  @media screen and (min-width: 768px) {
    width: 30px;
  }
`;

export const MenuItems = styled.ul`
  display: none;

  ${({ open }) =>
    open &&
    `
    display: block;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.primaryDark};
    z-index: 100;
  `}
  ${({ theme }) =>
    theme === 'dark' ?
    ` background: ${colors.primaryDark};` : `background: ${colors.light};`}
`;

export const Gradient = styled.div`
  width: 257px;
  height: 247px;
  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);
  position: absolute;
  top: 0;
  left: 10%;
`;
export const SvgClose = styled.svg`${({ theme }) =>
    theme === 'dark' ?
    ` stroke: ${colors.light};` : `stroke: ${colors.primaryDark};`}`

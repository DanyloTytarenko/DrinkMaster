import styled from 'styled-components';
import { colors } from '../../../colors';

export const BurgerContainer = styled.div`
  position: relative;
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
  background-color: ${colors.light};
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
  `}
`;
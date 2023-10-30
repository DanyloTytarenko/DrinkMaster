import styled from 'styled-components';
export const BurgerContainer = styled.div`
  position: relative;
`;

export const BurgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 32px;
  height:32px;
  justify-content: space-evenly;
  cursor: pointer;
`;

export const Bar = styled.div`
  height: 3px;
  border-radius: 10px;
  background-color: #F3F3F3;
  margin: 0
  transition: 0.4s;
   @media screen and (min-width: 768px) { 
    width: 28px;
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
    display:flex;
    flex-direction:column;
    gap: 16px;
    justify-content: center;
    align-items: center;
     position: fixed;
  top: 85px;
  left: 0;
  right: 0;
  bottom: 0;
//   background: #0A0A11;
  `}
`;
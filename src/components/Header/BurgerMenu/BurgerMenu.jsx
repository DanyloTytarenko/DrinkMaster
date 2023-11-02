// import React, { useState, useEffect } from 'react';
import { useState } from 'react';
import { BurgerContainer, BurgerIcon, Bar, MenuItems, Gradient } from './BurgerMenu.styled';
import { StyledNavigationLink } from '../../Navigation/Navigation.styled.jsx';

export const BurgerMenu = ({isOpen, toggleMenu}) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <BurgerContainer>
      <BurgerIcon onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
        <Bar />
      </BurgerIcon>
      <MenuItems open={isOpen}>
        <Gradient/>
        <StyledNavigationLink to="/home" onClick={toggleMenu}>
          Home
        </StyledNavigationLink>
        <StyledNavigationLink to="/drinks" onClick={toggleMenu}>
          Drinks
        </StyledNavigationLink>
        <StyledNavigationLink to="/add" onClick={toggleMenu}>
          Add drink
        </StyledNavigationLink>
        <StyledNavigationLink to="/my" onClick={toggleMenu}>
          My drinks
        </StyledNavigationLink>
        <StyledNavigationLink to="/favorites" onClick={toggleMenu}>
          Favorites
        </StyledNavigationLink>
      </MenuItems>
    </BurgerContainer>
  );
}

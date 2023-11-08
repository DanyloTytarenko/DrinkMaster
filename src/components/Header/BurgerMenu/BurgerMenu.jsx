// import React, { useState, useEffect } from 'react';
import { useState } from 'react';
import { BurgerContainer, BurgerIcon, Bar, MenuItems, Gradient, SvgClose } from './BurgerMenu.styled';
import { StyledNavigationLink } from '../../Navigation/Navigation.styled.jsx';
import { useSelector} from 'react-redux';
import {selectTheme } from '../../../redux/theme/themeSlice'
import sprite from '../../Modal/sprite.svg'

export const BurgerMenu = ({isOpen, toggleMenu}) => {
  
const theme = useSelector(selectTheme);
  return (
    <BurgerContainer >
      {isOpen === false ? <BurgerIcon onClick={toggleMenu}>
        <Bar theme={theme} />
        <Bar  theme={theme}/>
        <Bar  theme={theme}/>
        <Bar theme={theme} />  
      </BurgerIcon> :  <SvgClose width="24px" height="24px" theme={theme} onClick={toggleMenu}>
                <use href={`${sprite}#icon-close`} />
              </SvgClose>}
      <MenuItems open={isOpen} theme={theme}>
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

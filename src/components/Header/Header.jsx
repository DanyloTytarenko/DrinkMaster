import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserLogo from '../UserLogo/UserLogo';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import {
  HeaderContainer
} from './Header.styled';
import { DropDown } from '../Modal/DropDown';
const Header = () => {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo />
      {windowWidth >= 1440 && <>
       <Navigation />
        <ThemeToggler />
        <DropDown />
      </>
      }
      {windowWidth < 1440 && <>
        {isMenuOpen ? <ThemeToggler /> : <DropDown />}
        <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>}
    </HeaderContainer>
  );
};

export default Header;


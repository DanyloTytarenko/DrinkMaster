import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import {
  HeaderContainer, HeaderWrap
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
      <HeaderWrap>
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
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;


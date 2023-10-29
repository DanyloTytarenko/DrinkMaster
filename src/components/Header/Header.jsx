import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserLogo from '../UserLogo/UserLogo';

import {
  HeaderContainer
} from './Header.styled';

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

  return (
    <HeaderContainer>
      <Logo />
      {windowWidth >= 1440 && <Navigation />}
      <ThemeToggler />
      <UserLogo />
    </HeaderContainer>
  );
};

export default Header;


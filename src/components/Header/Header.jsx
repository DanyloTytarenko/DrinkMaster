import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserLogo from '../UserLogo/UserLogo';

import {
  HeaderContainer
} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
      <ThemeToggler />
      <UserLogo />
    </HeaderContainer>
  );
};

export default Header;


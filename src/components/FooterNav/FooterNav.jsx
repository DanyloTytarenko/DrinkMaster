import { Navigation, StyledNavigationLink } from './FooterNav.styled';

const FooterNav = () => {
  return (
    <Navigation>
      <StyledNavigationLink to="/drinks">
        Drinks
      </StyledNavigationLink>
      <StyledNavigationLink to="/add">
        Add drink
      </StyledNavigationLink>
      <StyledNavigationLink to="/my">
        My drinks
      </StyledNavigationLink>
      <StyledNavigationLink to="/favorites">
        Favorites drinks
      </StyledNavigationLink>
    </Navigation>
  )
};

export default FooterNav;
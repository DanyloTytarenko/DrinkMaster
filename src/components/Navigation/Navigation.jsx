import {
  NavigationWrap,
  StyledNavigationLink
} from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationWrap>
      <StyledNavigationLink to="/home">
        Home
      </StyledNavigationLink>
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
        Favorites
      </StyledNavigationLink>
    </NavigationWrap>
  )
}

export default Navigation;
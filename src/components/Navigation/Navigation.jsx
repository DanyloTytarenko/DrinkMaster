import {
  NavigationWrap,
  StyledNavigationLink
} from './Navigation.styled';
import { selectTheme } from 'src/redux/theme/themeSlice';
import { useSelector } from 'react-redux';
const Navigation = () => {
  const theme = useSelector(selectTheme);
  return (
    <NavigationWrap>
      <StyledNavigationLink to="/home" theme={theme}>
        Home
      </StyledNavigationLink>
      <StyledNavigationLink to="/drinks" theme={theme}>
        Drinks
      </StyledNavigationLink>
      <StyledNavigationLink to="/add" theme={theme}>
        Add drink
      </StyledNavigationLink>
      <StyledNavigationLink to="/my" theme={theme}>
        My drinks
      </StyledNavigationLink>
      <StyledNavigationLink to="/favorites" theme={theme}>
        Favorites
      </StyledNavigationLink>
    </NavigationWrap>
  )
}

export default Navigation;
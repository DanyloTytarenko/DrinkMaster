import {
  HeaderContainer,
  Navigation,
  StyledLink,
} from './Header.styled';
// import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/home">
          {/* <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper> */}
          Home
        </StyledLink>
        <StyledLink to="/drinks">
          Drinks
        </StyledLink>
        <StyledLink to="/add">
          Add Drink
        </StyledLink>
        <StyledLink to="/my">
          My Drinks
        </StyledLink>
        <StyledLink to="/favorites">
          Favorite
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};

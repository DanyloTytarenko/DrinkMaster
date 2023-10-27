import {
  FooterContainer,
  Navigation,
  StyledLink,
} from './Footer.styled';


export const Footer = () => {
  return (
    <FooterContainer>
      <Navigation>
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
    </FooterContainer>
  );
};

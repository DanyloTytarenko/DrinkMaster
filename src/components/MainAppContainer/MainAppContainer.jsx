import {
  Container,
  StyledBGElement1,
  StyledBGElement2,
} from './MainAppContainer.styled';

const MainAppContainer = ({ children }) => {
  return (
    <Container>
      {children}
      <StyledBGElement1 />
      <StyledBGElement2 />
    </Container>
  );
};

export default MainAppContainer;

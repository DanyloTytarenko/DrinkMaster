import { Container } from './MainAppContainer.styled';

const MainAppContainer = ({ children }) => {
  return (
    <Container>{children}</Container>
  );
};

export default MainAppContainer;
import { Container, Title, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';
import { DrinksList } from '../../components/DrinksList/DrinksList';
const FirstPage = () => {
  return (
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
      <DrinksList/>
    </Container>
  );
};

export default FirstPage;

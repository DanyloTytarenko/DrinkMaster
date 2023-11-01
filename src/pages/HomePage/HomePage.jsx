import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import { Container, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Title>HomePage</Title>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default HomePage;

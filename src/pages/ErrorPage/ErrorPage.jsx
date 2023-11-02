import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import { Container, Title } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Title>404</Title>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;

import { Container, Title } from './AddDrinkPage.styled';
import AddDrinkForm from '../../components/AddDrinkForm/AddDrinkForm';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

const AddDrinkPage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Title>AddDrinkPage</Title>
        <AddDrinkForm />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default AddDrinkPage;

import { Container } from './AddDrinkPage.styled';
import AddDrinkForm from '../../components/AddDrinkForm/AddDrinkForm';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import PageTitle from 'src/components/PageTitle/PageTitle';

const AddDrinkPage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <PageTitle title={'AddDrinkPage'}></PageTitle>
        <AddDrinkForm />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default AddDrinkPage;

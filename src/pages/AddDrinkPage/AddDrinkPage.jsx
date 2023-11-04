import { Container, Title } from './AddDrinkPage.styled';
import AddDrinkForm from '../../components/AddDrinkForm/AddDrinkForm';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
// import { PopularDrinksComponent } from 'src/components/PopularDrinks/PopularDrinks';

const AddDrinkPage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Title>AddDrinkPage</Title>
        <AddDrinkForm />
        {/* <PopularDrinksComponent/> */}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default AddDrinkPage;

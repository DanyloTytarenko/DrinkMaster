import { useDispatch, useSelector } from 'react-redux';
import { Container } from './DrinkDetailsPage.styled';
import DrinkDetails from '../../components/DrinkDetails/DrinkDetails';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import Loader from 'src/components/Loader/Loader';
import {
  selectDrinkDetailsError,
  selectDrinkDetailsIsLoading,
} from 'src/redux/drinks/selectors';

const DrinkDetailsPage = () => {
  const isLoading = useSelector(selectDrinkDetailsIsLoading);
  const error = useSelector(selectDrinkDetailsError);
  return (
    <>
      <Header />
      <Container>
        {isLoading && !error && <Loader />}
        <DrinkDetails />
      </Container>
      <Footer />
    </>
  );
};

export default DrinkDetailsPage;

import { useDispatch, useSelector } from 'react-redux';
import { Container } from './DrinkDetailsPage.styled';
import DrinkDetails from '../../components/DrinkDetails/DrinkDetails';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
// import {
//   selectDrinkDetailsError,
//   selectDrinkDetailsIsLoadin,
// } from 'src/redux/drinks/selectors';

const DrinkDetailsPage = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectDrinkDetailsIsLoadin);
  // const error = useSelector(selectDrinkDetailsError);

  return (
    <>
      <Header></Header>
      <Container>
        {/* {isLoading && !error && <b>Request in progress...</b>} */}
        <DrinkDetails />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default DrinkDetailsPage;

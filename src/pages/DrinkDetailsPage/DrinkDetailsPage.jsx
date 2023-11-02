import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './DrinkDetailsPage.styled';
import DrinkDetails from '../../components/DrinkDetails/DrinkDetails';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
// import { fetchFavoriteDrinks } from '../../../redux/drinks/operations';
import { fetchDrinkById } from 'src/redux/drinks/operations';
// import {
//   selectDrinkDetailsError,
//   selectDrinkDetailsIsLoadin,
// } from 'src/redux/drinks/selectors';

const DrinkDetailsPage = () => {
  const { drinkId } = useParams();
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectDrinkDetailsIsLoadin);
  // const error = useSelector(selectDrinkDetailsError);

  useEffect(() => {
    dispatch(fetchDrinkById(drinkId));
    // dispatch(fetchFavoriteDrinks());
  }, [dispatch]);

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

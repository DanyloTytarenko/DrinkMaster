import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  selectErrorFavorite,
  selectIsLoadingFavorite,
} from '../../../redux/drinks/selectors';
import { Container } from './DrinkDetailsPage.styled';
import DrinkDetails from '../../components/DrinkDetails/DrinkDetails';
// import { fetchFavoriteDrinks } from '../../../redux/drinks/operations';
import { fetchDrinkById } from '../../../redux/drinks/operations';

const DrinkDetailsPage = () => {
  const { drinkId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFavorite);
  const error = useSelector(selectErrorFavorite);

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

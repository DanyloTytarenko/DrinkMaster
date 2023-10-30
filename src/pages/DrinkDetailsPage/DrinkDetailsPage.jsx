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
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFavorite);
  const error = useSelector(selectErrorFavorite);

  useEffect(() => {
    dispatch(fetchDrinkById(id));
    // dispatch(fetchFavoriteDrinks());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && <b>Request in progress...</b>}
      <DrinkDetails />
    </Container>
  );
};

export default DrinkDetailsPage;

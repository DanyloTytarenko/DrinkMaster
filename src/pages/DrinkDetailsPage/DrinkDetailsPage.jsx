import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFavoriteDrinks } from '../../../redux/drinks/operations';
import {
  selectErrorFavorite,
  selectIsLoadingFavorite,
} from '../../../redux/drinks/selectors';
import { Container } from './DrinkDetailsPage.styled';
import DrinkDetails from '../../components/DrinkDetails/DrinkDetails';

const DrinkDetailsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFavorite);
  const error = useSelector(selectErrorFavorite);

  useEffect(() => {
    dispatch(fetchFavoriteDrinks());
    dispatch(fetchFavoriteDrinks());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && <b>Request in progress...</b>}
      <DrinkDetails />
    </Container>
  );
};

export default DrinkDetailsPage;

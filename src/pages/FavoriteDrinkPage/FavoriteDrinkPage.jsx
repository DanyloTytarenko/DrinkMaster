import { Container, Title } from './FavoriteDrinkPage.styled';
import { DrinksList } from '../../components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchFavoriteDrinks } from "../../../redux/drinks/operations";
import { selectErrorFavorite, selectIsLoadingFavorite} from "../../../redux/drinks/selectors";
const FavoriteDrinkPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFavorite);
  const error = useSelector(selectErrorFavorite);

  useEffect(() => {
    dispatch(fetchFavoriteDrinks());
  }, [dispatch]);
  return (
    <Container>
      <Title>FavoriteDrinkPage</Title>
      {isLoading && !error && <b>Request in progress...</b>}
      <DrinksList/>
    </Container>
  );
};

export default FavoriteDrinkPage;

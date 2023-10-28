import { Container, Title } from './FavoriteDrinkPage.styled';
import { DrinksList } from '../../components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchDrinks } from "../../../redux/drinks/operations";
import { selectError, selectIsLoading } from "../../../redux/drinks/selectors";
const FavoriteDrinkPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchDrinks("/drinks/favorite"));
  }, [dispatch]);
  return (
    <Container>
      <Title>FavoriteDrinkPage</Title>
      {isLoading && !error && <b>Request in progress...</b>}
      <DrinksList apiPath = '/drinks/favorite'/>
    </Container>
  );
};

export default FavoriteDrinkPage;

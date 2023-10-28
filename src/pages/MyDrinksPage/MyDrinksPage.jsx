import { Container, Title } from './MyDrinksPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchDrinks } from "../../../redux/drinks/operations";
import { selectError, selectIsLoading } from "../../../redux/drinks/selectors";
const MyDrinksPage = () => {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchDrinks("/drinks/own"));
  }, [dispatch]);
  return (
    <Container>
      <Title>DrinksPage Page</Title>
       {isLoading && !error && <b>Request in progress...</b>}
      <DrinksList apiPath = '/drinks/own'/>
    </Container>
  );
};

export default MyDrinksPage;

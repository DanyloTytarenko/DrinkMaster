import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchFavoriteDrinks } from '../../../redux/drinks/operations';
import {
  selectErrorFavorite,
  selectIsLoadingFavorite,
} from '../../../redux/drinks/selectors';
import { Container, Title } from './DrinkDetailsPage.styled';
import DrinkDetails from '../../components/DrinkDetails/DrinkDetails';
// import { data } from '../../components/DrinkDetails/recipes';

const DrinkDetailsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFavorite);
  const error = useSelector(selectErrorFavorite);

  useEffect(() => {
    dispatch(fetchFavoriteDrinks());
  }, [dispatch]);

  // const { drink } = data;
  // console.log(data);

  return (
    <Container>
      {/* <Title>{drink}drink</Title> */}
      {isLoading && !error && <b>Request in progress...</b>}
      <DrinkDetails />
    </Container>
  );
};

export default DrinkDetailsPage;

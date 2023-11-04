import { Container, Title } from './FavoriteDrinkPage.styled';
import { DrinksList } from '../../components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFavoriteDrinks } from '../../redux/drinks/operations';
import {
  selectErrorFavorite,
  selectIsLoadingFavorite,
} from '../../redux/drinks/selectors';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import PageTitle from 'src/components/PageTitle/PageTitle';
import Loader from 'src/components/Loader/Loader';
import { Alert } from '@mui/material';
const FavoriteDrinkPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFavorite);
  const error = useSelector(selectErrorFavorite);

  useEffect(() => {
    dispatch(fetchFavoriteDrinks());
  }, [dispatch]);
  return (
    <>
      <Header></Header>
      <Container>
        <PageTitle  title='Favorites' theme="dark"/>
        {isLoading && !error && <Loader />}
        {error && <Alert severity='info' variant='outlined'>Your drink list is empty</Alert>}
        <DrinksList />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default FavoriteDrinkPage;

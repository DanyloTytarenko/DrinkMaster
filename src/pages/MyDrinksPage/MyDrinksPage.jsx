import { Container, Title } from './MyDrinksPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOwnDrinks } from '../../redux/drinks/operations';
import { DrinksList } from '../../components/DrinksList/DrinksList';
import {
  selectErrorOwn,
  selectIsLoadingOwn,
} from '../../redux/drinks/selectors';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import { PopularDrinksComponent } from 'src/components/PopularDrinks/PopularDrinks';
import PageTitle from 'src/components/PageTitle/PageTitle';
import Loader from 'src/components/Loader/Loader';
import { Alert } from '@mui/material';
const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingOwn);
  const error = useSelector(selectErrorOwn);

  useEffect(() => {
    dispatch(fetchOwnDrinks());
  }, [dispatch]);
  return (
    <>
      <Header></Header>
      <Container>
        <PageTitle  title='My drinks' theme="dark"/>
        {isLoading && !error && <Loader />}
        {error && <Alert severity='info' variant='outlined'>Your drink list is empty</Alert>}
        <DrinksList />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default MyDrinksPage;

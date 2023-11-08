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
import NotFound from '../../components/NotFound/NotFound';
import {
  selectTheme
} from '../../redux/theme/themeSlice';
const FavoriteDrinkPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFavorite);
  const error = useSelector(selectErrorFavorite);
const theme = useSelector(selectTheme);
  useEffect(() => {
    dispatch(fetchFavoriteDrinks());
  }, [dispatch]);
  return (
    <>
      <Header></Header>
      <Container>
        <PageTitle title='Favorites' theme={theme} />
        {isLoading && !error && <Loader />}
        {error && <NotFound message={'Something went wrong'}/>}
        <DrinksList />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default FavoriteDrinkPage;

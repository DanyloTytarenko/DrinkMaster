import { Container, Title } from './FavoriteDrinkPage.styled';
import { DrinksList } from '../../components/DrinksList/DrinksList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFavoriteDrinks } from '../../redux/drinks/operations';
import {
  selectErrorFavorite,
  selectIsLoadingFavorite,
  selectFavoriteDrinksLimit,
  selectFavoriteDrinksMax
} from '../../redux/drinks/selectors';
import { selectPage } from 'src/redux/drinks/drinksPage/drinksPageSelectors';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import PageTitle from 'src/components/PageTitle/PageTitle';
import Loader from 'src/components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';
import {
  selectTheme
} from '../../redux/theme/themeSlice';
import Paginator from 'src/components/Paginator/Paginator';
const FavoriteDrinkPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingFavorite);
  const error = useSelector(selectErrorFavorite);
  const max = useSelector(selectFavoriteDrinksMax);
  const limit = useSelector(selectFavoriteDrinksLimit);
  const page = useSelector(selectPage);
  const theme = useSelector(selectTheme);
  useEffect(() => {
    dispatch(fetchFavoriteDrinks(page));
  }, [page]);
  return (
    <>
      <Header></Header>
      <Container>
        <PageTitle title='Favorites' theme={theme} />
        {isLoading && !error && <Loader />}
        {error && <NotFound message={'Something went wrong'} />}
        <DrinksList />
        <Paginator limit={limit} totalItems={max} />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default FavoriteDrinkPage;

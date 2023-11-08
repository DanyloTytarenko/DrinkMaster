import { Container, Title } from './MyDrinksPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOwnDrinks } from '../../redux/drinks/operations';
import { DrinksList } from '../../components/DrinksList/DrinksList';
import {
  selectErrorOwn,
  selectIsLoadingOwn,
  selectOwnDrinksLimit,
  selectOwnDrinksMax
} from '../../redux/drinks/selectors';
import { selectPage } from 'src/redux/drinks/drinksPage/drinksPageSelectors';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import { PopularDrinksComponent } from 'src/components/PopularDrinks/PopularDrinks';
import PageTitle from 'src/components/PageTitle/PageTitle';
import Loader from 'src/components/Loader/Loader';
import NotFound from '../../components/NotFound/NotFound';
import {
  selectTheme
} from '../../redux/theme/themeSlice';
import Paginator from 'src/components/Paginator/Paginator';
const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingOwn);
  const error = useSelector(selectErrorOwn);
  const theme = useSelector(selectTheme);
  const max = useSelector(selectOwnDrinksMax);
  const limit = useSelector(selectOwnDrinksLimit);
  const page = useSelector(selectPage);
  useEffect(() => {
    dispatch(fetchOwnDrinks(page));
  }, [page]);
  return (
    <>
      <Header></Header>
      <Container>
        <PageTitle  title='My drinks' theme={theme}/>
        {isLoading && !error && <Loader />}
        {error && <NotFound message={'Something went wrong'}/>}
        <DrinksList />
         <Paginator limit={limit} totalItems={max} />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default MyDrinksPage;

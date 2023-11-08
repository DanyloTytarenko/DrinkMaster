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
import NotFound from '../../components/NotFound/NotFound';
import {
  selectTheme
} from '../../redux/theme/themeSlice';
const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingOwn);
  const error = useSelector(selectErrorOwn);
const theme = useSelector(selectTheme);
  useEffect(() => {
    dispatch(fetchOwnDrinks());
  }, [dispatch]);
  return (
    <>
      <Header></Header>
      <Container>
        <PageTitle  title='My drinks' theme={theme}/>
        {isLoading && !error && <Loader />}
        {error && <NotFound message={'Something went wrong'}/>}
        <DrinksList />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default MyDrinksPage;

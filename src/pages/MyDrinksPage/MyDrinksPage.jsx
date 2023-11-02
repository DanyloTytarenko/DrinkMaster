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
        <Title>DrinksPage Page</Title>
        {isLoading && !error && <b>Request in progress...</b>}
        <DrinksList />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default MyDrinksPage;

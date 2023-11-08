import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';

import DrinksList from '../../components/DrinksSearch/DrinksList/DrinksList';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import {
  getDrinksCategoriesThunk,
  getDrinksIngredientsThunk,
  searchDrinksThunk,
} from '../../redux/drinks/drinksPage/drinksPageOperations';
import {
  selectCategories,
  selectIngredients,
  selectIsLoading,
  selectPage,
  selectSearchQuery,
  selectSearchResults,
} from '../../redux/drinks/drinksPage/drinksPageSelectors';
import Paginator from 'src/components/Paginator/Paginator';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';

import { DrinksContainer } from './DrinksPage.styled';
import Loader from 'src/components/Loader/Loader';
import PageTitle from 'src/components/PageTitle/PageTitle';
import MainAppContainer from 'src/components/MainAppContainer/MainAppContainer';
import { selectTheme } from 'src/redux/theme/themeSlice';
// import { Container, Title } from './DrinksPage.styled';

const DrinksPage = () => {
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const searchResults = useSelector(selectSearchResults);
  const page = useSelector(selectPage);
  const searchQuery = useSelector(selectSearchQuery);
  const isLoading = useSelector(selectIsLoading);
  const theme = useSelector(selectTheme);

  const dispatch = useDispatch();

  const isDesktop = useMediaQuery('(min-width:769px)');
  const limit = isDesktop ? 9 : 10;

  useEffect(() => {
    if (categories.length) return;
    dispatch(getDrinksCategoriesThunk());
  }, [categories, dispatch]);

  useEffect(() => {
    if (ingredients.length) return;
    dispatch(getDrinksIngredientsThunk());
  }, [dispatch, ingredients]);

  useEffect(() => {
    dispatch(searchDrinksThunk({ searchQuery, page, limit }));
  }, [dispatch, limit, page, searchQuery]);

  return (
    <>
      <Header />
      <MainAppContainer>
        <DrinksContainer>
          <PageTitle title="Drinks" theme={theme} />
          <DrinksSearch />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <DrinksList />
              <Paginator totalItems={searchResults.max_page} limit={limit} />
            </>
          )}
        </DrinksContainer>
      </MainAppContainer>
      <Footer />
    </>
  );
};

export default DrinksPage;

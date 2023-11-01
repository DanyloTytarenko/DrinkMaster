import { useEffect } from 'react';
import DrinksList from '../../components/DrinksSearch/DrinksList/DrinksList';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
// import { DrinksContainer, Title } from './DrinksPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDrinksCategoriesThunk,
  getDrinksIngredientsThunk,
  searchDrinksThunk,
} from '../../redux/drinks/drinksPageOperations';
import {
  selectCategories,
  selectIngredients,
  selectPage,
  selectSearchQuery,
  selectSearchResults,
  // selectTotalItems,
} from '../../redux/drinks/drinksPageSelectors';
import { useSearchParams } from 'react-router-dom';
// import Paginator from 'src/components/Paginator/Paginator';
import { useMediaQuery } from '@mui/material';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import { DrinksContainer } from './DrinksPage.styled';
// import { Container, Title } from './DrinksPage.styled';

const DrinksPage = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const searchResults = useSelector(selectSearchResults);
  // const totalItems = useSelector(selectTotalItems);
  const page = useSelector(selectPage);

  const isDesktop = useMediaQuery('(min-width:769px)');
  const limit = isDesktop ? 9 : 10;

  const searchQuery = useSelector(selectSearchQuery);

  useEffect(() => {
    if (categories.length) return;
    dispatch(getDrinksCategoriesThunk());
  }, [categories, dispatch]);

  useEffect(() => {
    if (ingredients.length) return;
    dispatch(getDrinksIngredientsThunk());
  }, [dispatch, ingredients]);

  useEffect(() => {
    console.log('searchQuery, page, limit :>> ', searchQuery, page, limit);
    dispatch(searchDrinksThunk({ searchQuery, page, limit }));
  }, [dispatch, limit, page, searchQuery]);

  // const [searchParams, setSearchParams] = useSearchParams();
  // useEffect(() => {
  //   console.log(
  //     'category, ingredient :>> ',
  //     searchQuery.category,
  //     searchQuery.ingredient,
  //   );
  //   // console.log('searchParams :>> ', searchParams);
  //   console.log(
  //     'route',
  //     `drinks/search?page=1&limit=9&keyword=${searchQuery.keyword}&category=${searchQuery.category}&ingredient=${searchQuery.ingredient}`,
  //   );
  // }, [searchParams, searchQuery]);

  return (
    <>
      <Header />
      <DrinksContainer>
        {/* <Title>DrinksPage</Title> */}
        <DrinksSearch />
        <DrinksList />
        {/* <Paginator totalItems={searchResults.max_page} limit={limit} /> */}
      </DrinksContainer>
      <Footer />
    </>
  );
};

export default DrinksPage;

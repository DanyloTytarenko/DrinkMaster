import { useEffect } from 'react';
import DrinksList from '../../components/DrinksSearch/DrinksList/DrinksList';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { DrinksContainer, Title } from './DrinksPage.styled';
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
} from '../../redux/drinks/drinksPageSelectors';
import { useSearchParams } from 'react-router-dom';

const DrinksPage = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const searchResults = useSelector(selectSearchResults);
  const page = useSelector(selectPage);
  const limit = 9;

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

  // if (window.innerWidth >= 768) {
  //   console.log(' :>> ');
  // }
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    console.log(
      'category, ingredient :>> ',
      searchQuery.category,
      searchQuery.ingredient,
    );
    console.log('searchParams :>> ', searchParams);
    // navigate(
    //   `/drinks/search?category=${category}&ingredient=${ingredient}&keyword=${searchQuery}`,
    // );
    // if (window.innerWidth >= 768) {
    //   console.log(' :>> ');
    // }
    console.log(
      'route',
      `drinks/search?page=1&limit=9&keyword=${searchQuery.keyword}&category=${searchQuery.category}&ingredient=${searchQuery.ingredient}`,
    );
  }, [searchParams, searchQuery]);

  return (
    <DrinksContainer>
      <Title>DrinksPage</Title>
      <DrinksSearch />
      <DrinksList />
    </DrinksContainer>
  );
};

export default DrinksPage;

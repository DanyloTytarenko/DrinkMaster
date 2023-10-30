import { useEffect } from 'react';
import DrinksList from '../../components/DrinksSearch/DrinksList/DrinksList';
import DrinksSearch from '../../components/DrinksSearch/DrinksSearch';
import { DrinksContainer, Title } from './DrinksPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDrinksCategoriesThunk,
  getDrinksIngredientsThunk,
} from '../../redux/drinks/drinksPageOperations';
import {
  selectCategories,
  selectIngredients,
} from '../../redux/drinks/drinksPageSelectors';

const DrinksPage = () => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  useEffect(() => {
    if (categories.length) return;
    dispatch(getDrinksCategoriesThunk());
  }, [categories, dispatch]);

  useEffect(() => {
    if (ingredients.length) return;
    dispatch(getDrinksIngredientsThunk());
  }, [dispatch, ingredients]);

  return (
    <DrinksContainer>
      <Title>DrinksPage</Title>
      <DrinksSearch />
      <DrinksList />
    </DrinksContainer>
  );
};

export default DrinksPage;

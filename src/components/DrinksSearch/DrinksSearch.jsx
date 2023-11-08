import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';

import {
  selectCategories,
  selectIngredients,
} from '../../redux/drinks/drinksPage/drinksPageSelectors';
import {
  setCurrentPage,
  setQuery,
  setSelectedCategory,
  setSelectedIngredient,
} from '../../redux/drinks/drinksPage/drinksPageSlice';

import {
  StyledInput,
  StyledLabel,
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchIcon,
  StyledSearchWrapper,
  StyledSelect,
  customStyles,
  customStylesLight,
} from './DrinksSearch.styled';
import { selectTheme } from 'src/redux/theme/themeSlice';

const DrinksSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const theme = useSelector(selectTheme);

  const allCategories =
    categories.length !== 0 ? ['All categories', ...categories] : [];
  const allIngredients =
    ingredients.length !== 0
      ? [{ title: 'All ingredients' }, ...ingredients]
      : [];

  const dispatch = useDispatch();

  const screenSize = useMediaQuery('(max-width:767px)');

  useEffect(() => {
    if (screenSize) dispatch(setQuery(searchQuery));
  }, [dispatch, screenSize, searchQuery]);

  const onChangeFilter = (label, value = '') => {
    switch (label) {
      case 'searchQuery':
        setSearchQuery(value);
        dispatch(setCurrentPage(1));
        break;
      case 'category':
        // setCategory(value);
        if (value === 'All categories') {
          dispatch(setSelectedCategory(''));
          return;
        }
        dispatch(setSelectedCategory(value));
        dispatch(setCurrentPage(1));
        break;
      case 'ingredient':
        // setIngredient(value);
        if (value === 'All ingredients') {
          dispatch(setSelectedIngredient(''));
          return;
        }
        dispatch(setSelectedIngredient(value));
        dispatch(setCurrentPage(1));
        break;
      default:
        break;
    }
  };

  // Пошук за ключовим словом
  const handleSearchQuery = (event) => {
    onChangeFilter('searchQuery', event.target.value.trim());
  };

  // Пошук по категорії напитку
  const handleChangeCategory = (category) => {
    onChangeFilter('category', category.value);
  };

  // Пошук по інградієнту
  const handleChangeIngredient = (ingredient) => {
    onChangeFilter('ingredient', ingredient.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    dispatch(setQuery(searchQuery));
  };

  // theme === 'dark' ? console.log('customStyles') : console.log('customStyles2');

  return (
    <StyledSearchWrapper>
      <StyledSearchForm onSubmit={handleSubmitSearch}>
        <StyledLabel>
          <StyledInput
            type="text"
            placeholder="Enter the text"
            onChange={handleSearchQuery}
            theme={theme}
            // value={searchQuery}
          />

          <StyledSearchButton type="submit">
            <StyledSearchIcon theme={theme} />
          </StyledSearchButton>
        </StyledLabel>
        <StyledSelect
          name="category"
          placeholder="All categories"
          classNamePrefix="react-select"
          // styles={customStyles}
          styles={theme === 'dark' ? customStyles : customStylesLight}
          theme={theme}
          noOptionsMessage={() => 'No categories'}
          options={allCategories.map((item) => ({
            label: item,
            value: item,
          }))}
          onChange={handleChangeCategory}
        />
        <StyledSelect
          name="ingredient"
          styles={customStyles}
          theme={theme}
          placeholder="Ingredients"
          classNamePrefix="react-select"
          noOptionsMessage={() => 'No ingredients'}
          options={allIngredients.map((item) => ({
            label: item.title,
            value: item.title,
          }))}
          onChange={handleChangeIngredient}
        />
      </StyledSearchForm>
    </StyledSearchWrapper>
  );
};

export default DrinksSearch;

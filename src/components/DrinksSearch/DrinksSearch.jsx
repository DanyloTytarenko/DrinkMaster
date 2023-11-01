import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import {
  StyledInput,
  StyledLabel,
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchIcon,
  StyledSearchWrapper,
  StyledSelect,
  customStyles,
} from './DrinksSearch.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectIngredients,
} from '../../redux/drinks/drinksPageSelectors';
import {
  setCurrentPage,
  setQuery,
  setSelectedCategory,
  setSelectedIngredient,
} from '../../redux/drinks/drinksPageSlice';
import { useMediaQuery } from '@mui/material';

// const DrinksSearch = ({ categories, ingredients }) => {
const DrinksSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [category, setCategory] = useState('');
  // const [ingredient, setIngredient] = useState('');
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  const dispatch = useDispatch();

  const screenSize = useMediaQuery('(max-width:767px)');

  // useEffect(() => {
  //   if (window.innerWidth <= 425) {
  //     dispatch(setQuery(searchQuery));
  //   }
  // }, [dispatch, searchQuery]);

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
        dispatch(setSelectedCategory(value));
        dispatch(setCurrentPage(1));
        break;
      case 'ingredient':
        // setIngredient(value);
        dispatch(setSelectedIngredient(value));
        dispatch(setCurrentPage(1));
        break;
      default:
        break;
    }
  };

  const handleSearchQuery = (event) => {
    onChangeFilter('searchQuery', event.target.value.trim());
    // setSearchQuery(event.target.value.trim());
  };

  const handleChangeCategory = (category) => {
    // console.log('category :>> ', category);
    // if (category) onChangeFilter('category', category.value);
    //   else onChangeFilter('category', '');
    onChangeFilter('category', category.value);
  };

  const handleChangeIngredient = (ingredient) => {
    // console.log('option :>> ', ingredient);
    // if (ingredient) onChangeFilter('ingredient', ingredient.value);
    // else
    // onChangeFilter('category', '');
    onChangeFilter('ingredient', ingredient.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    // console.log('searchQuery :>> ', searchQuery);
    dispatch(setQuery(searchQuery));
  };

  return (
    <StyledSearchWrapper>
      <StyledSearchForm onSubmit={handleSubmitSearch}>
        <StyledLabel>
          <div>
            <StyledInput
              type="text"
              placeholder="Enter the text"
              onChange={handleSearchQuery}
              // value={searchQuery}
            />

            <StyledSearchButton type="submit">
              <StyledSearchIcon />
            </StyledSearchButton>
          </div>
        </StyledLabel>
        <StyledSelect
          // isSearchable={false}
          name="category"
          placeholder="All categories"
          classNamePrefix="react-select"
          styles={customStyles}
          options={categories.map((item) => ({
            label: item,
            value: item,
          }))}
          onChange={handleChangeCategory}
        />
        <StyledSelect
          name="ingredient"
          styles={customStyles}
          placeholder="Ingredients"
          classNamePrefix="react-select"
          options={ingredients.map((item) => ({
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

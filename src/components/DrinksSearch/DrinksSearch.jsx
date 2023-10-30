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

const DrinksSearch = ({ categories, ingredients }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');

  // const navigate = useNavigate();

  useEffect(() => {
    console.log('category, ingredient :>> ', category, ingredient);
    // navigate(
    //   `/drinks/search?category=${category}&ingredient=${ingredient}&keyword=${searchQuery}`,
    // );
    // if (window.innerWidth >= 768) {
    //   console.log(' :>> ');
    // }
    console.log(
      'route',
      `/drinks/search?category=${category}&ingredient=${ingredient}&keyword=${searchQuery}`,
    );
  }, [category, ingredient, searchQuery]);

  const onChangeFilter = (label, value = '') => {
    switch (label) {
      case 'searchQuery':
        console.log('value :>> ', value);
        setSearchQuery(value);
        break;
      case 'category':
        console.log('valuecategory :>> ', value);
        setCategory(value);
        break;
      case 'ingredient':
        console.log('valueingredient :>> ', value);
        setIngredient(value);
        break;
      default:
        break;
    }
  };

  const handleSearchQuery = (event) => {
    onChangeFilter('searchQuery', event.target.value.trim());
    console.log('event.target :>> ', event.target.value.trim());
    // setSearchQuery(event.target.value.trim());
  };

  const handleChangeCategory = (category) => {
    console.log('option :>> ', category);
    // if (category) onChangeFilter('category', category.value);
    //   else onChangeFilter('category', '');
    onChangeFilter('category', category.value);
  };

  const handleChangeIngredient = (ingredient) => {
    console.log('option :>> ', ingredient);
    if (ingredient) onChangeFilter('category', ingredient.value);
    else onChangeFilter('category', '');
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    console.log('searchQuery :>> ', searchQuery);
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

import axios from 'axios';

axios.defaults.baseURL = 'https://drinks-whm4.onrender.com/api/';

export const getDrinksCategories = async () => {
  const { data } = await axios.get('filters/categories');
  return data;
};

export const getDrinksIngredients = async () => {
  const { data } = await axios.get('filters/ingredients');
  return data;
};

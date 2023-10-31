import axios from 'axios';

axios.defaults.baseURL = 'https://drinks-whm4.onrender.com/';

export const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getDrinksCategories = async () => {
  const { data } = await axios.get('filters/categories');
  return data;
};

export const getDrinksIngredients = async () => {
  const { data } = await axios.get('filters/ingredients');
  return data;
};

export const searchDrinks = async ({ searchQuery }, page, limit) => {
  const { keyword, category, ingredient } = searchQuery;

  const { data } = await axios.get(
    `drinks/search?page=${page}&limit=${limit}&keyword=${keyword}&category=${category}&ingredient=${ingredient}`,
  );
  return data;
};

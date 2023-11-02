import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   getDrinksCategories,
//   getDrinksIngredients,
//   searchDrinks,
//   setToken,
// } from '../../../../services/drinksApi';

axios.defaults.baseURL = 'https://drinks-whm4.onrender.com/';

export const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Запит на отримання категорій коктелів
export const getDrinksCategoriesThunk = createAsyncThunk(
  'filters/getDrinksCategories',
  async (_, thunkAPI) => {
    try {
      // return await getDrinksCategories();
      const { data } = await axios.get('filters/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Запит на отримання інградієнтів коктелів
export const getDrinksIngredientsThunk = createAsyncThunk(
  'filters/getDrinksIngredients',
  async (_, thunkAPI) => {
    try {
      // return await getDrinksIngredients();
      const { data } = await axios.get('filters/ingredients');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Пошуковий запит за ключовим словом, вибраною категорією та інградієнтом
export const searchDrinksThunk = createAsyncThunk(
  'filters/searchDrinks',
  async ({ searchQuery, page, limit }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      // return await searchDrinks({ searchQuery }, page, limit);
      const { keyword, category, ingredient } = searchQuery;

      const { data } = await axios.get(
        `drinks/search?page=${page}&limit=${limit}&keyword=${keyword}&category=${category}&ingredient=${ingredient}`,
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

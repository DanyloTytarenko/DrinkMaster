import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDrinksCategories,
  getDrinksIngredients,
  searchDrinks,
  setToken,
} from '../../../services/drinksApi';

const tempToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2ZhODU4MTQ5Y2Q0MjUxNDkwNTg1MCIsImlhdCI6MTY5ODY3NDMzMSwiZXhwIjoxNjk4NzYwNzMxfQ.DXUGvk2pApyiYKT-yJB5FX4bamqi5fZZj4Qo5c_9xYA';

export const getDrinksCategoriesThunk = createAsyncThunk(
  'filters/getDrinksCategories',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    try {
      //   setToken(persistedToken);
      console.log('object :>> ', getDrinksCategories());
      return await getDrinksCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getDrinksIngredientsThunk = createAsyncThunk(
  'filters/getDrinksIngredients',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    try {
      //   setToken(persistedToken);
      return await getDrinksIngredients();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const searchDrinksThunk = createAsyncThunk(
  'filters/searchDrinks',
  async ({ searchQuery, page, limit }, thunkAPI) => {
    console.log('searchQuery2 :>> ', searchQuery, page, limit);
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    try {
      setToken(tempToken);
      //   setToken(persistedToken);
      return await searchDrinks({ searchQuery }, page, limit);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

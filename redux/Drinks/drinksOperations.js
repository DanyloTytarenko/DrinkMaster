import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDrinksCategories,
  getDrinksIngredients,
} from '../../services/drinksApi';

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

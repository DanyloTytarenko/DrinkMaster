import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDrinksCategories,
  getDrinksIngredients,
  searchDrinks,
  setToken,
} from '../../../services/drinksApi';

const tempToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTQxMWFjZGViMWM4MTFhNTEzNjZjNzUiLCJzaWQiOiI2NTQyYjRiOTI5M2Y5MTI1MTBiNGYxZmMiLCJpYXQiOjE2OTg4NzA0NTcsImV4cCI6MTY5ODg3NzY1N30.hQWQayDCL3yEWKD32TtWPuuBGhBoacwwFqzmZXG3WSQ';

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

export const searchDrinksThunk = createAsyncThunk(
  'filters/searchDrinks',
  async ({ searchQuery, page, limit }, thunkAPI) => {
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getDrinksCategories,
  getDrinksIngredients,
} from '../../services/drinksApi';
axios.defaults.baseURL = 'https://drinks-whm4.onrender.com';
export const fetchOwnDrinks = createAsyncThunk(
  'drinks/fetchOwn',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/own');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const fetchFavoriteDrinks = createAsyncThunk(
  'drinks/fetchFavorite',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/favorite');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const addOwnDrink = createAsyncThunk(
  'drinks/addOwnDrink',
  async (drink, thunkAPI) => {
    try {
      const response = await axios.post('/drinks/own/add', drink);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const addFavoriteDrink = createAsyncThunk(
  'drinks/addFavoriteDrink',
  async (drink, thunkAPI) => {
    try {
      const response = await axios.post('/drinks/favorite/add', drink);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const deleteOwnDrink = createAsyncThunk(
  'drinks/deleteOwnDrink',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/own/remove/${drinkId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
export const deleteFavoriteDrink = createAsyncThunk(
  'drinks/deleteFavoriteDrink',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/favorite/remove/${drinkId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// Отримання категорій коктелів
export const getDrinksCategoriesThunk = createAsyncThunk(
  'filters/getDrinksCategories',
  async (_, thunkAPI) => {
    try {
      return await getDrinksCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Отримання інгредієнтів коктелів
export const getDrinksIngredientsThunk = createAsyncThunk(
  'filters/getDrinksIngredients',
  async (_, thunkAPI) => {
    try {
      return await getDrinksIngredients();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

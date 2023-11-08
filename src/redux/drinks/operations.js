import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://drinks-whm4.onrender.com';

export const setToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const fetchOwnDrinks = createAsyncThunk(
  'drinks/fetchOwn',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/own?page=${page}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchFavoriteDrinks = createAsyncThunk(
  'drinks/fetchFavorite',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/favorite?page=${page}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchPopularDrinks = createAsyncThunk(
  'drinks/fetchPopular',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/popular');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addOwnDrinkImg = createAsyncThunk(
  'drinks/addOwnDrinkImg',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/drinks/own/add/img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.status === 201
        ? response.data.avatarURL
        : e.response.data;
    } catch (e) {
      if (!e.response) {
        throw e;
      }
      return rejectWithValue(e.response.data);
    }
  },
);

export const addOwnDrink = createAsyncThunk(
  'drinks/addOwnDrink',
  async (drink, { rejectWithValue }) => {
    try {
      const response = await axios.post('/drinks/own/add', drink);
      return response.status === 201 || response.status === 200 ? response.config.data : e.response.data;
    } catch (e) {
      if (!e.response) {
        throw e;
      }
      return rejectWithValue(e.response.data);
    }
  },
);
export const addFavoriteDrink = createAsyncThunk(
  'drinks/addFavoriteDrink',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.post(`/drinks/favorite/add/${drinkId}`);
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
      return drinkId;
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
      return drinkId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// отримання даних із фільтрів (переліки категорій, сервування, інгрідієнтів)
export const fetchCategories = createAsyncThunk(
  'drink/getCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/categories');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchGlass = createAsyncThunk(
  'drink/getGlasses',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/glasses');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchIngredient = createAsyncThunk(
  'drink/getIngredient',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/ingredients');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// *** for DrinkById
export const fetchDrinkById = createAsyncThunk(
  'drinks/fetchDrinkById',
  async (drinkId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/drinks/${drinkId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

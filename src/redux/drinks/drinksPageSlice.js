import { createSlice } from '@reduxjs/toolkit';

import {
  getDrinksCategoriesThunk,
  getDrinksIngredientsThunk,
} from './drinksPageOperations';

const initialState = {
  searchQuery: { keyword: '', category: '', ingredient: '' },
  categories: [],
  ingredients: [],
  page: 1,
  totalPages: null,
  searchResults: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    setSearchQuery: (state, { payload }) => {
      state.searchQuery.keyword = payload;
    },
    setSelectedCategory: (state, { payload }) => {
      state.searchQuery.category = payload;
    },
    setSelectedIngredient: (state, { payload }) => {
      state.searchQuery.ingredient = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [getDrinksCategoriesThunk.pending]: handlePending,
    [getDrinksCategoriesThunk.fulfilled](state, { payload }) {
      state.categories = payload;
      state.isLoading = false;
    },
    [getDrinksCategoriesThunk.rejected]: handleRejected,
    [getDrinksIngredientsThunk.pending]: handlePending,
    [getDrinksIngredientsThunk.fulfilled](state, { payload }) {
      state.ingredients = payload;
      state.isLoading = false;
    },
    [getDrinksIngredientsThunk.rejected]: handleRejected,
  },
});

export const drinksReducer = drinksSlice.reducer;

export const {
  setSearchQuery,
  setSelectCategory,
  setSelectIngredient,
  setCurrentPage,
} = drinksSlice.actions;

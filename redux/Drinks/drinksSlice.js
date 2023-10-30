import { createSlice } from '@reduxjs/toolkit';
import {
  getDrinksCategories,
  getDrinksIngredients,
} from '../../services/drinksApi';

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
  extraReducers: (builder) => {
    builder
      .addCase(getDrinksCategories.pending, handlePending)
      .addCase(getDrinksCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
      })
      .addCase(getDrinksCategories.rejected, handleRejected)
      .addCase(getDrinksIngredients.pending, handlePending)
      .addCase(getDrinksIngredients.fulfilled, (state, { payload }) => {
        state.ingredients = payload;
        state.isLoading = false;
      })
      .addCase(getDrinksIngredients.rejected, handleRejected);
  },
});

export const drinksReducer = drinksSlice.reducer;

export const {
  setSearchQuery,
  setSelectCategory,
  setSelectIngredient,
  setCurrentPage,
} = drinksSlice.actions;

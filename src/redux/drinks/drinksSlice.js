import { createSlice } from '@reduxjs/toolkit';
import {
  fetchOwnDrinks,
  addOwnDrink,
  deleteOwnDrink,
  fetchFavoriteDrinks,
  addFavoriteDrink,
  deleteFavoriteDrink,
  fetchCategories,
  fetchGlass,
  fetchIngredient,
  fetchPopularDrinks,
} from './operations';
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const popularDrinksSlice = createSlice({
  name: 'popularDrinks',
  initialState,
  extraReducers: {
    [fetchPopularDrinks.pending]: handlePending,
    [fetchPopularDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchPopularDrinks.rejected]: handleRejected,
  },
});

export const ownDrinksSlice = createSlice({
  name: 'ownDrinks',
  initialState,
  extraReducers: {
    [fetchOwnDrinks.pending]: handlePending,
    [fetchOwnDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.drinks;
      state.max_page = action.payload.max_page;
      state.page = action.payload.page;
      state.per_page = action.payload.per_page;
    },
    [fetchOwnDrinks.rejected]: handleRejected,
    [addOwnDrink.pending]: handlePending,
    [addOwnDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.items.push(action.payload);
    },
    [addOwnDrink.rejected]: handleRejected,
    [deleteOwnDrink.pending]: handlePending,
    [deleteOwnDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    [deleteOwnDrink.rejected]: handleRejected,
  },
});
export const favoriteDrinksSlice = createSlice({
  name: 'favoriteDrinks',
  initialState,
  extraReducers: {
    [fetchFavoriteDrinks.pending]: handlePending,
    [fetchFavoriteDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.favoriteDrinks;
      state.max_page = action.payload.max_page;
      state.page = action.payload.page;
      state.per_page = action.payload.per_page;
    },
    [fetchFavoriteDrinks.rejected]: handleRejected,
    [addFavoriteDrink.pending]: handlePending,
    [addFavoriteDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addFavoriteDrink.rejected]: handleRejected,
    [deleteFavoriteDrink.pending]: handlePending,
    [deleteFavoriteDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    [deleteFavoriteDrink.rejected]: handleRejected,
  },
});

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: {
    [fetchCategories.pending]: handlePending,
    [fetchCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCategories.rejected]: handleRejected,
  },
});
export const glassSlice = createSlice({
  name: 'glass',
  initialState,
  extraReducers: {
    [fetchGlass.pending]: handlePending,
    [fetchGlass.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchGlass.rejected]: handleRejected,
  },
});
export const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState,
  extraReducers: {
    [fetchIngredient.pending]: handlePending,
    [fetchIngredient.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchIngredient.rejected]: handleRejected,
  },
});
export const favoriteDrinksReducer = favoriteDrinksSlice.reducer;
export const ownDrinksReducer = ownDrinksSlice.reducer;
export const popularDrinksReducer = popularDrinksSlice.reducer;
export const categoryReducer = categorySlice.reducer;
export const glassReducer = glassSlice.reducer;
export const ingredientReducer = ingredientSlice.reducer;

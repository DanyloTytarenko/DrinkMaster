import { createSlice } from '@reduxjs/toolkit';
import { fetchDrinkById } from './operations';
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const initialState = {
  drinkById: {},
  isLoading: false,
  error: null,
};
export const drinkByIdSlice = createSlice({
  name: 'drinkDetails',
  initialState,
  extraReducers: {
    [fetchDrinkById.pending]: handlePending,
    [fetchDrinkById.fulfilled](state, { payload }) {
      state.drinkById = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchDrinkById.rejected]: handleRejected,
  },
});

export const drinkByIdReducer = drinkByIdSlice.reducer;

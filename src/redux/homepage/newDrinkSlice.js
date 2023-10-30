import { createSlice} from "@reduxjs/toolkit";

import { fetchNewDrinks } from "./operations";

const handlePending = state => {
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
export const newDrinksSlice = createSlice({
  name: "newDrinks",
  initialState,
  extraReducers: {
    [fetchNewDrinks.pending]: handlePending,
    [fetchNewDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchNewDrinks.rejected]: handleRejected,
    }});

    export const newDrinksReducer = newDrinksSlice.reducer;
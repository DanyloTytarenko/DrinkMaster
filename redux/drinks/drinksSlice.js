import { createSlice} from "@reduxjs/toolkit";
import { fetchDrinks, addDrink, deleteDrink } from "./operations";
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
export const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  extraReducers: {
    [fetchDrinks.pending]: handlePending,
    [fetchDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchDrinks.rejected]: handleRejected,
    [addDrink.pending]: handlePending,
    [addDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addDrink.rejected]: handleRejected,
    [deleteDrink.pending]: handlePending,
    [deleteDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteDrink.rejected]: handleRejected,
  },
});
export const drinksReducer = drinksSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchOwnDrinks,
  addOwnDrink,
  deleteOwnDrink,
  fetchFavoriteDrinks,
  addFavoriteDrink,
  deleteFavoriteDrink,
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
export const ownDrinksSlice = createSlice({
  name: 'ownDrinks',
  initialState,
  extraReducers: {
    [fetchOwnDrinks.pending]: handlePending,
    [fetchOwnDrinks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchOwnDrinks.rejected]: handleRejected,
    [addOwnDrink.pending]: handlePending,
    [addOwnDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addOwnDrink.rejected]: handleRejected,
    [deleteOwnDrink.pending]: handlePending,
    [deleteOwnDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
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
      state.items = action.payload;
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
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    [deleteFavoriteDrink.rejected]: handleRejected,
  },
});
export const favoriteDrinksReducer = favoriteDrinksSlice.reducer;
export const ownDrinksReducer = ownDrinksSlice.reducer;

// //***
// import { createSlice } from '@reduxjs/toolkit';
// // import { fetchContacts, deleteContact, addContact } from './operations';

// const handlePending = (state) => {
//   state.contacts.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.error = action.payload;
// };

// const initialStateDrinkDetails = {
//   drinkDetails: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
// };

// const drinkDetails = createSlice({
//   name: 'drinkDetails',
//   initialState: initialStateDrinkDetails,

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = state.contacts.items.filter(
//           ({ id }) => id !== action.payload.id,
//         );
//       })
//       .addCase(deleteContact.rejected, handleRejected)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, { payload: newContact }) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = [...state.contacts.items, newContact];
//       })
//       .addCase(addContact.rejected, handleRejected);
//   },
// });

// export default drinkDetails.reducer;
// export const selectDrinkDetails = (state) => state.drinkDetails.drinkDetails;

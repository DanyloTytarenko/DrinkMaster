import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialValues } from 'src/utils/addDrinkFormInitials';

const persistConfig = {
  key: 'form',
  storage,
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialValues,
  reducers: {
    setForm(state, action) {
      state.form = action.payload;
    },
  },
});

export const { setForm } = formSlice.actions;

export const persistedFormReducer = persistReducer(
  persistConfig,
  formSlice.reducer,
);

export const formReducer = formSlice.reducer;

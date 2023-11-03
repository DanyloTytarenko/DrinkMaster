import { createSlice } from '@reduxjs/toolkit';
import {
  register, logIn, logOut, //updateUser
} from './operations';
import { ValidMessage } from 'src/components/ValidMessage/ValidMessage';

const initialState = {
  user: { name: null, birthday: null, email: null },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRegisterFulfilled = (state, action) => {
   state.user = action.payload.user;
  state.accessToken = action.payload.accessToken;
  state.isLoggedIn = true;
};

const handleLoginFulfilled = (state, action) => {
   state.user = action.payload.user;
  state.accessToken = action.payload.accessToken;
  state.isLoggedIn = true;
};
const handleUpdatedFulfilled = (state, action) => {
   state.user = action.payload.user;
  state.accessToken = action.payload.accessToken;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = (state) => {
   state.user = { name: null, email: null, birthday: null, email: null };
      state.accessToken = null;
      state.isLoggedIn = false;
};

const handleRejected = (_, action) => {
  return ValidMessage(action.payload);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.fulfilled, handleLoginFulfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
    //   .addCase(updateUser.fulfilled, handleUpdatedFulfilled)
    // .addCase(updateUser.rejected, handleRejected)
  },
});

export const authReducer = authSlice.reducer;
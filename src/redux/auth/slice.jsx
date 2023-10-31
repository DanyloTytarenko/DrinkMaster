import { createSlice } from '@reduxjs/toolkit';
import { register, logIn } from './operations';
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
  },
});

export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  refreshUser,
  logOut,
  subscribeEmail,
  updateUser,
} from './operations';
import { ValidMessage } from 'src/components/ValidMessage/ValidMessage';

const initialState = {
  user: { name: null, birthday: null, email: null },
  id: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isSubscribed: false,
};

const handleRegisterFulfilled = (state, action) => {
  state.id = action.payload.sid;
  state.user = action.payload.user;
  state.accessToken = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
  state.isLoggedIn = true;
};

const handleLoginFulfilled = (state, action) => {
  state.id = action.payload.sid;
  state.user = action.payload.user;
  state.accessToken = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
  state.isLoggedIn = true;
};

const handleRefreshFulfilled = (state, action) => {
  state.id = action.payload.sid;
  state.accessToken = action.payload.user.accessToken;
  state.refreshToken = action.payload.user.refreshToken;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.email;
  state.user.birthday = action.payload.user.birthday;
  state.user.avatar = action.payload.user.avatar;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleUpdatedFulfilled = (state, action) => {
  state.user.name = action.payload.name;
  state.user.avatar = action.payload.avatar;
};

const handleLogOutFulfilled = (state) => {
  state.user = { name: null, email: null, birthday: null };
  state.accessToken = null;
  state.isLoggedIn = false;
};

const handleRejected = (_, action) => {
  return ValidMessage(action.payload);
};

const handleSubscribeFulfilled = (state) => {
  state.isSubscribed = true;
};

const handleSubscribeRejected = (_, action) => {
  const status = parseInt(action.payload.replace(/[^\d]/g, ''));
  
  return ValidMessage(status);
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
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(subscribeEmail.fulfilled, handleSubscribeFulfilled)
      .addCase(subscribeEmail.rejected, handleSubscribeRejected)
      .addCase(updateUser.fulfilled, handleUpdatedFulfilled)
      .addCase(updateUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

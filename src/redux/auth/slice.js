import { createSlice } from '@reduxjs/toolkit';
import { register, logIn } from './operations';

const initialState = {
  user: { name: null, birthday: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRegisterFulfilled = (state, action) => {

  // test
  // state.token = action.payload.token;

  // коли буде готовий бек
   state.user = action.payload.user;
  state.token = action.payload.token;
  // state.isLoggedIn = true;
};

const handleRegisterRejected = (_, action) => {
  if (action.payload === 400) {
    return alert('Registration unsuccessful. Please try again.');
  }
};

const handleLoginFulfilled = (state, action) => {

  // test
  console.log(action.payload)

  // коли буде готовий бек
  //  state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
};

const handleLoginRejected = (_, action) => {
  if (action.payload === 400) {
    return alert('Enter the correct username and password.')
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(register.rejected, handleRegisterRejected)
      .addCase(logIn.fulfilled, handleLoginFulfilled)
      .addCase(logIn.rejected, handleLoginRejected)
  },
});

export const authReducer = authSlice.reducer;

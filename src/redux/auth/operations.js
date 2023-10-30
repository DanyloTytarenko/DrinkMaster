import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// розкоментувати коли буде готовий бек
axios.defaults.baseURL = 'https://drinks-whm4.onrender.com';
// https://drinks-whm4.onrender.com/auth/singup
// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

/*
 * POST @ /signup
 * body: { name, birthday, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {

      const result = await axios.post('/auth/singup', credentials);
      // After successful registration, add the token to the HTTP header
        // setAuthHeader(result.data.token);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

/*
 * POST @ /singin
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const result = await axios.post('/auth/singin', credentials);
      console.log(result.data)
      // After successful login, add the token to the HTTP header
      setAuthHeader(result.data.token);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

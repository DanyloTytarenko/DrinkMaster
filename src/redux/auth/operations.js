import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://drinks-whm4.onrender.com';

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /signup
 * body: { name, birthday, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const result = await axios.post('/auth/signup', credentials);

      // After successful registration, add the token to the HTTP header
      setAuthHeader(result.data.accessToken);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);

/*
 * POST @ /singin
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const result = await axios.post('/auth/signin', credentials);

      // After successful login, add the token to the HTTP header
      setAuthHeader(result.data.accessToken);

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);

/* POST @ /auth/singout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/singout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/* POST @ /auth/singout
 * headers: Authorization: Bearer token
 */
// export const updateUser = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/auth/singout');
//     // After a successful logout, remove the token from the HTTP header
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

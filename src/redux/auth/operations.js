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
 * POST @ /auth/signup
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
 * POST @ /auth/signin
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

/*
 * POST @ /auth/refresh
 * body: { id }
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const id = state.auth.id;
    const refreshToken = state.auth.refreshToken;

    if (refreshToken === null && id === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(refreshToken);

      const auth = await axios.post('/auth/refresh', { sid: id });
      setAuthHeader(auth.data.user.accessToken);

      return auth.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/* POST @ /auth/singout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/signout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/* PATCH @ /users/update
 * headers: Authorization: Bearer token
 */
export const updateUser = createAsyncThunk(
  '/auth/users/update',
  async (userData, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('avatar', userData.avatar);
      const result = await axios.patch('/users/update', formData);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/*
 * POST @ /users/subscribe
 * body: { email }
 */
export const subscribeEmail = createAsyncThunk(
  '/users/subscribe',
  async (userData, thunkAPI) => {
    try {
      await axios.post('/users/subscribe', userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

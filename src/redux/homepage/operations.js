import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://drinks-whm4.onrender.com/drinks/mainpage"

export const fetchNewDrinks = createAsyncThunk(
    "drinks/fetchNew",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/drinks/mainpage');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
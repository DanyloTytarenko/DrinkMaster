import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://drinks-whm4.onrender.com"
export const fetchDrinks = createAsyncThunk(
    "drinks/fetch",
    async (apiPath, thunkAPI) => {
      try {
        const response = await axios.get(apiPath);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const addDrink = createAsyncThunk(
    "drinks/addDrink",
    async (drink, apiPath, thunkAPI) => {
      try {
        const response = await axios.post(apiPath, drink);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteDrink = createAsyncThunk(
    "drinks/deleteDrink",
    async (drinkId,apiPath, thunkAPI) => {
      try {
        const response = await axios.delete(`${apiPath}/${drinkId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  

  
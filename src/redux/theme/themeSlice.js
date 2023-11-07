import { createSlice } from '@reduxjs/toolkit';



export const themeSlice = createSlice({
  name: 'theme',
  initialState: { color: 'dark' },
  reducers: {
    toggleTheme: (state) => {
      state.color = state.color === 'light' ? 'dark' : 'light';
    },
  },
});



export const { toggleTheme }  = themeSlice.actions;
export const selectTheme = (state) => state.theme.color;


export const themeReducer = themeSlice.reducer;

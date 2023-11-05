import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/slice';
import { ownDrinksReducer, favoriteDrinksReducer, popularDrinksReducer } from './drinks/drinksSlice';
import { persistedFormReducer } from './drinks/formSlice';
import { drinksReducer } from './drinks/drinksPage/drinksPageSlice';
import {
  categoryReducer,
  glassReducer,
  ingredientReducer,
} from './drinks/drinksSlice';
import { drinkByIdReducer } from './drinks/drinkDetailsSlice';
import {themeReducer} from './theme/themeSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    ownDrinks: ownDrinksReducer,
    favoriteDrinks: favoriteDrinksReducer,
    popularDrinks: popularDrinksReducer,
    form: persistedFormReducer,
    drinks: drinksReducer,
    category: categoryReducer,
    glass: glassReducer,
    ingredient: ingredientReducer,
    drinkDetails: drinkByIdReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

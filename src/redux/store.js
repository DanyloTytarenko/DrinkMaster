import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { ownDrinksReducer, favoriteDrinksReducer, popularDrinksReducer } from './drinks/drinksSlice';
import { persistedFormReducer } from './drinks/formSlice';
import { newDrinksReducer } from './homepage/newDrinkSlice';
import { drinksReducer } from './drinks/drinksPage/drinksPageSlice';
import {
  categoryReducer,
  glassReducer,
  ingredientReducer,
} from './drinks/drinksSlice';
import { drinkByIdReducer } from './drinks/drinkDetailsSlice';
import {themeReducer} from './theme/themeSlice'
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['id','accessToken','refreshToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    ownDrinks: ownDrinksReducer,
    favoriteDrinks: favoriteDrinksReducer,
    popularDrinks: popularDrinksReducer,
    form: persistedFormReducer,
    newDrinks: newDrinksReducer,
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

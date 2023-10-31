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
import { ownDrinksReducer, favoriteDrinksReducer } from './drinks/drinksSlice';
import { drinkByIdReducer } from './drinks/drinkDetailsSlice';
export const store = configureStore({
  reducer: {
    ownDrinks: ownDrinksReducer,
    favoriteDrinks: favoriteDrinksReducer,
    drinkById: drinkByIdReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

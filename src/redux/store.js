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
import { persistedFormReducer } from './drinks/formSlice';
import { drinksReducer } from './drinks/drinksPageSlice';

export const store = configureStore({
  reducer: {
    ownDrinks: ownDrinksReducer,
    favoriteDrinks: favoriteDrinksReducer,
    form: persistedFormReducer,
    drinks: drinksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));
const AddDrinkPage = lazy(() => import('./pages/AddDrinkPage/AddDrinkPage'));
const MyDrinksPage = lazy(() => import('./pages/MyDrinksPage/MyDrinksPage'));
const FavoriteDrinkPage = lazy(() =>
  import('./pages/FavoriteDrinkPage/FavoriteDrinkPage'),
);
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const DrinkDetails = lazy(() =>
  import('./pages/DrinkDetailsPage/DrinkDetailsPage'),
);

import { AppWrapper } from './App.styled';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  // console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="drinks" element={<DrinksPage />} />
          <Route path="add" element={<AddDrinkPage />} />
          <Route path="my" element={<MyDrinksPage />} />
          <Route path="favorites" element={<FavoriteDrinkPage />} />

          <Route path="home/:id" element={<DrinkDetails />} />
          <Route path="drinks/:id" element={<DrinkDetails />} />
          <Route path="my/:id" element={<DrinkDetails />} />
          <Route path="favorites/:id" element={<DrinkDetails />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;

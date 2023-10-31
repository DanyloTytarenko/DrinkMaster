import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { PublicRoute } from './components/PublicRoute/PublicRoute';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SingupPage = lazy(() => import('./pages/SingupPage/SingupPage'));
const SinginPage = lazy(() => import('./pages/SinginPage/SinginPage'));
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

          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/singup" element={<PublicRoute redirectTo="/home" component={<SingupPage />} />} />
          <Route path="/singin" element={<PublicRoute redirectTo="/home" component={<SinginPage />} />} />
          <Route path="home" element={<HomePage />} />
          <Route path="drinks" element={<DrinksPage />} />
          <Route path="add" element={<AddDrinkPage />} />
          <Route path="my" element={<MyDrinksPage />} />
          <Route path="favorites" element={<FavoriteDrinkPage />} />

          <Route path="home/:drinkId" element={<DrinkDetails />} />
          <Route path="drinks/:drinkId" element={<DrinkDetails />} />
          <Route path="my/:drinkId" element={<DrinkDetails />} />
          <Route path="favorites/:drinkId" element={<DrinkDetails />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;

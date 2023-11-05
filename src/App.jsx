import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
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
const DrinkDetailsPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));

const PrivacyPage = lazy(() => import('./pages/PrivacyPage/PrivacyPage'));
const TermsOfServicePage = lazy(() =>
  import('./pages/TermsOfServicePage/TermsOfServicePage'),
);
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

import { AppWrapper } from './App.styled';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  // console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/"
            element={
              <PublicRoute redirectcto="/welcome" component={<WelcomePage />} />
            }
          />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/signup"
            element={
              <PublicRoute redirectTo="/home" component={<SingupPage />} />
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute redirectTo="/home" component={<SinginPage />} />
            }
          />
          <Route
            path="home"
            element={<PrivateRoute component={<HomePage />}></PrivateRoute>}
          />
          <Route
            path="drinks"
            element={<PrivateRoute component={<DrinksPage />} />}
          />
          <Route
            path="add"
            element={<PrivateRoute component={<AddDrinkPage />} />}
          />
          <Route
            path="my"
            element={<PrivateRoute component={<MyDrinksPage />} />}
          />
          <Route
            path="favorites"
            element={<PrivateRoute component={<FavoriteDrinkPage />} />}
          />

          <Route
            path="drink/:drinkId"
            element={
              <PrivateRoute component={<DrinkDetailsPage />}></PrivateRoute>
            }
          />

          <Route
            path="privacy"
            element={<PrivateRoute component={<PrivacyPage />} />}
          />
          <Route
            path="service"
            element={<PrivateRoute component={<TermsOfServicePage />} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;

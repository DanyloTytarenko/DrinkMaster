import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
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
import { selectTheme } from './redux/theme/themeSlice';
import LoadingPage from './pages/LoadingPage/LoadingPage';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const theme = useSelector(selectTheme);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? (
    <SharedLayout />
  ) : (
    <AppWrapper theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route
            path="/"
            element={
              <PublicRoute redirectTo="/welcome" component={<WelcomePage />} />
            }
          />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/auth/google-redirect" element={<LoadingPage />} />
          <Route path="/auth/google" element={<LoadingPage />} />
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
            path="/home"
            element={
              <PrivateRoute redirectTo="/signin" component={<HomePage />} />
            }
          />
          <Route
            path="/drinks"
            element={
              <PrivateRoute redirectTo="/signin" component={<DrinksPage />} />
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute redirectTo="/signin" component={<AddDrinkPage />} />
            }
          />
          <Route
            path="/my"
            element={
              <PrivateRoute redirectTo="/signin" component={<MyDrinksPage />} />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<FavoriteDrinkPage />}
              />
            }
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

import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import { HomeContainer, StyledBGElement5 } from './HomePage.styled';
import { AddDrink } from '../../components/HomePageComponents/AddDrink';
import { PreviewDrinks } from '../../components/HomePageComponents/PreviewDrinks';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectErrorNew,
  selectIsLoadingNew,
} from '../../redux/homepage/selectors.js';

import { fetchNewDrinks } from '../../redux/homepage/operations.js';
import MainAppContainer from 'src/components/MainAppContainer/MainAppContainer';
import Loader from 'src/components/Loader/Loader';
import { selectTheme } from 'src/redux/theme/themeSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingNew);
  const error = useSelector(selectErrorNew);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(fetchNewDrinks());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <Header />
      <MainAppContainer>
        <HomeContainer theme={theme}>
          <AddDrink />
          <PreviewDrinks />
        </HomeContainer>
        <StyledBGElement5 theme={theme} />
      </MainAppContainer>
      <Footer />
    </>
  );
};
export default HomePage;

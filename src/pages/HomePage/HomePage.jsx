import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import { HomeContainer } from './HomePage.styled';
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

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingNew);
  const error = useSelector(selectErrorNew);

  useEffect(() => {
    dispatch(fetchNewDrinks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <Header />
      <MainAppContainer>
        <HomeContainer>
          <AddDrink />
          <PreviewDrinks />
        </HomeContainer>
      </MainAppContainer>
      <Footer />
    </>
  );
};
export default HomePage;

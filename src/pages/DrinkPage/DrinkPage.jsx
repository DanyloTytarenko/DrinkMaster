import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from './DrinkPage.styled';
import DrinkPageHero from '../../components/DrinkDetails/DrinkPageHero/DrinkPageHero';
import DrinkIngredientsList from '../../components/DrinkDetails/DrinkIngredientsList/DrinkIngredientsList';
import RecipePreparation from '../../components/DrinkDetails/RecipePreparation/RecipePreparation';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import Loader from 'src/components/Loader/Loader';
import {
  selectDrinkById,
  selectDrinkDetailsError,
  selectDrinkDetailsIsLoading,
} from 'src/redux/drinks/selectors';
import { fetchDrinkById } from 'src/redux/drinks/operations';

const DrinkDetailsPage = () => {
  const isLoading = useSelector(selectDrinkDetailsIsLoading);
  const error = useSelector(selectDrinkDetailsError);
  const { drinkId } = useParams();
  const dispatch = useDispatch();
  const drinkDetails = useSelector(selectDrinkById);

  useEffect(() => {
    dispatch(fetchDrinkById(drinkId));
    // dispatch(fetchFavoriteDrinks());
  }, [dispatch]);

  return (
    <>
      <Header />
      {isLoading && !error ? (
        <Loader />
      ) : (
        <Container>
          <DrinkPageHero drinkDetails={drinkDetails} />
          <DrinkIngredientsList drinkDetails={drinkDetails} />
          <RecipePreparation drinkDetails={drinkDetails} />
        </Container>
      )}
      <Footer />
    </>
  );
};

export default DrinkDetailsPage;

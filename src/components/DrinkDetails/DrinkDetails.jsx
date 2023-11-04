import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container,
  Title,
  Glass,
  Description,
  Button,
} from './DrinkDetails.styled';
// import data from './recipes';
import { fetchDrinkById } from 'src/redux/drinks/operations';
import { selectDrinkById } from '../../redux/drinks/drinkDetailsSlice';

// import { useState, useEffect, useRef, Suspense } from 'react';
// import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
// import Button from '../button/Button';
// import ErrorWrapper from 'pages/Error/ErrorWrapper';
// import Loader from 'components/Loader/Loader';

const DrinkDetails = () => {
  const { drinkId } = useParams();
  const dispatch = useDispatch();
  // dispatch(fetchDrinkById(drinkId));

  // const isLoading = useSelector(selectDrinkDetailsIsLoadin);
  // const error = useSelector(selectDrinkDetailsError);

  useEffect(() => {
    dispatch(fetchDrinkById(drinkId));
    // dispatch(fetchFavoriteDrinks());
  }, [dispatch]);

  const drinkDetails = useSelector(selectDrinkById);

  // const [favorite, setfavorite] = useState(true);
  const favorite = true;

  // ***redax
  // const dispatch = useDispatch();
  // const handleAddToFavorite = (id) => dispatch(AddFavorite(id));
  // const handleRemoveToFavorite = (id) => dispatch(RemoveFavorite(id));

  // useEffect(() => {
  //   function handleAddToFavorite() {
  //     setfavorite(false);
  //   }

  //   function handleRemoveToFavorite() {
  //     setfavorite(true);
  //   }
  // }, [favorite]);

  const { drink, glass, alcoholic, description, drinkThumb } = drinkDetails;
  return (
    <div>
      <Title>{drink}</Title>
      <Glass>
        {glass} / {alcoholic}
      </Glass>
      <Description>{description}</Description>
      {favorite ? (
        <Button type="button" onClick={() => handleAddToFavorite(id)}>
          Add to favorite drinks
        </Button>
      ) : (
        <Button type="button" onClick={() => handleRemoveToFavorite(id)}>
          Remove from favorites
        </Button>
      )}
      <div>
        <img src={drinkThumb} alt="picture Cocktail" height={400} />
      </div>
    </div>
  );
};

export default DrinkDetails;

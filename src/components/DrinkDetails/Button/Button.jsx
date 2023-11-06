import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { StyledButton } from './Button.styled';
import {
  addFavoriteDrink,
  deleteFavoriteDrink,
} from 'src/redux/drinks/operations';

const Button = ({ drinkId, favoriteStatus }) => {
  const [favorite, setfavorite] = useState(true);
  const dispatch = useDispatch();

  console.log('favorite:', favorite);
  console.log('favoriteStatus:', favoriteStatus);
  console.log('drinkId:', drinkId);

  const handleAddToFavorite = () => {
    dispatch(addFavoriteDrink(drinkId));
    setfavorite(true);
  };

  const handleRemoveToFavorite = () => {
    dispatch(deleteFavoriteDrink(drinkId));
    setfavorite(false);
  };
  // const dispatch = useDispatch();
  // const dataFavoriteDrinks = useSelector(selectFavoriteDrinks);
  // const { favoriteDrinks } = useSelector(selectFavoriteDrinks);
  // const handleAddToFavorite = (id) => dispatch(AddFavorite(id));
  // const handleRemoveToFavorite = (id) => dispatch(RemoveFavorite(id));

  useEffect(() => {
    setfavorite(favoriteStatus);
  }, []);

  // function handletheFirstValueFavorite() {
  //   dataFavoriteDrinks.map(({ id }) => {
  //     console.log(id);
  //   });
  //   // setfavorite(false);
  // }
  // console.log(favoriteDrinks);
  // useEffect(() => {
  //   dispatch(fetchFavoriteDrinks());
  //   console.log(favoriteDrinks);

  //   // if (favoriteDrinks.length == 0) {
  //   //   return setfavorite(false);
  //   // }
  //   // else {
  //   //   resulte = dataFavoriteDrinks.favoriteDrinks.find(
  //   //     (option) => option.label === 'white',
  //   //   ); // undefined
  //   // }

  //   // setfavorite(false);
  // }, []);

  // function handleAddToFavorite() {
  //     setfavorite(false);
  //   }

  //   function handleRemoveToFavorite() {
  //     setfavorite(true);
  //   }
  // }, [favorite]);

  return (
    <>
      {!favorite ? (
        <StyledButton type="button" onClick={() => handleAddToFavorite()}>
          Add to favorite drinks
        </StyledButton>
      ) : (
        <StyledButton type="button" onClick={() => handleRemoveToFavorite()}>
          Remove from favorites
        </StyledButton>
      )}
    </>
  );
};

export default Button;

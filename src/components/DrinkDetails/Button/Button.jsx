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

  const handleAddToFavorite = () => {
    dispatch(addFavoriteDrink(drinkId));
    setfavorite(true);
  };

  const handleRemoveToFavorite = () => {
    dispatch(deleteFavoriteDrink(drinkId));
    setfavorite(false);
  };

  useEffect(() => {
    setfavorite(favoriteStatus);
  }, [favoriteStatus]);

  // console.log('favorite:', favorite);
  // console.log('favoriteStatus:', favoriteStatus);
  // console.log('drinkId:', drinkId);

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

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from './Button.styled';
import {
  addFavoriteDrink,
  deleteFavoriteDrink,
} from 'src/redux/drinks/operations';
import { selectTheme } from 'src/redux/theme/themeSlice';

const Button = ({ drinkId, favoriteStatus }) => {
  const [favorite, setfavorite] = useState(true);
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

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

  return (
    <>
      {!favorite ? (
        <StyledButton
          theme={theme}
          type="button"
          onClick={() => handleAddToFavorite()}
        >
          Add to favorite drinks
        </StyledButton>
      ) : (
        <StyledButton
          theme={theme}
          type="button"
          onClick={() => handleRemoveToFavorite()}
        >
          Remove from favorites
        </StyledButton>
      )}
    </>
  );
};

export default Button;

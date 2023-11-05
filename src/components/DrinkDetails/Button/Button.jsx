import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteDrinks } from 'src/redux/drinks/operations';
import { StyledButton } from './Button.styled';
import { selectFavoriteDrinks } from 'src/redux/drinks/selectors';

const Button = (drinkId) => {
  const [favorite, setfavorite] = useState(true);
  console.log(favorite);
  const handleAddToFavorite = () => setfavorite(true);
  const handleRemoveToFavorite = () => setfavorite(false);
  const dispatch = useDispatch();
  // const dataFavoriteDrinks = useSelector(selectFavoriteDrinks);
  const { favoriteDrinks } = useSelector(selectFavoriteDrinks);
  // const handleAddToFavorite = (id) => dispatch(AddFavorite(id));
  // const handleRemoveToFavorite = (id) => dispatch(RemoveFavorite(id));

  // function handletheFirstValueFavorite() {
  //   dataFavoriteDrinks.map(({ id }) => {
  //     console.log(id);
  //   });
  //   // setfavorite(false);
  // }

  useEffect(() => {
    dispatch(fetchFavoriteDrinks());
    console.log(favoriteDrinks);

    if (favoriteDrinks.length == 0) {
      return setfavorite(false);
    }
    // else {
    //   resulte = dataFavoriteDrinks.favoriteDrinks.find(
    //     (option) => option.label === 'white',
    //   ); // undefined
    // }

    // setfavorite(false);
  }, []);

  // function handleAddToFavorite() {
  //     setfavorite(false);
  //   }
  console.log(drinkId);
  //   function handleRemoveToFavorite() {
  //     setfavorite(true);
  //   }
  // }, [favorite]);

  return (
    <>
      {!favorite ? (
        <StyledButton type="button" onClick={handleAddToFavorite}>
          Add to favorite drinks
        </StyledButton>
      ) : (
        <StyledButton type="button" onClick={handleRemoveToFavorite}>
          Remove from favorites
        </StyledButton>
      )}
    </>
  );
};

export default Button;

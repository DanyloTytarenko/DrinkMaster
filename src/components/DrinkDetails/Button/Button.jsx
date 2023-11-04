import { useState } from 'react';
import { StyledButton } from './Button.styled';

const Button = () => {
  const [favorite, setfavorite] = useState(false);
  console.log(favorite);
  //   const favorite = true;
  const handleAddToFavorite = () => setfavorite(true);
  const handleRemoveToFavorite = () => setfavorite(false);
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

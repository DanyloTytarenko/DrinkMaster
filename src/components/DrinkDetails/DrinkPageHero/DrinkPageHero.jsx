import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Title,
  Glass,
  Description,
  Button,
  StyledImage,
} from './DrinkPageHero.styled';
import defaultImage from '../../../assets/images/drink-image.jpg';
import { StyledSearchWrapper } from '../../DrinksSearch/DrinksSearch.styled';

const DrinkPageHero = ({ drinkDetails }) => {
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
    <StyledSearchWrapper>
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
        <StyledImage
          src={drinkThumb}
          alt="picture Cocktail"
          height={400}
          onError={(event) => {
            event.currentTarget.src = defaultImage;
          }}
        />
      </div>
    </StyledSearchWrapper>
  );
};

export default DrinkPageHero;

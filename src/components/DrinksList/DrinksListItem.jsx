import {
  DrinksItem,
  DeleteButton,
  SeeMoreButton,
  DrinkPhoto,
  BtnWrapper,
  DrinkTitle,
  DrinkDesc,
  TitleWrapper,
  DrinkAlc,
} from './DrinksList.styled';
import { useDispatch } from 'react-redux';
import {
  deleteOwnDrink,
  deleteFavoriteDrink,
} from '../../../redux/drinks/operations';

import sprite from './svg/sprite.svg';
export const DrinksListItem = ({ drink }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (location.pathname === '/my') {
      dispatch(deleteOwnDrink(drink.id));
    } else if (location.pathname === '/favorites') {
      dispatch(deleteFavoriteDrink(drink.id));
    }
  };
  return (
    <DrinksItem>
      <DrinkPhoto src={drink.drinkThumb} alt="Photo of cocktail" />
      <TitleWrapper>
        <DrinkTitle>{drink.drink}</DrinkTitle>
        <DrinkAlc>{drink.alcoholic}</DrinkAlc>
      </TitleWrapper>
      <DrinkDesc>{drink.description}</DrinkDesc>
      <BtnWrapper>
        <SeeMoreButton to={`/drink/${drink.id}`}>See more</SeeMoreButton>
        <DeleteButton onClick={handleDelete}>
          <svg width="24px" height="24px" stroke="#F3F3F3">
            <use href={`${sprite}#icon-trash`} />
          </svg>
        </DeleteButton>
      </BtnWrapper>
    </DrinksItem>
  );
};

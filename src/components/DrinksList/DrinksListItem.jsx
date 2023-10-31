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
} from '../../redux/drinks/operations';
import sprite from './svg/sprite.svg';
export const DrinksListItem = ({ id, drink }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (location.pathname === '/my') {
      dispatch(deleteOwnDrink(id));
    } else if (location.pathname === '/favorites') {
      dispatch(deleteFavoriteDrink(id));
    }
  };
  return (
    <DrinksItem>
      <DrinkPhoto src={drink.photo} alt="Photo of cocktail" />
      <TitleWrapper>
        <DrinkTitle>{drink.name}</DrinkTitle>
        <DrinkAlc>{drink.alco}</DrinkAlc>
      </TitleWrapper>
      <DrinkDesc>{drink.desc}</DrinkDesc>
      <BtnWrapper>
        <SeeMoreButton>See more</SeeMoreButton>
        <DeleteButton onClick={handleDelete}>
          <svg width="24px" height="24px" stroke="#F3F3F3">
            <use href={`${sprite}#icon-trash`} />
          </svg>
        </DeleteButton>
      </BtnWrapper>
    </DrinksItem>
  );
};

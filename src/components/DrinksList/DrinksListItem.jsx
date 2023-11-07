import {
  DrinksItem,
  DeleteButton,
  SeeMoreButton,
  DrinkPhoto,
  BtnWrapper,
  DrinkTitle,
  DrinkDesc,
  TitleWrapper,
  DrinkAlc
} from './DrinksList.styled';
import { useDispatch } from 'react-redux';
import {
  deleteOwnDrink,
  deleteFavoriteDrink,
} from '../../redux/drinks/operations';
import DummyDrinkThumb from 'src/images/dummyDrinkThumb.png';
import sprite from './svg/sprite.svg';
export const DrinksListItem = ({ drink }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
  if (location.pathname === '/DrinkMaster/my') {
      dispatch(deleteOwnDrink(drink._id));
    } else if (location.pathname === '/DrinkMaster/favorites') {
      dispatch(deleteFavoriteDrink(drink._id));
    }
  };
  return (
    <DrinksItem>
      <DrinkPhoto src={drink.drinkThumb} alt={` Photo of cocktail ${drink.drink} `}
      onError={(event) => {
                      event.currentTarget.src = DummyDrinkThumb;
                    }}/> 
      <TitleWrapper>
        <DrinkTitle>{drink.drink}</DrinkTitle>
        <DrinkAlc>{drink.alcoholic}</DrinkAlc>
      </TitleWrapper>
      <DrinkDesc>{drink.description}</DrinkDesc>
      <BtnWrapper>
        <SeeMoreButton to={`/drink/${drink._id}`}>See more</SeeMoreButton>
        <DeleteButton type="button" onClick={handleDelete}>
          <svg width="24px" height="24px" stroke="#F3F3F3">
            <use href={`${sprite}#icon-trash`} />
          </svg>
        </DeleteButton>
      </BtnWrapper>
    </DrinksItem>
  );
};

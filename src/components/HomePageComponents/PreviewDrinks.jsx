import { useSelector } from 'react-redux';
import { selectNewDrinks } from '../../redux/homepage/selectors.js';

import {
  List,
  DrinksItem,
  DrinkPhoto,
  DrinkTitle,
} from '../DrinksList/DrinksList.styled';
import {
  CategoryName,
  StyledLinkToDrinkPage,
  StyledLinkToDrinksPage,
} from './PreviewDrinks.styled';

export const PreviewDrinks = () => {
 
  const listOfDrinks = useSelector(selectNewDrinks);

  return (
    <>
      <List>
        {listOfDrinks.map((drink) => (
          <DrinksItem key={drink.drink} drink={drink}>
            {listOfDrinks.map((category) => (
              <CategoryName key={category}>{drink.category}</CategoryName>
            ))}
            <DrinkPhoto src={drink.drinkThumb} alt="Photo of cocktail" />
            <DrinkTitle>{drink.drink}</DrinkTitle>
            <StyledLinkToDrinkPage to="/DrinkPage">See more</StyledLinkToDrinkPage>
          </DrinksItem>
        ))}
      </List>
      <StyledLinkToDrinksPage to="/DrinksPage">Other drinks</StyledLinkToDrinksPage>
    </>
  );
};

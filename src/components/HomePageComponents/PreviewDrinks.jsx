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
  SeeMoreLink,
  OtherDrinksButton,
} from './PreviewDrinks.styled';

export const PreviewDrinks = () => {
  const popularCategories = [
    'Ordinary Drink',
    'Cocktail',
    'Shake',
    'Other/Unknown',
  ];

  const listOfDrinks = useSelector(selectNewDrinks);

  return (
    <>
      <List>
        {listOfDrinks.map((drink) => (
          <DrinksItem key={drink.name} drink={drink}>
            {popularCategories.map((category) => (
              <CategoryName key={category}>{category}</CategoryName>
            ))}
            <DrinkPhoto src={drink.photo} alt="Photo of cocktail" />
            <DrinkTitle>{drink.name}</DrinkTitle>
            <SeeMoreLink>See more</SeeMoreLink>
          </DrinksItem>
        ))}
      </List>
      <OtherDrinksButton>Other drinks</OtherDrinksButton>
    </>
  );
};

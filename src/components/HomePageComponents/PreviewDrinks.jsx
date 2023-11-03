import { useSelector } from 'react-redux';
import { selectNewDrinks } from '../../redux/homepage/selectors.js';
import React from 'react';
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
  const data = useSelector(selectNewDrinks);

  return (
    <>
      <List>
        {data.map((categoryData) => (
          <React.Fragment key={categoryData.category}>
            <CategoryName>{categoryData.category}</CategoryName>
            {categoryData.drinks.map((drink, index) => (
              <DrinksItem key={index}>
                <DrinkPhoto
                  src={drink.drinkThumb}
                  alt={`Photo of ${drink.drink}`}
                />
                <DrinkTitle>{drink.drink}</DrinkTitle>
                <StyledLinkToDrinkPage to="/DrinkPage">
                  See more
                </StyledLinkToDrinkPage>
              </DrinksItem>
            ))}
          </React.Fragment>
        ))}
      </List>
      <StyledLinkToDrinksPage to="/DrinksPage">
        Other drinks
      </StyledLinkToDrinksPage>
    </>
  );
};

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { selectNewDrinks } from '../../redux/homepage/selectors.js';

import {
  List,
  ListCard,
  CategoryName,
  DrinksItem,
  DrinkPhoto,
  TitleWrapper,
  DrinkTitle,
  StyledLinkToDrinkPage,
  StyledLinkToDrinksPage,
} from './PreviewDrinks.styled';

export const PreviewDrinks = () => {
  const initialData = useSelector(selectNewDrinks);
  const screenSizeMobile = useMediaQuery('(max-width: 767px)');
  const screenSizeTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)');

  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (screenSizeMobile) {
      setData(initialData.slice(0, 1));
    } else if (screenSizeTablet) {
      setData(initialData.slice(0, 2));
    } else {
      setData(initialData.slice(0, 3));
    }
  }, [screenSizeMobile, screenSizeTablet, initialData]);

  return (
    <>
      <List>
        {data.map((categoryData) => (
          <ListCard key={categoryData.category}>
            <CategoryName>{categoryData.category}</CategoryName>
            {categoryData.drinks.map((drink, index) => (
              <DrinksItem key={index}>
                <DrinkPhoto
                  src={drink.drinkThumb}
                  alt={`Photo of ${drink.drink}`}
                />
                <TitleWrapper>
                  <DrinkTitle>{drink.drink}</DrinkTitle>
                  <StyledLinkToDrinkPage to="/DrinkPage">
                    See more
                  </StyledLinkToDrinkPage>
                </TitleWrapper>
              </DrinksItem>
            ))}
          </ListCard>
        ))}
      </List>
      <StyledLinkToDrinksPage to="/DrinksPage">
        Other drinks
      </StyledLinkToDrinksPage>
    </>
  );
};

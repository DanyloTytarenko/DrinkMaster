import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { selectNewDrinks } from '../../redux/homepage/selectors.js';

import {
  List,
  ListCard,
  CategoryName,
  DrinkList,
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
              <DrinkList key={index}>
              <DrinksItem >
                
                <DrinkPhoto
                  src={drink.drinkThumb}
                  alt={`Photo of ${drink.drink}`}
                />
                <TitleWrapper>
                  <DrinkTitle>{drink.drink}</DrinkTitle>
                  <StyledLinkToDrinkPage to={`/drink/${drink._id}`}>
                    See more
                  </StyledLinkToDrinkPage>
                </TitleWrapper>
                
              </DrinksItem>
              </DrinkList>
            ))}
          </ListCard>
          
        ))}
      </List>
      <StyledLinkToDrinksPage to="/drinks">
        Other drinks
      </StyledLinkToDrinksPage>
    </>
  );
};

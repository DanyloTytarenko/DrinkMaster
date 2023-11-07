import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { selectNewDrinks } from '../../redux/homepage/selectors.js';
import DummyDrinkThumb from 'src/images/dummyDrinkThumb.png';

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
import { selectTheme } from 'src/redux/theme/themeSlice';

export const PreviewDrinks = () => {
  const initialData = useSelector(selectNewDrinks);
  const screenSizeMobile = useMediaQuery('(max-width: 767px)');
  const screenSizeTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1439px)',
  );
  const theme = useSelector(selectTheme);

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const cocktailCounts = screenSizeMobile ? 1 : screenSizeTablet ? 2 : 3;

    const updatedData = initialData.map((categoryData) => ({
      ...categoryData,
      drinks: categoryData.drinks.slice(0, cocktailCounts),
    }));

    setData(updatedData);
  }, [screenSizeMobile, screenSizeTablet, initialData]);

  return (
    <>
      <List>
        {data.map((categoryData) => (
          <ListCard key={categoryData.category}>
            <CategoryName theme={theme}>{categoryData.category}</CategoryName>
            <DrinkList>
              {categoryData.drinks.map((drink, index) => (
                <DrinksItem key={index}>
                  <DrinkPhoto
                    src={drink.drinkThumb}
                    alt={`Photo of ${drink.drink}`}
                    onError={(event) => {
                      event.currentTarget.src = DummyDrinkThumb;
                    }}
                  />
                  <TitleWrapper>
                    <DrinkTitle theme={theme}>{drink.drink}</DrinkTitle>
                    <StyledLinkToDrinkPage
                      to={`/drink/${drink._id}`}
                      theme={theme}
                    >
                      See more
                    </StyledLinkToDrinkPage>
                  </TitleWrapper>
                </DrinksItem>
              ))}
            </DrinkList>
          </ListCard>
        ))}
      </List>
      <StyledLinkToDrinksPage to="/drinks">Other drinks</StyledLinkToDrinksPage>
    </>
  );
};

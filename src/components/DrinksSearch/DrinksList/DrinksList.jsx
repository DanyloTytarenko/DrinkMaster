import { useSelector } from 'react-redux';

// import drinkImage from '../../../assets/images/emptyImage/drink-image.jpg';
import drinkImage from '../../../assets/images/emptyImage/defolt-8.png';
import { selectSearchResults } from '../../../redux/drinks/drinksPage/drinksPageSelectors';

import {
  DescriptionLink,
  DescriptionWrapper,
  DrinkTitle,
  StyledDrinkImage,
  StyledDrinksItem,
  StyledDrinksList,
} from './DrinksList.styled';
import NotFound from 'src/components/NotFound/NotFound';
import { selectTheme } from 'src/redux/theme/themeSlice';

const DrinksList = () => {
  const { drinks } = useSelector(selectSearchResults);
  const theme = useSelector(selectTheme);

  return drinks?.length !== 0 ? (
    <StyledDrinksList>
      {drinks?.map((item) => (
        <StyledDrinksItem key={item._id}>
          <StyledDrinkImage
            src={item.drinkThumb}
            alt={item.drink}
            onError={(event) => {
              event.currentTarget.src = drinkImage;
            }}
          />
          <DescriptionWrapper>
            <DrinkTitle theme={theme}>{item.drink}</DrinkTitle>
            <DescriptionLink theme={theme} to={`/drink/${item._id}`}>
              See more
            </DescriptionLink>
          </DescriptionWrapper>
        </StyledDrinksItem>
      ))}
    </StyledDrinksList>
  ) : (
    <NotFound message={'No cocktails found for your request'} />
  );
};

export default DrinksList;

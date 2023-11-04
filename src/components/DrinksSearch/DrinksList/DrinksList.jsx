import { useSelector } from 'react-redux';

import drinkImage from '../../../assets/images/drink-image.jpg';
import { selectSearchResults } from '../../../redux/drinks/drinksPage/drinksPageSelectors';

import {
  DescriptionLink,
  DescriptionWrapper,
  DrinkTitle,
  StyledDrinkImage,
  StyledDrinksItem,
  StyledDrinksList,
} from './DrinksList.styled';

// import { recipes } from '../testListRecipes';

const DrinksList = () => {
  const { drinks } = useSelector(selectSearchResults);

  return (
    <StyledDrinksList>
      {
        /* (drinks ?? recipes) */
        drinks?.map((item) => (
          <StyledDrinksItem
            key={item._id}
            // key={item._id.$oid}
          >
            <StyledDrinkImage
              src={item.drinkThumb}
              alt={item.drink}
              onError={(event) => {
                event.currentTarget.src = drinkImage;
              }}
            />
            <DescriptionWrapper>
              <DrinkTitle>{item.drink}</DrinkTitle>
              <DescriptionLink to={`/drink/${item._id}`}>
                See more
              </DescriptionLink>
            </DescriptionWrapper>
          </StyledDrinksItem>
        ))
      }
    </StyledDrinksList>
  );
};

export default DrinksList;

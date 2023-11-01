import { recipes } from '../testListRecipes';

import drinkImage from '../../../assets/images/drink-image.jpg';
import {
  DescriptionLink,
  DescriptionWrapper,
  DrinkTitle,
  StyledDrinkImage,
  StyledDrinksItem,
  StyledDrinksList,
} from './DrinksList.styled';
import { useSelector } from 'react-redux';
import { selectSearchResults } from '../../../redux/drinks/drinksPageSelectors';

const DrinksList = () => {
  const { drinks } = useSelector(selectSearchResults);
  console.log('searchResults :>> ', drinks);

  return (
    <StyledDrinksList>
      {(drinks ?? recipes).map((item) => (
        <StyledDrinksItem
          // key={item._id}
          key={item._id.$oid}
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
            <DescriptionLink to={`/drink/${item._id.$oid}`}>
              See more
            </DescriptionLink>
          </DescriptionWrapper>
        </StyledDrinksItem>
      ))}
    </StyledDrinksList>
  );
};

export default DrinksList;

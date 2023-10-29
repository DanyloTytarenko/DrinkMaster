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

const DrinksList = () => {
  return (
    <StyledDrinksList>
      {recipes?.map((item) => (
        <StyledDrinksItem key={item._id.$oid}>
          <StyledDrinkImage
            src={item.drinkThumb}
            alt={item.drink}
            onError={(event) => {
              event.currentTarget.src = drinkImage;
            }}
          />
          <DescriptionWrapper>
            <DrinkTitle>{item.drink}</DrinkTitle>
            {console.log('item._id', item._id)}
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

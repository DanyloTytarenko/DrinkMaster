import { useSelector } from 'react-redux';

import drinkImage from '../../../assets/images/emptyImage/drink-image.jpg';
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

const DrinksList = () => {
  const { drinks } = useSelector(selectSearchResults);

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
            <DrinkTitle>{item.drink}</DrinkTitle>
            <DescriptionLink to={`/drink/${item._id}`}>
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

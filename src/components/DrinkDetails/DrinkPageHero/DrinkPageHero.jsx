import {
  Title,
  Glass,
  Description,
  StyledImage,
  StyledImageContainer,
} from './DrinkPageHero.styled';
import defaultImage from '../../../assets/images/drink-image.jpg';
import { StyledSearchWrapper } from '../../DrinksSearch/DrinksSearch.styled';
import Button from '../Button/Button';

const DrinkPageHero = ({ drinkDetails }) => {
  const { _id, drink, glass, alcoholic, description, drinkThumb } =
    drinkDetails;

  return (
    <StyledSearchWrapper>
      <Title>{drink}</Title>
      <Glass>
        {glass} / {alcoholic}
      </Glass>
      <Description>{description}</Description>
      <Button drinkId={_id} />
      <StyledImageContainer>
        <StyledImage
          src={drinkThumb}
          alt="picture Cocktail"
          height={400}
          onError={(event) => {
            event.currentTarget.src = defaultImage;
          }}
        />
      </StyledImageContainer>
    </StyledSearchWrapper>
  );
};

export default DrinkPageHero;

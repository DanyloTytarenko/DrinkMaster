import { useSelector } from 'react-redux';
import { selectDrinkById } from 'src/redux/drinks/selectors';
import {
  ImageIngredient,
  ItemIngredient,
  ListIngredient,
  AllTitleIngredients,
  DescriptionIngredient,
  TitleIngredient,
  MeasureIngredien,
} from './DrinkIngredientsList.styled';
import defaultImage from '../../../assets/images/drink-image.jpg';

const DrinkIngredientsList = () => {
  const drinkDetails = useSelector(selectDrinkById);
  const { ingredients, description, instructions } = drinkDetails;
  return (
    <>
      <AllTitleIngredients>Ingredient</AllTitleIngredients>
      <ListIngredient>
        {ingredients?.map(({ ingredientId, title, measure }) => (
          <ItemIngredient key={ingredientId.$oid}>
            <ImageIngredient
              src={defaultImage}
              alt={title}
              // onError={(event) => {
              //   event.currentTarget.src = drinkImage;
              // }}
            />

            <DescriptionIngredient>
              <TitleIngredient>{title}</TitleIngredient>
              <MeasureIngredien>{measure}</MeasureIngredien>
            </DescriptionIngredient>
          </ItemIngredient>
        ))}
      </ListIngredient>
      {/* <Title>Recipe Preparation</Title>
      <Description>{description}</Description>
      <Description>{instructions}</Description>
      <AnyCocktail src={anyCocktail} alt="Any Cocktail" /> */}
    </>
  );
};

export default DrinkIngredientsList;

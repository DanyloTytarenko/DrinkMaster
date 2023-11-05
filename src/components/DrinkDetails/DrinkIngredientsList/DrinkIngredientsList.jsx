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

const DrinkIngredientsList = ({ drinkDetails }) => {
  const { ingredients } = drinkDetails;

  return (
    <>
      <AllTitleIngredients>Ingredient</AllTitleIngredients>
      <ListIngredient>
        {ingredients?.map(
          ({ ingredientId, title, measure, ingredientThumb }) => (
            <ItemIngredient key={ingredientId}>
              <ImageIngredient
                src={ingredientThumb}
                alt={title}
                onError={(event) => {
                  event.currentTarget.src = defaultImage;
                }}
              />
              <DescriptionIngredient>
                <TitleIngredient>{title}</TitleIngredient>
                <MeasureIngredien>{measure}</MeasureIngredien>
              </DescriptionIngredient>
            </ItemIngredient>
          ),
        )}
      </ListIngredient>
    </>
  );
};

export default DrinkIngredientsList;

import {
  AnyCocktail,
  Description,
  Recipe,
  Title,
} from './RecipePreparation.styled';
import anyCocktail from '../../../assets/images/any-cocktail.jpg';

const RecipePreparation = ({ drinkDetails }) => {
  const { description, instructions } = drinkDetails;

  return (
    <>
      <Title>Recipe Preparation</Title>
      <Recipe>
        <div>
          <Description>{description}</Description>
          <Description>{instructions}</Description>
        </div>
        <AnyCocktail src={anyCocktail} alt="Any Cocktail" />
      </Recipe>
    </>
  );
};

export default RecipePreparation;

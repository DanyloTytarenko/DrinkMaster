import { AnyCocktail, Description, Title } from './RecipePreparation.styled';
import anyCocktail from '../../../assets/images/any-cocktail.jpg';

const RecipePreparation = ({ drinkDetails }) => {
  const { description, instructions } = drinkDetails;

  return (
    <>
      <Title>Recipe Preparation</Title>
      <Description>{description}</Description>
      <Description>{instructions}</Description>
      <AnyCocktail src={anyCocktail} alt="Any Cocktail" />
    </>
  );
};

export default RecipePreparation;

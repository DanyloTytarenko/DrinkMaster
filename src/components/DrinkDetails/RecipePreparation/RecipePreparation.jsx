import { useSelector } from 'react-redux';
import {
  AnyCocktail,
  Description,
  Recipe,
  Title,
} from './RecipePreparation.styled';
import anyCocktail from '../../../assets/images/any-cocktail.jpg';
import { selectTheme } from 'src/redux/theme/themeSlice';

const RecipePreparation = ({ drinkDetails }) => {
  const { description, instructions } = drinkDetails;
  const theme = useSelector(selectTheme);

  return (
    <>
      <Title theme={theme}>Recipe Preparation</Title>
      <Recipe>
        <div>
          <Description theme={theme}>{description}</Description>
          <Description theme={theme}>{instructions}</Description>
        </div>
        <AnyCocktail src={anyCocktail} alt="Any Cocktail" />
      </Recipe>
    </>
  );
};

export default RecipePreparation;

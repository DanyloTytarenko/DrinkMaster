import { Title, Textarea } from './RecipePreparation.styled';

const RecipePreparation = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Title>Recipe Preparation</Title>
      <Textarea
        name="instructions"
        placeholder="Enter the recipe"
        rows={7}
        required={true}
      />
    </div>
  );
};
export default RecipePreparation;

import { Div, Title, Textarea } from './RecipePreparation.styled';

import { useSelector } from 'react-redux';
import { selectForm } from '../../../redux/drinks/selectors';

const RecipePreparation = ({ onChangeHandler, setFieldValue }) => {
  const form = useSelector(selectForm);

  return (
    <Div>
      <Title>Recipe Preparation</Title>
      <Textarea
        name="instructions"
        placeholder="Enter the recipe"
        rows={7}
        required={true}
        value={form.instructions}
        onChange={(e) => {
          setFieldValue('instructions', e.target.value);
          onChangeHandler(e.target.value, e.target.name);
        }}
      />
    </Div>
  );
};
export default RecipePreparation;

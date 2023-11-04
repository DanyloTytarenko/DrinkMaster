import {
  Div,
  Title,
  TextareaDiv,
  Textarea,
  MockPlaceholder,
  ErrorText,
  ErrorIcon,
} from './RecipePreparation.styled';

import { useSelector } from 'react-redux';
import { selectForm } from 'src/redux/drinks/selectors';

const RecipePreparation = ({ onChangeHandler, setFieldValue, errors }) => {
  const persistedForm = useSelector(selectForm);
  // console.log(persistedForm, 'form');
  const form = persistedForm.form;

  return (
    <Div>
      <Title>Recipe Preparation</Title>
      <TextareaDiv></TextareaDiv>
      {form.instructions ? (
        <MockPlaceholder>Enter the recipe</MockPlaceholder>
      ) : (
        <ErrorText>
          {errors.instructions}
          {errors.instructions && <ErrorIcon>!</ErrorIcon>}
        </ErrorText>
      )}
      <Textarea
        name="instructions"
        placeholder="Enter the recipe"
        rows={6}
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

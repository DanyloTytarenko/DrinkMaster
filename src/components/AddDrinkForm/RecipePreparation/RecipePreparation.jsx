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
  const form = persistedForm.form;

  return (
    <Div>
      <Title>Recipe Preparation</Title>
      <TextareaDiv></TextareaDiv>
      {form.instructions ? (
        <MockPlaceholder>Enter the recipe</MockPlaceholder>
      ) : (
        <ErrorText>
          {!form.instructions && errors.instructions}
          {!form.instructions && errors.instructions && (
            <ErrorIcon>!</ErrorIcon>
          )}
        </ErrorText>
      )}
      <Textarea
        errors={errors.instructions}
        name="instructions"
        placeholder="Enter the recipe"
        rows={6}
        value={form.instructions}
        onChange={(e) => {
          onChangeHandler(e.target.value, e.target.name, setFieldValue);
        }}
      />
    </Div>
  );
};
export default RecipePreparation;

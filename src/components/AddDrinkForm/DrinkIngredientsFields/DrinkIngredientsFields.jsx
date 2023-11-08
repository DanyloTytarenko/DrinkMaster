import {
  Wrapper,
  DivTop,
  Title,
  DivIncrement,
  Button,
  SpanIncrement,
  ButtonIncr,
  List,
} from './DrinkIngredientsFields.styled';

import { useSelector } from 'react-redux';
import { selectForm } from 'src/redux/drinks/selectors';
import { selectIngredient } from 'src/redux/drinks/selectors';
import IngredientItem from './IngredientItem/IngredientItem';

const DrinkIngredientsFields = ({
  onChangeHandler,
  setFieldValue,
  errors,
  wrongIngredients,
  theme,
}) => {
  const persistedForm = useSelector(selectForm);
  const form = persistedForm.form;

  const ingredientsData = useSelector(selectIngredient);

  // у зміну записується масив інгрідієнтів, в залежності від обмежень Alcoholic/Non alcoholic
  const ingredientOptions = ingredientsData.filter((el) =>
    form.alcoholic === 'Alcoholic' ? el.alcohol : el.alcohol === 'No',
  );

  // у зміну записується масив інгрідієнтів, із урахуванням того, що в базі є інгрідієнти без назви
  const ingredientTitleArray = ingredientOptions.filter((el) => el.title);

  // у зміну записується масив об'єктів інгрідієнтів, у формі необхідній для роботи селекту.
  const ingredientsForSelect = ingredientTitleArray.map((item) => {
    return { value: item.title, label: item.title, alcohol: item.alcohol };
  });

  const increment = () => {
    const newArray = [...form.ingredients];
    newArray.push({ title: '', measure: '', alcohol: '' });
    onChangeHandler(newArray, 'ingredients', setFieldValue);
  };

  const decrement = (index) => {
    if (form.ingredients.length === 1) {
      return;
    }

    if (index || index === 0) {
      const newArray = [...form.ingredients];
      newArray.splice(index, 1);
      onChangeHandler(newArray, 'ingredients', setFieldValue);
    } else {
      const newArray = [...form.ingredients];
      newArray.pop();
      onChangeHandler(newArray, 'ingredients', setFieldValue);
    }
  };

  return (
    <Wrapper>
      <DivTop>
        <Title theme={theme}>Ingredients</Title>
        <DivIncrement theme={theme}>
          <Button type="button" onClick={() => decrement()} theme={theme}>
            ---
          </Button>
          <SpanIncrement theme={theme}>{form.ingredients.length}</SpanIncrement>
          <ButtonIncr type="button" onClick={() => increment()} theme={theme}>
            +
          </ButtonIncr>
        </DivIncrement>
      </DivTop>
      <List>
        {form.ingredients.map((el, index) => (
          <li key={index}>
            <IngredientItem theme={theme}
              chosenIngredients={form.ingredients}
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              ingredients={ingredientsForSelect}
              deleteIngredient={decrement}
              index={index}
              chosenIngredientSelect={{
                value: form.ingredients[index].title,
                label: form.ingredients[index].title,
              }}
              errors={errors}
              wrongIngredients={wrongIngredients}
            />
          </li>
        ))}
      </List>
    </Wrapper>
  );
};
export default DrinkIngredientsFields;

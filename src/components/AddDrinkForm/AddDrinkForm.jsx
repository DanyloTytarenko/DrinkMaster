import { Wrapper, Button } from './AddDrinkForm.styled';
import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';
import { Formik, Form } from 'formik';
import { useState } from 'react';

const AddDrinkForm = () => {
  const initialValues = { drinkTitle: '', aboutDrink: '' };
  const [isAlcoholic, setIsAlcoholic] = useState(true);
  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form>
          <DrinkDescriptionFields
            isAlcoholic={isAlcoholic}
            setIsAlcoholic={setIsAlcoholic}
          />
          <DrinkIngredientsFields isAlcoholic={isAlcoholic} />
          <RecipePreparation />
          <Button
            type="submit"
            // disabled={
            //   isLoading || addLoading || delLoading || editLoading
            //     ? true
            //     : false
            // }
            title="Add"
          >
            Add
          </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};
export default AddDrinkForm;

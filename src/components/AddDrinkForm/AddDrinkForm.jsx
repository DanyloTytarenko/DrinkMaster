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
    <div style={{ marginBottom: '80px' }}>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form>
          <DrinkDescriptionFields
            isAlcoholic={isAlcoholic}
            setIsAlcoholic={setIsAlcoholic}
          />
          <DrinkIngredientsFields isAlcoholic={isAlcoholic} />
          <RecipePreparation />
          <button
            style={{
              padding: '14px 40px',
              color: '#161f37',
              fontSize: '14px',
              fontWeight: 'bold',
              lineHeight: 'calc(18/14)',
              letterSpacing: 0,
              border: '0 solid transparent',
              borderRadius: '42px',
              backgroundColor: '#f3f3f3',
            }}
            type="submit"
            // disabled={
            //   isLoading || addLoading || delLoading || editLoading
            //     ? true
            //     : false
            // }
            title="Add"
          >
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddDrinkForm;

import { Wrapper, Button } from './AddDrinkForm.styled';
import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';

import { Formik, Form } from 'formik';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../../redux/drinks/formSlice';
import { selectForm } from '../../redux/drinks/selectors';

import { initialValues } from '../../utils/addDrinkFormInitials';
import {
  fetchCategories,
  fetchGlass,
  fetchIngredient,
  addOwnDrink,
} from '../../redux/drinks/operations';

import { object, string, array } from 'yup';

const addDrinkSchema = object({
  drink: string().trim().required('This field is required'),
  description: string().required('This field is required'),
  category: string().required('This field is required'),
  glass: string().required('This field is required'),
  alcoholic: string().required('This field is required'),
  ingredients: array()
    .min(1, 'Must be at least one ingredient')
    .of(
      object({
        title: string().required('This field is required'),
        measure: string().required('This field is required'),
      }),
    ),
  instructions: string().required('This field is required'),
});

const AddDrinkForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories('categories'));
    dispatch(fetchGlass('glasses'));
    dispatch(fetchIngredient('ingredients'));
  }, [dispatch]);

  const persistedForm = useSelector(selectForm);
  const formValues = persistedForm.form;

  const submitHandler = (values, actions) => {
    console.log(formValues);
    console.log(values);
    dispatch(addOwnDrink(formValues));
    dispatch(setForm(initialValues));
    actions.resetForm({ values: initialValues });
  };

  const onChangeHandler = (payload, field) => {
    const tempObj = { ...formValues };

    const freshData = { [field]: payload };

    Object.assign(tempObj, freshData);

    dispatch(setForm(tempObj));
  };

  return (
    <Wrapper>
      <Formik
        initialValues={formValues}
        validationSchema={addDrinkSchema} validateOnChange={false}
        validateOnBlur={false}
        onSubmit={submitHandler}
      >
        {({ setFieldValue, errors, values, resetForm }) => (
          <Form>
            <DrinkDescriptionFields
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
            />
            <DrinkIngredientsFields
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
            />
            <p>{console.log(errors)}</p>
            <RecipePreparation
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
            />
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
        )}
      </Formik>
    </Wrapper>
  );
};
export default AddDrinkForm;

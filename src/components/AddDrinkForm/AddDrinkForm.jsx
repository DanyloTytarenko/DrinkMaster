import { Wrapper, Button } from './AddDrinkForm.styled';
import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';

import { Formik, Form } from 'formik';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../../redux/drinks/formSlice';
import { selectForm } from '../../redux/drinks/selectors';
import { initialValues } from '../../utils/addDrinkFormInitials';
import {
  fetchCategories,
  fetchGlass,
  fetchIngredient,
} from '../../redux/drinks/operations';

const AddDrinkForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories('categories'));
    dispatch(fetchGlass('glasses'));
    dispatch(fetchIngredient('ingredients'));
  }, [dispatch]);

  const formValues = useSelector(selectForm);

  const [isAlcoholic, setIsAlcoholic] = useState(true);

  const submitHandler = (values, actions) => {
    console.log(formValues);
    console.log(values);
    dispatch(setForm(initialValues));
  };

  const onChangeHandler = (payload, field) => {
    const tempObj = { ...formValues };

    const freshData = { [field]: payload };

    Object.assign(tempObj, freshData);

    dispatch(setForm(tempObj));
  };

  return (
    <Wrapper>
      <Formik initialValues={formValues} onSubmit={submitHandler}>
        {({ setFieldValue }) => (
          <Form>
            <DrinkDescriptionFields
              isAlcoholic={isAlcoholic}
              setIsAlcoholic={setIsAlcoholic}
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
            />
            <DrinkIngredientsFields
              isAlcoholic={isAlcoholic}
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
            />
            <RecipePreparation
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
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

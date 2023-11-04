import { Wrapper, Button } from './AddDrinkForm.styled';
import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';

import { Formik, Form } from 'formik';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from 'src/redux/drinks/formSlice';
import { selectForm, selectIsLoadingOwn } from 'src/redux/drinks/selectors';

import { initialValues } from 'src/utils/addDrinkFormInitials';
import {
  fetchCategories,
  fetchGlass,
  fetchIngredient,
  addOwnDrinkImg,
  addOwnDrink,
} from 'src/redux/drinks/operations';

import { object, string, array } from 'yup';

import { useNavigate } from 'react-router-dom';

const addDrinkSchema = object({
  drink: string().trim().required('This field is required'),
  description: string().required('This field is required'),
  category: string().required('This field is required'),
  glass: string().required('This field is required'),
  alcoholic: string().required('This field is required'),
  ingredients: array().of(
    object({
      title: string().required('This field is required'),
      measure: string().required('This field is required'),
    }),
  ),
  instructions: string().required('This field is required'),
});

const AddDrinkForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories('categories'));
    dispatch(fetchGlass('glasses'));
    dispatch(fetchIngredient('ingredients'));
  }, [dispatch]);

  const persistedForm = useSelector(selectForm);
  const formValues = persistedForm.form;

  const isLoadingOwnDrink = useSelector(selectIsLoadingOwn);

  const [file, setFile] = useState();

  const submitHandler = (values, actions) => {
    // запит на створення власного коктейлю без зображення
    if (!file) {
      const formWithImgUrl = {
        ...formValues,
      };
      const freshData = { drinkThumb: 'src/images/dummyDrinkThumb.png' };
      Object.assign(formWithImgUrl, freshData);

      sendForm(formWithImgUrl, values, actions);
      return;
    }

    // відправки обраного файлу на сервер
    const formData = new FormData();
    formData.append('cocktail', file);
    dispatch(addOwnDrinkImg(formData)).then((resp) => {
      if (
        typeof resp.payload === 'string' &&
        resp.payload.startsWith('https://res.cloudinary.com')
      ) {
        const formWithImgUrl = {
          ...formValues,
        };
        const freshData = { drinkThumb: resp.payload };
        Object.assign(formWithImgUrl, freshData);

        sendForm(formWithImgUrl, values, actions);
      } else {
        console.log(
          "Something get wront. Please, try upload image-type file, e.g. '.jpeg', '.png'",
        );
      }
      console.log(resp.payload.message);
    });
  };

  const onChangeHandler = (payload, field) => {
    const tempObj = {
      ...formValues,
    };

    const freshData = { [field]: payload };

    Object.assign(tempObj, freshData);

    dispatch(setForm(tempObj));
  };

  // dispatch(setForm(initialValues));

  const sendForm = (formWithImgUrl, values, actions) => {
    dispatch(addOwnDrink(formWithImgUrl, values)).then((resp) => {
      if (resp.payload.message === 'drink added') {
        navigate('/my');
        dispatch(setForm(initialValues));
        actions.resetForm({ values: initialValues });
        return;
      }
      console.log(resp.payload.message);
    });
  };

  return (
    <Wrapper>
      <Formik
        initialValues={formValues}
        validationSchema={addDrinkSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={submitHandler}
      >
        {({ setFieldValue, errors }) => (
          <Form>
            <DrinkDescriptionFields
              setFile={setFile}
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
            />
            <DrinkIngredientsFields
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
            />
            <RecipePreparation
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
            />
            <Button
              type="submit"
              disabled={isLoadingOwnDrink === true}
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

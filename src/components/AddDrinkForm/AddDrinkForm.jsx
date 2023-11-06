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

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const addDrinkSchema = object({
  drink: string().trim().required('This field is required'),
  description: string().required('This field is required'),
  category: string().required('This field is required'),
  glass: string().required('This field is required'),
  alcoholic: string()
    .matches(/(Alcoholic|Non alcoholic)/)
    .required('This field is required'),
  ingredients: array().of(
    object({
      title: string().required('This field is required'),
      measure: string().required('Required'),
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
  if (!persistedForm?.form) {
    // initiation persist form
    dispatch(setForm(initialValues));
  }
  const formValues = persistedForm.form;

  const isLoadingOwnDrink = useSelector(selectIsLoadingOwn);

  const [file, setFile] = useState();
  const [wrongIngredients, setWrongIngredients] = useState();

  const isNonAlcoholicDrinkFreeAlcohol = (isNotify) => {
    if (formValues.alcoholic === 'Alcoholic') {
      return true;
    }

    if (formValues.alcoholic === 'Non alcoholic') {
      const alcoholicIngredients = formValues.ingredients.filter(
        (el) => el.alcohol === 'Yes',
      );

      if (alcoholicIngredients.length === 0) {
        return true;
      }

      isNotify &&
        Notify.failure(
          'The drink is labeled non-alcoholic but contains alcohol',
        );

      setWrongIngredients(alcoholicIngredients);
      return false;
    }
  };

  const isAlcoholicDrinkContainAlcohol = (isNotify) => {
    if (formValues.alcoholic === 'Non alcoholic') {
      return true;
    }

    if (formValues.ingredients.some((el) => el.alcohol === 'Yes')) {
      return true;
    }

    isNotify &&
      Notify.failure(
        `The drink is labeled as alcoholic, but it doesn't contain alcohol`,
      );

    setWrongIngredients(null);
    return false;
  };

  const submitHandler = (values, actions) => {
    if (
      !isNonAlcoholicDrinkFreeAlcohol(true) ||
      !isAlcoholicDrinkContainAlcohol(true)
    ) {
      return;
    }

    // запит на створення власного коктейлю без зображення

    if (!file) {
      const formWithImgUrl = {
        ...formValues,
      };

      if (formWithImgUrl?.form) {
        delete formWithImgUrl.form;
      }
      let tempArr = [];
      formWithImgUrl.ingredients.filter((el) =>
        tempArr.push({
          title: el.title,
          measure: el.measure,
        }),
      );
      delete formWithImgUrl.ingredients;
      formWithImgUrl.ingredients = tempArr;

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
        if (formWithImgUrl?.form) {
          delete formWithImgUrl.form;
        }
        let tempArray = [];
        formWithImgUrl.ingredients.filter((el) =>
          tempArray.push({
            title: el.title,
            measure: el.measure,
          }),
        );
        delete formWithImgUrl.ingredients;
        formWithImgUrl.ingredients = tempArray;

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

  function onChangeHandler(payload, field, setFieldValue) {
    const tempObj = {
      ...formValues,
    };

    const freshData = { [field]: payload };

    Object.assign(tempObj, freshData);

    setFieldValue(field, payload);
    dispatch(setForm(tempObj));
    if (wrongIngredients) {
      isNonAlcoholicDrinkFreeAlcohol();
    }
  }

  const sendForm = (formWithImgUrl, values, actions) => {
    console.log(persistedForm, 'persistedForm');

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

  // dispatch(setForm(initialValues));

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
              wrongIngredients={wrongIngredients}
            />
            <RecipePreparation
              onChangeHandler={onChangeHandler}
              setFieldValue={setFieldValue}
              errors={errors}
            />
            <Button
              onClick={() => {
                setWrongIngredients(null);
              }}
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

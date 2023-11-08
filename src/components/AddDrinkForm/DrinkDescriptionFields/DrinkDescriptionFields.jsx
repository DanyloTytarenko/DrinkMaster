import {
  Wrapper,
  ImageThumb,
  DivAddImage,
  DivTranslucent,
  LabelTranslucent,
  Label,
  HiddenInput,
  SpanAddImage,
  DivDesription,
  DivRow,
  Input,
  ErrorText,
  ErrorIconCategory,
  DivSelect,
  DivFlexSelect,
  SpanSelect,
  DivAlcoholic,
  LabelAlcoholic,
  LabelNonAlcoholic,
  RadioInput,
} from './DrinkDescriptionFields.styled';
import { ErrorIcon } from '../RecipePreparation/RecipePreparation.styled';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectForm } from 'src/redux/drinks/selectors';
import { selectCategory, selectGlass } from 'src/redux/drinks/selectors';
import { selectUser } from 'src/redux/auth/selectors';

import { isUserAdult } from 'src/utils/isUserAdult';
import Select from '../../ReactSelect/ReactSelect';
import DummyDrinkThumb from 'src/images/dummyDrinkThumb.png';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DrinkDescriptionFields = ({
  setFile,
  onChangeHandler,
  setFieldValue,
  errors,
  theme,
}) => {
  const categories = useSelector(selectCategory);
  const glassArray = useSelector(selectGlass);

  const persistedForm = useSelector(selectForm);
  const form = persistedForm.form;

  const user = useSelector(selectUser);

  if (isUserAdult(user.birthday) === false && form.alcoholic === 'Alcoholic') {
    onChangeHandler('Non alcoholic', 'alcoholic', setFieldValue);
  }

  const [uri, setUri] = useState();

  // функція для запису масив об'єктів інгрідієнтів, у формі необхідній для роботи селекту.
  // пізніше її буде записано у src/utils для перевикористання всюди де э реакт-селекти
  const options = (array) =>
    array.map((item) => {
      return { value: item, label: item };
    });

  // функція превью зображення обраного файлу
  const addImagePreview = (e) => {
    if (!e.target.files[0].type.startsWith('image/')) {
      return Notify.failure(
        `Please, upload image-type file, e.g. '.jpeg', '.png'`,
      );
    }
    setFile(e.target.files[0]);
    setUri(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Wrapper>
      <ImageThumb uri={uri} theme={theme}>
        {uri ? (
          <DivTranslucent>
            <LabelTranslucent
              onClick={() => {
                setFile();
                setUri(DummyDrinkThumb);
              }}
            >
              Without image
            </LabelTranslucent>
            <LabelTranslucent>
              Change
              <HiddenInput
                type="file"
                id="input"
                name="drinkThumb"
                accept="image/*"
                onChange={(e) => addImagePreview(e)}
              />
            </LabelTranslucent>
          </DivTranslucent>
        ) : (
          <DivAddImage>
            <Label theme={theme}>
              +
              <HiddenInput
                type="file"
                id="input"
                name="drinkThumb"
                accept="image/*"
                onChange={(e) => addImagePreview(e)}
              />
            </Label>

            <SpanAddImage>Add image</SpanAddImage>
          </DivAddImage>
        )}
      </ImageThumb>
      <div>
        <DivDesription>
          <DivRow>
            <Input
              type="text"
              name="drink"
              placeholder="Enter item title"
              title="Enter item title"
              value={form.drink}
              onChange={(e) => {
                onChangeHandler(e.target.value, e.target.name, setFieldValue);
              }}
              theme={theme}
            />
            <ErrorText errors={errors.drink} value={form.drink}>
              {!form.drink && errors.drink}
              {!form.drink && errors.drink && <ErrorIcon>!</ErrorIcon>}
            </ErrorText>
          </DivRow>
          <DivRow>
            <Input
              type="text"
              name="description"
              placeholder="Enter about recipe"
              title="Enter about recipe"
              value={form.description}
              onChange={(e) => {
                onChangeHandler(e.target.value, e.target.name, setFieldValue);
              }} theme={theme}
            />
            <ErrorText errors={errors.description} value={form.description}>
              {!form.description && errors.description}
              {!form.description && errors.description && (
                <ErrorIcon>!</ErrorIcon>
              )}
            </ErrorText>
          </DivRow>

          <DivSelect theme={theme}>
            <DivFlexSelect>
              <SpanSelect theme={theme}>Category</SpanSelect>
              <Select
                theme={theme}
                name="category"
                options={options(categories)}
                value={
                  form.category === ''
                    ? null
                    : { value: form.category, label: form.category }
                }
                onChangeIngredientHandler={onChangeHandler}
                setFieldValue={setFieldValue}
              />
            </DivFlexSelect>
            <ErrorText errors={errors.category} value={form.category}>
              {!form.category && errors.category}
              {!form.category && errors.category && (
                <ErrorIconCategory>{errors.category && '!'}</ErrorIconCategory>
              )}
            </ErrorText>
          </DivSelect>

          <DivSelect>
            <DivFlexSelect>
              <SpanSelect theme={theme}>Glass</SpanSelect>
              <Select
                theme={theme}
                name="glass"
                options={options(glassArray)}
                value={
                  form.glass === ''
                    ? null
                    : { value: form.glass, label: form.glass }
                }
                onChangeIngredientHandler={onChangeHandler}
                setFieldValue={setFieldValue}
              />
            </DivFlexSelect>
            <ErrorText errors={errors.glass} value={form.glass}>
              {!form.glass && errors.glass}
              {!form.glass && errors.glass && (
                <ErrorIconCategory>!</ErrorIconCategory>
              )}
            </ErrorText>
          </DivSelect>
        </DivDesription>

        <DivAlcoholic theme={theme}>
          <LabelAlcoholic isAlcoholic={form.alcoholic}>
            <RadioInput
              theme={theme}
              type="radio"
              value="Alcoholic"
              name="alcoholic"
              checked={form.alcoholic === 'Alcoholic' ? true : false}
              onChange={(e) => {
                onChangeHandler(e.target.value, 'alcoholic', setFieldValue);
              }}
              disabled={isUserAdult(user.birthday) ? false : true}
            />
            Alcoholic
          </LabelAlcoholic>
          <LabelNonAlcoholic isAlcoholic={form.alcoholic}>
            <RadioInput
              theme={theme}
              type="radio"
              value="Non alcoholic"
              name="alcoholic"
              checked={
                isUserAdult(user.birthday) === false ||
                form.alcoholic === 'Non alcoholic'
                  ? true
                  : false
              }
              onChange={(e) => {
                onChangeHandler(e.target.value, 'alcoholic', setFieldValue);
              }}
            />
            Non-alcoholic
          </LabelNonAlcoholic>
        </DivAlcoholic>
      </div>
    </Wrapper>
  );
};
export default DrinkDescriptionFields;

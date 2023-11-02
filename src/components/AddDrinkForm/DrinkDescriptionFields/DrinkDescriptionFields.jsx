import {
  Wrapper,
  ImageThumb,
  Img,
  DivAddImage,
  LabelTranslucent,
  Label,
  HiddenInput,
  SpanAddImage,
  DivDesription,
  Input,
  ErrorText,
  DivSelect,
  DivFlexSelect,
  SpanSelect,
  DivAlcoholic,
  RadioInput,
} from './DrinkDescriptionFields.styled';
import { ErrorIcon } from '../RecipePreparation/RecipePreparation.styled';

import Select from 'react-select';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectForm } from '../../../redux/drinks/selectors';
import { selectCategory, selectGlass } from '../../../redux/drinks/selectors';

import DummyDrinkThumb from '../../../images/dummyDrinkThumb.png';

const DrinkDescriptionFields = ({
  isAlcoholic,
  setIsAlcoholic,
  onChangeHandler,
  setFieldValue,
  errors,
}) => {
  const categories = useSelector(selectCategory);
  const glassArray = useSelector(selectGlass);

  const persistedForm = useSelector(selectForm);
  const form = persistedForm.form;

  const [uri, setUri] = useState();

  // функція для запису масив об'єктів інгрідієнтів, у формі необхідній для роботи селекту.
  // пізніше її буде записано у src/utils для перевикористання всюди де э реакт-селекти
  const options = (array) =>
    array.map((item) => {
      return { value: item, label: item };
    });

  const radioHandler = (value) => {
    if (value === 'Alcoholic') {
      setIsAlcoholic(true);
    } else setIsAlcoholic(false);
  };

  // функція відправки обраного файлу на сервер
  const addImagehandler = (e) => {
    console.log(e.target.files[0]);
    const binaryData = [];
    binaryData.push(e.target.files);
    const url = URL.createObjectURL(
      new Blob(binaryData, { type: 'application/zip' }),
    );
    console.log(url.toString().split('blob:')[1]);
    const src = url.toString().split('blob:')[1];
    setUri(URL.createObjectURL(e.target.files[0]));
    // setUri(src);
    setFieldValue('drinkThumb', src);
    onChangeHandler(src, 'drinkThumb');
  };

  return (
    <Wrapper>
      <ImageThumb style={{ backgroundImage: `url(${uri})` }}>
        {/* {uri && <Img src={uri} />} */}
        {uri ? (
          <LabelTranslucent>
            Change
            <HiddenInput
              type="file"
              id="input"
              name="drinkThumb"
              accept="image/*"
              onChange={(e) => addImagehandler(e)}
            />
          </LabelTranslucent>
        ) : (
          <DivAddImage>
            <Label>
              +
              <HiddenInput
                type="file"
                id="input"
                name="drinkThumb"
                accept="image/*"
                onChange={(e) => addImagehandler(e)}
              />
            </Label>

            <SpanAddImage>Add image</SpanAddImage>
          </DivAddImage>
        )}
      </ImageThumb>
      <DivDesription>
        <Input
          type="text"
          name="drink"
          placeholder="Enter item title"
          title="Enter item title"
          value={form.drink}
          onChange={(e) => {
            setFieldValue('drink', e.target.value);
            onChangeHandler(e.target.value, e.target.name);
          }}
        />
        <ErrorText>
          {errors.drink}
          {errors.drink && <ErrorIcon>!</ErrorIcon>}
        </ErrorText>
        <Input
          type="text"
          name="description"
          placeholder="Enter about recipe"
          title="Enter about recipe"
          value={form.description}
          onChange={(e) => {
            setFieldValue('description', e.target.value);
            onChangeHandler(e.target.value, e.target.name);
          }}
        />
        <ErrorText>
          {errors.description} {errors.description && <ErrorIcon>!</ErrorIcon>}
        </ErrorText>
        <DivSelect>
          <DivFlexSelect>
            <SpanSelect>Category</SpanSelect>
            <Select
              styles={{
                dropdownIndicator: (provided, state) => ({
                  ...provided,
                  transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
                }),
                control: (base, state) => ({
                  ...base,
                  background: 'inherit',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: 'regular',
                  color: '#f3f3f3',

                  position: 'relative',
                  top: 20,
                }),

                menu: (base) => ({
                  ...base,

                  width: '131px',
                  right: '0px',
                  backgroundColor: '#161f37',
                  border: '0px solid transparent',

                  borderRadius: '12px',
                }),
                indicatorSeparator: (base) => ({
                  ...base,
                  display: 'none',
                }),
                option: (styles, { isFocused, isSelected }) => ({
                  ...styles,
                  fontSize: '14px',

                  lineHeight: '1.33',
                  background: 'transparent',
                  zIndex: 1,
                  color: isFocused
                    ? 'rgba(243, 243, 243, 0.75)'
                    : isSelected
                    ? '#f3f3f3'
                    : 'rgba(243, 243, 243, 0.4)',
                }),
              }}
              name="category"
              options={options(categories)}
              value={
                form.category === ''
                  ? null
                  : { value: form.category, label: form.category }
              }
              defaultValue={options(categories)[1]}
              onChange={(e) => {
                setFieldValue('category', e.value);
                onChangeHandler(e.value, 'category');
              }}
            />
          </DivFlexSelect>
          <ErrorText>
            {errors.category}
            {errors.category && <ErrorIcon>!</ErrorIcon>}
          </ErrorText>
        </DivSelect>

        <DivSelect>
          <DivFlexSelect>
            <SpanSelect>Glass</SpanSelect>
            <Select
              styles={{
                dropdownIndicator: (provided, state) => ({
                  ...provided,
                  transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
                }),
                control: (base, state) => ({
                  ...base,
                  background: 'inherit',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#f3f3f3',
                  position: 'relative',
                  top: 20,
                }),
                menu: (base) => ({
                  ...base,
                  width: '131px',
                  right: '0px',
                  backgroundColor: '#161f37',
                  border: '0px solid transparent',

                  borderRadius: '12px',
                }),
                indicatorSeparator: (base) => ({
                  ...base,
                  display: 'none',
                }),
                option: (styles, { isFocused, isSelected }) => ({
                  ...styles,
                  fontSize: '14px',
                  lineHeight: '1.33',
                  background: 'transparent',
                  color: isFocused
                    ? 'rgba(243, 243, 243, 0.75)'
                    : isSelected
                    ? '#f3f3f3'
                    : 'rgba(243, 243, 243, 0.4)',
                }),
              }}
              name="glass"
              options={options(glassArray)}
              value={
                form.glass === ''
                  ? null
                  : { value: form.glass, label: form.glass }
              }
              defaultValue={options(glassArray)[0]}
              onChange={(e) => {
                setFieldValue('glass', e.value);
                onChangeHandler(e.value, 'glass');
              }}
            />
          </DivFlexSelect>
          <ErrorText>
            {errors.glass}
            {errors.glass && <ErrorIcon>!</ErrorIcon>}
          </ErrorText>
        </DivSelect>
      </DivDesription>

      <DivAlcoholic>
        <label>
          <RadioInput
            type="radio"
            value="Alcoholic"
            name="alcoholic"
            checked={isAlcoholic === true}
            onChange={(e) => {
              setFieldValue('alcoholic', e.target.value);
              radioHandler(e.target.value);
              onChangeHandler(e.target.value, 'alcoholic');
            }}
          />
          Alcoholic
        </label>
        <label>
          <RadioInput
            type="radio"
            value="Non alcoholic"
            name="alcoholic"
            checked={isAlcoholic === false}
            onChange={(e) => {
              setFieldValue('alcoholic', e.target.value);
              radioHandler(e.target.value);
              onChangeHandler(e.target.value, 'alcoholic');
            }}
          />
          Non-alcoholic
        </label>
      </DivAlcoholic>
    </Wrapper>
  );
};
export default DrinkDescriptionFields;

import {
  Wrapper,
  ImageThumb,
  Img,
  DivAddImage,
  Label,
  HiddenInput,
  SpanAddImage,
  DivDesription,
  Input,
  DivSelect,
  SpanSelect,
  DivAlcoholic,
} from './DrinkDescriptionFields.styled';

import Select from 'react-select';
import { useState } from 'react';

import DummyDrinkThumb from '../../../images/dummyDrinkThumb.png';

const categories = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer',
  'Soft Drink',
];

const glass = [
  'Highball glass',
  'Cocktail glass',
  'Old-fashioned glass',
  'Whiskey Glass',
  'Collins glass',
  'Pousse cafe glass',
  'Champagne flute',
  'Whiskey sour glass',
  'Cordial glass',
  'Brandy snifter',
  'White wine glass',
  'Nick and Nora Glass',
  'Hurricane glass',
  'Coffee mug',
  'Shot glass',
  'Jar',
  'Irish coffee cup',
  'Punch bowl',
  'Pitcher',
  'Pint glass',
  'Copper Mug',
  'Wine Glass',
  'Beer mug',
  'Margarita/Coupette glass',
  'Beer pilsner',
  'Beer Glass',
  'Parfait glass',
  'Mason jar',
  'Margarita glass',
  'Martini Glass',
  'Balloon Glass',
  'Coupe Glass',
];

const DrinkDescriptionFields = ({ isAlcoholic, setIsAlcoholic }) => {
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
    console.log(e.target.files);
    const binaryData = [];
    binaryData.push(e.target.files);
    const url = URL.createObjectURL(
      new Blob(binaryData, { type: 'application/zip' }),
    );
    console.log(url.toString().split('blob:')[1]);
    const src = url.toString().split('blob:')[1];
    setUri(src);
  };

  return (
    <Wrapper>
      <ImageThumb>
        {uri && <Img src={uri} />}
        <DivAddImage>
          <Label>
            +
            <HiddenInput
              type="file"
              id="input"
              accept="image/*"
              onChange={(e) => addImagehandler(e)}
            />
          </Label>

          <SpanAddImage>Add image</SpanAddImage>
        </DivAddImage>
      </ImageThumb>
      <DivDesription>
        <Input
          type="text"
          name="title"
          placeholder="Enter item title"
          title="Enter item title"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <Input
          type="text"
          name="about"
          placeholder="Enter about recipe"
          title="Enter about recipe"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <DivSelect>
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
              }),
              menu: (base) => ({
                ...base,

                width: '233px',
                right: '0px',
                backgroundColor: '#161f37',
                border: '0px solid transparent',
                borderColor: 'red',
                borderRadius: '12px',

                padding: 10,
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
            options={options(categories)}
            defaultValue={options(categories)[1]}
            onChange={(e) => {
              console.log(e.value);
            }}
          />
        </DivSelect>
        <DivSelect>
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
                fontWeight: 'regular',
                color: '#f3f3f3',
              }),
              menu: (base) => ({
                ...base,
                width: '133px',
                right: '0px',
                backgroundColor: '#161f37',
                border: '0px solid transparent',
                borderColor: 'red',
                borderRadius: '12px',

                padding: 10,
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
            options={options(glass)}
            defaultValue={options(glass)[0]}
            onChange={(e) => {
              console.log(e.value);
            }}
          />
        </DivSelect>
      </DivDesription>

      <DivAlcoholic>
        <label>
          <input
            type="radio"
            value="Alcoholic"
            name="isAcloholic"
            checked={isAlcoholic === true}
            onChange={(e) => radioHandler(e.target.value)}
          />
          Alcoholic
        </label>
        <label>
          <input
            type="radio"
            value="Non alcoholic"
            name="isAcloholic"
            checked={isAlcoholic === false}
            onChange={(e) => radioHandler(e.target.value)}
          />
          Non-alcoholic
        </label>
      </DivAlcoholic>
    </Wrapper>
  );
};
export default DrinkDescriptionFields;

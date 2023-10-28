import { Field } from 'formik';
import Select from 'react-select';
import { useState } from 'react';

import DummyDrinkThumb from '../../../images/dummyDrinkThumb.png';

const DrinkDescriptionFields = () => {
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

  const [isAcloholic, setIsAlcoholic] = useState('Alcoholic');
  const [uri, setUri] = useState();

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

  const options = (array) =>
    array.map((item) => {
      return { value: item.toLowerCase(), label: item };
    });

  const radioHandler = (value) => {
    console.log(value, 'setState alcoradio');

    setIsAlcoholic(value);
  };

  const handler = (e) => {
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        marginBottom: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '320px',
          borderRadius: '8px',
          // backgroundImage: `url(${DummyDrinkThumb})`,

          backgroundColor: 'rgba(22, 31, 55, 0.5)',
        }}
      >
        {uri && <img src={uri} style={{ width: 60, height: 60 }}></img>}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '18px',
            alignItems: 'center',
          }}
        >
          <label
            style={{
              display: 'flex',
              width: '50px',
              height: '50px',
              fontSize: '40px',
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f3f3f3',
              color: '#161f37',
              borderRadius: '6px',
            }}
          >
            +
            <input
              type="file"
              id="input"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => handler(e)}
            />
          </label>

          <span
            style={{
              fontSize: '16px',
              fontWeight: 'medium',
              lineHeight: '1.25',

              color: '#f3f3f3',
            }}
          >
            Add image
          </span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          letterSpacing: '-0.02em',
          gap: '30px',
          width: '100%',
        }}
      >
        <Field
          type="text"
          name="title"
          placeholder="Enter item title"
          title="Enter item title"
          style={{
            paddingBottom: '14px',
            backgroundColor: 'inherit',
            color: '#f3f3f3',
            letterSpacing: '-0.02em',
            outline: 'none',
            border: 'none',
            borderBottom: '1px solid rgba(243, 243, 243, 0.5)',
            textTransform: 'capitalize',
          }}
        />
        <Field
          type="text"
          name="about"
          placeholder="Enter about recipe"
          title="Enter about recipe"
          style={{
            paddingBottom: '14px',
            backgroundColor: 'inherit',
            color: '#f3f3f3',
            letterSpacing: '-0.02em',
            outline: 'none',
            border: 'none',
            borderBottom: '1px solid rgba(243, 243, 243, 0.5)',
            textTransform: 'capitalize',
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '14px',
            backgroundColor: 'inherit',
            color: '#f3f3f3',
            borderBottom: '1px solid rgba(243, 243, 243, 0.5)',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: 'regular',
              lineHeight: 'auto',
              letterSpacing: '-0.02em',
              color: 'rgba(243, 243, 243, 0.5)',
            }}
          >
            Category
          </span>
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
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '14px',
            backgroundColor: 'inherit',
            color: '#f3f3f3',
            borderBottom: '1px solid rgba(243, 243, 243, 0.5)',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: 'regular',
              lineHeight: 'auto',
              letterSpacing: '-0.02em',
              color: 'rgba(243, 243, 243, 0.5)',
            }}
          >
            Glass
          </span>
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
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '14px',
          color: '#f3f3f3',
          fontSize: '14px',
          letterSpacing: '-0.02em',
        }}
      >
        <label>
          <input
            type="radio"
            value="Alcoholic"
            name="isAcloholic"
            checked={isAcloholic === 'Alcoholic'}
            onChange={(e) => radioHandler(e.target.value)}
          />
          Alcoholic
        </label>
        <label>
          <input
            type="radio"
            value="Non alcoholic"
            name="isAcloholic"
            checked={isAcloholic === 'Non alcoholic'}
            onChange={(e) => radioHandler(e.target.value)}
          />
          Non-alcoholic
        </label>
      </div>
    </div>
  );
};
export default DrinkDescriptionFields;

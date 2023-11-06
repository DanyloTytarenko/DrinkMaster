import Select from 'react-select';

const ReactSelect = ({
  name,
  options,
  value,
  onChangeIngredientHandler,
  setFieldValue,
  errors,
  wrongIngredient,
}) => {
  const selectCategoryOptions = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
    }),
    control: (provided, { isFocused }) => ({
      ...provided,
      top: '-6px',
      minHeight: '22px',
      height: '22px',
      background: 'inherit',
      border: isFocused ? 'none' : 'none',
      fontSize: '14px',
      boxShadow: 'none',
      cursor: 'pointer',
    }),

    menu: (base) => ({
      ...base,
      width: '131px',
      right: '0px',
      '@media only screen and (min-width: 768px)': {
        ...base['@media only screen and (min-width: 768px)'],
        padding: '4px',
        width: '139px',
        '@media only screen and (min-width: 1440px)': {
          ...base['@media only screen and (min-width: 1440px)'],
          width: '154px',
          right: '-23px',
        },
      },
      backgroundColor: '#161f37',
      borderRadius: '12px',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
    valueContainer: (base) => ({
      ...base,
      padding: 0,
    }),
    singleValue: (base) => ({
      ...base,
      color: '#f3f3f3',
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      padding: '3px 0 3px 10px',
      fontSize: '12px',
      lineHeight: 'calc(16 / 12)',
      background: 'transparent',
      '@media only screen and (min-width: 1440px)': {
        ...styles['@media only screen and (min-width: 1440px)'],
        fontSize: '14px',
        lineHeight: 'calc(18 / 14)',
      },
      color: isFocused
        ? 'rgba(243, 243, 243, 0.75)'
        : isSelected
        ? '#f3f3f3'
        : 'rgba(243, 243, 243, 0.4)',
      cursor: 'pointer',
    }),
  };

  const selectIngredientOptions = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      paddingRight: '18px',
      '@media only screen and (min-width: 768px)': {
        ...provided['@media only screen and (min-width: 768px)'],
        paddingRight: '24px',
      },
      transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
    }),
    control: (base, styles) => ({
      ...base,
      width: '200px',
      height: '50px',
      background: 'inherit',
      border:
        value && errors
          ? '1px solid #3cbc8150'
          : errors || wrongIngredient
          ? '1px solid #da141450'
          : '1px solid rgba(243, 243, 243, 0.5)',
      borderRadius: '200px',
      fontSize: '14px',
      lineHeight: 'calc(18 / 14)',
      cursor: 'pointer',
      '@media only screen and (min-width: 768px)': {
        ...styles['@media only screen and (min-width: 768px)'],
        width: '332px',
        height: '56px',
        fontSize: '17px',
        lineHeight: '1.56',
      },
    }),
    menu: (base) => ({
      ...base,
      marginTop: '2px',
      padding: '0px 12px',
      backgroundColor: '#161f37',
      borderRadius: '12px',
      '@media only screen and (min-width: 768px)': {
        ...base['@media only screen and (min-width: 768px)'],
        padding: '0px 18px',
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0px 18px',
      '@media only screen and (min-width: 768px)': {
        ...base['@media only screen and (min-width: 768px)'],
        padding: '0px 24px',
      },
    }),
    singleValue: (base) => ({ ...base, color: '#f3f3f3' }),
    placeholder: (base) => ({
      ...base,
      '@media only screen and (min-width: 768px)': {
        ...base['@media only screen and (min-width: 768px)'],
        fontSize: '17px',
        lineHeight: '1.56',
      },
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      padding: '3px 0 3px 10px',
      fontSize: '12px',
      lineHeight: 'calc(16 / 12)',
      background: 'transparent',
      '@media only screen and (min-width: 768px)': {
        ...styles['@media only screen and (min-width: 768px)'],
        fontSize: '17px',
        lineHeight: '1.56',
      },
      color: isFocused
        ? 'rgba(243, 243, 243, 0.75)'
        : isSelected
        ? '#f3f3f3'
        : 'rgba(243, 243, 243, 0.4)',
      cursor: 'pointer',
    }),
  };

  return (
    <Select
      styles={
        name === 'title' ? selectIngredientOptions : selectCategoryOptions
      }
      name={name}
      options={options}
      value={value}
      onChange={(e) => {
        onChangeIngredientHandler(e.value, name, setFieldValue);
      }}
    />
  );
};
export default ReactSelect;

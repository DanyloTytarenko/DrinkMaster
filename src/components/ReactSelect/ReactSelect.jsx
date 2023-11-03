import Select from 'react-select';

const ReactSelect = ({
  styles,
  name,
  options,
  value,
  onChangeIngredientHandler,
}) => {
  const CUSTOM_NAVIGATION_SELECT = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
    }),
    control: (base, styles) => ({
      ...base,
      width: '200px',
      height: '50px',
      background: 'inherit',
      border: '1px solid rgba(243, 243, 243, 0.5)',
      borderRadius: '200px',
      fontSize: '14px',
      fontWeight: '400',
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
      right: '0px',
      backgroundColor: '#161f37',
      border: '0px solid transparent',
      borderColor: 'red',
      borderRadius: '12px',
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
      fontSize: errors ? '12px' : '14px',
      '@media only screen and (min-width: 768px)': {
        ...base['@media only screen and (min-width: 768px)'],
        fontSize: '17px',
        lineHeight: '1.56',
      },
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
  };

  return (
    <Select
      styles={styles}
      name={name}
      options={options}
      value={value}
      onChange={(e) => {
        onChangeIngredientHandler(e.value, 'title', e.id);
      }}
    />
  );
};
export default ReactSelect;

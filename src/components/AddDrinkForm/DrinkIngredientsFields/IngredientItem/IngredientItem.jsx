import Select from 'react-select';
import { Field } from 'formik';

const IngredientItem = ({
  stateArray,
  ingredients,
  index,
  setStateArray,
  deleteIngredient,
  chosenIngredientSelect,
}) => {
  // композитна функція контрольованої обробки двох інпутів (інгрідієнта і його кількості)
  const onChangeHandler = (payload, field) => {
    const tempArray = [...stateArray];

    const freshData = { [field]: payload };

    tempArray[index] = tempArray[index]
      ? Object.assign(tempArray[index], freshData)
      : freshData;

    setStateArray(tempArray);
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Select
        styles={{
          dropdownIndicator: (provided, state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
          }),
          control: (base, state) => ({
            ...base,
            width: '200px',
            height: '50px',
            // padding: '16px 18px',
            background: 'inherit',
            border: '1px solid rgba(243, 243, 243, 0.5)',
            borderRadius: '200px',
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
        options={ingredients}
        value={stateArray[index].title === '' ? null : chosenIngredientSelect}
        onChange={(e) => {
          onChangeHandler(e.value, 'title');
        }}
      />
      <Field
        type="text"
        name="measure"
        placeholder="1 cl"
        title="measure"
        style={{
          padding: '16px 18px',
          width: '100px',
          backgroundColor: 'inherit',
          fontWeight: '14px',
          color: '#f3f3f3',
          letterSpacing: '-0.02em',
          outline: 'none',
          border: '1px solid rgba(243, 243, 243, 0.5)',
          borderRadius: '200px',
        }}
        value={
          stateArray[index].measure === '' ? '' : stateArray[index].measure
        }
        onChange={(e) => {
          onChangeHandler(e.target.value, 'measure');
        }}
      />
      <button
        type="button"
        title="Remove ungridient"
        style={{
          backgroundColor: 'inherit',
          border: 'none',
          color: '#f3f3f3',
          fontSize: '28px',
          transform: 'rotate(45deg)',
          marginLeft: 'auto',
        }}
        onClick={() => deleteIngredient(index)}
      >
        +
      </button>
    </div>
  );
};
export default IngredientItem;
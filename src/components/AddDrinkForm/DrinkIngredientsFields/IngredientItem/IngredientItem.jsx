import { Wrapper, Input, Button, ErrorText } from './IngredientItem.styled';
import { ErrorIcon } from '../../RecipePreparation/RecipePreparation.styled';
import Select from '../../../ReactSelect/ReactSelect';

const IngredientItem = ({
  chosenIngredients,
  ingredients,
  index,
  onChangeHandler,
  deleteIngredient,
  chosenIngredientSelect,
  errors,
  setFieldValue,
}) => {
  // композитна функція контрольованої обробки двох інпутів (інгрідієнта і його кількості)
  const onChangeIngredientHandler = (payload, field, id) => {
    let tempArray = [...chosenIngredients];

    const freshData = id
      ? {
          [field]: payload,
          _id: {
            $oid: id,
          },
        }
      : { [field]: payload };

    tempArray[index] = tempArray[index]
      ? Object.assign({}, tempArray[index], freshData)
      : freshData;

    onChangeHandler(tempArray, 'ingredients');
    setFieldValue('ingredients', tempArray);
  };

  const CUSTOM_INGREDIENT_SELECT = {
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
      padding: '0px 12px',
      right: '0px',
      backgroundColor: '#161f37',
      border: '0px solid transparent',
      borderColor: 'red',
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
      '@media only screen and (min-width: 768px)': {
        ...styles['@media only screen and (min-width: 768px)'],
        fontSize: '17px',
      },
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
    <Wrapper>
      <Select
        styles={CUSTOM_INGREDIENT_SELECT}
        name={'title'}
        options={ingredients}
        value={
          chosenIngredients[index].title === '' ? null : chosenIngredientSelect
        }
        index={index}
        errors={errors}
        onChangeIngredientHandler={onChangeIngredientHandler}
      />
      <ErrorText>
        {errors?.ingredients?.length > 0 && errors.ingredients[index]?.title}
        {errors?.ingredients?.length > 0 &&
          errors.ingredients[index]?.title && <ErrorIcon>!</ErrorIcon>}
      </ErrorText>
      <div>
        <Input
          type="text"
          name="measure"
          placeholder="1 cl"
          title="measure"
          value={
            chosenIngredients[index].measure === ''
              ? ''
              : chosenIngredients[index].measure
          }
          onChange={(e) => {
            onChangeIngredientHandler(e.target.value, 'measure');
          }}
        />
        <ErrorText>
          {errors?.ingredients?.length > 0 &&
            errors.ingredients[index]?.measure}
          {errors?.ingredients?.length > 0 &&
            errors.ingredients[index]?.measure && <ErrorIcon>!</ErrorIcon>}
        </ErrorText>
      </div>

      <Button
        type="button"
        title="Remove ungridient"
        onClick={() => deleteIngredient(index)}
      >
        +
      </Button>
    </Wrapper>
  );
};
export default IngredientItem;

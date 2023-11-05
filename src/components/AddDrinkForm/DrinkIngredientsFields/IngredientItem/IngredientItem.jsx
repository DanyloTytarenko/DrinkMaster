import { Wrapper, Input, Button, ErrorText } from './IngredientItem.styled';
import { ErrorIcon } from '../../RecipePreparation/RecipePreparation.styled';
import Select from '../../../ReactSelect/ReactSelect';

const IngredientItem = ({
  chosenIngredients,
  ingredients,
  index,
  onChangeHandler,
  setFieldValue,
  deleteIngredient,
  chosenIngredientSelect,
  errors,
}) => {
  // композитна функція контрольованої обробки двох інпутів (інгрідієнта і його кількості)
  const onChangeIngredientHandler = (payload, field) => {
    let tempArray = [...chosenIngredients];

    const freshData = { [field]: payload };

    tempArray[index] = tempArray[index]
      ? Object.assign({}, tempArray[index], freshData)
      : freshData;

    onChangeHandler(tempArray, 'ingredients', setFieldValue);
  };

  return (
    <Wrapper>
      <Select
        name={'title'}
        options={ingredients}
        value={
          chosenIngredients[index].title === '' ? null : chosenIngredientSelect
        }
        onChangeIngredientHandler={onChangeIngredientHandler}
        setFieldValue={setFieldValue}
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

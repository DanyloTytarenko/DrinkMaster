import {
  Wrapper,
  Input,
  Button,
  ErrorText,
  ErrorIcon,
} from './IngredientItem.styled';
// import { ErrorIcon } from '../../RecipePreparation/RecipePreparation.styled';
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
  wrongIngredients,
}) => {
  // композитна функція контрольованої обробки двох інпутів (інгрідієнта і його кількості)
  const onChangeIngredientHandler = (payload, field) => {
    let tempArray = [...chosenIngredients];

    const freshData = { [field]: payload, alcohol: ingredients[index].alcohol };

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
        errors={errors?.ingredients}
        wrongIngredient={
          wrongIngredients ? wrongIngredients[index]?.title : null
        }
      />
      <ErrorText>
        {!chosenIngredients[index]?.title &&
          errors?.ingredients?.length > 0 &&
          errors.ingredients[index]?.title}
        {wrongIngredients &&
          chosenIngredients[index]?.alcohol === 'Yes' &&
          `That ingredient is not fit the chosen type Alcoholic/Non alcoholic drink`}
        {errors?.ingredients?.length > 0 &&
          errors.ingredients[index]?.title && (
            <ErrorIcon value={chosenIngredients[index].title}>
              {chosenIngredients[index]?.title ? '✔' : '!'}
            </ErrorIcon>
          )}
      </ErrorText>
      <div>
        <Input
          errors={errors.ingredients}
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
          {!chosenIngredients[index]?.measure &&
            errors?.ingredients?.length > 0 &&
            errors.ingredients[index]?.measure}
          {!chosenIngredients[index]?.measure &&
            errors?.ingredients?.length > 0 &&
            errors.ingredients[index]?.measure && (
              <ErrorIcon measure={'measure'}>
                {errors.ingredients ? '!' : '✔'}
              </ErrorIcon>
            )}
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

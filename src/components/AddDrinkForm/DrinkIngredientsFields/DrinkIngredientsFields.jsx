import {
  Wrapper,
  DivTop,
  Title,
  DivIncrement,
  Button,
  SpanIncrement,
  ButtonIncr,
  List,
} from './DrinkIngredientsFields.styled';

import { useSelector } from 'react-redux';
import { selectForm } from '../../../redux/drinks/selectors';
import { selectIngredient } from 'src/redux/drinks/selectors';
import IngredientItem from './IngredientItem/IngredientItem';

const ingredientsData = [
  {
    _id: {
      $oid: '64aebb7f82d96cc69e0eb4a4',
    },
    title: 'Light rum',
    alcohol: 'Yes',
  },
  {
    _id: {
      $oid: '64aebb7f82d96cc69e0eb4a5',
    },
    title: 'Applejack',
    alcohol: 'Yes',
  },
  {
    _id: {
      $oid: '64aebb7f82d96cc69e0eb4a6',
    },
    title: 'Gin',
    alcohol: 'Yes',
  },
  {
    _id: {
      $oid: '64aebb7f82d96cc69e0eb4a7',
    },
    title: 'Dark rum',
    alcohol: 'Yes',
  },
  {
    _id: {
      $oid: '64f1d5c969d8333cf130fbec',
    },
    type: 'fruity juice',
    alcohol: 'No',
  },
  {
    _id: {
      $oid: '64f1d5ca69d8333cf130fbfa',
    },
    title: 'Cinnamon',
    alcohol: 'No',
  },
];

const DrinkIngredientsFields = ({
  isAlcoholic,
  onChangeHandler,
  setFieldValue,
}) => {
  const form = useSelector(selectForm);

  // const ingredientsData = useSelector(selectIngredient);

  // у зміну записується масив інгрідієнтів, в залежності від обмежень Alcoholic/Non alcoholic
  const ingredientOptions = ingredientsData.filter((el) =>
    isAlcoholic === true ? el.alcohol : el.alcohol === 'No',
  );

  // у зміну записується масив інгрідієнтів, із урахуванням того, що в базі є інгрідієнти без назви
  const ingredientTitleArray = ingredientOptions.map((el) => {
    if (el.title === undefined) {
      el.title = el.type;
    }
    return el;
  });

  // у зміну записується масив об'єктів інгрідієнтів, у формі необхідній для роботи селекту.
  const ingredientsForSelect = ingredientTitleArray.map((item) => {
    return { value: item.title, label: item.title, id: item._id };
  });

  const increment = () => {
    if (form.ingredients.length >= ingredientOptions.length) {
      return;
    }

    const newArray = [...form.ingredients];
    newArray.push({ title: '', measure: '', _id: { $oid: '' } });
    onChangeHandler(newArray, 'ingredients');
    setFieldValue('ingredients', newArray);
  };

  const decrement = (index) => {
    if (form.ingredients.length === 1) {
      return;
    }

    if (index || index === 0) {
      const newArray = [...form.ingredients];
      newArray.splice(index, 1);
      onChangeHandler(newArray, 'ingredients');
    } else {
      const newArray = [...form.ingredients];
      newArray.pop();
      setFieldValue('ingredients', newArray);
      onChangeHandler(newArray, 'ingredients');
    }
  };

  return (
    <Wrapper>
      <DivTop>
        <Title>Ingredients</Title>
        <DivIncrement>
          <Button type="button" onClick={() => decrement()}>
            --
          </Button>
          <SpanIncrement>{form.ingredients.length}</SpanIncrement>
          <ButtonIncr type="button" onClick={() => increment()}>
            +
          </ButtonIncr>
        </DivIncrement>
      </DivTop>
      <List>
        {form.ingredients.map((el, index) => (
          <li key={index}>
            <IngredientItem
              chosenIngredients={form.ingredients}
              onChangeHandler={onChangeHandler}
              ingredients={ingredientsForSelect}
              deleteIngredient={decrement}
              index={index}
              chosenIngredientSelect={{
                value: form.ingredients[index].title,
                label: form.ingredients[index].title,
              }}
            />
          </li>
        ))}
      </List>
    </Wrapper>
  );
};
export default DrinkIngredientsFields;

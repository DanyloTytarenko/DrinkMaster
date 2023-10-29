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
import { useState } from 'react';
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

const DrinkIngredientsFields = ({ isAlcoholic }) => {
  const [stateArray, setStateArray] = useState([{ title: '', measure: '' }]);

  // у зміну записується масив інгрідієнтів, в залежності від обмежень Alcoholic/Non alcoholic
  const ingredientOptions = ingredientsData.filter((el) =>
    isAlcoholic === true ? el.alcohol : el.alcohol === 'No',
  );

  // у зміну записується масив інгрідієнтів, із урахуванням того, що в базі є інгрідієнти без назви
  const ingredientTitleArray = ingredientOptions.map((el) => {
    if (el.title === undefined) {
      el.title = el.type;
    }
    return el.title;
  });

  // у зміну записується масив об'єктів інгрідієнтів, у формі необхідній для роботи селекту.
  const ingredientsForSelect = ingredientTitleArray.map((item) => {
    return { value: item, label: item };
  });

  const increment = () => {
    if (stateArray.length >= ingredientOptions.length) {
      return;
    }

    setStateArray((prev) => {
      const newArray = [...prev];
      newArray.push({ title: '', measure: '' });
      return newArray;
    });
  };

  const decrement = (index) => {
    if (stateArray.length === 1) {
      return;
    }

    if (index || index === 0) {
      setStateArray((prev) => {
        const newArray = [...prev];
        newArray.splice(index, 1);
        return newArray;
      });
    } else {
      setStateArray((prev) => {
        const newArray = [...prev];
        newArray.pop();
        return newArray;
      });
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
          <SpanIncrement>{stateArray.length}</SpanIncrement>
          <ButtonIncr type="button" onClick={() => increment()}>
            +
          </ButtonIncr>
        </DivIncrement>
      </DivTop>
      <List>
        {stateArray.map((el, index) => (
          <li key={index}>
            <IngredientItem
              stateArray={stateArray}
              setStateArray={setStateArray}
              ingredients={ingredientsForSelect}
              deleteIngredient={decrement}
              index={index}
              chosenIngredientSelect={{
                value: stateArray[index].title,
                label: stateArray[index].title,
              }}
            />
          </li>
        ))}
      </List>
    </Wrapper>
  );
};
export default DrinkIngredientsFields;

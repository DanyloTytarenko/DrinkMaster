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
    <div style={{ marginBottom: '80px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '40px',
        }}
      >
        <h2
          style={{
            fontSize: '28px',
            lineHeight: 'calc(32/28)',
            letterSpacing: 0,
            color: '#f3f3f3',
          }}
        >
          Ingredients
        </h2>
        <div
          style={{
            padding: '10px 16px',
            display: 'flex',
            gap: '16px',
            lineHeight: 'calc(18/14)',
            alignItems: 'center',
            border: '1px solid rgba(243, 243, 243, 0.5)',
            borderRadius: '200px',
          }}
        >
          <button
            type="button"
            onClick={() => decrement()}
            style={{
              letterSpacing: '-0.05em',
              lineHeight: 'calc(18/14)',
              border: 'none',
              backgroundColor: 'inherit',
              color: 'rgba(243, 243, 243, 0.3)',
            }}
          >
            --
          </button>
          <span
            style={{
              color: '#f3f3f3',
              fontSize: '14px',
              lineHeight: 'calc(18/14)',
            }}
          >
            {stateArray.length}
          </span>
          <button
            type="button"
            onClick={() => increment()}
            style={{
              fontSize: '20px',
              letterSpacing: '-0.05em',
              lineHeight: 'calc(18/18)',
              border: 'none',
              backgroundColor: 'inherit',
              color: '#f3f3f3',
            }}
          >
            +
          </button>
        </div>
      </div>
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
    </div>
  );
};
export default DrinkIngredientsFields;

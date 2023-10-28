import { useState } from 'react';

// const ingridients = [{}];

const DrinkIngredientsFields = () => {
  const [ingridientsQuantity, setIngridientsQuantity] = useState(1);

  const increment = (payload) => {
    if (!ingridientsQuantity) {
      return;
    }
    if (ingridientsQuantity === 1 && payload === -1) {
      return;
    }

    setIngridientsQuantity((prevGood) => prevGood + payload);
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
            onClick={() => increment(-1)}
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
            {ingridientsQuantity}
          </span>
          <button
            type="button"
            onClick={() => increment(1)}
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
    </div>
  );
};
export default DrinkIngredientsFields;

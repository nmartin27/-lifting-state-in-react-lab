// `src/components/BurgerStack.jsx`

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {stack.map((Ingredient, index) => {
          return (
            <li key={index} style={{ color: Ingredient.color }}>
              {Ingredient.name}
            
          <button onClick={() => removeFromBurger(index)}>
            x
          </button>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BurgerStack;

// `src/components/BurgerStack.jsx`

const BurgerStack = ({ stack }) => {
    
  return (
    <ul>
      {stack.map((stack, index) => {
        return <li key={index}>{stack}</li>;
      })}
      // map through props.ingredients
    </ul>
  );
};

export default BurgerStack;

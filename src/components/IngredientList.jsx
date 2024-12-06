// src/components/IngredientList.jsx


const IngredientList = ({ availableIngredients, addToBurger }) => {
  //   const handleSubmit = (event) => {
  //     // event.preventDefault();
  //     addToBurger(newIngredient);
  //     setNewIngredient("");
  //   };
  //   const [newIngredient, setNewIngredient] = useState("");
  //   const handleChange = (newIngredient) => {
  //     setNewIngredient(newIngredient);
  //   };

  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {availableIngredients.map((availableIngredient, index) => {
          return (
            <>
              {/* <div> */}
              <li key={index} style={{ backgroundColor: availableIngredient.color }}>
                {availableIngredient.name}
                <button onClick={() => addToBurger(availableIngredient)}>
                  +
                </button>
              </li>
              {/* </div> */}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientList;

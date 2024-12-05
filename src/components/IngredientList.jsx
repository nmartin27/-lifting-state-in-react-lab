// src/components/IngredientList.jsx

import { useState } from "react";

const IngredientList = ({ availableIngredients }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addToBurger(newIngredient);
    setNewIngredient("");
  };
  const [newIngredient, setNewIngredient] = useState("");
  const handleChange = (event) => {
    setNewIngredient(event.target.value);
  };

  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {availableIngredients.map((availableIngredient, index) => {
          return (
            <>
              <div style={availableIngredient}>
                <li key={index}>
                  {availableIngredient.name}
                  <button
                    id="addToBurger"
                    type="submit"
                    name="addToBurger"
                    value={newIngredient}
                    onChange={handleChange}
                  >
                    +
                  </button>
                </li>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientList;

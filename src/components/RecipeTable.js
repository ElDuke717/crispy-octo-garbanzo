import React from 'react';
import IngredientRow from './IngredientRow';

function RecipeTable({ recipe, ingredients }) {
  const totalPercent = recipe.ingredients.reduce((sum, ing) => sum + ing.percent, 0);
  
  return (
    <table className="recipe-table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Percent</th>
          <th>Batch Weight</th>
        </tr>
      </thead>
      <tbody>
        {recipe.ingredients.map((ing) => (
          <IngredientRow
            key={ing.code}
            ingredientData={ing}
            fullIngredient={ingredients.find(i => i.code === ing.code)}
            batchSize={recipe.batchSize}
          />
        ))}
        <tr>
          <td colSpan="2">Total</td>
          <td>{totalPercent.toFixed(2)}%</td>
          <td>{recipe.batchSize} {recipe.batchUnit}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default RecipeTable;
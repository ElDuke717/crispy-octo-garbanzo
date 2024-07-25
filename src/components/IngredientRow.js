import React from 'react';

function IngredientRow({ ingredientData, fullIngredient, batchSize }) {
  const batchWeight = (ingredientData.percent / 100) * batchSize;

  return (
    <tr>
      <td>{ingredientData.code}</td>
      <td>{fullIngredient.name}</td>
      <td>
        <input
          type="number"
          value={ingredientData.percent}
          onChange={(e) => {/* Update percent */}}
        />
      </td>
      <td>{batchWeight.toFixed(2)} {fullIngredient.unit}</td>
    </tr>
  );
}

export default IngredientRow;
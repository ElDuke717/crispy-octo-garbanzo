import React from 'react';

function Header({ recipe }) {
  return (
    <div className="header">
      <h1>Recipe Development Application</h1>
      {recipe && (
        <table>
          <tbody>
            <tr>
              <td>Version:</td>
              <td>{recipe.version}</td>
              <td>Date:</td>
              <td>{recipe.date}</td>
            </tr>
            <tr>
              <td>Batch Size:</td>
              <td>
                <input
                  type="number"
                  value={recipe.batchSize}
                  onChange={(e) => {/* Update batch size */}}
                />
              </td>
              <td>Unit:</td>
              <td>
                <select
                  value={recipe.batchUnit}
                  onChange={(e) => {/* Update batch unit */}}
                >
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Header;
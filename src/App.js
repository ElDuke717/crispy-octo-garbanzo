import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RecipeTable from './components/RecipeTable';
import ingredientsData from './data/ingredients.json';
import recipesData from './data/recipes.json';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  useEffect(() => {
    setIngredients(ingredientsData);
    setRecipes(recipesData);
    setCurrentRecipe(recipesData[0]);
  }, []);

  return (
    <div className="App">
      <Header recipe={currentRecipe} />
      {currentRecipe && (
        <RecipeTable
          recipe={currentRecipe}
          ingredients={ingredients}
        />
      )}
    </div>
  );
}

export default App;
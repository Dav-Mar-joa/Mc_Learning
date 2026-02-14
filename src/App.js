import React from "react";
import { recipes } from "./data/recipes";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Recettes de Sandwich 🍔</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;

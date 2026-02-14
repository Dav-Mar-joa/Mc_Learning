import React from "react";
import SandwichCard from "./SandwichCard";

export default function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map(recipe => (
        <SandwichCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

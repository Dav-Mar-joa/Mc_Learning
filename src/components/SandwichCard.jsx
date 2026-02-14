import React from "react";

export default function SandwichCard({ recipe }) {
  return (
    <div className="sandwich-card">
      <h3>{recipe.name}</h3>
      
      <p><strong>Ingrédients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Protéines:</strong> {recipe.protein}</p>
      {/* <button className="button">Voir la recette</button> */}
    </div>
  );
}

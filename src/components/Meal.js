import React, { useState } from "react";
import { MealInfo } from "./MealInfo";

export const Meal = ({ meal }) => {
  const [mealInfo, setMealInfoModal] = useState(false);
  return (
    <>
      <article>
        <div>
          <h1>{meal.title}</h1>
          <img src={meal.image} alt="recipe" />
          <h1>Ingredients</h1>
          <ul className="instructions">
            <li>Calories: {meal.calories}</li>
            <li>Carbohydrates: {meal.carbohydrates}</li>
            <li>Fat: {meal.fat}</li>
            <li>Protein: {meal.protein}</li>
          </ul>
          <a href="/#" onClick={() => setMealInfoModal(true)}>
            Go to Recipe
          </a>
        </div>
      </article>
      {mealInfo && <MealInfo infoId={meal.id} setMealInfoModal={setMealInfoModal}/>}
    </>
  );
};

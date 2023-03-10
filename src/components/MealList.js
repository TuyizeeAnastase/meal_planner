import React from "react";
import { Meal } from "./Meal";

export const Mealist = ({ mealsData }) => {
  const meals = mealsData ? mealsData : [];
  return (
    <main>
      <div className="card">
        {meals.map((meal) => (
            <section key={meal.id}  className="meals">
              <Meal meal={meal} />
            </section>
        ))}
      </div>
    </main>
  );
};

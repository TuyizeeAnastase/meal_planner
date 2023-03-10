import "./App.css";
import React, { useState } from "react";
import { Mealist } from "./components/MealList";

function App() {
  const [minProtein, setMinProtein] = useState(100);
  const [maxProtein, setMaxProtein] = useState(200);
  const [mealsData, setMeals] = useState("");

  const getMeals = async () => {
    await fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=cde71fcb478b41a3865e3081042679cb&minProtein=${minProtein}&maxProtein=${maxProtein}&number=8`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <label>Proteins</label>
      <input
        type="number"
        value={minProtein}
        onChange={(e) => setMinProtein(e.target.value)}
      />
      <input
        type="number"
        value={maxProtein}
        onChange={(e) => setMaxProtein(e.target.value)}
      />
      <button onClick={getMeals}>Search</button>
      <Mealist mealsData={mealsData} />
    </div>
  );
}

export default App;

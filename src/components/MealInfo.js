import { useEffect, useState } from "react";
import "./mealInfo.css";

export const MealInfo = ({ infoId,setMealInfoModal }) => {
  const [mealInfo, setMealInfo] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${infoId}/information?apiKey=cde71fcb478b41a3865e3081042679cb&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealInfo(data);
        setIngredients(data.extendedIngredients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [infoId]);
  return (
    <div className="container">
      <div class="card u-clearfix">
        <div class="card-container">
          <div class="card u-clearfix">
            <div class="card-body">
              <h2 class="card-title">{mealInfo.title}</h2>
              <span class="card-description subtle">
                <div class="card-read">Ingredients</div>
                <ul>
                  {ingredients.map((ing) => (
                    <li>{ing.aisle}</li>
                  ))}
                </ul>
              </span>
          <button onClick={()=>setMealInfoModal(false)}>Close</button>
            </div>
            <img
              style={{ width: "40rem" }}
              src={mealInfo.image}
              alt=""
              class="card-media"
            />
          </div>
          <div class="card-shadow"></div>
        </div>
      </div>
    </div>
  );
};

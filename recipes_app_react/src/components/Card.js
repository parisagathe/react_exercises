import React from "react";

const Card = ({ meal }) => {
    return (
            <li className="card">
                <h2>{meal.strMeal}</h2>
                <h3>Origin: {meal.strArea}</h3>
                <img src={meal.strMealThumb} alt={"Photo of the dish called '" + meal.strMeal + "'"} />
                <p>{meal.strInstructions}</p>
            </li>
    );
};

export default Card;
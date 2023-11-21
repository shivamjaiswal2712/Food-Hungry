import React from "react";

const Ingredient = ({item}) => {
    const { ingredient } = item;

    return(
        <li className="ingredient">
            <p>{ingredient}</p>
        </li>
    );
}

export default Ingredient;
import React from 'react'

export default function SingleRecipe(props) {
    return (
        <div>

            <h1>{props.food.strCategory}</h1>
            <p className="para">{props.food.strInstructions
            } </p>
            <a href={props.food.strYoutube}>watch on youtube</a>

        </div>
    )
}

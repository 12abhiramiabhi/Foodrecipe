import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./food.css"
import SingleRecipe from './SingleRecipe'

function HeadCompont() {
    const [food, setfood] = useState("")

    useEffect(() => {
        Food2()
    }, [])

    async function Food2() {
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        console.log(response.data.meals[0])
        setfood(response.data.meals[0])
    }
    return (
        <div className="main-container">
            <div className="container">

                {/* <h1 className="head">Search recipes</h1> */}
                {/* <label htmlFor=""></label> */}
                {/* <input type="text" className="input1" placeholder="search" /> */}
                {/* <button className="btn">click</button>

                {/* <p className="para">It means we must 'cook' with what we have and see what we can come up with it. Depending on our knowledge of our ingredients and the objective we wish to will ...
                    <a href="">food items</a>
                    <SingleRecipe />
                </p> */}
                <SingleRecipe food={food} />
            </div>
        </div>

    )
}
export default HeadCompont

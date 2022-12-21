import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./food.css"
import SingleRecipe from './SingleRecipe'
import Categaries from './Categaries'

function HeadCompont() {
    const [food, setfood] = useState("")//food.. inital value//
    const [search, setSearch] = useState("")
    const [categories, setcategories] = useState("")
    useEffect(() => {
        Food2()
    }, [])//one time varan//

    async function ClickBtn() {
        alert(search)
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
        console.log(response.data.meals[0]);
        setfood(response.data.meals[0])
    }
    async function ClickBnt() {
        if (!categories) {

            let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            console.log(response.data.categories);
            setcategories(response.data.categories);
        } else {
            setcategories(false)
        }
    }

    async function Food2() {
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")// public api poyiPOST MAN THA api url//
        console.log(response.data.meals[0])
        setfood(response.data.meals[0])
    }
    return (
        <div className="main-container">
            <div className="container">

                <h1 className="head">Search recipes</h1>

                <button className='btn ' onClick={ClickBnt}>view all catagries</button>
                <Categaries categories={categories} />

                <label htmlFor=""></label>
                <input onChange={(e) => (setSearch(e.target.value))} type="search" className="input1" placeholder="search" />
                <button className="btn" onClick={ClickBtn} >click</button>


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

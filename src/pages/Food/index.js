import React from 'react'
import './index.css';
import { Link } from "react-router-dom";
import Decidou from '../Images/foodpage.png'

const Food = () => {
    return (
        <div className="food-page">
            <div className="text">
                <h1> Hello! How is your day? </h1>
                <h2>
                    Having a hard time deciding what to eat again?
                </h2>
            </div>
            <br></br>
            <Link to="/breakfast" className="buttons">Breakfast</Link>
            <Link to="/lunch" className="buttons">Lunch</Link>
            <Link to="/dinner" className="buttons">Dinner</Link>
            <Link to="/snack" className="buttons">Snack</Link>
            <Link to="/menu" className="buttons">See Menu</Link>
            <img src={Decidou} alt='decidou' className='decidou' />
        </div>
    )
}

export default Food

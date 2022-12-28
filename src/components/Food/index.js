import React from 'react'
import './index.css';
import { Link } from "react-router-dom";

const Food = () => {
    return (
        <div className="food-page">
            <div className="text">
                <h1> Hello! How is your day? </h1>
                <h2>
                    Having a hard time deciding what to eat again?
                </h2>
            </div>
            <Link to="/dinner" className="buttons">Breakfast</Link>
            <Link to="/ranlu" className="buttons">Lunch</Link>
            <Link to="/dinner" className="buttons">Dinner</Link>
            <Link to="/ransn" className="buttons">Snack</Link>
            <Link to="/menu" className="buttons">See Menu</Link>
        </div>
    )
}

export default Food

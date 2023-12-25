import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Decidou from "../../assets/Images/foodpage.png";

export default function Food() {
  return (
    <div className="food-page container md:container md:mx-auto text-center">
      <h1> Hello! How is your day? </h1>
      <h2>Having a hard time deciding what to eat again?</h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 m-10 gap-0">
          <span className="mr-5">
            <Link to="/breakfast" className="btns">
              Breakfast
            </Link>
            <Link to="/lunch" className="btns">
              Lunch
            </Link>
            <Link to="/dinner" className="btns">
              Dinner
            </Link>
            <Link to="/snack" className="btns">
              Snack
            </Link>
            <Link to="/menu" className="btns">
              See Menu
            </Link>
          </span>
          <img src={Decidou} alt="decidou" />
        </div>
      </div>
    </div>
  );
}

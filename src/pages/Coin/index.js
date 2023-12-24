import React from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import CoinF from "../../assets/Images/coinF.png";
import CoinB from "../../assets/Images/coinB.png";

export default function Coin(){
  function randomNum() {
    const r = Math.random() * (10 - 1) + 1;
    return Math.floor(r);
  }
  function refreshPage() {
    window.location.reload();
  }
  const num = randomNum();

  return (
    <div className="container md:container md:mx-auto text-center">
      <h1>Click the coin to toss again!</h1>
      {num % 2 === 1 ? (
        <button onClick={refreshPage}>
          <img src={CoinF} alt="Front of Coin" className="coin" />{" "}
        </button>
      ) : (
        <button onClick={refreshPage}>
          <img src={CoinB} alt="Back of Coin" className="coin" />{" "}
        </button>
      )}
    </div>
  );
};


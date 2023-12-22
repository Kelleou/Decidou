import React from 'react'
import './index.css'
import { Link, NavLink } from 'react-router-dom'
import CoinF from '../../assets/Images/coinF.png'
import CoinB from '../../assets/Images/coinB.png'

const Coin = () => {
    function randomNum() {
        const r = Math.random() * (10 - 1) + 1
        return Math.floor(r)
    }
    function refreshPage(){ 
        window.location.reload(); 
    }
    const num = randomNum();

    if (num % 2 == 1) {
        return (

            <div className="coin-page">
                <h1>Click the coin to toss again!</h1>
                <button onClick={ refreshPage }> <img src={CoinF} alt="Front of Coin" className='coinF' /> </button>
            </div>
        )
    }
    else {
        return (
            <div className="coin-page">
                <h1>Click the coin to toss again!</h1>
                <button onClick={ refreshPage }> <img src={CoinB} alt="Back of Coin" className='coinB' /> </button>
            </div>
        )
    }

}

export default Coin

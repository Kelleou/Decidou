import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css';
import Logo from '../Images/logo.png'
import CoinF from '../Images/coinF.png'
import Decidou from '../Images/decidouicon.png'
import FoodIcon from '../Images/food.PNG'
import AnswerIcon from '../Images/answer.PNG'
import About from '../Images/about.PNG'

const Header = () => {
  return (
    <div className='tool-bar'>
      <a className='icons' href="https://kelleou-9aa42.web.app/" target="_blank">
        <img src={Logo} alt="logo" />
      </a>
      <NavLink exact="true" activeclassname="active" to="/">
        <img src={Decidou} alt="decidou" className='icons' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/food">
        <img src={FoodIcon} alt="food" className='icons' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/answer">
        <img src={AnswerIcon} alt="answer" className='icons' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/coin">
        <img src={CoinF} alt="coin" className='icons' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/about">
        <img src={About} alt="about me" className='icons' />
      </NavLink>
    </div>

  )
}

export default Header

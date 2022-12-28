import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.css';
import Logo from '../Images/logo.png'
import FoodIcon from '../Images/food.PNG'
import AnswerIcon from '../Images/answer.PNG'

const Header = () => {
  return (
    <div className='tool-bar'>
      <Link className='icons' to='/'>
        <img src={Logo} alt="logo"/>
      </Link>
      <NavLink exact="true" activeclassname="active" to="/food">
          <img src={FoodIcon} alt="food" className='icons' />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/answer">
          <img src={AnswerIcon} alt="answer" className='icons' />
        </NavLink>
      
    </div>

  )
}

export default Header

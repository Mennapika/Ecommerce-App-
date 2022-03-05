import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"
import {faChevronDown , faChevronUp} from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  return (
    <div className='navbar--container'>
    <ul>
      <li><a className='navbar---item'>ALL</a> </li>
      <li> <a className='navbar---item'>Tech</a></li>
      <li> <a className='navbar---item'> Clothes</a></li>
    </ul>
    <img className="logo"src={require('../logo.png')}/>
    <div className='icon--container'>
    <FontAwesomeIcon icon={faDollarSign} className="dollar navbar---item"></FontAwesomeIcon>
    <FontAwesomeIcon icon={faChevronDown} className="arrow navbar---item"></FontAwesomeIcon>
    <FontAwesomeIcon icon={faCartPlus} className="cart navbar---item"></FontAwesomeIcon>
 
    
    </div>
  </div>
  )
}

export default Navbar





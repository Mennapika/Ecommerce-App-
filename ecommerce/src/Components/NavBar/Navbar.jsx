import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"
import {faChevronDown , faChevronUp} from "@fortawesome/free-solid-svg-icons"
import "../NavBar/navBar.styles.scss"
import Directory from '../Directory/Directory';

const  Navbar=()=> {
  return (
    <div className='navbar--container'>
    <Directory/>
    <Link to="/"  className="logo--container">
    <img className="logo"src={require('../NavBar/logo.png')}/>
    </Link>
    <div className='icon--container'>
    <FontAwesomeIcon icon={faDollarSign} className="dollar navbar---item"></FontAwesomeIcon>
    <FontAwesomeIcon icon={faChevronDown} className="arrow navbar---item"></FontAwesomeIcon>
    <FontAwesomeIcon icon={faCartPlus} className="cart navbar---item"></FontAwesomeIcon>
 
    
    </div>
  </div>
  )
}

export default Navbar





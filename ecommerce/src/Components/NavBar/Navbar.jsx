import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import {faDollarSign} from "@fortawesome/free-solid-svg-icons"
import {faChevronDown , faChevronUp} from "@fortawesome/free-solid-svg-icons"
import "../NavBar/navBar.styles.scss"
import Directory from '../Directory/Directory';
import { isRequiredArgument } from 'graphql';
import {ReactComponent as MiniStore} from "../../Assets/ministore.svg"
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';
import CartDropDown from '../CartDropDown/CartDropDown';
import { connect } from 'react-redux';

const  Navbar= ({ hidden }) => {
  return (
    <div className='navbar--container'>
    <Directory/>
    <Link to="/"  className="logo--container">
    <MiniStore className="filter-green"/>
    </Link>
    <div className='icon--container'>
    <FontAwesomeIcon icon={faDollarSign} className="dollar navbar---item"></FontAwesomeIcon>
    <FontAwesomeIcon icon={faChevronDown} className="arrow navbar---item"></FontAwesomeIcon>
    <CartIcon className="cart"/>
    </div>
    <div>
    {hidden ? null : <CartDropDown/>}
    </div>
  </div>
  )
}
const mapStateToProps=({Cart:{hidden}})=>({
   hidden
})
export default connect(mapStateToProps)(Navbar)





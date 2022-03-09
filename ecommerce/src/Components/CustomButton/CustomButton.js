import React from 'react'
import "../CustomButton/CustomButton.styles.scss"
import "../CustomButton/CustomButton.styles.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"


 const CustomButton = ({childern,...otherProps}) => {
  return (
    <button className='custom-button' {...otherProps}>
      {childern}
      <FontAwesomeIcon icon={faCartPlus} className="cart-button"></FontAwesomeIcon>
    </button>
  )
}
export default CustomButton;

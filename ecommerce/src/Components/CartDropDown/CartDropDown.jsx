import React from 'react'
import"../CartDropDown/CartDropDown.styles.scss"
import CustomButton from '../CustomButton/CustomButton'
const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-dropdown-item'>
            <CustomButton>Go to Check Out</CustomButton>
        </div>

    </div>
  )
}

export default CartDropDown
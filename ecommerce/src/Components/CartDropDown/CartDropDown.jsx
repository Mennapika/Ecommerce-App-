import React from 'react'
import"../CartDropDown/CartDropDown.styles.scss"
import CustomButton from '../CustomButton/CustomButton'
import CartItem from '../CartItem/CartItem'
import { connect } from 'react-redux'
const CartDropDown = ({cartItems}) => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-dropdown-item'>
            {cartItems.map((cartItem)=>(
                <CartItem key={cartItem.id} item={cartItem}/>
            ))}
            
        </div>
        <CustomButton>Go to Check Out</CustomButton>
    </div>
  )
}
const mapStateToProps =({Cart:{cartItems}})=>({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown)
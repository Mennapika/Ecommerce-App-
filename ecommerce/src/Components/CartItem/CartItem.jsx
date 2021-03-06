import React from 'react'
import "../CartItem/CartItem.styles.scss"
const CartItem = ({item:{gallery,name,price,quantity}}) => {
  return (
    <div className="cart-item-container">
        <img src={gallery} alt='item'/>
        <div className='cart-item-details'>
         <span className='cart-item-name'>{name}</span>
         <span className='cart-item-price'>{quantity} x ${price}</span>
        </div>

    </div>
  )
}

export default CartItem
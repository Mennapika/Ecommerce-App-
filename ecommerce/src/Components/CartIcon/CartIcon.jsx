import React from 'react'
import "../CartIcon/CartIcon.styles.scss"
import {ReactComponent as Cart} from "../../Assets/Cart.svg"
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../containers/redux/Cart/Cart.actions'

const CartIcon = ({toggleCartHidden,itemCount}) => {
  return (
    <div className='cart-icon-container' onClick={toggleCartHidden}>
     <Cart className="cart-icon"/>
     <span className='cart-icon-counter'>{itemCount}</span>
    
    </div>
  )
}

const mapStateToProps =({Cart:{cartItems}})=>({
    itemCount:cartItems.reduce(((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity),0)
})
const mapDispatchToProps=dispatch=>({
toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon)
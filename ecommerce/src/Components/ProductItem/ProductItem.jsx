import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import "../ProductItem/ProductItem.styles.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import { connect } from 'react-redux';
import { addItem } from '../../containers/redux/Cart/Cart.actions';
const ProductItem=({product,addItem})=>{
    const{id,name,price,gallery}=product;
    return(
    <div className='product-item-container'>
    <div className='product-item-image' style={{
        backgroundImage:`url(${gallery})`
    }}/>
  <div className='product-item-footer'>
      <span className='product-item-name'>{name}</span>
      <span className='product-item-price'>${price}</span>
  </div>
  <button className='prodct-item-button' onClick={() => addItem(product)}><FontAwesomeIcon icon={faCartPlus} className="cart-button"></FontAwesomeIcon></button>
</div>)
    
}
const mapDispatchToProps =dispatch=>({
addItem:product=>dispatch(addItem(product))
})
export default connect(null,mapDispatchToProps)(ProductItem);
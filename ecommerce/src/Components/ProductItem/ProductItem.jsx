import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import "../ProductItem/ProductItem.styles.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
const ProductItem=({id,name,price,gallery})=>{
    return(
    <div className='product-item-container'>
    <div className='product-item-image' style={{
        backgroundImage:`url(${gallery})`
    }}/>
  <div className='product-item-footer'>
      <span className='product-item-name'>{name}</span>
      <span className='product-item-price'>${price}</span>
  </div>
  <button className='prodct-item-button'><FontAwesomeIcon icon={faCartPlus} className="cart-button"></FontAwesomeIcon></button>
</div>)
    
}
export default ProductItem;
import React from 'react'
import "../ProductItem/ProductItem.styles.scss"
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
</div>)
    
}
export default ProductItem;
import React from 'react'
import{useSelector} from "react-redux"
const  ProductCard=()=> {
  const products = useSelector((state) => state.allProducts.items)
  return (
    <div>test</div>
  )
}

export default ProductCard
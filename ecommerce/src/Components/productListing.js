import React, { useEffect } from 'react'
import { useQuery,gql} from "@apollo/client"
import{LOAD_PRODUCT } from "../GraphQl/Queries"
import { useDispatch, useSelector } from 'react-redux'
import {setProducts,fetchProdducts} from "../containers/redux/actions/productActions"
import ProductCard from './ProductCard'

function ProductListing() {
   
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(fetchProdducts())
    },[])
    
  return (
    <div>
      product
        <ProductCard/>
    </div>
    
  )
}

export default ProductListing
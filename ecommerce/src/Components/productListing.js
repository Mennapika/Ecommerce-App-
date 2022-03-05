import React, { useEffect } from 'react'
import { useQuery,gql} from "@apollo/client"
import{LOAD_PRODUCT } from "../GraphQl/Queries"
import { useDispatch } from 'react-redux'
import {setProducts} from "../containers/redux/actions/productActions"

function ProductListing() {
    const dispatch = useDispatch();
    const{error,loading,data}=useQuery(LOAD_PRODUCT )
    dispatch(setProducts(data.categories[0].products))
    useEffect(()=>{
        console.log(data);
    },[data])
    
  return (
    <div>productListing</div>
  )
}

export default ProductListing
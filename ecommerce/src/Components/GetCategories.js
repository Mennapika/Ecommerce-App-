import React, { useEffect } from 'react'
import { useQuery,gql} from "@apollo/client"
import{LOAD_PRODUCT } from "../GraphQl/Queries"

function GetCategories() {
    const{error,loading,data}=useQuery(LOAD_PRODUCT )
    useEffect(()=>{
        console.log(data);
    },[data])
  return (
    <div>GetCategories</div>
  )
}

export default GetCategories
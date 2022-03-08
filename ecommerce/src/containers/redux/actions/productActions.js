import { ActionTypes } from "../contants/actionTypes";
import { useQuery,gql} from "@apollo/client"
import{LOAD_PRODUCT } from "../../../GraphQl/Queries"

export const fetchProdducts = () => async (dispatch)=>{
       // const{error,loading,data}= await useQuery(LOAD_PRODUCT )
       const data=1;
        dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:data})
        console.log(data)
    };

export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selecteddProduct =(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product,
    }
}
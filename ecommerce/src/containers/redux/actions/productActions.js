import { actionTypes } from "../contants/actionTypes";
export const setProducts = (products) =>{
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selecteddProduct =(product)=>{
    return{
        type:actionTypes.SELECTED_PRODUCTS,
        payload:product,
    }
}
import { actionTypes } from "../contants/actionTypes";
const initialState={
    products:[],
}
export const productReducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case actionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}
import { ActionTypes } from "../contants/actionTypes";
const initialState={
    items:[
        {
            id:1,
        }
    ],
}
export const productReducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,items:payload};
        case ActionTypes.FETCH_PRODUCTS:
            return {...state,items:payload};
        default:
            return state;
    }
}
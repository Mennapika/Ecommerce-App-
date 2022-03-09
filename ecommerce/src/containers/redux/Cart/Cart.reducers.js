import { CartActionTypes } from "./Cart.type"

const INTIALE_STATE={
    hidden:true
}
const CartReducer=(state=INTIALE_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            };
            default:
                return state
    }
}
export default CartReducer;
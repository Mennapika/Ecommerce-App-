import { combineReducers } from "redux";
import CartReducer from "./Cart/Cart.reducers";
export default combineReducers({
              Cart:CartReducer,
});
import { createStore,applyMiddleware,compose } from "redux";
//import reducers from "./reducers/index"
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const middlewares=[logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducers,{}, composeEnhancers(applyMiddleware(thunk)))
const store=createStore(rootReducer,applyMiddleware(...middlewares))
export default store;
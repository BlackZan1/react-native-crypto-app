import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

const combineReducer = combineReducers({
    appData: appReducer
})

const store = createStore(combineReducer, applyMiddleware(thunk));

export default store;
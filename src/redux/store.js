import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import userReducer from "./reducers";

const rootReducer = combineReducers({userReducer}) // if there's more, add them inside {}

export const Store = createStore(rootReducer, applyMiddleware(thunk))
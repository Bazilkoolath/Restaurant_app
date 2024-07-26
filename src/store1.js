import { applyMiddleware,createStore,combineReducers } from "redux";
import { thunk } from "redux-thunk";
import {restaurentListReducer} from './Reducer/reducer'
let reducer=combineReducers({
    hotelListReducer:restaurentListReducer,

});
let middleware=[thunk]
let store = createStore(reducer,applyMiddleware(...middleware))
export default store
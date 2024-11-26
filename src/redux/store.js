import { applyMiddleware, combineReducers, createStore } from "redux";
import { productsListReducer , singleProductReducer} from "./redusers/product";
import{ cartReducer} from './redusers/cartItems'
import{ userLoginReducer, userRegisterReducer} from './redusers/userReducer'

import { thunk } from "redux-thunk";



const reducer=combineReducers({
    productList:productsListReducer,
    singleproduct :singleProductReducer,
    cartReducer: cartReducer,
    userLoginReducer: userLoginReducer,
    userRegisterReducer: userRegisterReducer
})
const store=createStore(
    reducer,
    {},
    applyMiddleware(thunk)
)


export default store;



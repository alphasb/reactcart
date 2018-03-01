import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsReducer from "../Products/ProductsReducer";
import FilteredProductsReducer from "../Products/FilteredProductsReducer"; 
import CartReducer from "../Cart/CartReducer"; 


const rootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer,
    filteredProducts: FilteredProductsReducer

});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
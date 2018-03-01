import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsReducer from "../Products/ProductsReducer";
import FilteredProductsReducer from "../Products/FilteredProductsReducer"; 
import CartReducer from "../Cart/CartReducer"; 
import RoutingReducer from "../Header/RoutingReducer";

const rootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer,
    filteredProducts: FilteredProductsReducer,
    routing: RoutingReducer

});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
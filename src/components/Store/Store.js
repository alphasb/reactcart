import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsReducer from "../Products/ProductsReducer";
import ProductSearchreducer from "../Products/ProductSearchreducer";
import FilteredProductsReducer from "../Products/FilteredProductsReducer"; 
import CartReducer from "../Cart/CartReducer"; 
import { loadProductsActions } from "../Products/ProductActions";
import CommonReducer from "../Common/CommonReducer";


const rootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer,
    filteredProducts: FilteredProductsReducer,
    search: ProductSearchreducer,
    common: CommonReducer

});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
loadProductsActions(store);

export default store;
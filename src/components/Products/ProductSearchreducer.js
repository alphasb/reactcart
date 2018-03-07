import { SEARCH_PRODUCTS } from "./ProductSearchAction";
import ProductService from "../../services/Products/ProductService";

export default (state = [], action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return ProductService.searchProducts(action.products, action.term);
        default:
            return state;
    }
};
import { FILTER_PRODUCTS } from "./ProductActions";

export default (state = [], action) => {
    switch (action.type) {
        case FILTER_PRODUCTS:
            return [...action.filtered];
        default:
            return state;
    }
};
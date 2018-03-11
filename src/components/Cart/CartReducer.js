import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, DELETE_ELEMENT_FROM_CART } from "./CartActions";

export default (state = {lst:{}}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const productId = action.product.id;
            const qty = action.qty + (state.lst[productId]||0);
            return {selected: productId, lst: {...state.lst, [productId]:qty}};
        }
        case REMOVE_FROM_CART: {
            const productId = action.product.id;
            const qty = (state.lst[productId]||0) - action.qty;
            return {selected: productId, lst: {...state.lst, [productId]: (qty<0? 0: qty)}};
          }
        case DELETE_ELEMENT_FROM_CART: {
            const { [action.deleteId]: value, ...newLst} = state.lst;
            return { lst: newLst};
          }          
        case EMPTY_CART: {
            return {lst:[]};
          }  
        default:
            return state;
    }
};
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./CartActions";

export default (state = {lst:[]}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const productId = action.product.id;
            let qty = action.qty;
            if(state.lst[productId]) {
                qty+=state.lst[productId];
            }
            const cart={...state, selected: productId};

            cart.lst[productId] = qty;
            return cart;
        }
        case REMOVE_FROM_CART: {
            const productId = action.product.id;
            let  newQty = 0;
            if(state.lst[productId]) {
                newQty = state.lst[productId];
            }
            newQty -= action.qty;
            if(newQty < 0) {
                newQty = 0;
            }
            const cart={...state, selected: productId};
            cart.lst[productId] = newQty;
            return cart;
          }
        case EMPTY_CART: {
            return {lst:[]};
          }  
        default:
            return state;
    }
};
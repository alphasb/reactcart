export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART =  "REMOVE_FROM_CART";
export const EMPTY_CART =  "EMPTY_CART";
export const DELETE_ELEMENT_FROM_CART =  "DELETE_ELEMENT_FROM_CART";

export  function addToCart(product) {
    return (dispatch) => {
      dispatch({
        type: ADD_TO_CART,
        product,
        qty: 1
      })
    }
  }

export  function removeFromCart(product) {
    return (dispatch) => {
      dispatch({
        type: REMOVE_FROM_CART,
        product,
        qty: 1
      })
    }
  }

  export  function deleteElementFromCart(id) {
    return (dispatch) => {
      dispatch({
        type: DELETE_ELEMENT_FROM_CART,
        deleteId: id.id
      })
    }
  }  

  export  function emptyCart() {
    return (dispatch) => {
      dispatch({
        type: EMPTY_CART
      })
    }
  }
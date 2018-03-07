export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export const searchProduct = (products,term) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_PRODUCTS,
            term,
            products
          });
    }
}
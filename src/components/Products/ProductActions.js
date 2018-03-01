import ProductApi from "../../services/Products/ProductApi";

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const loadProductsActions = () => async dispatch => {
  const products = await ProductApi.loadProductList();
  dispatch({
    type: LOAD_PRODUCTS,
    products
  });
  dispatch({
    type: FILTER_PRODUCTS,
    filtered: products
});
}
export const filterProducts = (criteria, products) =>  dispatch => {
  let filtered=[];
  if(criteria === 'all'){
    filtered = products;
  } else {
    filtered = products.filter(el => el.keys.indexOf(criteria) !== -1);
  }
  dispatch({
    type: FILTER_PRODUCTS,
    filtered
  });
}

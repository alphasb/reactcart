import ProductApi from "../../services/Products/ProductApi";

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const loadProductsActions =  async (store) =>  {
  const products = await ProductApi.loadProductList();
  store.dispatch({
    type: LOAD_PRODUCTS,
    products
  });
  store.dispatch({
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

export const selectProduct = (id, products) =>  dispatch => {
  const filtered = products.filter(el => el.id === id);
  dispatch({
    type: FILTER_PRODUCTS,
    filtered
  });
}

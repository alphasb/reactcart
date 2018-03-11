import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import ProductService from "../../services/Products/ProductService";
import CartItem from "./CartItem";

const CartItems = ({productList}) => {
    if(productList.length < 1) {
        return (<div>Your cart is empty</div>);
    }

    return productList.map(item => 
            <CartItem key={item.id}  {...item} />
        );          
}
CartItems.propTypes = {
    productList: PropTypes.array
}
CartItems.defaultProps = {
    productList: []
}
export default connect( (state) => {
    return { productList: ProductService.listProductsInCart(state.cart, state.products)}
    })(CartItems);
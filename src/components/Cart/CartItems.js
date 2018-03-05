import React from 'react';
import {
    Item,
    Divider
} from "semantic-ui-react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import ProductService from "../../services/Products/ProductService";
import CartItem from "./CartItem";

const CartItems = ({productList}) => 
        <Item.Group >
            <Divider horizontal>Items in your shopping cart</Divider>
            <div>&nbsp;</div>
            {(productList.length<1) ? 
                <div>Your cart is empty</div> : 
                productList.map(el => 
                <CartItem key={el.id} item={el} />) 
            }
        </Item.Group>;       

CartItems.propTypes = {
    productList: PropTypes.array
}
CartItems.defaultProps = {
    productList: []
}
export default connect( (state) => {
    return { productList: ProductService.listProductsInCart(state.cart, state.products)}
    })(CartItems);
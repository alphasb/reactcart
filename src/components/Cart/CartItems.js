import React from 'react';
import {
    Item,
    Divider
} from "semantic-ui-react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import ProductService from "../../services/Products/ProductService";

const images =require.context( "../../resource/img",true);

const CartItems = ({productList}) => 
        <Item.Group >
        <Divider horizontal>Items in your shopping cart</Divider>
        <div>&nbsp;</div>
        {(productList.length<1) ? <div>Your cart is empty</div> : productList.map(el => 
            <Item key={el.id}>
                <Item.Image size='tiny' src={images(`${el.img}`)} as='a' shape='rounded'
                    />
                <Item.Content>
                    <Item.Header as='a'
                    >{el.name}</Item.Header>
                    <Item.Description> Qty: {el.qty}</Item.Description>
                    <Item.Extra> {el.descr}</Item.Extra>
                </Item.Content>
            </Item>
        )}
        </Item.Group>        

CartItems.propTypes = {
    productList: PropTypes.array
}
CartItems.defaultProps = {
    productList: []
}
export default connect( (state) => {
    return { productList: ProductService.listProductsInCart(state.cart, state.products)}
    }, null)(CartItems);
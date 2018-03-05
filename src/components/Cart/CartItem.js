import React from 'react';
import {
    Item
} from "semantic-ui-react";
import PropTypes from "prop-types";
import LoadImage from "../Common/LoadImage";

const CartItem = ({item}) => 
    <Item key={item.id}>
        <Item.Image size='tiny' src={LoadImage(`${item.img}`)} as='a' shape='rounded'
            />
        <Item.Content>
            <Item.Header as='a'
            >{item.name}</Item.Header>
            <Item.Description> Qty: {item.qty}</Item.Description>
            <Item.Extra> {item.descr}</Item.Extra>
        </Item.Content>
    </Item>;

CartItem.propTypes = {
    item: PropTypes.shape({}).isRequired
}

export default CartItem;
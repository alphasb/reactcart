import React, {PureComponent} from 'react';
import {
    Item,
    Icon,
    Button
} from "semantic-ui-react";
import PropTypes from "prop-types";
import LoadImage from "../Common/LoadImage";

class CartItem extends PureComponent {

    render(){
        const {id, name, img, qty, descr} = this.props;
        return (<Item >
            <Item.Image size='tiny' src={LoadImage(`${img}`)} as='a' shape='rounded'/>
            <Item.Content>
                <Item.Header as='a'>{name}</Item.Header>
                <Item.Description> Qty: {qty}</Item.Description>
                <Item.Extra> {descr}
                </Item.Extra>
            </Item.Content>
            <Item.Content floated="right">
                <Button  floated='right' data-id={id}>
                    Delete
                    <Icon name='right chevron' data-id={id}/>
                </Button>
            </Item.Content>
        </Item>);
    }
}
CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    descr: PropTypes.string.isRequired
}

export default CartItem;
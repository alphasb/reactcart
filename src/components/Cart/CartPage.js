import React from "react";
import {
    Card,
    Container,
    Item,
    Divider
  } from "semantic-ui-react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import CartItems from "./CartItems";
import { deleteElementFromCart } from "./CartActions";

const CartPage = (props) => {

  const deleteHandle = (e) => {
    props.deleteElementFromCart(e.target.dataset);
  }

  return(      
      <Container >
        <Card.Group itemsPerRow={1} stackable>
        <Card >
          <Card.Content >
            <Item.Group onClick = {deleteHandle} >
            <Divider horizontal>Items in your shopping cart</Divider>
            <div>&nbsp;</div>
            <CartItems />
            </Item.Group>
          </Card.Content>
        </Card>
      </Card.Group>
      </Container >);
}     
CartPage.propTypes = {
  deleteElementFromCart: PropTypes.func.isRequired
}
export default connect( null, {deleteElementFromCart})(CartPage);
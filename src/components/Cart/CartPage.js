import React from "react";
import {
    Card,
    Container
  } from "semantic-ui-react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import CartItems from "./CartItems";

const CartPage = ({history,location}) => 
        <Container >
        <Header {...{history,location}}/>
        <Card.Group itemsPerRow={1} stackable>
        <Card >
          <Card.Content >
            <CartItems />
          </Card.Content>
        </Card>
      </Card.Group>
      </Container >
CartPage.propTypes = {
  history: PropTypes.shape({
  }).isRequired,
  location: PropTypes.shape({
  }).isRequired
}   

export default CartPage;
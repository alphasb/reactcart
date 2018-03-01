import React from "react";
import {
    Card,
    Container
  } from "semantic-ui-react";
import CartItems from "./CartItems";

const CartPage = () => 
        <Container >
        <Card.Group itemsPerRow={1} stackable>
        <Card >
          <Card.Content >
            <CartItems />
          </Card.Content>
        </Card>
      </Card.Group>
      </Container >

export default CartPage;
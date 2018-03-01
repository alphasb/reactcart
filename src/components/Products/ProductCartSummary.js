import React from 'react';
import {
  Segment,
  Button,
  Header
} from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import ProductCartTotal  from "./ProductCartTotal";
import { emptyCart } from "../Cart/CartActions";


const ProductCartSummary = (props) => {
    const handleDone =  () => {
        props.history.push('/cart');
    }
    const handleReset =  () => {
      props.emptyCart();
  }
    return (
        <Segment>
        <Header as="h3"  key="2">
        To add/remove items to/from the cart, click +/- buttons
        </Header>
        <Button color="blue" onClick={handleDone} > Done</Button>
        <Button onClick={handleReset} >Reset</Button>
        <ProductCartTotal />
      </Segment>    
    );
}
ProductCartSummary.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    emptyCart: PropTypes.func.isRequired
  }

export default withRouter(connect( null, {emptyCart})(ProductCartSummary));
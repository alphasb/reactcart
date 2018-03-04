import React from "react";
import PropTypes from 'prop-types';
import {
    Label
  } from "semantic-ui-react";
import { connect } from "react-redux";

const ProductQty = ({qty}) =>  <Label size='big' color="red" basic>{qty}</Label>;

ProductQty.propTypes = {
  qty: PropTypes.number
} 
ProductQty.defaultProps = {
    qty: 0
} 

export  default connect( 
  (state, props) => {
    return {
      qty: state.cart.lst[props.productId]
    }
  })(ProductQty);  

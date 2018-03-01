import React from "react";
import PropTypes from 'prop-types';
import {
    Label
  } from "semantic-ui-react";
import { connect } from "react-redux";

const MidField = ({qty}) =>  <Label size='big' color="red" basic>{qty}</Label>;

MidField.propTypes = {
  qty: PropTypes.number
} 
MidField.defaultProps = {
    qty: 0
} 

export  default connect( 
  (state, props) => {
    return {
      qty: state.cart.lst[props.productId]
    }
  })(MidField);  

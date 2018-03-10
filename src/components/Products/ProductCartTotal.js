import React from "react";
import PropTypes from 'prop-types';
import {
    Icon
  } from "semantic-ui-react";
import { connect } from "react-redux";
import ProductService from "../../services/Products/ProductService";

const ProductCartTotal = ({total}) => <span><Icon  name="cart" /> {total} </span>;
   
ProductCartTotal.propTypes = {
    total: PropTypes.number.isRequired
  } 

export  default connect( 
    (state) => {
      return {
        total: ProductService.sumCartQty(state.cart)
      }
    } )(ProductCartTotal);  
  
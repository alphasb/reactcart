import React from "react";
import {
    Container
  } from "semantic-ui-react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";
import ProductCartSummary from "./ProductCartSummary";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const ProductCards = (props) => 
        <Container >
            <Header {...props} />
            <ProductFilter />
            <ProductCartSummary  history={props.history} />
            <ProductList />
        </Container>;
    
ProductCards.propTypes = {
    history: PropTypes.shape({
    }).isRequired
}

export default ProductCards;
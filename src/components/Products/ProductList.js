import React from "react";
import {
    Card
  } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ProductCard from "./ProductCard"; 

const ProductList = ({products}) => 
    <Card.Group  itemsPerRow={4} stackable>
    {
        products.map(el =>  <ProductCard product={el} key={el.id} />
    )}
    </Card.Group>;

    
ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect( state => {return {
    products: state.filteredProducts}} )(ProductList);
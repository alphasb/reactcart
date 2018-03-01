import React from "react";
import {
    Card
  } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ProductCard from "./ProductCard"; 
import { addToCart, removeFromCart } from "../Cart/CartActions";

const ProductList = (props) => {
    const {products}=props;
    const handleAction = (e) => {
        const {value, action} = e.target.dataset;
        const index=products.findIndex(el=>el.id===parseInt(value,10));
        if(index === -1) {return;}
        if(action === 'remove') {
            props.removeFromCart(products[index]);
        }
        if(action === 'add') {
            props.addToCart(products[index]);
        }
    }
    return (
    <Card.Group  itemsPerRow={4} stackable onClick={handleAction}>
    {
        products.map(el =>  <ProductCard product={el} key={el.id} />
    )}
    </Card.Group>);
}
    
ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect( state => {return {
    products: state.filteredProducts}}, {addToCart, removeFromCart} )(ProductList);
 
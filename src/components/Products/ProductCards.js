import React from "react";
import {
    Container
  } from "semantic-ui-react";
import ProductCartSummary from "./ProductCartSummary";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const ProductCards = () => 
        <Container >
            <ProductFilter />
            <ProductCartSummary   />
            <ProductList />
        </Container>;

export default ProductCards;
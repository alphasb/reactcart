import React from "react";
import {
    Segment,
    Label,
    Flag
  } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ProductService from "../../services/Products/ProductService";
import {filterProducts} from "./ProductActions";

const ProductFilter = (props) => {
    const handleFilter = (e) => {
        props.filterProducts(e.target.dataset.value, props.products);
    }
    return (
        <Segment onClick={handleFilter}>
        <div>Click an icon to filter products</div>
        {
            ProductService.loadProductKeywords().map(el => 
            <Label  key={el.full} data-value={el.full}>  {el.short?<Flag name={el.short} />:''} {el.full} </Label>
            )
        }
        </Segment>
    );
}
ProductFilter.propTypes = {
    filterProducts: PropTypes.func.isRequired,
    products: PropTypes.array
}
export default connect(state=>{return {products:state.products}},{filterProducts})(ProductFilter);
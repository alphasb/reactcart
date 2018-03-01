import React from "react";
import {
    Card,
    Label
  } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../Cart/CartActions";
import MidField from "./MidField";

const ProductCardFooter = (props) => {
  const {product} = props;

  return <Card.Content extra textAlign='center'>
      <div>
        <LeftLabel id={product.id}  />
        <MidField productId={product.id} key={product.id}/>
        <RightLabel id={product.id} />
      </div>
      <div>&nbsp;</div>
    </Card.Content>;
  
}
ProductCardFooter.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired
} 

export  const LeftLabel = ({id}) => <Label size='big' as='a' circular data-value={id} data-action="remove"> - </Label>;

LeftLabel.propTypes = {
  id: PropTypes.number.isRequired
} 

export  const RightLabel = ({id}) => <Label size='big' as='a' circular data-value={id} data-action="add"> + </Label>;
    

RightLabel.propTypes = {
    id: PropTypes.number.isRequired
}   


export  default connect(null, {addToCart, removeFromCart})(ProductCardFooter);  
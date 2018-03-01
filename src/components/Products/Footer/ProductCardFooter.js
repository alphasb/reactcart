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

  const deleteFromCart = () => {
    props.removeFromCart(props.product)
  }
  const putIntoCart = () => {
    props.addToCart(props.product)
  }
    
  return <Card.Content extra textAlign='center'>
      <div>
        <LeftLabel deleteFromCart={deleteFromCart}  />
        <MidField productId={props.product.id} key={props.product.id}/>
        <RightLabel putIntoCart={putIntoCart} />
      </div>
      <div>&nbsp;</div>
    </Card.Content>;
  
}
ProductCardFooter.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
} 

export  const LeftLabel = ({deleteFromCart}) => <Label size='big' as='a' circular
        onClick={deleteFromCart}> - </Label>;

LeftLabel.propTypes = {
  deleteFromCart: PropTypes.func.isRequired
} 

export  const RightLabel = ({putIntoCart}) => <Label size='big' as='a' circular
        onClick={putIntoCart}> + </Label>;
    

RightLabel.propTypes = {
    putIntoCart: PropTypes.func.isRequired
}   


export  default connect(null, {addToCart, removeFromCart})(ProductCardFooter);  
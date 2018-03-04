import React from "react";
import {
    Card,
    Image
  } from "semantic-ui-react";
import PropTypes from 'prop-types';
import LoadImage from "../Common/LoadImage";
import ProductCardFooter from "./Footer/ProductCardFooter";



const ProductCard = ({product}) => {
    const img = LoadImage(`${product.img}`);
    return (
      <Card >
        <Image src={img} />
        <Card.Content  textAlign='center'>
          <div>{product.name}</div>
          <Card.Meta>
            {product.keys}
          </Card.Meta>
        </Card.Content>
        <ProductCardFooter product={product}/>
    </Card>
    )
  }
    
ProductCard.propTypes = {
  product: PropTypes.shape({
  }).isRequired,
}

export default ProductCard;
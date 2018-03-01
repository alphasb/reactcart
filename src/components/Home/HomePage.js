import React from 'react';
import {
    Container,
    List,
    Label,
    Segment
  } from "semantic-ui-react";
import PropTypes from 'prop-types';
import Header from "../Header/Header";

const HomePage = (props) => {
  const navigate = (e) => {
    props.history.push(e.target.dataset.value);
  };
  return (<Container>
    <Header {...props}/>
    <Segment raised>
      <List divided selection onClick={navigate}> 
      <List.Item value="/products" > 
        <Label color='red' horizontal data-value="/products">Cart</Label>
        Simple shopping cart demo
      </List.Item>
      <List.Item  value='/products'>
        <Label color='purple' horizontal data-value="/products">Products</Label>
        Product List filtering demo
      </List.Item>
      <List.Item  value='/products'>
        <Label color='red' horizontal data-value="/products">Image</Label>
        Image rendering demo
      </List.Item>
      <List.Item  value='/products'>
        <Label horizontal data-value="/products">React</Label>
        React/Redux/Thunk
      </List.Item>
    </List>
  </Segment>
  </Container>);
}
HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}
export default HomePage;
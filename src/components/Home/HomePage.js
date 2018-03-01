import React from 'react';
import {
    Container,
    List,
    Label,
    Segment
  } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

const HomePage = ({history}) => {
  const navigate = (e) => {
    history.push(e.target.dataset.value);
  };
  return (<Container>
    <Segment raised>
      <List divided selection onClick={navigate}> 
      <List.Item value="/products" > 
        <Label color='red' horizontal data-value="/products">Cart</Label>
        Simple shopping cart demo using Semantic UI
      </List.Item>
      <List.Item  value='/products'>
        <Label color='purple' horizontal data-value="/products">Products</Label>
        Product List filtering demo
      </List.Item>
      <List.Item  value='/products'>
        <Label horizontal data-value="/products">Routing</Label>
        Component communication and routing
      </List.Item>
      <List.Item  value='/products'>
        <Label color='red' horizontal data-value="/products">Image</Label>
        Image rendering demo
      </List.Item>
      <List.Item  value='/products'>
        <Label horizontal data-value="/products">React</Label>
        React/Redux/Thunk
      </List.Item>
      <List.Item  value='/products'>
        <Label color='purple' horizontal data-value="/products">Events</Label>
        Event handlers and event bubbling
      </List.Item>
      <List.Item value="/products" > 
        <Label color='red' horizontal data-value="/products">Decoupling</Label>
        Component decoupling
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
export default withRouter(HomePage);
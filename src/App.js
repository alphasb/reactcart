import React, {PureComponent} from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {
    Container
  } from "semantic-ui-react";
import HomePage from "./components/Home/HomePage";
import Page404 from "./components/Common/Page404";
import ProductCards from "./components/Products/ProductCards";
import CartPage from "./components/Cart/CartPage";
import {loadProductsActions} from "./components/Products/ProductActions";
import Header from "./components/Header/Header";

class App extends PureComponent { 

    componentDidMount(){
        this.props.loadProductsActions();
    }

    render(){
        return (
            <Container> 
                <Header />
                <Switch>
                    <Route path="/" exact component = {HomePage} /> 
                    <Route path="/products" exact component = {ProductCards}  /> 
                    <Route path="/cart" exact component = {CartPage}  /> 
                    <Route component = {Page404} /> 
                </Switch>
            </ Container>
        );
    }
}
App.propTypes = {
    loadProductsActions : PropTypes.func.isRequired
}
export default connect(null, {loadProductsActions})(App);

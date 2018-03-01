import React, {PureComponent} from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import HomePage from "./components/Home/HomePage";
import Page404 from "./components/Common/Page404";
import ProductCards from "./components/Products/ProductCards";
import CartPage from "./components/Cart/CartPage";
import {loadProductsActions} from "./components/Products/ProductActions";



class App extends PureComponent { 

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        this.props.loadProductsActions();
    }

    render(){
        
    return (<div> 
        <Switch>
            <Route path="/" exact component = {HomePage} {...this.props}/> 
            <Route path="/products" exact component = {ProductCards} {...this.props} /> 
            <Route path="/cart" exact component = {CartPage} {...this.props} /> 
            <Route component = {Page404} {...this.props}/> 
        </Switch>

    </ div>
    );
    }
}
App.propTypes = {
    loadProductsActions : PropTypes.func.isRequired

}
export default connect(null, {loadProductsActions})(App);

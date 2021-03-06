import React from "react";
import { Route, Switch } from "react-router-dom";
import {
    Container
  } from "semantic-ui-react";
import HomePage from "./components/Home/HomePage";
import Page404 from "./components/Common/Page404";
import ProductCards from "./components/Products/ProductCards";
import CartPage from "./components/Cart/CartPage";
import Header from "./components/Header/Header";
import ErrorBoundary from "./components/Common/ErrorBoundary";

const App = () => 
    
    <Container> 
        <Header />
        <ErrorBoundary>
            <Switch>
                <Route path="/" exact component = {HomePage} /> 
                <Route path="/products" exact component = {ProductCards}  /> 
                <Route path="/cart" exact component = {CartPage}  /> 
                <Route component = {Page404} /> 
            </Switch>
        </ErrorBoundary>
    </ Container>;

export default App;

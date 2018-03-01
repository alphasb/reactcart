import React, {Component}  from "react";
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Header extends Component{ 
    shouldComponentUpdate(){
    // never update; this component only renders once
        return false;
    }

    navigate = (e) => {
        const {value} = e.target.dataset;
        if(value === this.props.location.pathname){
            return;
        }
        this.props.history.push(value);
    };

    render(){ 
        return(
            <Menu onClick = {this.navigate}>
                <Menu.Menu>
                <Menu.Item 
                    active={this.props.location.pathname === '/'}  
                    onClick = {this.navigate} data-value="/">
                    Home
                </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position="right">
                <Menu.Item active={this.props.location.pathname === '/products'}  data-value="/products">
                    Products
                </Menu.Item>
                <Menu.Item active={this.props.location.pathname === '/cart'}   data-value="/cart">
                    Cart
                </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}
Header.propTypes = {
    location: PropTypes.shape({
        pathname:PropTypes.string.isRequired
    }).isRequired,
    history: PropTypes.shape({
        push:PropTypes.func.isRequired
    }).isRequired
  } 
export default Header;  
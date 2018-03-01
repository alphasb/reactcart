import React  from "react";
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const  Header = ({history,location}) => { 

    const navigate = (e) => {
        const {value} = e.target.dataset;
        if(value === location.pathname){
            return;
        }
        history.push(value);
    };

    return(
        <Menu onClick = {navigate}>
            <Menu.Menu>
            <Menu.Item 
                active={location.pathname === '/'}  
                data-value="/">
                Home
            </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
            <Menu.Item active={location.pathname === '/products'}  data-value="/products">
                Products
            </Menu.Item>
            <Menu.Item active={location.pathname === '/cart'}   data-value="/cart">
                Cart
            </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
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
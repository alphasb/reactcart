import React  from "react";
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import HeaderItem from "./HeaderItem";

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
                <HeaderItem active={location.pathname === '/'} data={"/"}  name="Home" />
            </Menu.Menu>
            <Menu.Menu position="right">
                <HeaderItem active={location.pathname === '/products'} data={"/products"}  name="Products" />
                <HeaderItem active={location.pathname === '/cart'} data={"/cart"}  name="Cart" />
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
export default withRouter(Header);  
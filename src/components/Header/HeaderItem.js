import React  from "react";
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const HeaderItem = ({location, data, name}) => 
    <Menu.Item active={location.pathname === data}  data-value={data}>
        {name}
    </Menu.Item>;

HeaderItem.propTypes = {
    data: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
        pathname:PropTypes.string.isRequired
    }).isRequired
  }
export default withRouter(HeaderItem);
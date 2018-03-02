import React  from "react";
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const HeaderItem = ({active, data, name}) => 
    <Menu.Item active={active}  data-value={data}>
        {name}
    </Menu.Item>;

HeaderItem.propTypes = {
    active: PropTypes.boolean,
    data: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }
  HeaderItem.defaultProps = {
      active: false
  }   
export default HeaderItem;
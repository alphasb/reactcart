import React from 'react';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    Container
  } from "semantic-ui-react";
import { expect } from 'chai';
import App from '../App';



configure({ adapter: new Adapter() })

it('it renders', () => {
  const wrapper = shallow(<App/>);  
  expect(wrapper.find(Container)).to.have.length(1);
});

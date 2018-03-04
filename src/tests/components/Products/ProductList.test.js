import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
    Card,
    Label
  } from "semantic-ui-react";
import { expect } from 'chai';
import { Provider } from "react-redux";
import ProductList from '../../../components/Products/ProductList';
import store from "../../../components/Store/Store";

jest.mock('../../../components/Common/LoadImage');
configure({ adapter: new Adapter() })

describe('Product List', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Provider store={store}><ProductList/></Provider>);
    });

it('it renders', () => {
  expect(wrapper.find(Card.Group)).to.have.length(1);
});

it('add/remove to/from cart', () => {
    expect(store.getState().cart.selected).to.equal(undefined);
    expect(store.getState().cart.lst[1]).to.equal(undefined);
    const mockedAddEvent = { target: {dataset:{value:1,action:'add'}} };
    wrapper.find(Label).at(2).simulate('click', mockedAddEvent);
    expect(store.getState().cart.selected).to.equal(1);
    expect(store.getState().cart.lst[1]).to.equal(1);
    const mockedRemoveEvent = { target: {dataset:{value:1,action:'remove'}} };
    wrapper.find(Label).at(2).simulate('click', mockedRemoveEvent);
    expect(store.getState().cart.selected).to.equal(1);
    expect(store.getState().cart.lst[1]).to.equal(0);
  });

});
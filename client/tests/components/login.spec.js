import expect from 'expect';
import React from 'react';
import { Login } from './../../src/components/Login';
import { shallow } from 'enzyme';

describe('Login component', () => {
  it('renders div', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div').length).toBe(8);
  });
  it('renders input', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(1);
  });
  it('renders Input', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('Input').length).toBe(2);
  });
  it('renders form', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('form').length).toBe(1);
  });
});

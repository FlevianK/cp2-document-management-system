import expect from 'expect';
import React from 'react';
import {Login} from './../src/components/Login';
import { shallow, mount } from 'enzyme';

it('renders div', () => {
  const wrapper = mount(<Login />)
  expect(wrapper.find('div').length).toBe(5)
})
it('renders input', () => {
  const wrapper = mount(<Login />)
  expect(wrapper.find('input').length).toBe(3)
})
it('renders Form', () => {
  const wrapper = mount(<Login />)
  expect(wrapper.find('Form').length).toBe(2)
})
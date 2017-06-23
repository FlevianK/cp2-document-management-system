import expect from 'expect';
import React from 'react';
import {UserUpdate} from './../src/components/user/UserUpdate';
import { shallow, mount } from 'enzyme';

it('renders div', () => {
  const wrapper = mount(<UserUpdate />)
  expect(wrapper.find('div').length).toBe(11)
})
it('renders input', () => {
  const wrapper = mount(<UserUpdate />)
  expect(wrapper.find('input').length).toBe(6)
})
it('renders Form', () => {
  const wrapper = mount(<UserUpdate />)
  expect(wrapper.find('Form').length).toBe(5)
})
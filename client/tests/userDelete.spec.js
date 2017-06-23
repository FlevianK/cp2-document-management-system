import expect from 'expect';
import React from 'react';
import {UserDelete} from './../src/components/user/UserDelete';
import { shallow, mount } from 'enzyme';

it('renders div', () => {
  const wrapper = mount(<UserDelete />)
  expect(wrapper.find('div').length).toBe(3)
})
it('renders input', () => {
  const wrapper = mount(<UserDelete />)
  expect(wrapper.find('input').length).toBe(2)
})
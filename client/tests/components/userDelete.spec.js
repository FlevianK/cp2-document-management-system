import expect from 'expect';
import React from 'react';
import {UserDelete} from './../../src/components/user/UserDelete';
import { shallow, mount } from 'enzyme';

const props = {
    params: {}
  }
it('renders div', () => {
  const wrapper = mount(<UserDelete {...props}/>)
  expect(wrapper.find('div').length).toBe(3)
})
it('renders input', () => {
  const wrapper = mount(<UserDelete {...props} />)
  expect(wrapper.find('input').length).toBe(2)
})
it('renders form input', () => {
  const wrapper = mount(<UserDelete {...props} />)
  expect(wrapper.find('Form').length).toBe(1)
})
it('renders form', () => {
  const wrapper = mount(<UserDelete {...props} />)
  expect(wrapper.find('form').length).toBe(1)
})
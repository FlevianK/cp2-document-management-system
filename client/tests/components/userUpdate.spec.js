import expect from 'expect';
import React from 'react';
import {UserUpdate} from './../../src/components/user/UserUpdate';
import { shallow, mount } from 'enzyme';

const props = {
    params: {},
    actions: {
      loadUser: () => { return Promise.resolve();}
    },
    users: {}
  }

it('renders div', () => {
  const wrapper = mount(<UserUpdate {...props}/>)
  expect(wrapper.find('div').length).toBe(11)
})
it('renders input', () => {
  const wrapper = mount(<UserUpdate  {...props}/>)
  expect(wrapper.find('input').length).toBe(6)
})
it('renders Form', () => {
  const wrapper = mount(<UserUpdate {...props} />)
  expect(wrapper.find('Form').length).toBe(5)
})
it('renders dashboard header', () => {
  const wrapper = mount(<UserUpdate {...props} />)
  expect(wrapper.find('DashboardHeader').length).toBe(1)
})
it('renders form', () => {
  const wrapper = mount(<UserUpdate {...props} />)
  expect(wrapper.find('form').length).toBe(1)
})
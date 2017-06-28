import expect from 'expect';
import React from 'react';
import {Role} from './../../src/components/role/Role';
import { shallow, mount } from 'enzyme';

 const props = {
    actions: {
      loadRoles: () => { return Promise.resolve();}
    },
    roles: {}
  }

it('renders div', () => {
  const wrapper = shallow(<Role {...props}/>)
  expect(wrapper.find('div').length).toBe(1)
})
it('renders dashboard header component', () => {
  const wrapper = shallow(<Role {...props}/>)
  expect(wrapper.find('DashboardHeader').length).toBe(1)
})
it('renders role subtitle', () => {
  const wrapper = shallow(<Role {...props}/>)
  expect(wrapper.find('RoleHeader').length).toBe(1)
})
it('renders role list', () => {
  const wrapper = shallow(<Role {...props}/>)
  expect(wrapper.find('RoleList').length).toBe(1)
})

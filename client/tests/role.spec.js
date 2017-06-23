import expect from 'expect';
import React from 'react';
import {Role} from './../src/components/role/Role';
import { shallow, mount } from 'enzyme';

it('renders div', () => {
  const props = {
    actions: {
      loadRoles: () => { return Promise.resolve();}
    },
    roles: {}
  }
  const wrapper = shallow(<Role {...props}/>)
  expect(wrapper.find('div').length).toBe(1)
})
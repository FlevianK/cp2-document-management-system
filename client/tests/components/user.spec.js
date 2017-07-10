import expect from 'expect';
import React from 'react';
import {User} from './../../src/components/user/User';
import { shallow, mount } from 'enzyme';

describe("User component", () => {
  const props = {
    actions: {
      loadUsers: () => { return Promise.resolve();},
      loadUsersPage: () => { return Promise.resolve();}
    },
    users: {}
  }

it('renders div', () => {
  const wrapper = shallow(<User {...props}/>)
  expect(wrapper.find('div').length).toBe(1)
})
it('renders users', () => {
  const wrapper = shallow(<User {...props}/>)
  expect(wrapper.find('UserList').length).toBe(1)
})
})
import expect from 'expect';
import React from 'react';
import { UsersUpdate } from './../../src/components/user/UsersUpdate';
import { shallow, mount } from 'enzyme';

describe('Update users component', () => {
  const props = {
    params: {},
    actions: {
      loadUser: () => Promise.resolve(),
      updateUser: () => Promise.resolve(),
      loadUsersPage: () => Promise.resolve(),
    },
    action: {
      loadRoles: () => Promise.resolve()
    },
    users: {}
  };

  it('renders div', () => {
    const wrapper = shallow(<UsersUpdate {...props} />);
    expect(wrapper.find('div').length).toBe(4);
  });
  it('renders MuiThemeProvider', () => {
    const wrapper = shallow(<UsersUpdate {...props} />);
    expect(wrapper.find('MuiThemeProvider').length).toBe(1);
  });
  it('renders form', () => {
    const wrapper = shallow(<UsersUpdate {...props} />);
    expect(wrapper.find('form').length).toBe(1);
  });
});

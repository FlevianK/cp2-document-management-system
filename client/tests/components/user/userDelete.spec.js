import expect from 'expect';
import React from 'react';
import { UserDelete } from '../../src/components/user/UserDelete';
import { shallow, mount } from 'enzyme';

describe('User delete', () => {
  const props = {
    actions: {
      loadUser: () => Promise.resolve(),
      deleteUser: () => Promise.resolve(),
      loadUsersPage: () => Promise.resolve(),
    },
    params: {},
    users: {},
  };
  it('renders div', () => {
    const wrapper = shallow(<UserDelete {...props} />);
    expect(wrapper.find('div').length).toBe(2);
  });
  it('renders Dialog', () => {
    const wrapper = shallow(<UserDelete {...props} />);
    expect(wrapper.find('Dialog').length).toBe(1);
  });
  it('renders MuiThemeProvider', () => {
    const wrapper = shallow(<UserDelete {...props} />);
    expect(wrapper.find('MuiThemeProvider').length).toBe(1);
  });
});

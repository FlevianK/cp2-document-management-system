import expect from 'expect';
import React from 'react';
import { UserUpdate } from './../../src/components/user/UserUpdate';
import { shallow, mount } from 'enzyme';

describe('Update user component', () => {
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
    const wrapper = shallow(<UserUpdate {...props} />);
    expect(wrapper.find('div').length).toBe(1);
  });
  it('renders input', () => {
    const wrapper = shallow(<UserUpdate {...props} />);
    expect(wrapper.find('input').length).toBe(1);
  });
  it('renders Input', () => {
    const wrapper = shallow(<UserUpdate {...props} />);
    expect(wrapper.find('Input').length).toBe(5);
  });
  it('renders form', () => {
    const wrapper = shallow(<UserUpdate {...props} />);
    expect(wrapper.find('form').length).toBe(1);
  });
  it('renders doc submit button', () => {
    const wrapper = shallow(<UserUpdate {...props} />);
    const submit = wrapper.find('input').last();
    expect(submit.prop('type')).toBe('submit');
    submit.simulate('click', {
      preventDefault: () => {}
    });
  });
});

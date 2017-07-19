import expect from 'expect';
import React from 'react';
import { UserCreate } from '../../src/components/user/UserCreate';
import { shallow, mount } from 'enzyme';

describe('Create user', () => {
  it('renders div', () => {
    const wrapper = shallow(<UserCreate />);
    expect(wrapper.find('div').length).toBe(7);
  });
  it('renders input', () => {
    const wrapper = shallow(<UserCreate />);
    expect(wrapper.find('input').length).toBe(1);
  });
  it('renders Input', () => {
    const wrapper = shallow(<UserCreate />);
    expect(wrapper.find('Input').length).toBe(5);
  });
  it('renders form', () => {
    const wrapper = shallow(<UserCreate />);
    expect(wrapper.find('form').length).toBe(1);
  });

  it('form  input type', () => {
    const wrapper = shallow(<UserCreate />);
    const submit = wrapper.find('Input').last();
    expect(submit.prop('type')).toBe('password');
  });
  it('renders doc submit button', () => {
    const props = {
      actions: {
        createUser: () => Promise.resolve()
      },
      newUser: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      errors: {}
    };
    const wrapper = shallow(<UserCreate {...props} />);
    const submit = wrapper.find('input').last();
    expect(submit.prop('type')).toBe('submit');
    submit.simulate('click', {
      preventDefault: () => {}
    });
  });
});

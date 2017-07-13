
import expect from 'expect';
import React from 'react';
import { RoleCreate } from './../../src/components/role/RoleCreate';
import { shallow, mount } from 'enzyme';

describe('create role component', () => {
  const props = {
    actions: {
      createRole: () => Promise.resolve()
    },
    newRole: {
      title: ''
    }
  };

  it('renders div', () => {
    const wrapper = shallow(<RoleCreate />);
    expect(wrapper.find('div').length).toBe(2);
  });
  it('renders Input', () => {
    const wrapper = shallow(<RoleCreate />);
    expect(wrapper.find('Input').length).toBe(1);
  });
  it('form input type', () => {
    const wrapper = shallow(<RoleCreate />);
    const submit = wrapper.find('Input').last();
    expect(submit.prop('type')).toBe('text');
    expect(submit.prop('name')).toBe('title');
  });
  it('renders form', () => {
    const wrapper = shallow(<RoleCreate />);
    expect(wrapper.find('form').length).toBe(1);
  });
});

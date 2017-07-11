import expect from 'expect';
import React from 'react';
import { RoleDelete } from './../../src/components/role/RoleDelete';
import { shallow } from 'enzyme';

describe('Role delete  component', () => {
  const props = {
    actions: {
      deleteRole: () => Promise.resolve(),
      loadRoles: () => Promise.resolve(),
    },
    params: {},
  };

  it('renders div', () => {
    const wrapper = shallow(<RoleDelete {...props} />);
    expect(wrapper.find('div').length).toBe(1);
  });
  it('renders input', () => {
    const wrapper = shallow(<RoleDelete {...props} />);
    expect(wrapper.find('input').length).toBe(1);
  });
  it('renders Input', () => {
    const wrapper = shallow(<RoleDelete {...props} />);
    expect(wrapper.find('Input').length).toBe(1);
  });
  it('renders form', () => {
    const wrapper = shallow(<RoleDelete {...props} />);
    expect(wrapper.find('form').length).toBe(1);
  });
  it('renders doc submit button', () => {
    const wrapper = shallow(<RoleDelete {...props} />);
    const submit = wrapper.find('input').last();
    expect(submit.prop('type')).toBe('submit');
    submit.simulate('click', {
      preventDefault: () => {}
    });
  });
});

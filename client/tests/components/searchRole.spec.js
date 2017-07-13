import expect from 'expect';
import React from 'react';
import { SearchRole } from './../../src/components/role/SearchRole';
import { shallow, mount } from 'enzyme';

describe('Search role component', () => {
  const props = {
    actions: {
      searchRoles: () => Promise.resolve(),
      searchRolesPage: () => Promise.resolve()
    },
    params: {},
  };

  it('renders doc div', () => {
    const wrapper = shallow(<SearchRole {...props} />);
    expect(wrapper.find('div').length).toBe(4);
  }),

  it('renders input component', () => {
    const wrapper = shallow(<SearchRole {...props} />);
    expect(wrapper.find('input').length).toBe(1);
  }),

  it('renders materialize search icon ', () => {
    const wrapper = shallow(<SearchRole {...props} />);
    expect(wrapper.find('i').length).toBe(1);
  });
  it('renders search icon', () => {
    const wrapper = shallow(<SearchRole {...props} />);
    const submit = wrapper.find('i').last();
    submit.simulate('click', {
      preventDefault: () => {}
    });
  });
});

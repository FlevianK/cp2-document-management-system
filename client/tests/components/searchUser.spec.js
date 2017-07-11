import expect from 'expect';
import React from 'react';
import { SearchUser } from './../../src/components/user/SearchUser';
import { shallow, mount } from 'enzyme';

describe('Search user component', () => {
  const props = {
    actions: {
      searchUser: () => Promise.resolve(),
      searchUsersPage: () => Promise.resolve()
    },
    params: {},
  };

  it('renders doc div', () => {
    const wrapper = shallow(<SearchUser {...props} />);
    expect(wrapper.find('div').length).toBe(3);
  }),

  it('renders input component', () => {
    const wrapper = shallow(<SearchUser {...props} />);
    expect(wrapper.find('input').length).toBe(1);
  }),

  it('renders materialize search icon ', () => {
    const wrapper = shallow(<SearchUser {...props} />);
    expect(wrapper.find('i').length).toBe(1);
  });
  it('renders search icon', () => {
    const wrapper = shallow(<SearchUser {...props} />);
    const submit = wrapper.find('i').last();
    submit.simulate('click', {
      preventDefault: () => {}
    });
  });
});

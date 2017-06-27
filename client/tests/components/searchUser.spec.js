import expect from 'expect';
import React from 'react';
import { SearchUser } from './../../src/components/user/SearchUser';
import { shallow, mount } from 'enzyme';

const props = {
  actions: {
    searchUsers: () => { return Promise.resolve(); }
  }
}

it('renders doc div', () => {
  const wrapper = shallow(<SearchUser {...props} />)
  expect(wrapper.find('div').length).toBe(3)
}),

  it('renders input component', () => {
    const wrapper = shallow(<SearchUser {...props} />)
    expect(wrapper.find('input').length).toBe(1)
  }),

  it('renders materialize search icon ', () => {
    const wrapper = shallow(<SearchUser {...props} />)
    expect(wrapper.find('i').length).toBe(1)
  })
import expect from 'expect';
import React from 'react';
import {UserDelete} from './../../src/components/user/UserDelete';
import { shallow, mount } from 'enzyme';

describe("User delete", () => {
const props = {
  actions: {
  loadUser: () => { return Promise.resolve(); },
  loadUser: () => { return Promise.resolve(); },
  deleteUser: () => { return Promise.resolve(); },
  loadUsersPage: () => { return Promise.resolve(); },
  },
    params: {},
    users: {},
  }
it('renders div', () => {
  const wrapper = shallow(<UserDelete {...props}/>)
  expect(wrapper.find('div').length).toBe(1)
})
it('renders input', () => {
  const wrapper = shallow(<UserDelete {...props} />)
  expect(wrapper.find('input').length).toBe(1)
})
it('renders Input', () => {
  const wrapper = shallow(<UserDelete {...props} />)
  expect(wrapper.find('Input').length).toBe(1)
})
it('renders form', () => {
  const wrapper = shallow(<UserDelete {...props} />)
  expect(wrapper.find('form').length).toBe(1)
})
it('renders doc submit button', () => {
  const wrapper = shallow(<UserDelete {...props} />)
  const submit = wrapper.find('input').last()
  expect(submit.prop('type')).toBe('submit')
  submit.simulate('click', {
    preventDefault: () => {}
  })
  })
})
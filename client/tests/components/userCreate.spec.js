import expect from 'expect';
import React from 'react';
import {UserCreate} from './../../src/components/user/UserCreate';
import { shallow, mount } from 'enzyme';

it('renders div', () => {
  const wrapper = mount(<UserCreate />)
  expect(wrapper.find('div').length).toBe(11)
})
it('renders input', () => {
  const wrapper = mount(<UserCreate />)
  expect(wrapper.find('input').length).toBe(6)
})
it('renders Form', () => {
  const wrapper = mount(<UserCreate />)
  expect(wrapper.find('Form').length).toBe(5)
})
it('renders form', () => {
  const wrapper = mount(<UserCreate />)
  expect(wrapper.find('form').length).toBe(1)
})
it('renders submit button', () => {
  const props = {
    actions: {
      createUser: () => { return Promise.resolve();}
    },
    newUser: {
        title: ''
      }
  }
  const wrapper = mount(<UserCreate {...props} />)
  const submit = wrapper.find('input').last()
  expect(submit.prop('type')).toBe('submit')
  submit.simulate('click')
  expect(wrapper.state().errors.username). toBe('Username must not be empty')
  expect(wrapper.state().errors.firstName). toBe('First name must not be empty')
  expect(wrapper.state().errors.lastName). toBe('Surname must not be empty')
  expect(wrapper.state().errors.email). toBe('Email must not be empty')
  expect(wrapper.state().errors.password). toBe('Password not be empty')
})

it('form  input type', () => {
  const wrapper = mount(<UserCreate />)
  const submit = wrapper.find('Form').last()
  expect(submit.prop('type')).toBe('text')
})
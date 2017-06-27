
import expect from 'expect';
import React from 'react';
import {RoleCreate} from './../../src/components/role/RoleCreate';
import { shallow, mount } from 'enzyme';

  const props = {
    actions: {
      createRole: () => { return Promise.resolve();}
    },
    newRole: {
        title: ''
      }
  }

it('renders div', () => {
  const wrapper = mount(<RoleCreate />)
  expect(wrapper.find('div').length).toBe(3)
})
it('renders input', () => {
  const wrapper = mount(<RoleCreate />)
  expect(wrapper.find('input').length).toBe(2)
})
it('renders Form', () => {
  const wrapper = mount(<RoleCreate />)
  expect(wrapper.find('Form').length).toBe(1)
})
it('renders submit button', () => {
  const wrapper = mount(<RoleCreate {...props} />)
  const submit = wrapper.find('input').last()
  expect(submit.prop('type')).toBe('submit')
  submit.simulate('click')
  expect(wrapper.state().errors.title). toBe('Role must not be empty')
})
it('form input type', () => {
  const wrapper = mount(<RoleCreate />)
  const submit = wrapper.find('Form').last()
  expect(submit.prop('type')).toBe('text')
  expect(submit.prop('name')).toBe('title')
})
it('renders form', () => {
  const wrapper = mount(<RoleCreate />)
  expect(wrapper.find('form').length).toBe(1)
})

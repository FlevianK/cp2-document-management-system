
import expect from 'expect';
import React from 'react';
import {RoleCreate} from './../src/components/role/RoleCreate';
import { shallow, mount } from 'enzyme';

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
  const props = {
    actions: {
      createRole: () => { return Promise.resolve();}
    },
    newRole: {
        title: ''
      }
  }
  const wrapper = mount(<RoleCreate {...props} />)
  const submit = wrapper.find('input').last()
  expect(submit.prop('type')).toBe('submit')
  submit.simulate('click')
})
it('form input type', () => {
  const wrapper = mount(<RoleCreate />)
  const submit = wrapper.find('Form').last()
  expect(submit.prop('type')).toBe('text')
})
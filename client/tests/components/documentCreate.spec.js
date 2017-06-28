import expect from 'expect';
import React from 'react';
import {DocumentCreate} from './../../src/components/document/DocumentCreate';
import { shallow, mount } from 'enzyme';

it('renders doc div', () => {
  const wrapper = mount(<DocumentCreate />)
  expect(wrapper.find('div').length).toBe(7)
})
it('renders doc  input', () => {
  const wrapper = mount(<DocumentCreate />)
  expect(wrapper.find('input').length).toBe(4)
})
it('renders doc Form', () => {
  const wrapper = mount(<DocumentCreate />)
  expect(wrapper.find('Form').length).toBe(3)
})
it('renders doc form', () => {
  const wrapper = mount(<DocumentCreate />)
  expect(wrapper.find('form').length).toBe(1)
})
it('renders doc submit button', () => {
  const props = {
    actions: {
      createDocument: () => { return Promise.resolve();}
    },
    newDocument: {
        title: ''
      }
  }
  const wrapper = mount(<DocumentCreate {...props} />)
  const submit = wrapper.find('input').last()
  expect(submit.prop('type')).toBe('submit')
  submit.simulate('click')
  expect(wrapper.state().errors.title). toBe('Title must not be empty')
  expect(wrapper.state().errors.content). toBe('Content must be at least 5 characters')
  expect(wrapper.state().errors.access). toBe('Must select the type of document access')
})
it('form doc input type', () => {
  const wrapper = mount(<DocumentCreate />)
  const submit = wrapper.find('Form').last()
  expect(submit.prop('type')).toBe('text')
  expect(submit.prop('name')).toBe('access')
  expect(submit.prop('label')).toBe('Access')
})
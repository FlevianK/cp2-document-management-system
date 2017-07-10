import expect from 'expect';
import React from 'react';
import {DocumentCreate} from './../../src/components/document/DocumentCreate';
import { shallow } from 'enzyme';

describe("Create document component", () => {
it('renders doc div', () => {
  const wrapper = shallow(<DocumentCreate />)
  expect(wrapper.find('div').length).toBe(3)
})
it('renders doc  input', () => {
  const wrapper = shallow(<DocumentCreate />)
  expect(wrapper.find('input').length).toBe(1)
})
it('renders doc Input', () => {
  const wrapper = shallow(<DocumentCreate />)
  expect(wrapper.find('Input').length).toBe(1)
})

it('renders textarea Input', () => {
  const wrapper = shallow(<DocumentCreate />)
  expect(wrapper.find('textarea').length).toBe(1)
})
it('renders doc form', () => {
  const wrapper = shallow(<DocumentCreate />)
  expect(wrapper.find('form').length).toBe(1)
})
it('form doc input type', () => {
  const wrapper = shallow(<DocumentCreate />)
  const submit = wrapper.find('Input').last()
  expect(submit.prop('type')).toBe('text')
  expect(submit.prop('name')).toBe('title')
  expect(submit.prop('label')).toBe('Title')
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
  const wrapper = shallow(<DocumentCreate {...props} />)
  const submit = wrapper.find('input').last()
  expect(submit.prop('type')).toBe('submit')
  submit.simulate('click', {
    preventDefault: () => {}
  })
})
})
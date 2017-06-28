import expect from 'expect';
import React from 'react';
import {DocumentUpdate} from './../../src/components/document/DocumentUpdate';
import { shallow, mount } from 'enzyme';

const props = {
    params: {documentId: ''},
     actions: {
      loadDocument: () => { return Promise.resolve(); }
    },
     documents: {}
  }

it('renders div', () => {
  const wrapper = mount(<DocumentUpdate {...props} />)
  expect(wrapper.find('div').length).toBe(7)
})
it('renders input', () => {
  const wrapper = mount(<DocumentUpdate {...props} />)
  expect(wrapper.find('input').length).toBe(4)
})
it('renders Form', () => {
  const wrapper = mount(<DocumentUpdate {...props}/>)
  expect(wrapper.find('Form').length).toBe(3)
})
it('renders form', () => {
  const wrapper = mount(<DocumentUpdate {...props}/>)
  expect(wrapper.find('form').length).toBe(1)
})
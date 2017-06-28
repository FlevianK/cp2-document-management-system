import expect from 'expect';
import React from 'react';
import { DocumentRole } from './../../src/components/document/DocumentRole';
import { shallow, mount } from 'enzyme';

const props = {
  actions: {
    loadDoc: () => { return Promise.resolve(); }
  },
  documents: {},
}

it('renders doc div', () => {
  const wrapper = shallow(<DocumentRole {...props} />)
  expect(wrapper.find('div').length).toBe(1)
}),

  it('renders DocumentHeader component', () => {
    const wrapper = shallow(<DocumentRole {...props} />)
    expect(wrapper.find('DocumentHeader').length).toBe(1)
  }),

  it('renders DocumentList component', () => {
    const wrapper = shallow(<DocumentRole {...props} />)
    expect(wrapper.find('DocumentList').length).toBe(1)
  })
import expect from 'expect';
import React from 'react';
import { SearchDocument } from './../../src/components/document/SearchDocument';
import { shallow, mount } from 'enzyme';

const props = {
  actions: {
    searchDocument: () => { return Promise.resolve(); }
  }
}

it('renders doc div', () => {
  const wrapper = shallow(<SearchDocument {...props} />)
  expect(wrapper.find('div').length).toBe(3)
}),

  it('renders input component', () => {
    const wrapper = shallow(<SearchDocument {...props} />)
    expect(wrapper.find('input').length).toBe(1)
  }),

  it('renders materialize search icon ', () => {
    const wrapper = shallow(<SearchDocument {...props} />)
    expect(wrapper.find('i').length).toBe(1)
  })
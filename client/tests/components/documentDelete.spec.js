import expect from 'expect';
import React from 'react';
import {DocumentDelete} from './../../src/components/document/DocumentDelete';
import { shallow } from 'enzyme';

describe("Delete component component", () => {
const props = {
  actions: {
      loadDocument: () => { return Promise.resolve();},
      deleteDocument: () => { return Promise.resolve();}
    },
    params: {},
    documents: {}
  }

it('renders div', () => {
  const wrapper = shallow(<DocumentDelete {...props}/>)
  expect(wrapper.find('div').length).toBe(1)
})
it('renders input', () => {
  const wrapper = shallow(<DocumentDelete {...props}  />)
  expect(wrapper.find('input').length).toBe(1)
})
it('renders Input', () => {
  const wrapper = shallow(<DocumentDelete {...props}  />)
  expect(wrapper.find('Input').length).toBe(1)
})
it('renders form', () => {
  const wrapper = shallow(<DocumentDelete {...props}  />)
  expect(wrapper.find('form').length).toBe(1)
})
it('renders doc submit button', () => {
  const wrapper = shallow(<DocumentDelete {...props} />)
  const submit = wrapper.find('input').last()
  expect(submit.prop('type')).toBe('submit')
  submit.simulate('click', {
    preventDefault: () => {}
  })
  })
})
import expect from 'expect';
import React from 'react';
import {DocumentDelete} from './../../src/components/document/DocumentDelete';
import { shallow, mount } from 'enzyme';

const props = {
    params: {}
  }

it('renders div', () => {
  const wrapper = mount(<DocumentDelete {...props}/>)
  expect(wrapper.find('div').length).toBe(3)
})
it('renders input', () => {
  const wrapper = mount(<DocumentDelete {...props}  />)
  expect(wrapper.find('input').length).toBe(2)
})
it('renders Forms', () => {
  const wrapper = mount(<DocumentDelete {...props}  />)
  expect(wrapper.find('Forms').length).toBe(1)
})
it('renders form', () => {
  const wrapper = mount(<DocumentDelete {...props}  />)
  expect(wrapper.find('form').length).toBe(1)
})
import expect from 'expect';
import React from 'react';
import {DocumentUpdate} from './../src/components/document/DocumentUpdate';
import { shallow, mount } from 'enzyme';

it('renders div', () => {
  const wrapper = mount(<DocumentUpdate />)
  expect(wrapper.find('div').length).toBe(9)
})
it('renders input', () => {
  const wrapper = mount(<DocumentUpdate />)
  expect(wrapper.find('input').length).toBe(5)
})
it('renders Form', () => {
  const wrapper = mount(<DocumentUpdate />)
  expect(wrapper.find('Form').length).toBe(3)
})
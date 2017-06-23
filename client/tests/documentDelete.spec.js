import expect from 'expect';
import React from 'react';
import {DocumentDelete} from './../src/components/document/DocumentDelete';
import { shallow, mount } from 'enzyme';

it('renders div', () => {
  const wrapper = mount(<DocumentDelete />)
  expect(wrapper.find('div').length).toBe(3)
})
it('renders input', () => {
  const wrapper = mount(<DocumentDelete />)
  expect(wrapper.find('input').length).toBe(2)
})
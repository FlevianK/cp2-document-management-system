import expect from 'expect';
import React from 'react';
import App from './../src/components/App';
import { shallow, mount } from 'enzyme';

it('renders div', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('div').length).toBe(1)
})
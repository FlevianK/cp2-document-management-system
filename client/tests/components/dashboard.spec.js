import expect from 'expect';
import React from 'react';
import App from '../../src/components/Dashboard';
import { shallow, mount } from 'enzyme';

describe('Dashboard component', () => {
  it('renders div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toBe(1);
  });
});

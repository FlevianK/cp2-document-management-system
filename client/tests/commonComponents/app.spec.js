import expect from 'expect';
import React from 'react';
import App from '../../src/components/common/App';
import { shallow, mount } from 'enzyme';

describe('App component', () => {
  it('renders div', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('div').length).toBe(1);
  });
});

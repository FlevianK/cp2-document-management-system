import expect from 'expect';
import React from 'react';
import DashboardHeader from './../../src/components/DashboardHeader';
import { shallow, mount } from 'enzyme';

describe("Dashboard header component", () => {
  const props = {
  actions: {
    logoutUser: () => { return Promise.resolve(); }
  }
}
  it('renders nav', () => {
    const wrapper = shallow(<DashboardHeader {...props} />)
    expect(wrapper.find('nav').length).toBe(1)
  })
})
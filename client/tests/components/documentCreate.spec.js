import expect from 'expect';
import React from 'react';
import { DocumentCreate } from '../../src/components/document/DocumentCreate';
import { shallow } from 'enzyme';

describe('Create document component', () => {
  it('renders div', () => {
    const wrapper = shallow(<DocumentCreate />);
    expect(wrapper.find('div').length).toBe(7);
  });
  it('renders MuiThemeProvider component', () => {
    const wrapper = shallow(<DocumentCreate />);
    expect(wrapper.find('MuiThemeProvider').length).toBe(1);
  });
  it('renders Dialog component', () => {
    const wrapper = shallow(<DocumentCreate />);
    expect(wrapper.find('Dialog').length).toBe(1);
  });
  it('renders Input component', () => {
    const wrapper = shallow(<DocumentCreate />);
    expect(wrapper.find('Input').length).toBe(1);
  });
  it('renders textarea input', () => {
    const wrapper = shallow(<DocumentCreate />);
    expect(wrapper.find('textarea').length).toBe(1);
  });
  it('renders doc form', () => {
    const wrapper = shallow(<DocumentCreate />);
    expect(wrapper.find('form').length).toBe(1);
  });
});

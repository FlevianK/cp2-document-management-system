import expect from 'expect';
import React from 'react';
import { Document } from './../../src/components/document/Document';
import { shallow, mount } from 'enzyme';

describe('User documents component', () => {
  const props = {
    actions: {
      loadDoc: () => Promise.resolve(),
      loadDocList: () => Promise.resolve()
    },
    documents: {},
  };

  it('renders doc div', () => {
    const wrapper = shallow(<Document {...props} />);
    expect(wrapper.find('div').length).toBe(1);
  }),

  it('renders DocumentHeader component', () => {
    const wrapper = shallow(<Document {...props} />);
    expect(wrapper.find('DocumentHeader').length).toBe(1);
  });
});

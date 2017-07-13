import expect from 'expect';
import React from 'react';
import { DocumentUpdate } from './../../src/components/document/DocumentUpdate';
import { shallow } from 'enzyme';

describe('Update document component', () => {
  const props = {
    params: { documentId: '' },
    actions: {
      loadDocument: () => Promise.resolve(),
      updateDocument: () => Promise.resolve()
    },
    documents: {}
  };

  it('renders div', () => {
    const wrapper = shallow(<DocumentUpdate {...props} />);
    expect(wrapper.find('div').length).toBe(4);
  });
  it('renders Input', () => {
    const wrapper = shallow(<DocumentUpdate {...props} />);
    expect(wrapper.find('Input').length).toBe(1);
  });
  it('renders form', () => {
    const wrapper = shallow(<DocumentUpdate {...props} />);
    expect(wrapper.find('form').length).toBe(1);
  });
});

import expect from 'expect';
import React from 'react';
import { DocumentDelete } from './../../src/components/document/DocumentDelete';
import { shallow } from 'enzyme';

describe('Delete document component', () => {
  const props = {
    actions: {
      loadDocument: () => Promise.resolve(),
      deleteDocument: () => Promise.resolve()
    },
    params: {},
    documents: {}
  };

  it('renders div', () => {
    const wrapper = shallow(<DocumentDelete {...props} />);
    expect(wrapper.find('div').length).toBe(2);
  });
  it('renders h5', () => {
    const wrapper = shallow(<DocumentDelete {...props} />);
    expect(wrapper.find('h5').length).toBe(1);
  });
  it('renders MuiThemeProvider', () => {
    const wrapper = shallow(<DocumentDelete {...props} />);
    expect(wrapper.find('MuiThemeProvider').length).toBe(1);
  });
});

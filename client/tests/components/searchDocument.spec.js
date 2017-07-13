import expect from 'expect';
import React from 'react';
import { SearchDocument } from './../../src/components/document/SearchDocument';
import { shallow, mount } from 'enzyme';

describe('Search document component', () => {
  const props = {
    actions: {
      searchDocument: () => Promise.resolve(),
      searchDocumentsPage: () => Promise.resolve(),
      searchDocuments: () => Promise.resolve(),
    }
  };

  it('renders doc div', () => {
    const wrapper = shallow(<SearchDocument {...props} />);
    expect(wrapper.find('div').length).toBe(4);
  }),

  it('renders input component', () => {
    const wrapper = shallow(<SearchDocument {...props} />);
    expect(wrapper.find('input').length).toBe(1);
  }),

  it('renders materialize search icon ', () => {
    const wrapper = shallow(<SearchDocument {...props} />);
    expect(wrapper.find('i').length).toBe(1);
  });
  it('renders search icon', () => {
    const wrapper = shallow(<SearchDocument {...props} />);
    const submit = wrapper.find('i').last();
    submit.simulate('click', {
      preventDefault: () => {}
    });
  });
});

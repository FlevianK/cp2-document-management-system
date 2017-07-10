import expect from 'expect';
import React from 'react';
import { Documents} from './../../src/components/document/Documents';
import { shallow, mount } from 'enzyme';

describe('All documents component', () => {
  const props = {
    actions: {
      loadDocuments: () => { return Promise.resolve(); },
      loadDocumentsPage: () => { return Promise.resolve(); }
    },
    documents: {},
  }

  it('renders doc div', () => {
    const wrapper = shallow(<Documents {...props} />)
    expect(wrapper.find('div').length).toBe(1)
  }),

    it('renders DocumentHeader component', () => {
      const wrapper = shallow(<Documents {...props} />)
      expect(wrapper.find('DocumentHeader').length).toBe(1)
    })
    it('renders Pagination component', () => {
      const wrapper = shallow(<Documents {...props} />)
      expect(wrapper.find('Pagination').length).toBe(1)
    })
})

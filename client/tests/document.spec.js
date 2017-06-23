import expect from 'expect';
import React from 'react';
import {Document} from './../src/components/document/Document';
import { shallow, mount } from 'enzyme';

it('renders doc div', () => {
  const props = {
    actions: {
      loadDocuments: () => { return Promise.resolve();}
    },
    documents: {}
  }
  
  const wrapper = shallow(<Document {...props}/>)
  expect(wrapper.find('div').length).toBe(1)
})
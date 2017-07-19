import expect from 'expect';
import React from 'react';
import { RoleUpdate } from '../../src/components/role/RoleUpdate';
import { shallow } from 'enzyme';

describe('Update role component', () => {
  const props = {
    params: { documentId: '' },
    actions: {
      loadRole: () => Promise.resolve()
    },
    documents: {}
  };

  it('renders div', () => {
    const wrapper = shallow(<RoleUpdate {...props} />);
    expect(wrapper.find('div').length).toBe(4);
  });
  it('renders Input', () => {
    const wrapper = shallow(<RoleUpdate {...props} />);
    expect(wrapper.find('Input').length).toBe(1);
  });
  it('renders form', () => {
    const wrapper = shallow(<RoleUpdate {...props} />);
    expect(wrapper.find('form').length).toBe(1);
  });
});

import expect from 'expect';
import React from 'react';
import { RoleDelete } from '../../src/components/role/RoleDelete';
import { shallow } from 'enzyme';

describe('Role delete  component', () => {
  const props = {
    actions: {
      deleteRole: () => Promise.resolve(),
      loadRoles: () => Promise.resolve(),
    },
    params: {},
  };

  it('renders div', () => {
    const wrapper = shallow(<RoleDelete {...props} />);
    expect(wrapper.find('div').length).toBe(2);
  });
  it('renders MuiThemeProvider', () => {
    const wrapper = shallow(<RoleDelete {...props} />);
    expect(wrapper.find('MuiThemeProvider').length).toBe(1);
  });
  it('renders Dialog', () => {
    const wrapper = shallow(<RoleDelete {...props} />);
    expect(wrapper.find('Dialog').length).toBe(1);
  });
});

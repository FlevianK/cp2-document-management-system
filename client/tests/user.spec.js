import expect from 'expect';
import React from 'react';
import {User} from './../src/components/user/User';
import { shallow, mount } from 'enzyme';

it('renders div', () => {
  const props = {
    actions: {
      loadUsers: () => { return Promise.resolve();}
    },
    users: {}
  }
  const wrapper = shallow(<User {...props}/>)
  expect(wrapper.find('div').length).toBe(1)
})
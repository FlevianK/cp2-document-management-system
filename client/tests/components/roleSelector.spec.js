import expect from 'expect';
import React from 'react';
import { roleDropdownData } from './../../src/components/user/RoleSelector';

describe('role selector component', () => {
  describe('roleDropdownData', () => {
    it('should return role data formatted for use in dropdown', () => {
      const roles = [
        { title: 'admin' },
        { title: 'regular' },
        { title: 'fellow' }
      ];

      const expected = [
        { value: 'admin', text: 'admin' },
        { value: 'regular', text: 'regular' },
        { value: 'fellow', text: 'fellow' }
      ];
      expect(roleDropdownData(roles)).toEqual(expected);
    });
  });
});

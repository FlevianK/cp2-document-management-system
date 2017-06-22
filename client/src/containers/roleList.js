import React from 'react';

const RoleList = ({ roles }) => {  
  return (
    <table>
        <thead>
          <tr>
              <th>Role</th>
              <th>Action</th>
          </tr>
        </thead>

        <tbody>
           {roles.map(role => 
          <tr>
            <td>{role.title}</td>
            <th>Delete</th>
          </tr>
           )}
          </tbody>
          </table>
  );
};

export default RoleList;  

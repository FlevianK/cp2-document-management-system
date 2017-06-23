import React from 'react';
import { Link } from 'react-router';

const RoleList = ({ roles }) => {  
  return (
    <table>
        <thead>
          <tr>
              <th>Role</th>
              <th></th>
          </tr>
        </thead>

        <tbody>
           {roles.map(role => 
          <tr>
            <td>{role.title}</td>
            <td ><Link to={`/roles/delete/${role.title}`}>Delete</Link></td>
          </tr>
           )}
          </tbody>
          </table>
  );
};

export default RoleList;  

import React from 'react';

const UserList = ({ users }) => {  
  return (
    <table>
        <thead>
          <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
          </tr>
        </thead>

        <tbody>
           {users.map(user => 
          <tr>
            <td key={user.id} >{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.title}</td>
          </tr>
           )}
          </tbody>
          </table>
  );
};

export default UserList;  

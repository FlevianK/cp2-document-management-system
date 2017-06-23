import React from 'react';
import { Link } from 'react-router';

const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map(user =>
          <tr>
            <td key={user.id}>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.title}</td>
            <td ><Link to={`/users/delete/${user.id}`}>Delete</Link></td>
            <td ><Link to={`/users/update/${user.id}`}>Update</Link></td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserList;  

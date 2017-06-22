import React from 'react';
import { Link } from 'react-router'; 

const UserHeader = ({ users }) => {  
  return (
    <nav>
      <Link to="/users/create" activeClassName="active">Add</Link>
      {" | "}
      <Link to="/users/update" activeClassName="active">Update</Link>
      {" | "}
      <Link to="/users/delete"activeClassName="active">Delete</Link>
    </nav>
  );
};

export default UserHeader;

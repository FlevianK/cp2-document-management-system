import React from 'react';
import { Link } from 'react-router'; 

const RoleHeader = ({ roles }) => {  
  return (
    <nav>
      <Link to="/roles/create" activeClassName="active">Add</Link>
      {" | "}
      <Link to="/roles/delete"activeClassName="active">Delete</Link>
    </nav>
  );
};

export default RoleHeader;

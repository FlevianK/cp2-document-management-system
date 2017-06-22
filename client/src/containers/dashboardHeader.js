import React from 'react';
import { Link } from 'react-router'; 

const DashboardHeader = ({ dashboard }) => {  
  return (
    <nav>
        <Link to="/roles" activeClassName="active">Roles</Link>
        {" | "}
        <Link to="/users" activeClassName="active">Users</Link>
        {" | "}
        <Link to="/documents"activeClassName="active">Documents</Link>
    </nav>
  );
};

export default DashboardHeader; 

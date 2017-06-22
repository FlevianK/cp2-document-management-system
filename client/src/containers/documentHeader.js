import React from 'react';
import { Link } from 'react-router'; 

const DocumentHeader = ({ documents }) => {  
  return (
    <nav>
      <Link to="/documents/create" activeClassName="active">Add</Link>
      {" | "}
      <Link to="/documents/update" activeClassName="active">Update</Link>
      {" | "}
      <Link to="/documents/delete"activeClassName="active">Delete</Link>
    </nav>
  );
};

export default DocumentHeader; 

import React from 'react';
import { Link } from 'react-router';
import jwtDecode from 'jwt-decode';

const DocumentHeader = ({ documents }) => {

  const token = localStorage.jwt;
  const role = token && jwtDecode(token);
  return (
    <div style={{ marginTop: '10px' }}>
      <Link to="/documents/create" activeClassName="active">Add</Link>
      {" | "}
      <Link to="/documents" activeClassName="active">My Documents</Link>
      {" | "}
      <Link to="/documents/role" activeClassName="active">Role Documents</Link>
      {" | "}
      <Link to="/documents/all" activeClassName="active">All Documents</Link>
    </div>
  );
};

export default DocumentHeader; 

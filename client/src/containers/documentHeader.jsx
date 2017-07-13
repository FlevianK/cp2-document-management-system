import React from 'react';
import { Link } from 'react-router';
import jwtDecode from 'jwt-decode';

const DocumentHeader = () => {

  const token = localStorage.jwt;
  const role = token && jwtDecode(token);
  return (
    <div style={{ marginTop: '1%', paddingBottom: "4%" }}>
      <span style={{ float: 'left', paddingLeft : "15%" }}>
        <Link to="/documents/create" activeClassName="active" style={{ color: "green" }}><i className="material-icons">add</i></Link>
        <Link to="/documents" activeClassName="active" style={{ color: "green" }}>My Documents</Link>
        {" | "}
        <Link to="/documents/role" activeClassName="active" style={{ color: "green" }}>Role Documents</Link>
        {" | "}
        <Link to="/documents/all" activeClassName="active" style={{ color: "green" }}>All Documents</Link>
      </span>
      <span style={{ float: 'right', paddingRight: "15%" }}>
        <Link to="/documents/search" activeClassName="active" style={{ color: "green" }}><i className="material-icons">search</i></Link>
      </span>
    </div>
  );
};

export default DocumentHeader; 

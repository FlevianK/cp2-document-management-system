import React from 'react';
import { Link } from 'react-router';

const RoleHeader = () => {
  return (
    <div style={{ marginTop: '1%', paddingBottom: "4%" }}>
      <span style={{ float: 'left', paddingLeft : "15%" }}>
        <Link to="/roles/create" activeClassName="active" style={{ color: "green" }}>Add</Link>
      </span>
      <span style={{ float: 'right', paddingRight : "15%" }}>
        <Link to="/roles/search" activeClassName="active" style={{ color: "green" }}><i className="material-icons">search</i></Link>
      </span>
    </div>
  );
};

export default RoleHeader;

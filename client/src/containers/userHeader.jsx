import React from 'react';
import { Link } from 'react-router';

const UserHeader = () => {
  return (
    <div style={{ marginTop: "1%", paddingBottom: "4%" }}>
      <span style={{ float: "right", paddingRight : "15%" }}>
        <Link to="/users/search" activeClassName="active" style={{ color: "green" }}><i className="material-icons">search</i></Link>
      </span>
    </div>
  );
};

export default UserHeader;
 
import React from 'react';
import { Link } from 'react-router';

const UserHeader = () => {
  return (
    <div style={{ marginTop: '10px' }}>
      <Link to="/users/search" activeClassName="active" style={{ color: "green" }}>search</Link>
    </div>
  );
};

export default UserHeader;

        
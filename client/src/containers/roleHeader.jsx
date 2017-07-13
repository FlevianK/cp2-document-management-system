import React from 'react';
import { Link } from 'react-router';

const RoleHeader = () => {
  return (
    <div style={{ marginTop: '10px' }}>
      <Link to="/roles/create" activeClassName="active" style={{ color: "green" }}>Add</Link>
      {'|'}
      <Link to="/roles/search" activeClassName="active" style={{ color: "green" }}>search</Link>
    </div>
  );
};

export default RoleHeader;

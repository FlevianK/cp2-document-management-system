import React from 'react';
import { Link } from 'react-router';

const RoleHeader = ({ roles }) => {
    return (
        <div style={{ marginTop: '10px' }}>
            <Link to="/roles/create" activeClassName="active">Add</Link>
        </div>
    );
};

export default RoleHeader;

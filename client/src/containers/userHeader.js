import React from 'react';
import { Link } from 'react-router';

const UserHeader = ({ users }) => {
    return (
        <div style={{ marginTop: '10px' }}>
            <Link to="/users/update" activeClassName="active">Update</Link>
        </div>
    );
};

export default UserHeader;

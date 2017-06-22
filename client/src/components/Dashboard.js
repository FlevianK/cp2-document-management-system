import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { DashboardHeader } from './../containers';
import Document from './document/Document';
import jwtDecode from 'jwt-decode';

class Dashboard extends React.Component {
  render () {
    const token = localStorage.jwt;
    const role = token && jwtDecode(token);
    return (
      <div>
        {role && role.userRole === "admin"
          ? <DashboardHeader />
            : ''
          }
        <Document />
        {this.props.children}
      </div>
    );
  }
}
Dashboard.propTypes = {  
  children: PropTypes.object.isRequired
};

export default Dashboard
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Document from '../document/Document'; 

class Dashboard extends React.Component {
  /**
    * Dashboard class
    * It the landing page afte logging in
    */
  render() {
    return (
      <div>
        <Document />
        {this.props.children}
      </div>
    );
  }
}
Dashboard.propTypes = {  
  children: PropTypes.object
};

export default Dashboard;

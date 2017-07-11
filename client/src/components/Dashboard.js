import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Document from './document/Document'; 

class Dashboard extends React.Component {
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

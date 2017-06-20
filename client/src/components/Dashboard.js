import React  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';  

class Dashboard extends React.Component {
  render () {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}
Dashboard.propTypes = {  
  children: PropTypes.object.isRequired
};

export default Dashboard